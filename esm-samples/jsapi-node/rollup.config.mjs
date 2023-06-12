import del from "rollup-plugin-delete";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: ["src/request.js", "src/projection.js", "src/webmap.js"],
  output: {
    chunkFileNames: "chunks/[name].js",
    dir: "public",
    format: "cjs"
  },
  plugins: [
    del({ targets: ["public/*"], runOnce: true, verbose: true }),
    resolve()
  ],
  preserveEntrySignatures: false
};
