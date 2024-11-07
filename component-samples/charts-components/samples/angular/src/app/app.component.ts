import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { createFeatureLayer } from "../functions/create-feature-layer.service";
import { addSelectionEventListener } from '../functions/add-selection-event-listener.service';
import { ScatterPlotModel } from "@arcgis/charts-model";

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = "charts-components-angular-sample";

  @ViewChild("scatterplot") scatterplot!: ElementRef<HTMLArcgisChartsScatterPlotElement>;

  async ngOnInit(): Promise<void> {
    // define custom elements in the browser, and load the assets from the CDN for calcite and charts components
    defineChartsElements(window, {
      resourcesUrl: "https://js.arcgis.com/charts-components/4.31/assets"
    });
    defineCalciteElements(window, {
      resourcesUrl: "https://js.arcgis.com/calcite-components/2.13.2/assets"
    }); 

    await customElements.whenDefined('arcgis-charts-scatter-plot');

    this.initScatterplot(this.scatterplot);
  }

  /**
   * Function to initialize the scatterplot.
   */
  async initScatterplot(scatterplot: ElementRef<HTMLArcgisChartsScatterPlotElement>) {
    const layer = await createFeatureLayer(
      "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/ChicagoCr/FeatureServer/0"
    );

    // Create a new ScatterPlotModel and set the x and y axis fields.
    const scatterplotModel = new ScatterPlotModel();
    await scatterplotModel.setup({ layer });

    await scatterplotModel.setXAxisField("Ward");
    await scatterplotModel.setYAxisField("Beat");

    // Set the scatterplot element's config and layer properties.
    const config = scatterplotModel.getConfig();

    scatterplot.nativeElement.config = config;
    scatterplot.nativeElement.layer = layer;

    // Add an event listener for when selections are made on the chart, the filter by selection button will be enabled
	  addSelectionEventListener(scatterplot.nativeElement, "scatterplot-action-bar");
  }
}
