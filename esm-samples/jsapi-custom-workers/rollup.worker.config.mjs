import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: {
    RemoteClient: "@arcgis/core/core/workers/RemoteClient.js",
    SpatialJoin: "./src/spatial-join-worker.js"
  },
  output: {
    chunkFileNames: "chunks/worker/[name]-[hash].js",
    dir: "dist",
    format: "system",
    exports: "named"
  },
  plugins: [resolve(), commonjs(), production && terser()],
  preserveEntrySignatures: "allow-extension"
};
