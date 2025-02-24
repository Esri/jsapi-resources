import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

/**
 * Create a feature layer with a service URL. This will be used to create a chart later.
 */
export async function createFeatureLayer(url: string): Promise<FeatureLayer> {
  const featureLayer = new FeatureLayer({
    url,
  });

  await featureLayer.load();

  return featureLayer;
}
