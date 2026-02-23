export interface PowerPlant {
  name: string;
  fuel: string;
  capacity: number;
  generation: number;
}

export interface DashboardMetrics {
  totalPlants: number;
  renewablePercent: number;
  nonRenewablePercent: number;
  topFuelType: string;
}

export type PlantTypeFilter = string | "all";

export interface AppContextValue {
  setLayers: (layers: unknown) => void;
  setPlantTypeFilter: (filter: PlantTypeFilter) => void;
  plantTypeFilter: PlantTypeFilter;
  metrics: DashboardMetrics;
}
