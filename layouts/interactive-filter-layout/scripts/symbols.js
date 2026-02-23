/* Defines reusable 3D line symbols and renderers for cable cars, railways, and hiking paths.
 These exports centralize styling so map layers share a consistent visual language. */

import Color from "@arcgis/core/Color.js";
import LineSymbol3D from "@arcgis/core/symbols/LineSymbol3D.js";
import LineSymbol3DLayer from "@arcgis/core/symbols/LineSymbol3DLayer.js";
import LineStylePattern3D from "@arcgis/core/symbols/patterns/LineStylePattern3D.js";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer.js";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer.js";

function getVintageLineSymbol(options = {}) {
  const col = options.color ?? [120, 80, 45];
  const pattern = options.pattern ?? "solid";
  const width = options.width ?? 4;
  const coreLayer = new LineSymbol3DLayer({
    material: { color: new Color([col[0], col[1], col[2]]) },
    size: `${Math.max(1, Math.round(width))}px`,
    cap: "round",
    join: "round",
    pattern: pattern === "solid" ? undefined : new LineStylePattern3D({ style: pattern }),
  });

  return new LineSymbol3D({ symbolLayers: [coreLayer] });
}

const cableCarsSymbol = getVintageLineSymbol({
  color: [245, 124, 0],
  pattern: "solid",
  width: 4,
});

export const cableCarRenderer = new UniqueValueRenderer({
  field: "status",
  legendOptions: { title: "Cable cars" },
  uniqueValueInfos: [
    { value: "open", symbol: cableCarsSymbol },
    { value: "winter", symbol: cableCarsSymbol },
  ],
});

const railwaySymbol = getVintageLineSymbol({
  color: [184, 90, 0],
  pattern: "dash",
  width: 4,
});

export const railwayRenderer = new SimpleRenderer({ symbol: railwaySymbol });

const easyHikingPathSymbol = getVintageLineSymbol({
  color: [46, 125, 50], //
  pattern: "solid",
  width: 3,
});
const mediumHikingPathSymbol = getVintageLineSymbol({
  color: [33, 150, 243], //
  pattern: "dash",
  width: 3,
});
const difficultHikingPathSymbol = getVintageLineSymbol({
  color: [15, 15, 15],
  pattern: "dot",
  width: 3,
});

export const hikingPathRenderer = new UniqueValueRenderer({
  field: "difficulty",
  legendOptions: { title: "Hiking paths" },
  uniqueValueInfos: [
    { value: "easy", symbol: easyHikingPathSymbol },
    { value: "medium", symbol: mediumHikingPathSymbol },
    { value: "difficult", symbol: difficultHikingPathSymbol },
  ],
});
