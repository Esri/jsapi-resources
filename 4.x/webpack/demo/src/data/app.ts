import FeatureLayer from "esri/layers/FeatureLayer";
import TileLayer from "esri/layers/TileLayer";
import VectorTileLayer from "esri/layers/VectorTileLayer";
import EsriMap from "esri/Map";

export const featureLayer = new FeatureLayer({
  portalItem: {
    id: "b234a118ab6b4c91908a1cf677941702"
  },
  outFields: ["NAME", "STATE_NAME", "VACANT", "HSE_UNITS"],
  title: "U.S. counties",
  opacity: 0.8
});

export const map = new EsriMap({
  basemap: {
    baseLayers: [
      new TileLayer({
        portalItem: {
          // world hillshade
          id: "1b243539f4514b6ba35e7d995890db1d"
        }
      }),
      new VectorTileLayer({
        portalItem: {
          // topographic
          id: "7dc6cea0b1764a1f9af2e679f642f0f5"
        }
      })
    ]
  },
  layers: [featureLayer]
});
