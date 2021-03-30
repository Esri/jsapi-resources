import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js",
  output: {
    chunkFileNames: "chunks/[name]-[hash].js",
    dir: "public",
    format: "es"
  },
  plugins: [
    del({ targets: ["public/chunks"], runOnce: true, verbose: true }),
    resolve(),
    serve("public"),
    livereload({
      watch: "public/main.js"
    }),
    commonjs(), 
    terser()
  ],
  preserveEntrySignatures: false
};
