import Graphic from "@arcgis/core/Graphic";

export function doSpatialJoin([f1, f2]) {
  const features1 = f1.map((a) => Graphic.fromJSON(a));
  const features2 = f2.map((a) => Graphic.fromJSON(a));
  const features = [];
  let temp = [...features1];
  let temp2 = [];
  for (let feat of features2) {
    const graphic = feat.clone();
    graphic.attributes.count = 0;
    temp2 = [...temp];
    for (let i = 0; i < temp2.length; i++) {
      const x = temp[i];
      if (x && graphic.geometry && x.geometry && graphic.geometry.contains(x.geometry)) {
        graphic.attributes.count++;
        temp.splice(i, 1);
      }
    }
    features.push(graphic.toJSON());
  }
  return features;
}
