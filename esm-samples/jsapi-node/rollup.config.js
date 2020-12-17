import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: ["src/request.js", "src/projection.js", "src/webmap.js"],
  output: {
    chunkFileNames: "chunks/[name].js",
    dir: "dist",
    format: "cjs"
  },
  external: ["whatwg-fetch"],
  plugins: [resolve(), commonjs()],
  preserveEntrySignatures: false
};
