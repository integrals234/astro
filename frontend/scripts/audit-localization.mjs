import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const LANGUAGES = ["en", "hi", "ja", "ko"];
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src");

const catalogRoots = {
  central: ["lib/i18n/language.ts"],
  shared: ["lib/i18n/shared.ts"],
  settings: ["lib/i18n/settings.ts"],
  chart: ["lib/chart-i18n.ts", "components/ChartWorkspace.tsx"],
  education: ["lib/education", "components/education/EducationalHub.tsx"],
  home: ["lib/home"],
  horoscope: [
    "components/horoscope",
    "lib/education/horoscope-engine.ts",
    "lib/education/horoscope-periods.ts",
  ],
  appraisal: ["lib/personal-appraisals/i18n"],
  course: ["lib/vedic-course"],
  PDF: ["lib/chart-pdf/i18n.ts"],
};

function sourceFiles(target) {
  const absolute = path.join(SRC, target);
  const stat = fs.statSync(absolute);
  if (stat.isFile()) return [absolute];
  return fs
    .readdirSync(absolute, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? sourceFiles(path.join(target, entry.name))
        : /\.(?:ts|tsx)$/.test(entry.name)
          ? [path.join(absolute, entry.name)]
          : [],
    );
}

function propertyName(node) {
  if (!node) return null;
  if (ts.isIdentifier(node) || ts.isStringLiteral(node) || ts.isNumericLiteral(node)) {
    return node.text;
  }
  return null;
}

function unwrap(node) {
  let current = node;
  while (
    ts.isAsExpression(current) ||
    ts.isSatisfiesExpression(current) ||
    ts.isParenthesizedExpression(current) ||
    ts.isTypeAssertionExpression(current)
  ) {
    current = current.expression;
  }
  return current;
}

function staticText(node) {
  const value = unwrap(node);
  if (ts.isStringLiteralLike(value) || ts.isNoSubstitutionTemplateLiteral(value)) {
    return value.text;
  }
  return null;
}

function objectProperties(node) {
  const result = new Map();
  for (const property of node.properties) {
    if (!ts.isPropertyAssignment(property) && !ts.isShorthandPropertyAssignment(property)) continue;
    const name = propertyName(property.name);
    if (name) result.set(name, property);
  }
  return result;
}

function propertyValue(property) {
  return ts.isPropertyAssignment(property) ? property.initializer : property.name;
}

function makeSourceContext(file) {
  const text = fs.readFileSync(file, "utf8");
  const source = ts.createSourceFile(
    file,
    text,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  const declarations = new Map();

  function collect(node) {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
      declarations.set(node.name.text, node.initializer);
    }
    ts.forEachChild(node, collect);
  }
  collect(source);
  return { file, source, declarations };
}

function resolve(node, context, seen = new Set()) {
  const value = unwrap(node);
  if (!ts.isIdentifier(value) || seen.has(value.text)) return value;
  const declaration = context.declarations.get(value.text);
  if (!declaration) return value;
  seen.add(value.text);
  return resolve(declaration, context, seen);
}

function location(context, node) {
  const position = context.source.getLineAndCharacterOfPosition(node.getStart(context.source));
  return `${path.relative(ROOT, context.file)}:${position.line + 1}`;
}

const errors = [];
const summary = {};

function report(context, node, message) {
  errors.push(`${location(context, node)} ${message}`);
}

function isTextExpression(node) {
  const value = unwrap(node);
  if (
    staticText(value) !== null ||
    ts.isTemplateExpression(value) ||
    ts.isCallExpression(value)
  ) {
    return true;
  }
  if (ts.isArrowFunction(value) || ts.isFunctionExpression(value)) {
    return ts.isBlock(value.body) || isTextExpression(value.body);
  }
  return false;
}

