import type { OnInit, ElementRef } from "@angular/core";
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from "@angular/core";

import { createFeatureLayer } from "../functions/create-feature-layer.service";
import { ScatterPlotModel } from "@arcgis/charts-model";

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";

defineCalciteElements();
defineChartsElements(window, { resourcesUrl: "https://js.arcgis.com/charts-components/4.32/assets" });

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = "charts-components-angular-sample";

  @ViewChild("scatterplot") scatterplot!: ElementRef<HTMLArcgisChartElement>;

  ngOnInit(): void {
    this.initScatterplot().catch((error) => {
      console.error("Error initializing scatterplot:", error);
    });
  }
  /**
   * Function to use the scatterplot charts model to configure the chart.
   */
  async initScatterplot(): Promise<void> {
    const layer = await createFeatureLayer(
      "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/ChicagoCr/FeatureServer/0",
    );

    // Create a new ScatterPlotModel and set the x and y axis fields.
    const scatterplotModel = new ScatterPlotModel();
    await scatterplotModel.setup({ layer });

    await scatterplotModel.setXAxisField("Ward");
    await scatterplotModel.setYAxisField("Beat");

    // Set the scatterplot element's layer and model properties.
    const config = scatterplotModel.getConfig();

    this.scatterplot.nativeElement.layer = layer;
    this.scatterplot.nativeElement.model = config;
  }
}
