// This file defines the tool for finding service areas (drive time polygons) using ArcGIS services.

import * as serviceArea from "@arcgis/core/rest/serviceArea.js";
import ServiceAreaParameters from "@arcgis/core/rest/support/ServiceAreaParameters.js";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet.js";
import Graphic from "@arcgis/core/Graphic.js";
import Point from "@arcgis/core/geometry/Point.js";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import type { FindServiceAreasOptions } from "../../types/types";
import type MapView from "@arcgis/core/views/MapView";
import GroupLayer from "@arcgis/core/layers/GroupLayer.js";
import MapNotesLayer from "@arcgis/core/layers/MapNotesLayer.js";
import Portal from "@arcgis/core/portal/Portal.js";

/**
 * Finds service areas (drive time polygons) using the ArcGIS SDK
 * and adds the resulting graphics to the map.
 */
export const findServiceAreas = async (options: FindServiceAreasOptions, mapView: MapView): Promise<string> => {
  const { facilities, driveTimeCutoffs, travelMode, travelDirection } = options;

  const portal = Portal.getDefault();
  const helperServices = portal.helperServices as {
    serviceArea: { url: string };
  };
  const serviceAreaUrl = helperServices.serviceArea.url;

  if (!serviceAreaUrl) {
    throw new Error("Service Area service not found in helperServices.");
  }

  const serviceAreasLayer = mapView
    .map!.layers.flatten((layer) => {
      if (layer.type === "group") {
        return (layer as GroupLayer).layers;
      }
      return [];
    })
    .find((layer) => layer.title === "Service Area") as MapNotesLayer;

  serviceAreasLayer.polygonLayer?.removeAll();
  mapView.graphics.removeAll();

  // Create graphics for each facility location
  const facilityGraphics = facilities.map(
    (facility) =>
      new Graphic({
        geometry: new Point({
          x: facility.x,
          y: facility.y,
          spatialReference: { wkid: 4326 },
        }),
        symbol: new SimpleMarkerSymbol({
          color: "white",
          size: 8,
        }),
      }),
  );

  // Create the FeatureSet with facility graphics
  const featureSet = new FeatureSet({
    features: facilityGraphics,
  });

  // Set up ServiceAreaParameters
  const serviceAreaParams = new ServiceAreaParameters({
    facilities: featureSet,
    defaultBreaks: driveTimeCutoffs,
    trimOuterPolygon: true,
    outSpatialReference: mapView.spatialReference,
    travelDirection: travelDirection === "to-facility" ? "to-facility" : "from-facility",
  });

  // Solve the service area
  return await serviceArea.solve(serviceAreaUrl, serviceAreaParams, {}).then(
    async (result) => {
      let polygonCount = 0;

      if (result.serviceAreaPolygons?.features?.length) {
        // Draw each service area polygon
        result.serviceAreaPolygons.features.forEach((graphic) => {
          graphic.symbol = new SimpleFillSymbol({
            color: "black",
            outline: null,
          });
          serviceAreasLayer.polygonLayer?.graphics.add(graphic);
          polygonCount++;
        });
        serviceAreasLayer.visible = true;
      }

      // Add facility point graphics on top
      facilityGraphics.forEach((graphic) => {
        mapView.graphics.add(graphic);
      });

      const directionLabel = travelDirection === "to-facility" ? "to" : "from";
      const travelModeLabel =
        travelMode === "walk"
          ? "walking"
          : travelMode === "truck"
            ? "truck driving"
            : travelMode === "automobile"
              ? "driving"
              : travelMode;

      // Zoom to the service area extent (last polygon is largest for multiple cutoffs)
      if (result.serviceAreaPolygons?.features?.length) {
        const lastPolygon = result.serviceAreaPolygons.features[polygonCount - 1];
        if (lastPolygon?.geometry) {
          if (lastPolygon.geometry?.extent) {
            await mapView.goTo(lastPolygon.geometry.extent.expand(1.2));
          }
        }
      }

      return `Generated ${polygonCount} service area polygon(s) for ${facilities.length} facility(ies) with ${driveTimeCutoffs.join(", ")} minute ${travelModeLabel} time cutoffs ${directionLabel} facilities.`;
    },
    (error) => {
      console.error("Service area solve error:", error);
      throw error;
    },
  );
};