function validateStrings(node, context, label) {
  const value = resolve(node, context);
  const text = staticText(value);
  if (text !== null) {
    if (!text.trim()) report(context, value, `${label} contains an empty string`);
    return;
  }
  if (ts.isTemplateExpression(value) || ts.isArrowFunction(value) || ts.isFunctionExpression(value)) {
    if (!isTextExpression(value)) report(context, value, `${label} is not a string-producing value`);
    return;
  }
  if (ts.isArrayLiteralExpression(value)) {
    value.elements.forEach((element, index) =>
      validateStrings(element, context, `${label}[${index}]`),
    );
    return;
  }
  if (ts.isObjectLiteralExpression(value)) {
    for (const property of value.properties) {
      if (!ts.isPropertyAssignment(property)) continue;
      const name = propertyName(property.name) ?? "?";
      validateStrings(property.initializer, context, `${label}.${name}`);
    }
  }
}

function shape(node, context) {
  const value = resolve(node, context);
  if (isTextExpression(value)) return "text";
  if (ts.isArrayLiteralExpression(value)) {
    return `[${value.elements.map((element) => shape(element, context)).join(",")}]`;
  }
  if (ts.isObjectLiteralExpression(value)) {
    return `{${[...objectProperties(value)]
      .map(([name, property]) => `${name}:${shape(propertyValue(property), context)}`)
      .sort()
      .join(",")}}`;
  }
  if (ts.isNumericLiteral(value)) return "number";
  if (value.kind === ts.SyntaxKind.TrueKeyword || value.kind === ts.SyntaxKind.FalseKeyword) {
    return "boolean";
  }
  return ts.SyntaxKind[value.kind];
}

