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

import { Component, OnInit } from "@angular/core";
import { loadData } from "../functions/load-data.service";
import { IEditorProfileDefinition, IPredefinedProfile } from "@arcgis/coding-components/dist/types/utils/profile/types";
import { IEditorTestContext } from "@arcgis/coding-components/dist/types/utils/arcade-executor";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineCodingElements } from "@arcgis/coding-components/dist/loader";

// Calcite Components
// import "@esri/calcite-components/dist/components/calcite-scrim";
// import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = 'coding-components-angular-template';

  // Property to track loading state
  public isLoading: boolean = true;

  // Properties for the arcade editor
  public profile!: IEditorProfileDefinition | IPredefinedProfile;
  public testData!: IEditorTestContext;

  ngOnInit() {
    // define custom elements in the browser, and load the assets from the CDN
    defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.5.1/assets" });
    defineCodingElements(window, { resourcesUrl: "https://js.arcgis.com/coding-components/4.29/assets" });
    // Call async functions here
    this.fetch();
  }

  // Async function to fetch data
  async fetch() {
    const data = await loadData();

    this.profile = {
      id: "popup",
      definitions: {
        $feature: data.featureLayer,
        $layer: data.featureLayer,
        $map: data.webMap,
        $datastore: data.featureLayer
      }
    };

    this.testData = {
      profileVariableInstances: {
        $feature: data.featureSet.features[0],
        $layer: data.featureLayer,
        $map: data.webMap,
        $datastore: data.featureLayer.url
      }
      // spatialReference: {wkid: 3857},
      // timeZone: "system"
    };

    // Once data is fetched, set isLoading to false
    this.isLoading = false;
  }
}
