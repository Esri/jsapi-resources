# ArcGIS API for JavaScript with Vue CLI

Integrating Vue with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) does not require much manual configuration. The one requirement is having to copy the `@arcgis/core/assets` folder to the build. CRA does not provide a clear method to do this during the build so, you can use [`ncp`](https://www.npmjs.com/package/ncp) to copy the files to the build directory.

```json
// package.json
{
  "scripts": {
    "copy": "ncp ./node_modules/@arcgis/core/assets ./public/assets",
    "postinstall": "npm run copy",
    ...
  },
}
```

---

# vue-cli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
