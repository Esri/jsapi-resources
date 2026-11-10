import { defineConfig, normalizePath } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// Most users only need translation files for one or few languages.
// This helps decrease build size by excluding languages from the final build output.
const includedLocales = new Set(["en"]);

const localePatterns = [
  /(?:^|\/)t9n\/[^/]+\.([a-z]{2,3}(?:-[a-z0-9]{2,8})*)\.(?:json|js)$/i,
  /\.t9n\.([a-z]{2,3}(?:-[a-z0-9]{2,8})*)\.(?:json|js)$/i,
  /(?:^|\/)messages?\.([a-z]{2,3}(?:-[a-z0-9]{2,8})*)\.(?:json|js)$/i,
  /(?:^|\/)translations\/([a-z]{2,3}(?:-[a-z0-9]{2,8})*)\.(?:json|js)$/i,
];

const isIncludedLocale = (locale) =>
  [...includedLocales].some((includedLocale) => {
    const normalizedIncludedLocale = includedLocale.toLowerCase();
    return (
      locale === normalizedIncludedLocale ||
      locale.startsWith(`${normalizedIncludedLocale}-`) ||
      normalizedIncludedLocale.startsWith(`${locale}-`)
    );
  });

const isExcludedLocaleAsset = (path) => {
  const normalized = path.replaceAll("\\", "/");
  const locale = localePatterns
    .map((pattern) => normalized.match(pattern)?.[1])
    .find(Boolean)
    ?.toLowerCase();
  return locale !== undefined && !isIncludedLocale(locale);
};

const targets = [
  {
    src: "node_modules/@esri/calcite-components/dist/cdn/assets/**/*.*",
    dest: "assets",
    stripBase: 6,
  },
  {
    src: "node_modules/@arcgis/core/assets/**/*.*",
    dest: "assets",
    stripBase: 4,
  },
  {
    src: "node_modules/@arcgis/coding-components/dist/cdn/assets/**/*.*",
    dest: "assets",
    stripBase: 6,
  },
  {
    src: "node_modules/@arcgis/map-components/dist/cdn/assets/**/*.*",
    dest: "assets",
    stripBase: 6,
  },
  {
    src: "node_modules/@arcgis/charts-components/dist/cdn/assets/**/*.*",
    dest: "assets",
    stripBase: 6,
  },
  {
    src: "node_modules/@arcgis/common-components/dist/cdn/assets/**/*.*",
    dest: "common-components/assets",
    stripBase: 6,
  },
].map(({ src, dest, stripBase }) => ({
  src: normalizePath(src),
  dest,
  rename: { stripBase },
  transform: {
    encoding: "buffer",
    handler: (content, filename) => (isExcludedLocaleAsset(filename) ? null : content),
  },
}));

export default defineConfig({
  plugins: [viteStaticCopy({ structured: true, targets })],
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
  },
});
