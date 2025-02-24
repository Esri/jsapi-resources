import { defineConfig } from "vite";

const config = {
  build: {
    chunkSizeWarningLimit: 1600,
  },
  server: {
    open: true,
  },
};

export default defineConfig(config);
