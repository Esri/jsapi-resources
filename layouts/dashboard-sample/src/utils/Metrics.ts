/* Computes dashboard-level power plant metrics from normalized fuel categories.
   It returns totals, renewable/non-renewable percentages, and the most common fuel type. */

import type { DashboardMetrics, PowerPlant } from "../types";

export const renewableFuels = [
  "hydro",
  "solar",
  "wind",
  "biomass",
  "geothermal",
  "wave",
  "tidal",
  "cogeneration",
  "storage",
];

export const nonRenewableFuels = ["coal", "oil", "gas", "nuclear", "petcoke", "other", "waste"];

export function computeMetrics(plants: PowerPlant[]): DashboardMetrics {
  const totalPlants = plants.length;

  const normalizeFuel = (fuel: string | undefined) => (fuel || "other").toLowerCase();

  const renewablePlants = plants.filter((plant) => renewableFuels.includes(normalizeFuel(plant.fuel)));

  const nonRenewablePlants = plants.filter((plant) => nonRenewableFuels.includes(normalizeFuel(plant.fuel)));

  const renewablePercent = totalPlants ? Math.round((renewablePlants.length / totalPlants) * 100) : 0;

  const nonRenewablePercent = totalPlants ? Math.round((nonRenewablePlants.length / totalPlants) * 100) : 0;

  const fuelCounts = plants.reduce<Record<string, number>>((accumulator, plant) => {
    const fuel = normalizeFuel(plant.fuel);
    accumulator[fuel] = (accumulator[fuel] || 0) + 1;
    return accumulator;
  }, {});

  const topFuelType =
    Object.entries(fuelCounts).reduce<[string, number]>(
      (top, current) => (current[1] > (top[1] || 0) ? [current[0], current[1]] : top),
      ["None", 0],
    )[0] || "None";

  return {
    totalPlants,
    renewablePercent,
    nonRenewablePercent,
    topFuelType,
  };
}
