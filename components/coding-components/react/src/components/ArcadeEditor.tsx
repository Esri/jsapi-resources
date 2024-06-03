/* Copyright 2024 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useEffect, useCallback, useState } from "react";

import { ArcgisArcadeEditor } from "@arcgis/coding-components-react";
import { CalciteScrim } from "@esri/calcite-components-react";

import { loadData } from "../functions/load-data";

import "./ArcadeEditor.css";

export default function ArcadeEditor() {
  const [data, setData] = useState(null);

  // useCallback to prevent the function from being recreated when the component rebuilds
  const initializeTheEditor = useCallback(async () => {
    const data = await loadData();
    setData(data);
  }, []);

  // Register a function that will execute after the current render cycle
  useEffect(() => {
    initializeTheEditor().catch(console.error);
  }, [initializeTheEditor]);

  return (
    <div>
      <div className="editor-wrapper">
        {data ? (
          <ArcgisArcadeEditor
            // Set the script on the editor
            script="$feature"
            // Log script change events
            onScriptChange={async (e) => {
              console.log("script:", e.detail);
              // console.log("outputType on script:", await arcadeEditorElt.getOutputType());
            }}
            // Log editor diagnostics
            onDiagnosticsChange={async (e) => {
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
                $datastore: data.featureLayer
              }
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
                $datastore: data.featureLayer.url
              }
            }}
          />
        ) : (
          <CalciteScrim loading />
        )}
      </div>
    </div>
  );
}
