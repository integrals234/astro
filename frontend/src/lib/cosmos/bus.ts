/**
 * A tiny shared store between the home page's HTML and its 3D scene, which
 * loads later in its own chunk: the scroll stage (set by the journey) and
 * the birth moment being typed into the hero (null = show the sky now).
 * Plain module state + listeners — no React re-render on every scroll tick.
 */
type Listener = () => void;

let stage = 0;
let birth: Date | null = null;
const listeners = new Set<Listener>();
const emit = () => listeners.forEach((fn) => fn());

export const cosmosBus = {
  getStage: () => stage,
  setStage(next: number) {
    if (Math.abs(next - stage) < 1e-4) return;
    stage = next;
    emit();
  },
  getBirth: () => birth,
  setBirth(next: Date | null) {
    if ((next?.getTime() ?? null) === (birth?.getTime() ?? null)) return;
    birth = next;
    emit();
  },
  subscribe(fn: Listener) {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  },
};
