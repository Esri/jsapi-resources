export interface VenueAttributes {
  OBJECTID?: number;
  Venue?: string;
  Cluster?: string;
  Sports?: string;
  Latitude?: number | string;
  Longitude?: number | string;
  Status?: string;
  [key: string]: unknown;
}

export interface VenueFeature {
  id?: number | string;
  attributes?: VenueAttributes;
  geometry?: unknown;
}

export interface FeatureEffect {
  filter?: {
    where?: string;
  };
  excludedEffect?: string;
  includedEffect?: string;
}

export type ClusterColorMap = Record<string, string>;
