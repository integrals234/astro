// One Clerk locale per chunk (see providers.tsx). A static named import
// tree-shakes; importing the package dynamically would pull all ~50 locales.
export { hiIN as default } from "@clerk/localizations";
