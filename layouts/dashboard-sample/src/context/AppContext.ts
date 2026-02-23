import { createContext } from "react";
import type { AppContextValue } from "../types";

const defaultContext: AppContextValue = {
  setLayers: () => undefined,
  setPlantTypeFilter: () => undefined,
  plantTypeFilter: "all",
  metrics: {
    totalPlants: 0,
    renewablePercent: 0,
    nonRenewablePercent: 0,
    topFuelType: "None",
  },
};

export const AppContext = createContext<AppContextValue>(defaultContext);
