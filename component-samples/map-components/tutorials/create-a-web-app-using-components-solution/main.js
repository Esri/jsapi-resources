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

import "./style.css";

/**
 * Import functions to define the custom HTML elements from the
 * Map Components and Calcite Components libraries.
 */
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";

/**
 * Define the custom elements on the window using the Calcite Components
 * Use the CDN-hosted assets. When using the CDN-hosted assets,
 * you need to keep the version number in the path the same as the version of
 * `@esri/calcite-components` installed as a dependency of `@arcgis/map-components`.
 */
defineCalciteElements(window, {
  resourcesUrl: "https://js.arcgis.com/calcite-components/2.8.0/assets"
});

/**
 * Use the Map Components to define and lazy load the custom map elements.
 */
defineMapElements(window, {
  resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets"
});

/**
 * Use `document.querySelector()` to get a reference to the `arcgis-layer-list` component.
 * Add an event listener for the `arcgis-layer-list` component's `arcgisLayerListReady` event.
 */
document.querySelector("arcgis-layer-list").addEventListener("arcgisLayerListReady", (event) => {
  /**
   * Get a reference to the ArcGIS Maps SDK for JavaScript `LayerList` widget
   * from the `event.detail` object.
   */
  const arcgisLayerList = event.target;
  /**
   * Add a listItemCreatedFunction to the layer list.
   * This function will add a legend in the list item panel for all layers except group layers.
   * https://next.sites.afd.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html#listItemCreatedFunction
   */
  arcgisLayerList.listItemCreatedFunction = (event) => {
    const { item } = event;
    if (item.layer.type !== "group") {
      item.panel = {
        content: "legend"
      };
    }
  };
});

/**
 * Use `document.querySelector()` to get a reference to the `arcgis-map` component.
 * Add an event listener for the `arcgis-map` component's `arcgisViewReadyChange` event.
 */
document.querySelector("arcgis-map").addEventListener("arcgisViewReadyChange", (event) => {
  /**
   * Create a constant for the map's portal item.
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html#portalItem
   */
  const { portalItem } = event.target.map;

  /**
   * Set properties on the `calcite-navigation-logo`
   * from the properties of the portal item.
   */
  const navigationLogo = document.querySelector("calcite-navigation-logo");
  navigationLogo.heading = portalItem.title;
  navigationLogo.description = portalItem.snippet;
  navigationLogo.thumbnail = portalItem.thumbnailUrl;

  /**
   * Find the accidental deaths layer in the `event.target.map.layers` collection.
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers
   */
  const layer = event.target.map.layers.find((layer) => layer.id === "Accidental_Deaths_8938");

  /**
   * Modify the layer's popup template title.
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html
   */
  layer.popupTemplate.title = "Accidental Deaths";
});
