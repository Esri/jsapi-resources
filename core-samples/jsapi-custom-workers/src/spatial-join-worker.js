import Graphic from "@arcgis/core/Graphic";

export function doSpatialJoin([f1, f2]) {
  const features1 = f1.map((a) => Graphic.fromJSON(a));
  const features2 = f2.map((a) => Graphic.fromJSON(a));
  const features = [];
  let temp = [...features1];
  let temp2 = [];
  for (let feature of features2) {
    feature.attributes.count = 0;
    temp2 = [...temp];
    for (let i = 0; i < temp2.length; i++) {
      const x = temp[i];
      if (x && feature.geometry && x.geometry && feature.geometry.contains(x.geometry)) {
        feature.attributes.count++;
        temp.splice(i, 1);
      }
    }
    features.push(feature.toJSON());
  }
  return features;
}
