import WebMap from "@arcgis/core/WebMap";

/**
 * Simple data loader against public data.
 * For this sample we are using the Popup profile.
 * For the profile definition, we need a web map and a feature layer
 * For the test data, we need a web map, a feature layer and a feature set.
 */
export async function loadData() {
  const webMap = new WebMap({
    portalItem: { id: "93d14bfd59a84af0be99a883feba052b" },
  });
  await webMap.loadAll();

  const featureLayer = webMap.findLayerById("17c807fd286-layer-47");

  const featureSet = await featureLayer.queryFeatures({
    where: "1=1",
    outFields: ["*"],
    returnGeometry: true,
  });

  return { webMap, featureLayer, featureSet };
}
