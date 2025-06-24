<script setup>
import { ref, onMounted } from "vue";

// Import createModel from the charts-components package
import { createModel } from "@arcgis/charts-components/model";

import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

// Read more about ref() at https://vuejs.org/api/reactivity-core.html#ref
const chartRef = ref(null);

// Registers a callback to be called after the component has been mounted
// See: https://vuejs.org/api/composition-api-lifecycle.html#onmounted
onMounted(async () => {
  if (chartRef.value) {
    const layer = new FeatureLayer({
      url: "https://services1.arcgis.com/hLJbHVT9ZrDIzK0I/arcgis/rest/services/CollegeScorecard_0/FeatureServer/0",
    });
    await layer.load();

    // Use createModel to create a scatterplot model
    const chartModel = await createModel({ layer, chartType: "scatterplot" });

    // Configure the chart model
    await chartModel.setXAxisField("SAT_Score_Average");
    await chartModel.setYAxisField("Earnings");
    chartModel.setShowLinearTrend(true);

    // Set the chart model to the chart element
    chartRef.value.model = chartModel;
  }
});
</script>

<template>
  <arcgis-chart ref="chartRef">
    <arcgis-charts-action-bar slot="action-bar"></arcgis-charts-action-bar>
  </arcgis-chart>
</template>
