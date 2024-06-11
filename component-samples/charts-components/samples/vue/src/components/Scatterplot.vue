<script setup>
import { ref, onMounted } from 'vue';
import { createFeatureLayer } from '../utils/create-feature-layer';
import { ScatterPlotModel } from '@arcgis/charts-model';

// Read more about ref() at https://vuejs.org/api/reactivity-core.html#ref
const scatterplotRef = ref(null);

// Registers a callback to be called after the component has been mounted
// See: https://vuejs.org/api/composition-api-lifecycle.html#onmounted
onMounted(async () => {
  if (scatterplotRef.value) {
    const layer = await createFeatureLayer('https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/ChicagoCr/FeatureServer/0');

    // Create a new ScatterPlotModel and set the x and y axis fields.
    const scatterplotModel = new ScatterPlotModel();
    await scatterplotModel.setup({ layer });

    await scatterplotModel.setXAxisField('Ward');
    await scatterplotModel.setYAxisField('Beat');

    // Set the scatterplot element's config and layer properties.
    const config = scatterplotModel.getConfig();

    scatterplotRef.value.config = config;
    scatterplotRef.value.layer = layer;
  }
});
</script>

<template>
  <arcgis-charts-scatter-plot ref="scatterplotRef" class="chart-container"></arcgis-charts-scatter-plot>
</template>
