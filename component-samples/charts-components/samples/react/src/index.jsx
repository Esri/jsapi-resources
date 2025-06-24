import { StrictMode, useEffect, useRef, useCallback } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Individual imports for each component used in this sample
import "@arcgis/charts-components/components/arcgis-chart";
import "@arcgis/charts-components/components/arcgis-charts-action-bar";

// Import createModel from the charts-components package
import { createModel } from "@arcgis/charts-components/model";

import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

function App() {
  const chartRef = useRef(null);

  const initChart = useCallback(async () => {
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

    if (chartRef.current) {
      chartRef.current.model = chartModel;
    }
  }, []);

  // Call initChart() function to render the chart
  useEffect(() => {
    initChart().catch(console.error);
  }, [initChart]);

  return (
    <arcgis-chart ref={chartRef}>
      <arcgis-charts-action-bar slot="action-bar"></arcgis-charts-action-bar>
    </arcgis-chart>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
