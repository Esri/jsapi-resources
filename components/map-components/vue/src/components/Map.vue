<script setup>
function onReady(event) {
  console.log("MapView ready", event);
}
</script>

<template>
  <arcgis-map item-id="d5dda743788a4b0688fe48f43ae7beb9" @arcgisViewReadyChange="onReady">
    <arcgis-search position="top-right" />
    <arcgis-legend position="bottom-left" />
  </arcgis-map>
</template>