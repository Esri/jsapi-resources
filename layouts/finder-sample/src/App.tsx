import { useRef, useState } from "react";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-shell-panel";
import "@esri/calcite-components/components/calcite-flow";
import "@esri/calcite-components/components/calcite-flow-item";
import "@esri/calcite-components/components/calcite-sheet";
import "@esri/calcite-components/components/calcite-tooltip";

import Header from "./components/Header";
import ResultsList from "./components/Results/ResultsList";
import ChipFilters from "./components/Results/ChipFilters";
import DrillView from "./components/Drill/DrillView";
import Map from "./components/Map";
import type { ClusterColorMap, FeatureEffect, VenueFeature } from "./types";

import "./App.css";

const PAGE_SIZE = 100;
const COLORS = [
  "#e6194b",
  "#3cb44b",
  "#4363d8",
  "#f58231",
  "#911eb4",
  "#14c9c9",
  "#f032e6",
  "#5e7618",
  "#fabebe",
  "#008080",
];

interface LayerQuery {
  start?: number;
  num?: number;
  orderByFields?: string[];
  outFields?: string[];
  returnGeometry?: boolean;
  where?: string;
}

interface LayerWithQuery {
  createQuery: () => LayerQuery;
  queryFeatures: (query: LayerQuery) => Promise<{ features: VenueFeature[] }>;
}

interface LayerViewWithLayer {
  layer?: LayerWithQuery;
  featureEffect?: FeatureEffect | null;
}

interface ViewLayer {
  title?: string;
  fullExtent?: unknown;
}

interface MapViewLike {
  map?: {
    allLayers?: ViewLayer[];
    initialViewProperties?: {
      viewpoint?: unknown;
    };
  };
  whenLayerView: (layer: ViewLayer) => Promise<LayerViewWithLayer>;
  goTo: (target: unknown) => Promise<void> | void;
}

export default function App({ itemId = "4c6e7383e9174110b35fcbcdaaf2f744" }: { itemId?: string }) {
  const [results, setResults] = useState<VenueFeature[]>([]);
  const [activeItem, setActiveItem] = useState<VenueFeature | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedClusters, setSelectedClusters] = useState<string[]>([]);

  const lastFeatureEffectRef = useRef<FeatureEffect | null>(null);

  const mapViewRef = useRef<MapViewLike | null>(null);
  const layerViewRef = useRef<LayerViewWithLayer | null>(null);

  const clusters = [...new Set(results.map((result) => result.attributes?.Cluster).filter(Boolean) as string[])].sort(
    (a, b) => a.localeCompare(b),
  );

  const colorMap = clusters.reduce<ClusterColorMap>((map, cluster, i) => {
    map[cluster] = COLORS[i % COLORS.length];
    return map;
  }, {});

  async function queryItems(layerView: LayerViewWithLayer, start = 0) {
    if (!layerView?.layer) {
      return;
    }

    const query = layerView.layer.createQuery();
    query.start = start;
    query.num = PAGE_SIZE;
    query.orderByFields = ["OBJECTID ASC"];
    query.outFields = ["*"];
    query.returnGeometry = true;
    query.where = "1=1";

    try {
      const featureSet = await layerView.layer.queryFeatures(query);
      setResults(featureSet.features);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  function handleResultClick(feature: VenueFeature) {
    setActiveItem(feature);
    setHasChanges(true);
  }

  function handleChange() {
    setHasChanges(true);
  }

  function handleFlowBack() {
    setActiveItem(null);

    if (mapViewRef.current) {
      const view = mapViewRef.current;
      const layer = view.map?.allLayers?.find((item) => item.title === "LA 2028 Venues");

      if (layer) {
        view.whenLayerView(layer).then((layerView) => {
          layerView.featureEffect = lastFeatureEffectRef.current || null;
        });
      }

      if (view.map?.initialViewProperties?.viewpoint) {
        view.goTo(view.map.initialViewProperties.viewpoint);
      } else {
        view.goTo({ target: layer?.fullExtent, zoom: 10 });
      }
    }
  }

  return (
    <calcite-shell id="root-shell">
      <Header hasChanges={hasChanges} />

      <calcite-shell id="example-shell">
        <calcite-shell-panel slot="panel-start" id="primary-panel">
          <calcite-flow>
            <calcite-flow-item
              icon="map-pin"
              heading="Venues"
              id="resultBlock"
              loading={isLoading}
              selected={!activeItem}
            >
              <ChipFilters
                clusters={clusters}
                colorMap={colorMap}
                selectedClusters={selectedClusters}
                onSelectedClustersChange={setSelectedClusters}
                onChange={handleChange}
                mapViewRef={mapViewRef}
                onSaveFeatureEffect={(effect) => {
                  lastFeatureEffectRef.current = effect;
                }}
              />
              <ResultsList
                results={results}
                clusters={clusters}
                colorMap={colorMap}
                selectedClusters={selectedClusters}
                onSelect={handleResultClick}
                mapViewRef={mapViewRef}
                onSaveFeatureEffect={(effect) => {
                  lastFeatureEffectRef.current = effect;
                }}
              />
            </calcite-flow-item>

            {activeItem && (
              <DrillView
                graphic={activeItem}
                onClose={handleFlowBack}
                clusterColor={colorMap[activeItem.attributes?.Cluster || ""]}
              />
            )}
          </calcite-flow>
        </calcite-shell-panel>

        <div id="viewDiv">
          <Map itemId={itemId} mapViewRef={mapViewRef} layerViewRef={layerViewRef} queryItems={queryItems} />
        </div>

        <calcite-sheet slot="sheets" label="Results Sheet" id="results-sheet" />
      </calcite-shell>
    </calcite-shell>
  );
}
