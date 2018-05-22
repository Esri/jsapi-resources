import "./config";

import "@dojo/shim/Promise";

import App from "./widgets/app";

/**
 * Initialize application
 */
export const app = new App({
  appName: "Demo App",
  container: document.getElementById("app") as HTMLElement
});
