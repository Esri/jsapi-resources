import { forwardRef, useContext } from "react";
import { AppContext } from "../context/AppContext";

import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-expand";

interface MapProps {
  itemId: string;
}

interface ArcgisMapWithLayers extends HTMLElement {
  map?: {
    layers?: unknown;
  };
}

const Map = forwardRef<HTMLArcgisMapElement, MapProps>(({ itemId }, ref) => {
  const { setLayers } = useContext(AppContext);

  return (
    <arcgis-map
      ref={ref}
      itemId={itemId}
      onarcgisViewReadyChange={(event: Event) => {
        const target = event.target as ArcgisMapWithLayers;
        if (target.map?.layers) {
          setLayers(target.map.layers);
        }
      }}
    >
      <arcgis-zoom slot="top-left" />
      <arcgis-expand slot="bottom-right" mode="floating">
        <arcgis-legend />
      </arcgis-expand>
    </arcgis-map>
  );
});

Map.displayName = "Map";

export default Map;
