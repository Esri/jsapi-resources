import GeoJSONLayer from "esri/layers/GeoJSONLayer";
import TileLayer from "esri/layers/TileLayer";
import VectorTileLayer from "esri/layers/VectorTileLayer";
import EsriMap from "esri/Map";

const url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

const template = {
  title: "Earthquake Info",
  content: "Magnitude {mag} {type} hit {place} on {time:DateString}"
};

const renderer = {
  type: "simple",
  field: "mag",
  symbol: {
    type: "simple-marker",
    color: "orange",
    outline: {
      color: "white"
    }
  },
  visualVariables: [
    {
      type: "size",
      field: "mag",
      stops: [
        {
          value: 2.5,
          size: "4px"
        },
        {
          value: 8,
          size: "40px"
        }
      ]
    }
  ]
};

export const layer = new GeoJSONLayer({
  url,
  copyright: "USGS Earthquakes",
  popupTemplate: template,
  renderer
} as any);

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
  layers: [layer]
});
