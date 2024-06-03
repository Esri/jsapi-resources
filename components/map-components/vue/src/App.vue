<script setup>
import Map from "@/components/Map.vue";
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets" });
</script>

<template>
  <Map />
</template>