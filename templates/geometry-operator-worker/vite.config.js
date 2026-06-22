import { defineConfig } from "vite";
import { comlink } from "vite-plugin-comlink";

// worker.format "es" is required for comlink to work properly
// https://github.com/vitejs/vite/issues/8466
export default defineConfig({
  plugins: [comlink()],
  worker: {
    format: "es",
    plugins: () => [comlink()],
    rollupOptions: {
      output: {
        // Prevent worker-emitted CSS/asset names from colliding with app assets.
        assetFileNames: "assets/worker/[name]-[hash][extname]",
      },
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
  },
});
