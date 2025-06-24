import { defineConfig } from "vite";
import { comlink } from "vite-plugin-comlink";

// worker.format "es" is required for comlink to work properly
// https://github.com/vitejs/vite/issues/8466
export default defineConfig({
  plugins: [comlink()],
  worker: {
    format: "es",
    plugins: () => [comlink()],
  },
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
  },
});
