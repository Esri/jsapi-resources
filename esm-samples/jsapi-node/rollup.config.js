import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: ["src/request.js", "src/projection.js", "src/webmap.js"],
  output: {
    chunkFileNames: "chunks/[name].js",
    dir: "public",
    format: "cjs"
  },
  external: ["whatwg-fetch"],
  plugins: [
    del({ targets: ["public/chunks", "public/assets"], runOnce: true, verbose: true }),
    copy({
      // Copy the ArcGIS API for JavaScript assets
      targets: [{ src: "./node_modules/@arcgis/core/assets", dest: "./public" }],
      copyOnce: true
    }),
    resolve(),
    commonjs()
  ],
  preserveEntrySignatures: false
};
