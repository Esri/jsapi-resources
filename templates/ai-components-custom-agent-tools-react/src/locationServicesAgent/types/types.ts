import type SpatialReference from "@arcgis/core/geometry/SpatialReference.js";

export interface FacilityPoint {
  x: number;
  y: number;
}

export interface FindServiceAreasOptions {
  facilities: FacilityPoint[];
  driveTimeCutoffs: number[];
  travelMode: "automobile" | "other" | "truck" | "walk";
  travelDirection: "from-facility" | "to-facility";
  outSpatialReference?: SpatialReference;
  serviceAreaUrl?: string;
}
