/**
 * The home page's universe, in Three.js.
 *
 * One continuous camera move, driven by scroll:
 *   0  hero        — the solar system, every planet where it really is
 *   1  solar system — closer, the planets named
 *   2  from Earth  — the camera comes round to Earth; the zodiac appears
 *                    around it, because Jyotish reads the sky from here
 *   3  rashis      — from above: the twelve signs
 *   4  nakshatras  — the twenty-seven mansions, the Moon among them
 *   5  grahas      — the nine grahas placed on the band where they stand
 *   6  now         — the same, for this very moment
 *   7  outro       — the camera draws back while the page fades the sky out
 *
 * Positions are real (JPL Keplerian elements; see lib/sky/orbits.ts),
 * distances compressed so Saturn and Mercury fit one screen. Typing a birth
 * date into the hero time-lapses the whole system back to that moment.
 *
 * Budget: starts after the page is interactive, caps pixel ratio, renders
 * only while visible, paints its textures in short slices, and under
 * reduced motion holds still apart from what scrolling itself moves.
 */
import {
  ACESFilmicToneMapping,
  AdditiveBlending,
  AmbientLight,
  BackSide,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  DoubleSide,
  Group,
  LineBasicMaterial,
  LineLoop,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  NormalBlending,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Points,
  RingGeometry,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  Sprite,
  SpriteMaterial,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
  type Texture,
} from "three";
import { centuries, grahaLongitudes, heliocentric, PLANETS, ayanamsha, GRAHAS, type Planet, type Graha } from "@/lib/sky/orbits";
import { moonTropical } from "@/lib/sky/quick-sky";
import { paintGlow, paintRings, paintSurface, type SurfaceKind } from "./textures";
import { paintLabel, paintNakshatras, paintZodiac, type CosmosTheme } from "./zodiac";

export interface CosmosLabels {
  planets: Record<string, string>;
  signs: readonly string[];
  nakshatras: readonly string[];
}

export interface CosmosOptions {
  theme: CosmosTheme;
  mobile: boolean;
  reduced: boolean;
  labels: CosmosLabels;
  /** The moment on screen, as the time-lapse runs (throttled). */
  onDate?: (date: Date) => void;
}

const DEG = Math.PI / 180;
const J2000_MS = Date.UTC(2000, 0, 1, 12);
const dateFromCenturies = (t: number) => new Date(J2000_MS + t * 36525 * 86400000);

/** Compressed distance: AU → scene units. */
const visR = (au: number) => 2.6 + Math.sqrt(au) * 4.2;
const ZODIAC_R = 7.5;
const MARKER_R = ZODIAC_R * 0.6;

const BODY: Record<Planet, { radius: number; tilt: number; spin: number; surface: SurfaceKind; tint: string }> = {
  Mercury: { radius: 0.2, tilt: 0, spin: 0.05, surface: "mercury", tint: "#9a948b" },
  Venus: { radius: 0.36, tilt: 3, spin: -0.02, surface: "venus", tint: "#e0c58f" },
  Earth: { radius: 0.38, tilt: 23.4, spin: 0.3, surface: "earth", tint: "#2a63a3" },
  Mars: { radius: 0.27, tilt: 25, spin: 0.28, surface: "mars", tint: "#b8573a" },
  Jupiter: { radius: 1.0, tilt: 3, spin: 0.6, surface: "jupiter", tint: "#c9a47c" },
  Saturn: { radius: 0.85, tilt: 26.7, spin: 0.55, surface: "saturn", tint: "#dcc493" },
};

const GLYPH: Record<Graha, string> = {
  Sun: "☉",
  Moon: "☽",
  Mars: "♂",
  Mercury: "☿",
  Jupiter: "♃",
  Venus: "♀",
  Saturn: "♄",
  Rahu: "☊",
  Ketu: "☋",
};

interface Key {
  focus: number; // 0 = Sun, 1 = Earth
  radius: number;
  elev: number; // degrees above the ecliptic
  az: number; // degrees; relative to Earth's heliocentric angle when azEarth
  azEarth: number; // 0..1 blend of "relative to Earth"
  helio: number; // planets
  orbits: number;
  labels: number;
  zodiac: number;
  naks: number;
  grahas: number;
  moon: number; // the Moon's marker alone (nakshatra stage)
  rays: number;
  shiftX: number; // desktop: scene moved right by this fraction of the width
  shiftY: number; // phone: scene moved up by this fraction of the height
}

