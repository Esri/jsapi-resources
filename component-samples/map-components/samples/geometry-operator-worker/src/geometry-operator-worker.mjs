import * as bufferOperator from "@arcgis/core/geometry/operators/bufferOperator.js";
import * as generalizeOperator from "@arcgis/core/geometry/operators/generalizeOperator.js";
import * as lengthOperator from "@arcgis/core/geometry/operators/lengthOperator.js";

import Polyline from "@arcgis/core/geometry/Polyline.js";
import Polygon from "@arcgis/core/geometry/Polygon.js";
import * as query from "@arcgis/core/rest/query.js";

export async function getRiverBuffers (queryBuffer) {
  const rivers = "https://livefeeds3.arcgis.com/arcgis/rest/services/NationalWaterModel/Medium_Range_Anomaly/MapServer/0/query";

  const blueLineSymbol = {
    type: "esriSLS",
    color: [58, 89, 203],
    width: 1
  }

  const redLineSymbol = {
    type: "esriSLS",
    color: [255, 0, 0],
    width: 1
  };

  let riversLength = 0;

  const queryBufferPolygon = new Polygon({
    rings: queryBuffer.rings,
    spatialReference: queryBuffer.spatialReference
  });

  const queryParams = {
    where: "1=1",
    geometry: queryBufferPolygon,
    geometryType: "esriGeometryPolygon",
    spatialRel: "esriSpatialRelContains",
    returnGeometry: true
  };

  const featureSet = await query.executeQueryJSON(rivers, queryParams);

  if (featureSet.features.length === 0) {
    console.log("No features found in the buffer area.");
    return {
      rivers: null,
      riverBuffers: null,
    };
  }

  const bufferedFeatureSet = featureSet.features.map((feature) => {

    const riverPolyline = new Polyline({
      paths: feature.geometry.paths,
      spatialReference: featureSet.spatialReference 
    });

    const riverBufferPolygon = bufferOperator.execute(riverPolyline, 200, {
      unit: "meters"
    });

    // Generalize the polyline to simplify the shape and reduce the number of vertices.
    // This is optional, but it can help with worker serialization and rendering performance
    // if the polyline is long and has many vertices.
    const generalizedPolyline = generalizeOperator.execute(riverPolyline, 10, {
      unit: "meters"
    });    

    // Generalize the buffer polygon to simplify the shape and reduce the number of vertices.
    // This is optional, but it can help with worker serialization and rendering performance
    // if the buffer is large and has many vertices.
    const generalizedRiverBufferPolygon = generalizeOperator.execute(riverBufferPolygon, 10, {
      unit: "meters"
    });

    riversLength += lengthOperator.execute(riverPolyline);

    const riverGraphic = {
      geometry: generalizedPolyline.toJSON(),
      symbol: blueLineSymbol
    };

    const riverBufferGraphic = {
      geometry: generalizedRiverBufferPolygon.toJSON(),
      symbol: redLineSymbol
    };

    return {
      rivers: riverGraphic,
      riverBuffers: riverBufferGraphic
    };
  });

  return {
    riversLength,
    bufferedFeatureSet
  }
}
