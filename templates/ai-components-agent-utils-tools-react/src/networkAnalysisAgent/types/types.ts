import type SpatialReference from "@arcgis/core/geometry/SpatialReference.js";

export interface FacilityPoint {
  x: number;
  y: number;
}

export interface FindServiceAreasOptions {
  facilities: FacilityPoint[];
  driveTimeCutoffs: number[];
  travelModeName:
    | "Driving Distance"
    | "Driving Time"
    | "Trucking Distance"
    | "Trucking Time"
    | "Walking Distance"
    | "Walking Time";
  travelDirection: "from-facility" | "to-facility";
  outSpatialReference?: SpatialReference;
  serviceAreaUrl?: string;
}

/** Service area polygon geometry */
export interface ServiceAreaPolygonGeometry {
  rings: number[][][];
  spatialReference: { wkid: number };
}

/** Service area polygon result */
export interface ServiceAreaPolygon {
  geometry: ServiceAreaPolygonGeometry;
  attributes: {
    FromBreak: number;
    ToBreak: number;
    FacilityID?: number;
  };
}
