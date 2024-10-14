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

import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-zoom";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@arcgis/map-components/dist/components/arcgis-legend";
import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = "map-components-angular-sample";

  constructor() {
    setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.8.6/assets");
  }

  arcgisViewReadyChange(event: any) {
    console.log("MapView ready", event);
  }

  ngOnInit() {
    console.log("OnInit");
  }
}
