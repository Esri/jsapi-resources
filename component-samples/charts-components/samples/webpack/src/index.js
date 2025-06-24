// Individual imports for each component used in this sample
import "@arcgis/charts-components/components/arcgis-chart";
import "@arcgis/charts-components/components/arcgis-charts-action-bar";

// Import createModel from the charts-components package
import { createModel } from "@arcgis/charts-components/model";

import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

async function initChart() {
  // Create a new feature layer from service URL
  const layer = new FeatureLayer({
    url: "https://services1.arcgis.com/hLJbHVT9ZrDIzK0I/arcgis/rest/services/CollegeScorecard_0/FeatureServer/0",
  });
  await layer.load();

  // Use querySelector to get the <arcgis-chart> element
  const chartElement = document.querySelector("arcgis-chart");

  // Use createModel to create a scatterplot model
  const chartModel = await createModel({ layer, chartType: "scatterplot" });

  // Configure the chart model
  await chartModel.setXAxisField("SAT_Score_Average");
  await chartModel.setYAxisField("Earnings");
  chartModel.setShowLinearTrend(true);

  // Set the chart model to the chart element
  chartElement.model = chartModel;
}

// Call initChart() function to render the chart
initChart();
