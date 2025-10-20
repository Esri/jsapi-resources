import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import css from "rollup-plugin-import-css";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: {
    RemoteClient: "@arcgis/core/core/workers/RemoteClient.js",
    SpatialJoin: "./src/spatial-join-worker.js",
  },
  output: {
    chunkFileNames: "chunks/worker/[name]-[hash].js",
    dir: "dist",
    format: "system",
    exports: "named",
  },
  plugins: [resolve(), css(), production && terser()],
  preserveEntrySignatures: "allow-extension",
};
