import "./style.css";

// Components imports
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-placement";

// Core API imports
import * as intl from "@arcgis/core/intl.js";
import * as bufferOperator from "@arcgis/core/geometry/operators/bufferOperator.js";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol.js";
import Graphic from "@arcgis/core/Graphic";

const greenLineSymbol = new SimpleLineSymbol({
  style: "solid",
  color: "green",
  width: 3,
});

const markerSymbol = new SimpleMarkerSymbol({
  color: "black",
  style: "triangle",
  size: 14,
  outline: {
    color: "white",
    width: 2,
  },
});

// Stream line symbol
const blueLineSymbol = new SimpleLineSymbol({
  color: "blue",
  width: 1,
});

// Stream buffer symbol
const redLineSymbol = new SimpleLineSymbol({
  color: "red",
  width: 1,
});

// Get a reference to the map component
const mapElement = document.querySelector("arcgis-map");
const calciteLoader = document.getElementById("calciteLoader");
const lengthDiv = document.getElementById("lengthDiv");

// Create a new worker thread that will be used to perform the geometry operations
const geometryOperatorsWorker = new ComlinkWorker(new URL("./geometry-operator-worker.mjs", import.meta.url), {
  name: "geometryOperatorWorker",
  type: "module", // this is required
});

// Run query in the worker thread
// This function will be called when the user clicks on the map
const runWorker = async (queryBuffer) => {
  calciteLoader.hidden = false;

  // This work will be done in the worker thread.
  const result = await geometryOperatorsWorker.getRiverBuffers(queryBuffer);

  // Process the results returned from the worker
  const rivers = result.bufferedFeatureSet.map((feature) => Graphic.fromJSON(feature.rivers));
  const riverBuffers = result.bufferedFeatureSet.map((feature) => Graphic.fromJSON(feature.riverBuffers));

  calciteLoader.hidden = true;

  return {
    riversLength: result.riversLength,
    rivers,
    riverBuffers,
  };
};

const addPointAndBuffer = (mapPoint, queryBuffer) => {
  mapElement.graphics.removeAll();

  const pointGraphic = new Graphic({
    geometry: mapPoint,
    symbol: markerSymbol,
  });

  const pointBufferGraphic = new Graphic({
    geometry: queryBuffer,
    symbol: greenLineSymbol,
  });

  mapElement.graphics.addMany([pointBufferGraphic, pointGraphic]);
};

mapElement.addEventListener("arcgisViewClick", async (event) => {
  // Create a new buffer around the clicked point
  // The buffer will be used to query the river features
  const queryBuffer = bufferOperator.execute(event.detail.mapPoint, 10000, {
    unit: "meters",
  });

  // Add the point and buffer to the map
  addPointAndBuffer(event.detail.mapPoint, queryBuffer);

  // Run the query  on the worker thread to get the river features
  const results = await runWorker(queryBuffer.toJSON());

  mapElement.graphics.addMany([...results.riverBuffers, ...results.rivers]);
  lengthDiv.innerHTML = `<hr>\n<b>Length of rivers and streams:</b> ${intl.formatNumber(results.riversLength.toFixed(0))} m`;
});

const addLegend = () => {
  // Add legend div to the map
  document.getElementById("customLegend").style.display = "block";

  // Add center symbol to legend
  symbolUtils.renderPreviewHTML(markerSymbol, {
    node: document.getElementById("centerPointDiv"),
    size: { width: 10, height: 10 },
    symbolConfig: { isSquareFill: true },
  });

  // Add query buffer symbol to legend
  symbolUtils.renderPreviewHTML(greenLineSymbol, {
    node: document.getElementById("queryBufferDiv"),
  });

  // Add river symbol to legend
  symbolUtils.renderPreviewHTML(blueLineSymbol, {
    node: document.getElementById("riversAndStreamsDiv"),
  });

  // Add river buffer symbol to legend
  symbolUtils.renderPreviewHTML(redLineSymbol, {
    node: document.getElementById("buffersDiv"),
  });
};

addLegend();
