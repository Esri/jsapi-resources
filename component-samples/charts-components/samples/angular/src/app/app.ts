import type { OnInit, ElementRef } from "@angular/core";
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from "@angular/core";

// Individual imports for each component used in this sample
import "@arcgis/charts-components/components/arcgis-chart";
import "@arcgis/charts-components/components/arcgis-charts-action-bar";

// Import createModel from the charts-components package
import { createModel } from "@arcgis/charts-components/model";

import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App implements OnInit {
  title = "charts-components-angular-sample";

  @ViewChild("chart") chartElement!: ElementRef<HTMLArcgisChartElement>;

  ngOnInit() {
    this.initChart().catch(console.error);
  }

  async initChart() {
    // Create a new feature layer from service URL
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
    if (this.chartElement?.nativeElement) {
      this.chartElement.nativeElement.model = chartModel;
    }
  }
}
