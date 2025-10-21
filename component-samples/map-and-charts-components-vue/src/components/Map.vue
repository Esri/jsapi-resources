<script setup>
import Graphic from "@arcgis/core/Graphic.js";

const handleViewReady = (event) => {
  const viewElement = event.target;

  // Create a point geometry
  const point = {
    type: "point",
    longitude: -118.38,
    latitude: 33.34,
  };

  // Create a symbol for the point
  const markerSymbol = {
    type: "simple-marker",
    style: "triangle",
    size: 15,
    color: "red",
    outline: {
      color: "white",
      width: 2,
    },
  };

  // Create and add the graphic
  const pointGraphic = new Graphic({
    geometry: point,
    symbol: markerSymbol,
  });

  viewElement.graphics.add(pointGraphic);
};
</script>

<template>
  <arcgis-map item-id="02b37471d5d84cacbebcccd785460e94" @arcgisViewReadyChange="handleViewReady">
    <arcgis-chart layer-item-id="a1dcdab248cc4618b6426fd5b16106c0" chart-index="0" slot="bottom-right"></arcgis-chart>
    <arcgis-zoom slot="top-left"></arcgis-zoom>
    <arcgis-search slot="top-right"></arcgis-search>
    <arcgis-legend slot="bottom-left"></arcgis-legend>
  </arcgis-map>
</template>
