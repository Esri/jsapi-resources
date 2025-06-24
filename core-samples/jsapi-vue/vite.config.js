import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 2000,
    target: "es2023",
  },
  server: {
    open: true,
  },
  plugins: [vue()],
});
