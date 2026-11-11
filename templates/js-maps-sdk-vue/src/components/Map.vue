<script setup>
import { ref } from "vue";

// Individual imports for each Map, Chart and Calcite component
import "@arcgis/map-components/components/arcgis-expand";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-search";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/charts-components/components/arcgis-chart";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";

// Import modules and types from the SDK's core API
import summaryStatistics from "@arcgis/core/smartMapping/statistics/summaryStatistics.js";
import ExpressionContent from "@arcgis/core/popup/content/ExpressionContent.js";

// Optional: If you're loading secure web maps
// import { configureOAuth } from "../auth/configureOAuth.js";
// configureOAuth({
//   // Default portalUrl is ArcGIS Online
//   // Only set if using other portals
//   portalUrl: "YOUR_PORTAL_URL",
//   appId: "YOUR_APP_ID",
// });

const navHeading = ref("");
const navDescription = ref("");

const handleViewReady = async (event) => {
  const viewElement = event.target;

  // Use metadata from the Web Map to populate the header
  const portalItem = viewElement.map.portalItem;
  const title = portalItem.title ? portalItem.title : "A web map";
  const description = portalItem.description ? portalItem.description : "ArcGIS Maps SDK for JavaScript template";

  navHeading.value = title;
  navDescription.value = description;

  // Configure the layers shown in the map
  const wheatLayerGroup = viewElement.map.allLayers.find((layer) => layer.title === "Types of wheat over time");
  wheatLayerGroup.visible = false;

  const productionLayer = viewElement.map.allLayers.find(
    (layer) => layer.title === "Harvested wheat - 2022 (Spike map)",
  );
  productionLayer.visible = true;

  // Calculate the layer average and use an Arcade expression to compare each feature to it in the popup.
  const { avg } = await summaryStatistics({ layer: productionLayer, field: "Wheat_prod_2022" });
  const popupContent = productionLayer.popupTemplate.content;
  if (Array.isArray(popupContent)) {
    popupContent.unshift(
      new ExpressionContent({
        expressionInfo: {
          expression: `
            var production = $feature.Wheat_prod_2022;
            var ratio = production / ${avg};
            return {
              type: "text",
              text: When(
                IsEmpty(production), "No 2022 wheat production was reported for this county.",
                "In 2022, this county produced <strong>about " +
                  Text(ratio, IIf(ratio < 0.1, "#0.0####", "#0.0#")) +
                  " times as much</strong> wheat as the average U.S. county."
              )
            };
          `,
        },
      }),
    );
  }
};
</script>

<template>
  <!-- The Shell component is used as a layout for this template -->
  <calcite-shell content-behind>
    <calcite-navigation slot="header">
      <!-- Heading and description dynamically populated -->
      <calcite-navigation-logo
        :heading="navHeading"
        :description="navDescription"
        heading-level="1"
        slot="logo"
      ></calcite-navigation-logo>
    </calcite-navigation>

    <!-- The Map component fits to the size of the parent element -->
    <!-- The basemap, extent, zoom and more are provided by the Web Map (item-id) -->
    <!-- Note: popup-component-enabled enables the Popup component (beta). See https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-map/#popupComponentEnabled for details. -->
    <arcgis-map
      ref="mapElement"
      item-id="dd4b2f25487d4a37a45093ba6acd026d"
      popup-component-enabled
      @arcgisViewReadyChange="handleViewReady"
    >
      <arcgis-zoom slot="top-left"></arcgis-zoom>
      <arcgis-search slot="top-right"></arcgis-search>
      <arcgis-expand slot="bottom-left">
        <arcgis-legend></arcgis-legend>
      </arcgis-expand>
      <!-- A Feature Layer in the Web Map has an associated chart (layer-item-id) -->
      <arcgis-chart layer-item-id="b1717962dab247ad93eaca257b32fe02" chart-index="0" slot="bottom-right"></arcgis-chart>
    </arcgis-map>
  </calcite-shell>
</template>
