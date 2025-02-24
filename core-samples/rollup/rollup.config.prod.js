import del from "rollup-plugin-delete";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace"; // new at 4.32

export default {
  input: "src/main.js",
  output: {
    chunkFileNames: "chunks/[name]-[hash].js",
    dir: "public",
    format: "es",
    generatedCode: "es2015",
  },
  plugins: [
    del({ targets: ["public/chunks"], runOnce: true, verbose: true }),
    replace({
      // new at 4.32
      preventAssignment: true,
      values: {
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
    }),
    resolve(),
    terser(),
  ],
  preserveEntrySignatures: false,
};
