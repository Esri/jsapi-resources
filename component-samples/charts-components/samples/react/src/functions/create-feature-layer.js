import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

/**
 * Create a feature layer with a service URL. This will be used to create a chart later.
 */
export async function createFeatureLayer(url) {
  const featureLayer = new FeatureLayer({
    url: url,
  });

  await featureLayer.load();

  return featureLayer;
}
