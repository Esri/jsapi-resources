import "@esri/calcite-components/components/calcite-chip-group";
import "@esri/calcite-components/components/calcite-chip";

import { useEffect, useRef } from "react";
import type { ClusterColorMap, FeatureEffect } from "../../types";

interface ViewLayer {
  title?: string;
}

interface LayerViewWithFeatureEffect {
  featureEffect?: FeatureEffect | null;
}

interface MapViewLike {
  map?: {
    allLayers?: ViewLayer[];
  };
  whenLayerView: (layer: ViewLayer) => Promise<LayerViewWithFeatureEffect>;
}

interface ChipFiltersProps {
  clusters: string[];
  colorMap: ClusterColorMap;
  selectedClusters: string[];
  onSelectedClustersChange: (selected: string[]) => void;
  onChange?: () => void;
  mapViewRef: React.MutableRefObject<MapViewLike | null>;
  onSaveFeatureEffect?: (effect: FeatureEffect | null) => void;
}

interface ChipGroupSelectEventTarget {
  selectedItems?: { value?: string }[];
}

export default function ChipFilters({
  clusters,
  colorMap,
  selectedClusters,
  onSelectedClustersChange,
  onChange,
  mapViewRef,
  onSaveFeatureEffect,
}: ChipFiltersProps) {
  const layerViewRef = useRef<LayerViewWithFeatureEffect | null>(null);

  useEffect(() => {
    if (!mapViewRef?.current) {
      return;
    }
    const view = mapViewRef.current;
    const layer = view.map?.allLayers?.find((item) => item.title === "LA 2028 Venues");
    if (layer) {
      view.whenLayerView(layer).then((layerView) => {
        layerViewRef.current = layerView;
      });
    }
  }, [mapViewRef]);

  function applyFilter(selected: string[]) {
    if (!mapViewRef?.current) {
      return;
    }

    const view = mapViewRef.current;
    const layer = view.map?.allLayers?.find((item) => item.title === "LA 2028 Venues");
    if (!layer) {
      return;
    }

    const applyToLayerView = (layerView: LayerViewWithFeatureEffect) => {
      layerViewRef.current = layerView;
      if (selected.length > 0) {
        layerView.featureEffect = {
          filter: {
            where: `Cluster IN ('${selected.join("','")}')`,
          },
          excludedEffect: "opacity(0.3) grayscale(100%)",
        };
        if (onSaveFeatureEffect) {
          onSaveFeatureEffect(layerView.featureEffect);
        }
      } else {
        layerView.featureEffect = null;
        if (onSaveFeatureEffect) {
          onSaveFeatureEffect(null);
        }
      }
    };

    if (layerViewRef.current) {
      applyToLayerView(layerViewRef.current);
    } else {
      view.whenLayerView(layer).then(applyToLayerView);
    }
  }

  function handleChipSelect(event: Event) {
    const target = event.target as ChipGroupSelectEventTarget;
    const selectedItems = target.selectedItems || [];
    const selected = selectedItems.map((chip) => chip.value || "").filter(Boolean);
    onSelectedClustersChange(selected);

    if (selected.length > 0 && onChange) {
      onChange();
    }

    applyFilter(selected);
  }

  useEffect(() => {
    applyFilter(selectedClusters || []);
  }, [selectedClusters]);

  return (
    <calcite-chip-group
      slot="content-top"
      label="Clusters"
      scale="s"
      selection-mode="multiple"
      oncalciteChipGroupSelect={handleChipSelect}
    >
      {clusters.map((cluster) => (
        <calcite-chip
          key={cluster}
          value={cluster}
          scale="s"
          appearance="outline-fill"
          style={{ "--calcite-chip-select-icon-color": colorMap[cluster] }}
        >
          <span
            slot="image"
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: colorMap[cluster],
              display: "inline-block",
            }}
          />
          {cluster}
        </calcite-chip>
      ))}
    </calcite-chip-group>
  );
}