const KEYS: Key[] = [
  // shiftY 0.33: on phones the system sits in the hero's open-sky window, above the headline.
  { focus: 0, radius: 38, elev: 22, az: -30, azEarth: 0, helio: 1, orbits: 1, labels: 0, zodiac: 0, naks: 0, grahas: 0, moon: 0, rays: 0, shiftX: 0.2, shiftY: 0.33 },
  { focus: 0, radius: 27, elev: 40, az: 20, azEarth: 0, helio: 1, orbits: 1, labels: 1, zodiac: 0, naks: 0, grahas: 0, moon: 0, rays: 0, shiftX: 0.2, shiftY: 0.16 },
  { focus: 1, radius: 17, elev: 20, az: 20, azEarth: 1, helio: 0.9, orbits: 0.6, labels: 0.6, zodiac: 0.85, naks: 0, grahas: 0, moon: 0, rays: 0, shiftX: 0.2, shiftY: 0.16 },
  { focus: 1, radius: 25, elev: 74, az: 30, azEarth: 1, helio: 0.35, orbits: 0.25, labels: 0, zodiac: 1, naks: 0, grahas: 0, moon: 0, rays: 0, shiftX: 0.21, shiftY: 0.16 },
  { focus: 1, radius: 22, elev: 82, az: 50, azEarth: 1, helio: 0.2, orbits: 0.15, labels: 0, zodiac: 0.55, naks: 1, grahas: 0, moon: 1, rays: 0, shiftX: 0.21, shiftY: 0.16 },
  { focus: 1, radius: 23, elev: 64, az: 70, azEarth: 1, helio: 0.12, orbits: 0.1, labels: 0, zodiac: 1, naks: 0.35, grahas: 1, moon: 1, rays: 1, shiftX: 0.21, shiftY: 0.16 },
  { focus: 1, radius: 24, elev: 58, az: 92, azEarth: 1, helio: 0.12, orbits: 0.1, labels: 0, zodiac: 1, naks: 0.35, grahas: 1, moon: 1, rays: 1, shiftX: 0.21, shiftY: 0.16 },
  // 7 — outro: the camera draws back as the page fades the sky away.
  { focus: 1, radius: 44, elev: 50, az: 116, azEarth: 1, helio: 0.12, orbits: 0.1, labels: 0, zodiac: 0.7, naks: 0, grahas: 0.6, moon: 0.6, rays: 0.3, shiftX: 0.1, shiftY: 0.1 },
];

const smoothstep = (t: number) => t * t * (3 - 2 * t);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpAngle = (a: number, b: number, t: number) => {
  const d = ((((b - a) % 360) + 540) % 360) - 180;
  return a + d * t;
};
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/* ── GLSL ── */
const NOISE_GLSL = /* glsl */ `
  float h3(vec3 p){ p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float n3(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
  float fbm(vec3 p){ float s = 0.0; float a = 0.5; for (int i = 0; i < 4; i++){ s += a * n3(p); p *= 2.07; a *= 0.5; } return s / 0.9375; }
`;

export class CosmosScene {
  private renderer: WebGLRenderer;
  private scene = new Scene();
  private camera = new PerspectiveCamera(40, 1, 0.1, 3000);
  private opts: CosmosOptions;
  private frame = 0;
  private running = false;
  private last = 0;
  private elapsed = 0;
  private disposed = false;

  private width = 1;
  private height = 1;

  // Simulated time (Julian centuries since J2000) and its time-lapse.
  private tCur: number;
  private anim: { from: number; to: number; start: number; dur: number } | null = null;
  // A cut through darkness: the sky dips out, the moment swaps, it returns.
  private dip: { to: number; start: number; dur: number; swapped: boolean } | null = null;
  private lastDateEmit = 0;

  // Scroll stage (target) and the eased camera state that follows it.
  private stageTarget = 0;
  private state: Key & { fx: number; fy: number; fz: number } = { ...KEYS[0], fx: 0, fy: 0, fz: 0 };
  private drift = 0;
  private pointer = { x: 0, y: 0, tx: 0, ty: 0 };

  // Objects
  private ambient = new AmbientLight(0xffffff, 0.08);
  private sunLight = new PointLight(0xfff0d8, 2.6, 0, 0);
  private stars!: Points;
  private starMat!: ShaderMaterial;
  private sunMat!: ShaderMaterial;
  private sunGlow!: Sprite;
  private sunGlow2!: Sprite;
  private planets = new Map<Planet, { group: Group; mesh: Mesh; mat: MeshStandardMaterial; label: Sprite; extra: (Mesh | Sprite)[] }>();
  private orbits: LineLoop[] = [];
  private orbitMat = new LineBasicMaterial({ transparent: true, opacity: 0.3, depthWrite: false });
  private moon!: Mesh;
  private moonMat!: MeshStandardMaterial;
  private earthClouds!: Mesh;
  private ring = new Group();
  private zodiacMesh!: Mesh;
  private naksMesh!: Mesh;
  private markers = new Map<Graha, Sprite>();
  private signLabels: Sprite[] = [];
  private nakLabels: Sprite[] = [];
  private rays!: LineSegments;
  private rayMat = new LineBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
  private textures: Texture[] = [];

