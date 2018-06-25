import "./config";

import "@dojo/shim/Promise";

import App from "./widgets/App";

/**
 * Initialize application
 */
export const app = new App({
  appName: "Demo App",
  container: document.getElementById("app") as HTMLElement
});
