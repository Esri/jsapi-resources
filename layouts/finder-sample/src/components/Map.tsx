import { useEffect, useRef } from "react";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-expand";
import type { FeatureEffect, VenueFeature } from "../types";

interface ViewLayer {
  title?: string;
  layers?: ViewLayer[];
}

interface LayerViewWithLayer {
  featureEffect?: FeatureEffect | null;
}

interface MapViewLike {
  map?: {
    layers?: ViewLayer[];
  };
  when: () => Promise<void>;
  whenLayerView: (layer: ViewLayer) => Promise<LayerViewWithLayer>;
}

interface ArcgisMapElement extends HTMLElement {
  componentOnReady: () => Promise<void>;
  view?: MapViewLike;
}

interface MapProps {
  itemId: string;
  mapViewRef: React.MutableRefObject<MapViewLike | null>;
  layerViewRef: React.MutableRefObject<LayerViewWithLayer | null>;
  queryItems: (layerView: LayerViewWithLayer, start?: number) => Promise<void>;
}

function findLayerByTitle(layers: ViewLayer[] = [], title: string): ViewLayer | null {
  for (const layer of layers) {
    if (layer.title === title) {
      return layer;
    }
    if (layer.layers?.length) {
      const found = findLayerByTitle(layer.layers, title);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

export default function Map({ itemId, mapViewRef, layerViewRef, queryItems }: MapProps) {
  const mapRef = useRef<ArcgisMapElement | null>(null);

  useEffect(() => {
    const element = mapRef.current;
    if (!element) {
      return;
    }

    const setupMap = async () => {
      await element.componentOnReady();
      const view = element.view;
      if (!view) {
        return;
      }

      await view.when();
      mapViewRef.current = view;

      const layer = findLayerByTitle(view.map?.layers, "LA 2028 Venues");
      if (!layer) {
        return;
      }
      const layerView = await view.whenLayerView(layer);
      layerViewRef.current = layerView;

      queryItems(layerView, 0);
    };

    setupMap();
  }, [mapViewRef, layerViewRef, queryItems]);

  return (
    <arcgis-map ref={mapRef} item-id={itemId} style={{ width: "100%", height: "100%" }}>
      <arcgis-zoom slot="top-left" />
      <arcgis-expand slot="bottom-right" expanded={false} mode="floating">
        <arcgis-legend />
      </arcgis-expand>
    </arcgis-map>
  );
}