  constructor(canvas: HTMLCanvasElement, opts: CosmosOptions) {
    this.opts = opts;
    this.renderer = new WebGLRenderer({ canvas, antialias: !opts.mobile, alpha: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, opts.mobile ? 1.5 : 2));
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.setClearColor(0x000000, 0);

    this.tCur = centuries(new Date());
    this.scene.add(this.ambient, this.sunLight, this.ring);
    this.buildStars();
    this.buildSun();
    this.buildPlanets();
    this.buildZodiac();
    this.applyTheme();
    this.placeBodies();
    this.snapState();
    void this.paintSurfaces();
  }

  /* ───────── public API ───────── */

  setSize(width: number, height: number) {
    this.width = Math.max(1, width);
    this.height = Math.max(1, height);
    this.renderer.setSize(this.width, this.height, false);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    if (!this.running) this.renderOnce();
  }

  setStage(stage: number) {
    this.stageTarget = Math.max(0, Math.min(KEYS.length - 1, stage));
    // From chapter 2 the camera follows Earth; a time-lapse still running
    // there would carry the camera round the Sun with it. Finish it as a dip.
    if (this.anim && this.stageTarget > 1.5) {
      const to = this.anim.to;
      this.anim = null;
      this.dip = { to, start: this.elapsed, dur: 1.1, swapped: false };
    }
    if (this.opts.reduced) this.snapState();
    if (!this.running) this.renderOnce();
  }

  /**
   * Show `date`. "lapse" runs time there (typing a birth date: the planets
   * wheel back to it). "dip" fades the sky out, swaps, and fades it back —
   * for jumps made by scrolling (birth moment ↔ now), where a decades-long
   * time-lapse would spin the whole view, the camera following Earth.
   */
  setDate(date: Date, mode: "lapse" | "dip" = "lapse") {
    const to = centuries(date);
    const pending = this.dip?.to ?? this.anim?.to ?? this.tCur;
    if (Math.abs(to - pending) < 1e-9) {
      if (!this.anim && !this.dip) this.emitDate(true);
      return;
    }
    if (this.opts.reduced) {
      this.anim = null;
      this.dip = null;
      this.tCur = to;
      this.placeBodies();
      this.emitDate(true);
      if (!this.running) this.renderOnce();
      return;
    }
    if (mode === "dip") {
      this.anim = null;
      // Already dipping: keep the same fade, just retarget the swap.
      if (this.dip && !this.dip.swapped) this.dip.to = to;
      else this.dip = { to, start: this.elapsed, dur: 1.1, swapped: false };
      if (!this.running) {
        this.tCur = to;
        this.dip = null;
        this.placeBodies();
        this.renderOnce();
      }
      return;
    }
    this.dip = null;
    this.renderer.domElement.style.opacity = "";
    const days = Math.abs(to - this.tCur) * 36525;
    const dur = Math.min(3.2, 1 + Math.log10(1 + days) * 0.45);
    this.anim = { from: this.tCur, to, start: this.elapsed, dur };
  }

  setTheme(theme: CosmosTheme) {
    if (theme === this.opts.theme) return;
    this.opts.theme = theme;
    this.applyTheme();
    if (!this.running) this.renderOnce();
  }

  setPointer(x: number, y: number) {
    this.pointer.tx = x;
    this.pointer.ty = y;
  }

