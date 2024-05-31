import config from "@arcgis/core/config.js";
import Graphic from "@arcgis/core/Graphic.js";
import ArcGISMap from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import { whenOnce } from "@arcgis/core/core/reactiveUtils.js";
import * as colorRendererCreator from "@arcgis/core/smartMapping/renderers/color.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import * as workers from "@arcgis/core/core/workers.js";

config.workers.workerPath = "./RemoteClient.js";

config.workers.loaderUrl = "https://cdn.jsdelivr.net/npm/systemjs@6.14.2/dist/s.min.js";

const button1 = document.getElementById("btn-1");

const cityLayer = new FeatureLayer({
  portalItem: {
    id: "e39d04981238498792eb33ea26ba1c09"
  }
});

const frsLayer = new FeatureLayer({
  portalItem: {
    id: "cdff193a3e3743a5bc770e2743f215b3"
  }
});

const map = new ArcGISMap({
  basemap: "dark-gray-vector",
  layers: [cityLayer, frsLayer]
});

const view = new MapView({
  container: "viewDiv",
  map,
  center: [-117.98, 33.96],
  zoom: 12
});

const legend = new Legend({ view });
view.ui.add(button1, "top-right");
view.ui.add(legend, "top-right");
button1.style.display = "block";

view.when(() => {
  button1.onclick = () => {
    console.log("Running local spatial join operation in a worker...");
    runJoin();
  };
});

async function runJoin() {
  const [cityLayerView, frsLayerView] = await Promise.all([
    view.whenLayerView(cityLayer),
    view.whenLayerView(frsLayer)
  ]);
  await whenOnce(() => !view.updating);
  const query = {
    returnGeometry: true
  };
  const cityResults = await cityLayerView.queryFeatures(query);
  const frsResults = await frsLayerView.queryFeatures(query);

  const spatialJoin = await workers.open(new URL("./SpatialJoin.js", document.baseURI).href);

  const features1 = frsResults.features.map((a) => a.toJSON());
  const features2 = cityResults.features.map((a) => a.toJSON());

  const jsonFeatures = await spatialJoin.invoke("doSpatialJoin", [features1, features2]);
  const features = jsonFeatures.map((a) => Graphic.fromJSON(a));

  map.removeMany([cityLayer, frsLayer]);
  const joinLayer = await createLayer(cityLayer, features, [
    {
      name: "count",
      alist: "Count",
      type: "integer"
    }
  ]);

  const { renderer } = await colorRendererCreator.createContinuousRenderer({
    layer: joinLayer,
    view,
    field: "count",
    theme: "above-and-below"
  });

  joinLayer.renderer = renderer;
  map.add(joinLayer);
  console.log("Join complete");
}

async function createLayer(layer, source, extraFields) {
  await layer.load();

  // create a Map to hold field info
  const fieldInfosMap = new Map();

  for (const field of [...extraFields, ...layer.fields]) {
    fieldInfosMap.set(field.name, {
      fieldName: field.name,
      label: field.alias || field.name
    });
  }

  const fieldInfos = [...new Set(fieldInfosMap.values())];

  const featLayer = new FeatureLayer({
    title: "Spatial Join Layer",
    objectIdField: layer.objectIdField,
    fields: [...new Set([...extraFields, ...layer.fields])],
    geometryType: layer.geometryType,
    source,
    // if schema of two layers is different,
    // popup will have empty fields shown
    popupTemplate: {
      title: "Copy Layer",
      content: [
        {
          type: "fields",
          fieldInfos: [...fieldInfos.values()]
        }
      ]
    }
  });

  return featLayer;
}
