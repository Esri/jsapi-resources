import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  server: {
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 2000,
    outDir: "dist",
  },
});