  start() {
    if (this.running || this.disposed) return;
    this.running = true;
    this.last = performance.now();
    const loop = (now: number) => {
      if (!this.running) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      this.tick(dt);
      this.frame = requestAnimationFrame(loop);
    };
    this.frame = requestAnimationFrame(loop);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.frame);
  }

  dispose() {
    this.stop();
    this.disposed = true;
    this.scene.traverse((obj) => {
      const o = obj as Mesh;
      o.geometry?.dispose?.();
      const mat = o.material as { dispose?: () => void } | { dispose?: () => void }[] | undefined;
      if (Array.isArray(mat)) mat.forEach((m) => m.dispose?.());
      else mat?.dispose?.();
    });
    this.textures.forEach((t) => t.dispose());
    this.renderer.dispose();
    this.renderer.forceContextLoss();
  }

  /* ───────── building ───────── */

  private texture(canvas: HTMLCanvasElement) {
    const t = new CanvasTexture(canvas);
    t.colorSpace = SRGBColorSpace;
    t.anisotropy = 4;
    this.textures.push(t);
    return t;
  }

  private buildStars() {
    const count = this.opts.mobile ? 1800 : 3600;
    const band = this.opts.mobile ? 1400 : 3000;
    const total = count + band;
    const pos = new Float32Array(total * 3);
    const col = new Float32Array(total * 3);
    const size = new Float32Array(total);
    const phase = new Float32Array(total);
    let seed = 41;
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    // The Milky Way: a great circle tilted against the ecliptic.
    const tilt = 60 * DEG;
    for (let i = 0; i < total; i++) {
      const r = 500 + rand() * 400;
      let x: number, y: number, z: number;
      if (i < count) {
        const u = rand() * 2 - 1;
        const th = rand() * Math.PI * 2;
        const s = Math.sqrt(1 - u * u);
        x = s * Math.cos(th);
        y = u;
        z = s * Math.sin(th);
      } else {
        const th = rand() * Math.PI * 2;
        const spread = (rand() + rand() + rand() - 1.5) * 0.18;
        const bx = Math.cos(th);
        const by = spread;
        const bz = Math.sin(th);
        x = bx;
        y = by * Math.cos(tilt) - bz * Math.sin(tilt);
        z = by * Math.sin(tilt) + bz * Math.cos(tilt);
        const l = Math.hypot(x, y, z);
        x /= l;
        y /= l;
        z /= l;
      }
      pos[i * 3] = x * r;
      pos[i * 3 + 1] = y * r;
      pos[i * 3 + 2] = z * r;
      const warm = rand() < 0.18;
      const bright = i < count ? Math.pow(rand(), 3) : rand() * 0.35;
      const c = warm ? [1, 0.88, 0.7] : [0.82, 0.88, 1];
      col.set(c, i * 3);
      size[i] = i < count ? 0.9 + bright * 3.4 : 0.7 + bright * 1.3;
      phase[i] = rand();
    }
    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(pos, 3));
    geo.setAttribute("aColor", new BufferAttribute(col, 3));
    geo.setAttribute("size", new BufferAttribute(size, 1));
    geo.setAttribute("phase", new BufferAttribute(phase, 1));
    this.starMat = new ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uPR: { value: this.renderer.getPixelRatio() },
        uOpacity: { value: 1 },
        uTwinkle: { value: this.opts.reduced ? 0 : 1 },
        uInk: { value: new Color(0x000000) },
        uInkMix: { value: 0 },
      },
      vertexShader: /* glsl */ `
        attribute float size; attribute float phase; attribute vec3 aColor;
        uniform float uTime; uniform float uPR; uniform float uTwinkle;
        varying vec3 vColor; varying float vAlpha;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = size * uPR;
          vColor = aColor;
          vAlpha = 1.0 - uTwinkle * 0.45 * (0.5 + 0.5 * sin(uTime * (0.5 + phase * 1.6) + phase * 6.2831));
        }`,
      fragmentShader: /* glsl */ `
        uniform float uOpacity; uniform vec3 uInk; uniform float uInkMix;
        varying vec3 vColor; varying float vAlpha;
        void main(){
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.05, d);
          gl_FragColor = vec4(mix(vColor, uInk, uInkMix), a * vAlpha * uOpacity);
        }`,
    });
    this.stars = new Points(geo, this.starMat);
    this.stars.frustumCulled = false;
    this.scene.add(this.stars);
  }

  private buildSun() {
    const seg = this.opts.mobile ? 48 : 72;
    this.sunMat = new ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: /* glsl */ `
        varying vec3 vN; varying vec3 vP; varying vec3 vView;
        void main(){ vP = position; vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0); vView = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv; }`,
      fragmentShader: /* glsl */ `
        uniform float uTime; varying vec3 vN; varying vec3 vP; varying vec3 vView;
        ${NOISE_GLSL}
        void main(){
          float n = fbm(vP * 2.4 + vec3(0.0, uTime * 0.05, uTime * 0.02));
          float g = fbm(vP * 7.0 - vec3(uTime * 0.09));
          vec3 col = mix(vec3(1.0, 0.36, 0.05), vec3(1.0, 0.86, 0.52), clamp(n * 0.75 + g * 0.35, 0.0, 1.0));
          float mu = clamp(dot(vN, vView), 0.0, 1.0);
          col *= 0.55 + 0.65 * pow(mu, 0.45);
          col += vec3(1.0, 0.62, 0.25) * pow(1.0 - mu, 2.5) * 0.45;
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    const sun = new Mesh(new SphereGeometry(1.5, seg, seg), this.sunMat);
    this.scene.add(sun);
    this.sunGlow = new Sprite(new SpriteMaterial({ depthWrite: false, transparent: true }));
    this.sunGlow.scale.setScalar(9);
    this.sunGlow2 = new Sprite(new SpriteMaterial({ depthWrite: false, transparent: true, opacity: 0.5 }));
    this.sunGlow2.scale.setScalar(22);
    this.scene.add(this.sunGlow, this.sunGlow2);
  }

  private buildPlanets() {
    const seg = this.opts.mobile ? 32 : 56;
    const t0 = this.tCur;
    for (const name of PLANETS) {
      const spec = BODY[name];
      const group = new Group();
      const mat = new MeshStandardMaterial({ color: spec.tint, roughness: 0.92, metalness: 0, transparent: true });
      const mesh = new Mesh(new SphereGeometry(spec.radius, seg, seg), mat);
      if (this.opts.mobile) group.scale.setScalar(1.5);
      mesh.rotation.z = spec.tilt * DEG;
      group.add(mesh);
      const extra: (Mesh | Sprite)[] = [];

      if (name === "Earth") {
        this.earthClouds = new Mesh(
          new SphereGeometry(spec.radius * 1.015, seg, seg),
          new MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false, roughness: 1 }),
        );
        this.earthClouds.rotation.z = spec.tilt * DEG;
        const atmo = new Mesh(
          new SphereGeometry(spec.radius * 1.22, seg, seg),
          new ShaderMaterial({
            transparent: true,
            depthWrite: false,
            side: BackSide,
            blending: AdditiveBlending,
            uniforms: { uOpacity: { value: 1 } },
            vertexShader: /* glsl */ `varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
            fragmentShader: /* glsl */ `uniform float uOpacity; varying vec3 vN; void main(){ float i = pow(max(0.0, 0.75 - dot(vN, vec3(0.0, 0.0, 1.0))), 3.0); gl_FragColor = vec4(0.35, 0.62, 1.0, 1.0) * i * 1.6 * uOpacity; }`,
          }),
        );
        group.add(this.earthClouds, atmo);
        extra.push(this.earthClouds, atmo);
        this.moonMat = new MeshStandardMaterial({ color: 0xbdb8ae, roughness: 0.95, transparent: true });
        this.moon = new Mesh(new SphereGeometry(0.11, 24, 24), this.moonMat);
        this.scene.add(this.moon);
      }
      if (name === "Saturn") {
        const geo = new RingGeometry(spec.radius * 1.25, spec.radius * 2.25, 128, 1);
        // Remap UVs radially so the strip texture runs inner → outer edge.
        const p = geo.attributes.position as BufferAttribute;
        const uv = geo.attributes.uv as BufferAttribute;
        const v = new Vector3();
        for (let i = 0; i < p.count; i++) {
          v.fromBufferAttribute(p, i);
          uv.setXY(i, (v.length() - spec.radius * 1.25) / (spec.radius * 1.0), 0.5);
        }
        const ringMat = new MeshBasicMaterial({ map: this.texture(paintRings()), transparent: true, side: DoubleSide, depthWrite: false });
        const rings = new Mesh(geo, ringMat);
        rings.rotation.x = -Math.PI / 2 + spec.tilt * DEG;
        group.add(rings);
        extra.push(rings);
      }

      const label = new Sprite(new SpriteMaterial({ depthWrite: false, depthTest: false, transparent: true, sizeAttenuation: false }));
      label.renderOrder = 10;
      group.add(label);

      this.scene.add(group);
      this.planets.set(name, { group, mesh, mat, label, extra });

      // The orbit as drawn: one period of the real ellipse, compressed.
      const a = { Mercury: 0.387, Venus: 0.723, Earth: 1, Mars: 1.524, Jupiter: 5.203, Saturn: 9.537 }[name];
      const periodCenturies = Math.pow(a, 1.5) / 100;
      const pts: number[] = [];
      const N = 256;
      for (let i = 0; i < N; i++) {
        const h = heliocentric(name, t0 + (periodCenturies * i) / N);
        const r = Math.hypot(h.x, h.y);
        const ang = Math.atan2(h.y, h.x);
        pts.push(Math.cos(ang) * visR(r), h.z * 0.8, -Math.sin(ang) * visR(r));
      }
      const geo = new BufferGeometry();
      geo.setAttribute("position", new BufferAttribute(new Float32Array(pts), 3));
      const loop = new LineLoop(geo, this.orbitMat);
      this.orbits.push(loop);
      this.scene.add(loop);
    }
  }

  private buildZodiac() {
    const plane = (z: number) => {
      const m = new Mesh(
        new PlaneGeometry(ZODIAC_R * 2, ZODIAC_R * 2),
        new MeshBasicMaterial({ transparent: true, depthWrite: false, side: DoubleSide, opacity: 0 }),
      );
      m.rotation.x = -Math.PI / 2;
      m.position.y = z;
      m.renderOrder = 5;
      return m;
    };
    this.zodiacMesh = plane(0);
    this.naksMesh = plane(0.01);
    this.ring.add(this.zodiacMesh, this.naksMesh);
    const labelSprite = (r: number, deg: number, list: Sprite[]) => {
      const sp = new Sprite(new SpriteMaterial({ depthWrite: false, depthTest: false, transparent: true, opacity: 0 }));
      sp.position.set(Math.cos(deg * DEG) * r, 0.05, -Math.sin(deg * DEG) * r);
      sp.renderOrder = 8;
      list.push(sp);
      this.ring.add(sp);
    };
    for (let i = 0; i < 12; i++) labelSprite(ZODIAC_R * 0.915, i * 30 + 15, this.signLabels);
    for (let i = 0; i < 27; i++) labelSprite(ZODIAC_R * 0.78, (i + 0.5) * (360 / 27), this.nakLabels);
    for (const g of GRAHAS) {
      const s = new Sprite(new SpriteMaterial({ depthWrite: false, depthTest: false, transparent: true, opacity: 0 }));
      s.renderOrder = 12;
      this.markers.set(g, s);
      this.ring.add(s);
    }
    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(new Float32Array(GRAHAS.length * 6), 3));
    this.rays = new LineSegments(geo, this.rayMat);
    this.rays.renderOrder = 6;
    this.ring.add(this.rays);
  }

  /** Theme-dependent colours and every canvas texture that carries text. */
  private applyTheme() {
    const dark = this.opts.theme === "dark";
    const { labels } = this.opts;
    this.ambient.intensity = dark ? 0.07 : 0.55;
    this.sunLight.intensity = dark ? 2.7 : 2.2;
    this.starMat.uniforms.uOpacity.value = dark ? 1 : 0.32;
    this.starMat.uniforms.uInkMix.value = dark ? 0 : 1;
    this.starMat.blending = dark ? AdditiveBlending : NormalBlending;
    this.starMat.needsUpdate = true;
    this.orbitMat.color.set(dark ? 0xdcb86c : 0x1b1a17);
    this.rayMat.color.set(dark ? 0xdcb86c : 0x7d5d1b);

    const glow = this.texture(dark ? paintGlow("rgba(255,214,150,0.95)", "rgba(255,140,40,0.25)") : paintGlow("rgba(255,190,110,0.9)", "rgba(255,160,70,0.18)"));
    const glow2 = this.texture(dark ? paintGlow("rgba(255,170,90,0.35)", "rgba(120,60,20,0.08)") : paintGlow("rgba(255,200,140,0.35)", "rgba(255,200,140,0.06)"));
    for (const [sprite, map] of [
      [this.sunGlow, glow],
      [this.sunGlow2, glow2],
    ] as const) {
      const m = sprite.material;
      m.map?.dispose();
      m.map = map;
      m.blending = dark ? AdditiveBlending : NormalBlending;
      m.needsUpdate = true;
    }

    const size = this.opts.mobile ? 1536 : 2048;
    this.swapMap(this.zodiacMesh.material as MeshBasicMaterial, this.texture(paintZodiac(this.opts.theme, size)));
    this.swapMap(this.naksMesh.material as MeshBasicMaterial, this.texture(paintNakshatras(this.opts.theme, size)));
    this.signLabels.forEach((sp, i) => {
      const { canvas, aspect } = paintLabel(this.opts.theme, labels.signs[i] ?? "", { serif: true });
      this.swapMap(sp.material, this.texture(canvas));
      sp.scale.set((this.opts.mobile ? 0.8 : 0.62) * aspect, this.opts.mobile ? 0.8 : 0.62, 1);
    });
    this.nakLabels.forEach((sp, i) => {
      const { canvas, aspect } = paintLabel(this.opts.theme, labels.nakshatras[i] ?? "", { muted: true });
      this.swapMap(sp.material, this.texture(canvas));
      sp.scale.set((this.opts.mobile ? 0.38 : 0.3) * aspect, this.opts.mobile ? 0.38 : 0.3, 1);
    });

    for (const [name, p] of this.planets) {
      const { canvas, aspect } = paintLabel(this.opts.theme, labels.planets[name] ?? name);
      this.swapMap(p.label.material, this.texture(canvas));
      p.label.scale.set((this.opts.mobile ? 0.026 : 0.021) * aspect, this.opts.mobile ? 0.026 : 0.021, 1);
    }
    for (const [g, s] of this.markers) {
      const { canvas, aspect } = paintLabel(this.opts.theme, labels.planets[g] ?? g, { glyph: GLYPH[g], shadow: g === "Rahu" || g === "Ketu" });
      this.swapMap(s.material, this.texture(canvas));
      s.scale.set((this.opts.mobile ? 1.3 : 1.05) * aspect, this.opts.mobile ? 1.3 : 1.05, 1);
    }
  }

  private swapMap(mat: MeshBasicMaterial | SpriteMaterial, map: Texture) {
    const old = mat.map;
    mat.map = map;
    mat.needsUpdate = true;
    if (old) {
      old.dispose();
      this.textures = this.textures.filter((t) => t !== old);
    }
  }

  private async paintSurfaces() {
    const w = this.opts.mobile ? 256 : 512;
    const jobs: [Planet | "Moon" | "Clouds", SurfaceKind][] = [
      ["Earth", "earth"],
      ["Jupiter", "jupiter"],
      ["Saturn", "saturn"],
      ["Mars", "mars"],
      ["Venus", "venus"],
      ["Mercury", "mercury"],
      ["Moon", "moon"],
      ["Clouds", "clouds"],
    ];
    for (const [name, kind] of jobs) {
      if (this.disposed) return;
      const canvas = await paintSurface(kind, kind === "clouds" ? w : w);
      if (this.disposed) return;
      const map = this.texture(canvas);
      if (name === "Moon") {
        this.moonMat.map = map;
        this.moonMat.color.set(0xffffff);
        this.moonMat.needsUpdate = true;
      } else if (name === "Clouds") {
        const m = this.earthClouds.material as MeshStandardMaterial;
        m.map = map;
        m.opacity = 0.85;
        m.needsUpdate = true;
      } else {
        const p = this.planets.get(name)!;
        p.mat.map = map;
        p.mat.color.set(0xffffff);
        p.mat.needsUpdate = true;
      }
      if (!this.running) this.renderOnce();
    }
  }

  /* ───────── per frame ───────── */

  private earthAngle = 0;

  private placeBodies() {
    const t = this.tCur;
    for (const [name, p] of this.planets) {
      const h = heliocentric(name, t);
      const r = Math.hypot(h.x, h.y);
      const ang = Math.atan2(h.y, h.x);
      p.group.position.set(Math.cos(ang) * visR(r), h.z * 0.8, -Math.sin(ang) * visR(r));
      p.label.position.set(0, BODY[name].radius + 0.55, 0);
      if (name === "Earth") this.earthAngle = ang / DEG;
    }
    const earth = this.planets.get("Earth")!.group.position;
    const lm = moonTropical(t) * DEG;
    this.moon.position.set(earth.x + Math.cos(lm) * 0.85, earth.y, earth.z - Math.sin(lm) * 0.85);

    // The band sits around Earth, turned so sidereal 0° Aries is where the
    // ayanamsha puts it in the tropical frame.
    this.ring.position.copy(earth);
    this.ring.rotation.y = ayanamsha(t) * DEG;
    const lon = grahaLongitudes(t);
    const rayPos = this.rays.geometry.attributes.position as BufferAttribute;
    // Grahas within a few degrees of each other step inward, so a
    // conjunction reads as a stack rather than one blurred marker.
    const level = new Map<Graha, number>();
    const sorted = [...GRAHAS].sort((a, b) => lon[a] - lon[b]);
    sorted.forEach((g, i) => {
      const prev = sorted[(i + sorted.length - 1) % sorted.length];
      const gap = (((lon[g] - lon[prev]) % 360) + 360) % 360;
      level.set(g, i > 0 && gap < 10 ? (level.get(prev) ?? 0) + 1 : 0);
    });
    GRAHAS.forEach((g, i) => {
      const a = lon[g] * DEG;
      const r = MARKER_R - (level.get(g) ?? 0) * 1.25;
      const x = Math.cos(a) * r;
      const z = -Math.sin(a) * r;
      this.markers.get(g)!.position.set(x, 0.75, z);
      rayPos.setXYZ(i * 2, 0, 0, 0);
      rayPos.setXYZ(i * 2 + 1, x, 0, z);
    });
    rayPos.needsUpdate = true;
  }

  private emitDate(force = false) {
    if (!this.opts.onDate) return;
    if (!force && this.elapsed - this.lastDateEmit < 0.08) return;
    this.lastDateEmit = this.elapsed;
    this.opts.onDate(dateFromCenturies(this.tCur));
  }

  private targetKey(): Key {
    const s = this.stageTarget;
    const i = Math.min(KEYS.length - 2, Math.floor(s));
    const k = smoothstep(Math.min(1, Math.max(0, s - i)));
    const a = KEYS[i];
    const b = KEYS[i + 1];
    const out = {} as Key;
    for (const key of Object.keys(a) as (keyof Key)[]) {
      out[key] = key === "az" ? lerpAngle(a.az, b.az, k) : lerp(a[key], b[key], k);
    }
    return out;
  }

  private snapState() {
    const k = this.targetKey();
    Object.assign(this.state, k);
    const f = this.focusPoint(k.focus);
    this.state.fx = f.x;
    this.state.fy = f.y;
    this.state.fz = f.z;
  }

  private focusPoint(focus: number) {
    const e = this.planets.get("Earth")!.group.position;
    return new Vector3(e.x * focus, e.y * focus, e.z * focus);
  }

  private tick(dt: number) {
    this.elapsed += dt;
    const reduced = this.opts.reduced;

    // Time-lapse
    if (this.anim) {
      const k = Math.min(1, (this.elapsed - this.anim.start) / this.anim.dur);
      this.tCur = lerp(this.anim.from, this.anim.to, easeInOutCubic(k));
      this.placeBodies();
      this.emitDate(k === 1);
      if (k === 1) this.anim = null;
    }

    // Dip: out, swap at the darkest point (camera included), back in.
    if (this.dip) {
      const k = Math.min(1, (this.elapsed - this.dip.start) / this.dip.dur);
      if (k >= 0.5 && !this.dip.swapped) {
        this.dip.swapped = true;
        this.tCur = this.dip.to;
        this.placeBodies();
        this.snapState();
        this.emitDate(true);
      }
      const v = Math.abs(1 - 2 * k);
      this.renderer.domElement.style.opacity = k >= 1 ? "" : String(v * v * (3 - 2 * v));
      if (k >= 1) this.dip = null;
    }

    // Ease the camera state toward the scroll stage.
    const target = this.targetKey();
    const ease = reduced ? 1 : 1 - Math.exp(-dt * 3.2);
    const st = this.state;
    for (const key of Object.keys(target) as (keyof Key)[]) {
      st[key] = key === "az" ? lerpAngle(st.az, target.az, ease) : lerp(st[key], target[key], ease);
    }
    const f = this.focusPoint(target.focus);
    st.fx = lerp(st.fx, f.x, ease);
    st.fy = lerp(st.fy, f.y, ease);
    st.fz = lerp(st.fz, f.z, ease);

    if (!reduced) {
      // A slow drift in the hero only, and a small lean toward the pointer.
      this.drift += dt * 1.1 * Math.max(0, 1 - this.stageTarget);
      this.pointer.x = lerp(this.pointer.x, this.pointer.tx, 1 - Math.exp(-dt * 2));
      this.pointer.y = lerp(this.pointer.y, this.pointer.ty, 1 - Math.exp(-dt * 2));
      this.starMat.uniforms.uTime.value = this.elapsed;
      this.sunMat.uniforms.uTime.value = this.elapsed;
      for (const [name, p] of this.planets) p.mesh.rotation.y += dt * BODY[name].spin;
      this.earthClouds.rotation.y += dt * 0.36;
    }

    this.applyState();
    this.renderer.render(this.scene, this.camera);
  }

  private applyState() {
    const st = this.state;
    // Portrait: a wider lens and a closer camera — the inner planets fill
    // the screen and Jupiter and Saturn may run off its edges.
    const portrait = this.width / this.height < 0.9;
    const fov = portrait ? 56 : 40;
    if (this.camera.fov !== fov) {
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
    }
    const fit = portrait ? lerp(1.2, 1.55, st.focus) : 1;
    const radius = st.radius * fit;
    const az = (lerp(st.az, st.az + this.earthAngle, st.azEarth) + this.drift + this.pointer.x * 4) * DEG;
    // Portrait hero: a flatter view keeps the outer orbits inside the
    // open-sky window above the headline; it rises again as the journey starts.
    const flatten = portrait ? 11 * Math.max(0, 1 - this.stageTarget) : 0;
    const el = Math.max(4, Math.min(88, st.elev - flatten + this.pointer.y * 3)) * DEG;
    this.camera.position.set(
      st.fx + radius * Math.cos(el) * Math.cos(az),
      st.fy + radius * Math.sin(el),
      st.fz - radius * Math.cos(el) * Math.sin(az),
    );
    this.camera.lookAt(st.fx, st.fy, st.fz);
    const shiftX = portrait ? 0 : st.shiftX * (this.width > 1024 ? 1 : 0.6);
    const shiftY = portrait ? st.shiftY : 0;
    this.camera.setViewOffset(this.width, this.height, -shiftX * this.width, shiftY * this.height, this.width, this.height);

    // Layer opacities
    for (const [, p] of this.planets) {
      p.mat.opacity = st.helio;
      p.mesh.visible = st.helio > 0.01;
      for (const e of p.extra) {
        const m = (e as Mesh).material as { opacity?: number; uniforms?: { uOpacity: { value: number } } };
        if (m.uniforms?.uOpacity) m.uniforms.uOpacity.value = st.helio;
        else if (e !== this.earthClouds && m.opacity !== undefined) m.opacity = st.helio;
        e.visible = st.helio > 0.01;
      }
      p.label.material.opacity = st.labels;
      p.label.visible = st.labels > 0.01;
    }
    if (this.earthClouds) (this.earthClouds.material as MeshStandardMaterial).opacity = Math.min(0.85, st.helio);
    // Earth stays solid in the geocentric stages: it is where we stand.
    const earth = this.planets.get("Earth")!;
    earth.mat.opacity = Math.max(st.helio, st.focus);
    earth.mesh.visible = true;
    this.moonMat.opacity = Math.max(st.helio, st.focus * 0.9);
    this.orbitMat.opacity = (this.opts.theme === "dark" ? 0.34 : 0.3) * st.orbits;

    (this.zodiacMesh.material as MeshBasicMaterial).opacity = st.zodiac;
    this.zodiacMesh.visible = st.zodiac > 0.01;
    (this.naksMesh.material as MeshBasicMaterial).opacity = st.naks;
    this.naksMesh.visible = st.naks > 0.01;
    for (const sp of this.signLabels) {
      sp.material.opacity = st.zodiac;
      sp.visible = st.zodiac > 0.01;
    }
    for (const sp of this.nakLabels) {
      sp.material.opacity = st.naks;
      sp.visible = st.naks > 0.01;
    }
    for (const [g, s] of this.markers) {
      const o = g === "Moon" ? Math.max(st.grahas, st.moon) : st.grahas;
      s.material.opacity = o;
      s.visible = o > 0.01;
    }
    this.rayMat.opacity = st.rays * 0.55;
    this.rays.visible = st.rays > 0.01;
  }

  private renderOnce() {
    this.applyState();
    this.renderer.render(this.scene, this.camera);
  }
}
