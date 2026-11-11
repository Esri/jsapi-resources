import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
    modulePreload: false,
    rolldownOptions: {
      input: {
        "main": "./index.html",
        "geometry-operator-worker": "./src/geometry-operator-worker.js",
      },
      preserveEntrySignatures: "strict",
      output: {
        entryFileNames: (chunk) =>
          chunk.name === "geometry-operator-worker" ? "geometry-operator-worker.js" : "assets/[name]-[hash].js",
      },
    },
  },
});
