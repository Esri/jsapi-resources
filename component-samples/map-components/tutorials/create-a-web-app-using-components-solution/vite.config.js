import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  server: {
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 1500,
    outDir: "dist",
  },
});
