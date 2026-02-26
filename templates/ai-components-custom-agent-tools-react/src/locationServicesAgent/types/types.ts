import type SpatialReference from "@arcgis/core/geometry/SpatialReference";

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
