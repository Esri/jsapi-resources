import type { OnInit } from "@angular/core";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-search";
import "@arcgis/map-components/components/arcgis-legend";

import Graphic from "@arcgis/core/Graphic.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import Point from "@arcgis/core/geometry/Point.js";
import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App implements OnInit {
  title = "map-components-angular-sample";
  ngOnInit(): void {
    console.log("OnInit");
  }

  arcgisViewReadyChange(event: CustomEvent): void {
    const viewElement = event.target as ArcgisMap;

    const point = new Point({
      longitude: -118.38,
      latitude: 33.34,
    });

    // Create a symbol for drawing the point
    const markerSymbol = new SimpleMarkerSymbol({
      style: "triangle",
      size: 20,
      color: "red",
      outline: {
        color: "white",
        width: 2,
      },
    });

    // Create a graphic and add the geometry and symbol to it
    const pointGraphic = new Graphic({
      geometry: point,
      symbol: markerSymbol,
    });

    viewElement.graphics.add(pointGraphic);
  }
}
