export type AppraisalLanguage = "en" | "ja";

export const APPRAISAL_LANGUAGES: {
  code: AppraisalLanguage;
  native: string;
}[] = [
  { code: "en", native: "English" },
  { code: "ja", native: "日本語" },
];
