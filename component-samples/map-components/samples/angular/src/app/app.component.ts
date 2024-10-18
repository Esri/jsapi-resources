import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-zoom";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@arcgis/map-components/dist/components/arcgis-legend";
import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = "map-components-angular-sample";

  constructor() {
    setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.8.6/assets");
  }

  arcgisViewReadyChange(event: any) {
    console.log("MapView ready", event);
  }

  ngOnInit() {
    console.log("OnInit");
  }
}
