import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/main.js",
  output: {
    chunkFileNames: "chunks/[name]-[hash].js",
    dir: "public",
    format: "es",
    generatedCode: "es2015"
  },
  plugins: [
    del({ targets: ["public/chunks"], runOnce: true, verbose: true }),
    resolve(),
    commonjs(), 
    terser()
  ],
  preserveEntrySignatures: false
};
