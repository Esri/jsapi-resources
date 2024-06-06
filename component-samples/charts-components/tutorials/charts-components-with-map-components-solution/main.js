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

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

/**
 * Define the custom elements on the window using the Calcite Components
 * Use the CDN-hosted assets. When using the CDN-hosted assets,
 * you need to keep the version number in the path the same as the version of
 * `@esri/calcite-components` installed as a dependency of `@arcgis/map-components`.
 */
defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.8.0/assets" });

/**
 * Use the Map Components to define and lazy load the custom map elements.
 */
defineMapElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });

/**
 * Use the Charts Components to define and lazy load the custom charts elements.
 */
defineChartsElements(window, { resourcesUrl: "https://js.arcgis.com/charts-components/4.30/t9n" });

/**
 * Get a reference to the `arcgis-charts-scatter-plot` element
 */
const mapElement = document.querySelector("arcgis-map");
const scatterplotElement = document.querySelector("arcgis-charts-scatter-plot");
const actionBarElement = document.querySelector("arcgis-charts-action-bar");

/**
 * Add an event listener for the `arcgis-map` component's `arcgisViewReadyChange` event.
 */
mapElement.addEventListener("arcgisViewReadyChange", (event) => {
  /**
   * Get the map and the view from the event target
   */
  const { map, view } = event.target;

  /**
   * Get the layer from the mapElement and the config from the layer
   */
  const featureLayer = map.layers.find((layer) => layer.title === "CollegeScorecard_Charts");
  const scatterplotConfig = featureLayer.charts[0];

  /**
   * Assign the config and the layer to the chart element to render the chart
   */
  scatterplotElement.config = scatterplotConfig;
  scatterplotElement.layer = featureLayer;

  /**
   * Get the layerView from the view
   * Add an event listener to the scatter plot element to listen to the selection complete event, and highlight the selected features on the map
   */
  const featureLayerViews = view.layerViews;

  scatterplotElement.addEventListener("arcgisChartsSelectionComplete", (event) => {
    map.highlightSelect?.remove();
    map.highlightSelect = featureLayerViews.items[0].highlight(event.detail.selectionOIDs);
  });

  /**
   * Add an event listener to the action bar element to listen to the default action select event.
   */
  actionBarElement.addEventListener("arcgisChartsDefaultActionSelect", (event) => {
    // Get the actionId and actionActive from the event detail
    const { actionId, actionActive } = event.detail;

    if (actionId === "filterByExtent") {
      if (mapElement.view !== undefined) {
        // Set the view of the scatterplot element to the map view if the Filter By Extent action is toggled on
        scatterplotElement.view = actionActive ? mapElement.view : undefined;
      }
    }
  });
});

/**
 * Add an event listener to the `arcgisViewClick` event on the `arcgis-map` element.
 * This is used to sync up a selection on the map with the scatterplot.
 */
mapElement.addEventListener("arcgisViewClick", (event) => {
  // Get the view from the event target
  const { view } = event.target;

  // Get the screen points from the event detail
  var screenPoints = event.detail.screenPoint;
  view.hitTest(screenPoints).then(getFeatures);

  // Get the features from the hitTest
  function getFeatures(response) {
    // Get the selected feature OID
    const selectedFeatureOID = response.results[0].graphic.attributes["ObjectId"];

    // Set the selection data on the scatterplot element
    scatterplotElement.selectionData = {
      selectionOIDs: [selectedFeatureOID]
    };
  }
});