function auditLocalizedObjects(context, catalog, skipCoursePairs = false) {
  let localizedNodes = 0;

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const properties = objectProperties(node);
      const present = LANGUAGES.filter((language) => properties.has(language));
      if (present.length > 0) {
        const isCoursePair =
          skipCoursePairs &&
          present.includes("en") &&
          present.includes("ja") &&
          !present.includes("hi") &&
          !present.includes("ko");

        if (!isCoursePair) {
          localizedNodes += 1;
          for (const language of LANGUAGES) {
            if (!properties.has(language)) {
              report(context, node, `localized object is missing '${language}'`);
            }
          }

          if (present.length === LANGUAGES.length) {
            const englishShape = shape(propertyValue(properties.get("en")), context);
            for (const language of LANGUAGES) {
              const property = properties.get(language);
              validateStrings(propertyValue(property), context, `${catalog}.${language}`);
              if (shape(propertyValue(property), context) !== englishShape) {
                report(context, property, `'${language}' structure does not match 'en'`);
              }
            }
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(context.source);
  return localizedNodes;
}

function readTranslationMap(file, exportName) {
  const context = makeSourceContext(file);
  const initializer = context.declarations.get(exportName);
  const value = initializer && resolve(initializer, context);
  const entries = new Map();
  if (!value || !ts.isObjectLiteralExpression(value)) {
    report(context, context.source, `could not statically read ${exportName}`);
    return entries;
  }
  for (const property of value.properties) {
    if (!ts.isPropertyAssignment(property)) continue;
    const key = propertyName(property.name);
    const translated = staticText(property.initializer);
    if (key === null || translated === null) {
      report(context, property, `${exportName} must use static string keys and values`);
      continue;
    }
    if (!key.trim() || !translated.trim()) {
      report(context, property, `${exportName} contains an empty key or translation`);
    }
    entries.set(key, translated);
  }
  return entries;
}

function derivedCourseMapEntries() {
  const file = path.join(SRC, "lib/vedic-course/course-path.ts");
  const context = makeSourceContext(file);
  const initializer = context.declarations.get("COURSE_PATH");
  const coursePath = initializer && resolve(initializer, context);
  if (!coursePath || !ts.isArrayLiteralExpression(coursePath)) {
    report(context, context.source, "could not statically derive COURSE_PATH");
    return [];
  }

  const bullets = [];
  let chapterCount = 0;
  for (const phaseNode of coursePath.elements) {
    const phase = resolve(phaseNode, context);
    if (!ts.isObjectLiteralExpression(phase)) continue;
    const phaseProperties = objectProperties(phase);
    const label = resolve(propertyValue(phaseProperties.get("label")), context);
    const chapters = resolve(propertyValue(phaseProperties.get("chapters")), context);
    if (!ts.isObjectLiteralExpression(label) || !ts.isArrayLiteralExpression(chapters)) continue;
    const phaseLabel = staticText(propertyValue(objectProperties(label).get("en")));
    if (phaseLabel === null) continue;

    chapters.elements.forEach((chapterNode, index) => {
      const chapter = resolve(chapterNode, context);
      if (!ts.isObjectLiteralExpression(chapter)) return;
      const chapterProperties = objectProperties(chapter);
      const numberNode = resolve(propertyValue(chapterProperties.get("number")), context);
      const title = resolve(propertyValue(chapterProperties.get("title")), context);
      if (!ts.isNumericLiteral(numberNode) || !ts.isObjectLiteralExpression(title)) return;
      const titleEn = staticText(propertyValue(objectProperties(title).get("en")));
      if (titleEn === null) return;
      const prefix = index === 0 ? `${phaseLabel} → ` : "    ";
      bullets.push(`${prefix}Ch ${numberNode.text}: ${titleEn}`);
      chapterCount += 1;
    });
  }

  return [
    ...bullets,
    `${chapterCount} chapters in six phases — from philosophy to reading live charts. Each chapter unlocks the next. Follow the path top to bottom.`,
  ];
}

function auditCourse(files) {
  const english = new Set();
  let pairedNodes = 0;
  let fourLocaleNodes = 0;

  for (const file of files) {
    if (/content-(?:hi|ko)\.ts$/.test(file)) continue;
    const context = makeSourceContext(file);
    fourLocaleNodes += auditLocalizedObjects(context, "course", true);

    function visit(node) {
      if (ts.isObjectLiteralExpression(node)) {
        const properties = objectProperties(node);
        const en = properties.get("en");
        const ja = properties.get("ja");
        const hi = properties.get("hi");
        const ko = properties.get("ko");
        if (en && ja && !hi && !ko) {
          pairedNodes += 1;
          const englishText = staticText(propertyValue(en));
          const japaneseText = staticText(propertyValue(ja));
          if (englishText !== null && !englishText.trim()) {
            report(context, en, "course English entry must be nonempty");
          } else if (englishText !== null) {
            english.add(englishText);
          }
          if (japaneseText !== null && !japaneseText.trim()) {
            report(context, ja, "course Japanese entry must be nonempty");
          }
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(context.source);
  }
  const derivedEntries = derivedCourseMapEntries();
  derivedEntries.forEach((text) => english.add(text));

  const hi = readTranslationMap(
    path.join(SRC, "lib/vedic-course/i18n/content-hi.ts"),
    "HI_CONTENT",
  );
  const ko = readTranslationMap(
    path.join(SRC, "lib/vedic-course/i18n/content-ko.ts"),
    "KO_CONTENT",
  );
  for (const text of english) {
    if (!hi.has(text)) errors.push(`course Hindi map is missing: ${JSON.stringify(text)}`);
    if (!ko.has(text)) errors.push(`course Korean map is missing: ${JSON.stringify(text)}`);
  }

  return {
    files: files.length,
    localizedNodes: pairedNodes + fourLocaleNodes,
    derivedDynamicEntries: derivedEntries.length,
    courseEntries: english.size,
    mapEntries: { hi: hi.size, ko: ko.size },
    missingCourseEntries: {
      hi: [...english].filter((text) => !hi.has(text)).length,
      ja: 0,
      ko: [...english].filter((text) => !ko.has(text)).length,
    },
  };
}

for (const [catalog, roots] of Object.entries(catalogRoots)) {
  const files = [...new Set(roots.flatMap(sourceFiles))];
  if (catalog === "course") {
    summary[catalog] = auditCourse(files);
    continue;
  }

  let localizedNodes = 0;
  for (const file of files) {
    const context = makeSourceContext(file);
    localizedNodes += auditLocalizedObjects(context, catalog);
  }
  summary[catalog] = { files: files.length, localizedNodes };
}

console.log(JSON.stringify({ catalogs: summary, errors }, null, 2));
if (errors.length > 0) process.exitCode = 1;
