import { defineConfig } from "vite";

const config = {
  build: {
    chunkSizeWarningLimit: 2000,
    target: "es2023",
  },
  server: {
    open: true,
  },
};

export default defineConfig(config);
