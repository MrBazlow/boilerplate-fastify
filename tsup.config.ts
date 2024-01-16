import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["./src/**/*.{ts,json,hbs}"],
  format: ["esm"],
  sourcemap: process.env.NODE_ENV !== "production",
  target: "esnext",
  outDir: "dist",
  keepNames: true,
  loader: {
    ".hbs": "copy",
    ".json": "copy",
  },
  skipNodeModulesBundle: true,
  bundle: false,
});
