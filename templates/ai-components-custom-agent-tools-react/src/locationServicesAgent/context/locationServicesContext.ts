import type MapView from "@arcgis/core/views/MapView";

/**
 * Context required by the Location Services agent.
 * Supplied by the application via an agent `getContext()` provider.
 */
export type LocationServicesContext = {
  mapView: MapView;
};

export const locationServicesContextRequiredKeys = ["mapView"] as const;
