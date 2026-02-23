import "@esri/calcite-components/components/calcite-list";
import "@esri/calcite-components/components/calcite-list-item";
import "@esri/calcite-components/components/calcite-chip";
import "@esri/calcite-components/components/calcite-segmented-control";
import "@esri/calcite-components/components/calcite-segmented-control-item";
import "@esri/calcite-components/components/calcite-tooltip";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ClusterColorMap, FeatureEffect, VenueFeature } from "../../types";

interface ViewLayer {
  title?: string;
  renderer?: unknown;
}

interface LayerViewLike {
  featureEffect?: FeatureEffect | null;
  highlight: (feature: VenueFeature) => { remove: () => void };
}

interface MapViewLike {
  map?: {
    allLayers?: ViewLayer[];
  };
  whenLayerView: (layer: ViewLayer) => Promise<LayerViewLike>;
  goTo: (target: unknown) => Promise<void> | void;
}

interface ResultsListProps {
  results: VenueFeature[];
  clusters: string[];
  colorMap: ClusterColorMap;
  selectedClusters: string[];
  onSelect: (item: VenueFeature) => void;
  mapViewRef: React.MutableRefObject<MapViewLike | null>;
  onSaveFeatureEffect?: (effect: FeatureEffect | null) => void;
}

interface ListFilterEventTarget {
  filteredItems?: unknown[];
}

interface SortEventTarget {
  selectedItem?: {
    value?: string;
  };
}

export default function ResultsList({
  results,
  clusters,
  colorMap,
  selectedClusters,
  onSelect,
  mapViewRef,
  onSaveFeatureEffect,
}: ResultsListProps) {
  const highlightRef = useRef<{ remove: () => void } | null>(null);
  const layerViewRef = useRef<LayerViewLike | null>(null);
  const [visibleCount, setVisibleCount] = useState<number | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sortedResults = useMemo(
    () =>
      [...results].sort((a, b) => {
        const venueA = (a.attributes?.Venue || "").toLowerCase();
        const venueB = (b.attributes?.Venue || "").toLowerCase();
        return sortDirection === "asc" ? venueA.localeCompare(venueB) : venueB.localeCompare(venueA);
      }),
    [results, sortDirection],
  );

  const filteredResults = useMemo(() => {
    if (selectedClusters.length === 0) {
      return sortedResults;
    }
    return sortedResults.filter((result) => {
      const cluster = result.attributes?.Cluster;
      return typeof cluster === "string" ? selectedClusters.includes(cluster) : false;
    });
  }, [selectedClusters, sortedResults]);

  useEffect(() => {
    if (mapViewRef?.current) {
      const view = mapViewRef.current;
      const layer = view.map?.allLayers?.find((item) => item.title === "LA 2028 Venues");
      if (layer) {
        view.whenLayerView(layer).then((layerView) => {
          layerViewRef.current = layerView;
        });

        const uniqueValueInfos = clusters.map((cluster) => ({
          value: cluster,
          symbol: {
            type: "simple-marker",
            color: colorMap[cluster],
            size: 10,
            outline: { color: "white", width: 1 },
          },
        }));

        layer.renderer = {
          type: "unique-value",
          field: "Cluster",
          uniqueValueInfos,
          defaultSymbol: {
            type: "simple-marker",
            color: "#888888",
            size: 8,
            outline: { color: "white", width: 1 },
          },
        };
      }
    }
  }, [clusters, colorMap, mapViewRef]);

  function handleListFilter(event: Event) {
    const target = event.target as ListFilterEventTarget;
    const filteredCount = target.filteredItems?.length ?? filteredResults.length;
    setVisibleCount(filteredCount);
  }

  function handleSortChange(event: Event) {
    const target = event.target as SortEventTarget;
    const direction = target.selectedItem?.value === "desc" ? "desc" : "asc";
    setSortDirection(direction);
  }

  async function handleItemClick(item: VenueFeature) {
    if (!item) {
      return;
    }

    if (highlightRef.current) {
      highlightRef.current.remove();
      highlightRef.current = null;
    }

    if (mapViewRef.current && item.geometry) {
      mapViewRef.current.goTo({ target: item.geometry, zoom: 17 });

      if (layerViewRef.current) {
        if (onSaveFeatureEffect) {
          onSaveFeatureEffect(layerViewRef.current.featureEffect || null);
        }
        const objectId = item.attributes?.OBJECTID;
        if (objectId) {
          layerViewRef.current.featureEffect = {
            filter: { where: `OBJECTID = ${objectId}` },
            excludedEffect: "opacity(0.3) grayscale(100%)",
            includedEffect: "bloom(1.5, 0.5px, 0.2)",
          };
          highlightRef.current = layerViewRef.current.highlight(item);
        }
      }
    }

    onSelect(item);
  }

  return (
    <calcite-list
      filter-enabled
      filter-placeholder={`Filter ${visibleCount ?? filteredResults.length} results...`}
      oncalciteListFilter={handleListFilter}
    >
      <calcite-segmented-control
        slot="filter-actions-end"
        oncalciteSegmentedControlChange={handleSortChange}
        style={{ marginInlineEnd: "0.75rem" }}
      >
        <calcite-segmented-control-item id="sort-asc" value="asc" checked icon-start="sort-ascending-arrow" />
        <calcite-segmented-control-item id="sort-desc" value="desc" icon-start="sort-descending-arrow" />
      </calcite-segmented-control>
      <calcite-tooltip reference-element="sort-asc">Alphabetical ascending</calcite-tooltip>
      <calcite-tooltip reference-element="sort-desc">Alphabetical descending</calcite-tooltip>
      {filteredResults.map((result) => (
        <calcite-list-item
          filter-enabled
          key={result.attributes?.OBJECTID || result.id}
          label={result.attributes?.Venue || "No venue info"}
          class="result-panel"
          metadata={result.attributes?.Cluster}
          description={
            result.attributes?.Cluster && result.attributes?.Sports
              ? String(result.attributes?.Sports)
              : "No additional info"
          }
          oncalciteListItemSelect={async () => await handleItemClick(result)}
        >
          <calcite-chip slot="content-end" scale="s">
            <span
              slot="image"
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: colorMap[String(result.attributes?.Cluster || "")],
                display: "inline-block",
              }}
            />
            {result.attributes?.Cluster}
          </calcite-chip>
        </calcite-list-item>
      ))}
    </calcite-list>
  );
}
