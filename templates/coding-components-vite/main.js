import "./style.css"; // Arcade editor styles

import { loadData } from "./load-data";

// Individual imports for each component
import "@arcgis/coding-components/components/arcgis-arcade-editor";
import "@esri/calcite-components/components/calcite-scrim";

(async () => {
  // Get the Arcade editor element
  const arcadeEditorElt = document.querySelector("arcgis-arcade-editor");

  // Log script change events
  arcadeEditorElt.addEventListener("arcgisScriptChange", async (e) => {
    console.log("script:", e.detail);
    // console.log("outputType on script:", await arcadeEditorElt.getTestResult());
  });

  // Log editor diagnostics
  arcadeEditorElt.addEventListener("arcgisDiagnosticsChange", async (e) => {
    console.log("diagnostics:", e.detail);
  });

  // Start loading data. Don't need to await, we want the fetching to start.
  const dataPromise = loadData();

  // Wait for our data to be loaded and wait for the component to be defined in the custom elements
  const [data] = await Promise.all([dataPromise, customElements.whenDefined("arcgis-arcade-editor")]);

  // Tells Arcade editor to use the 'popup' profile and provides the necessary data used as
  // definition for the profile variables. Feature Layer and Web Map instances are used by the
  // Editor UX to help users understand the structure of data used.
  // Note that for the $feature variable, we pass the feature layer instance as for definition
  // the editor needs the metadata of the feature not an actual feature.
  arcadeEditorElt.profile = {
    id: "popup",
    definitions: {
      $feature: data.featureLayer,
      $layer: data.featureLayer,
      $map: data.webMap,
      $datastore: data.featureLayer,
    },
  };

  // Tells Arcade editor to the following test data. The data provided must match the expected data for the
  // profile used.
  // Note that for test data, the feature must an instance of a feature. This is not used for user experience
  // but for actually executing the the Arcade expression in the editor.
  arcadeEditorElt.testData = {
    profileVariableInstances: {
      $feature: data.featureSet.features[0],
      $layer: data.featureLayer,
      $map: data.webMap,
      $datastore: data.featureLayer.url,
    },
    // spatialReference: {wkid: 3857}
  };

  // Set a script on the editor
  arcadeEditorElt.script = "$feature";

  // Everything has been loaded and assigned, we can remove scrim
  document.getElementById("scrim").remove();
})();
