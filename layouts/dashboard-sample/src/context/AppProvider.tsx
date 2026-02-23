import { useEffect, useMemo, useState } from "react";
import { AppContext } from "./AppContext";
import { computeMetrics } from "../utils/Metrics";
import type { PlantTypeFilter, PowerPlant } from "../types";

interface LayerCollectionItem {
  type?: string;
  layers?: { items?: LayerCollectionItem[] };
  load?: () => Promise<void>;
  queryFeatures?: (query: { where: string; outFields: string[]; returnGeometry: boolean }) => Promise<{
    features: {
      attributes: {
        name?: string;
        fuel1?: string;
        capacity_mw?: number;
        estimated_generation_gwh?: number;
      };
    }[];
  }>;
}

function findFeatureLayer(layerCollection: LayerCollectionItem[]): LayerCollectionItem | null {
  for (const layer of layerCollection) {
    if (layer.type === "feature") {
      return layer;
    }

    if (layer.layers?.items?.length) {
      const found = findFeatureLayer(layer.layers.items);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [powerPlants, setPowerPlants] = useState<PowerPlant[]>([]);
  const [plantTypeFilter, setPlantTypeFilter] = useState<PlantTypeFilter>("all");
  const [layers, setLayers] = useState<LayerCollectionItem[]>([]);

  const filteredPlants = useMemo(() => {
    if (plantTypeFilter === "all") {
      return powerPlants;
    }
    return powerPlants.filter((plant) => plant.fuel === plantTypeFilter);
  }, [powerPlants, plantTypeFilter]);

  const metrics = useMemo(() => computeMetrics(filteredPlants), [filteredPlants]);

  const queryPowerPlants = async (featureLayer: LayerCollectionItem): Promise<PowerPlant[]> => {
    if (!featureLayer.load || !featureLayer.queryFeatures) {
      return [];
    }

    await featureLayer.load();
    const result = await featureLayer.queryFeatures({
      where: "1=1",
      outFields: ["name", "fuel1", "capacity_mw", "estimated_generation_gwh"],
      returnGeometry: false,
    });

    return result.features.map((feature) => ({
      name: feature.attributes.name || "Unknown",
      fuel: feature.attributes.fuel1?.toLowerCase().replace(/ /gu, "") || "other",
      capacity: Number(feature.attributes.capacity_mw || 0),
      generation: Number(feature.attributes.estimated_generation_gwh || 0),
    }));
  };

  useEffect(() => {
    if (!layers.length) {
      return;
    }

    const featureLayer = findFeatureLayer(layers);

    if (!featureLayer) {
      return;
    }

    queryPowerPlants(featureLayer).then(setPowerPlants);
  }, [layers]);

  return (
    <AppContext.Provider
      value={{
        setLayers: (nextLayers) => setLayers((nextLayers as LayerCollectionItem[]) || []),
        setPlantTypeFilter,
        plantTypeFilter,
        metrics,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
