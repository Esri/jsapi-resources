import { useEffect, useState } from "react";

// Individual imports for each component used in this sample
import "@arcgis/coding-components/components/arcgis-arcade-editor";
import "@esri/calcite-components/components/calcite-scrim";

import { loadData } from "../functions/load-data";
import "./ArcadeEditor.css";

// Custom Hook to load the data
function useArcadeEditorData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const initializeData = async () => {
      try {
        const data = await loadData();
        setData(data);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    initializeData();
  }, []);

  return data;
}

export default function ArcadeEditor() {
  const data = useArcadeEditorData();

  return (
    <div>
      <div className="editor-wrapper">
        {data ? (
          <arcgis-arcade-editor
            // Set the script on the editor
            script="$feature"
            // Log script change events
            onarcgisScriptChange={async (e) => {
              console.log("script:", e.detail);
            }}
            // Log editor diagnostics
            onarcgisDiagnosticsChange={async (e) => {
              console.log("diagnostics:", e.detail);
            }}
            // Tells Arcade editor to use the 'popup' profile and provides the necessary data used as
            // definition for the profile variables. Feature Layer and Web Map instances are used by the
            // Editor UX to help users understand the structure of data used.
            // Note that for the $feature variable, we pass the feature layer instance as for definition
            // the editor needs the metadata of the feature not an actual feature.
            profile={{
              id: "popup",
              definitions: {
                $feature: data.featureLayer,
                $layer: data.featureLayer,
                $map: data.webMap,
                $datastore: data.featureLayer,
              },
            }}
            // Tells Arcade editor to the following test data. The data provided must match the expected data for the
            // profile used.
            // Note that for test data, the feature must an instance of a feature. This is not used for user experience
            // but for actually executing the the Arcade expression in the editor.
            testData={{
              profileVariableInstances: {
                $feature: data.featureSet.features[0],
                $layer: data.featureLayer,
                $map: data.webMap,
                $datastore: data.featureLayer.url,
              },
            }}
          />
        ) : (
          <calcite-scrim loading />
        )}
      </div>
    </div>
  );
}
