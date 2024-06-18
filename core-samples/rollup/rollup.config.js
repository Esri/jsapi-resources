import del from "rollup-plugin-delete";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/main.js",
  output: {
    chunkFileNames: "chunks/[name]-[hash].js",
    dir: "public",
    format: "es",
    generatedCode: "es2015"
  },
  treeshake: false,
  plugins: [
    del({ targets: ["public/chunks"], runOnce: true, verbose: true }),
    resolve(),
    serve("public"),
    livereload({
      watch: "public/main.js"
    })
  ],
  preserveEntrySignatures: false
};
