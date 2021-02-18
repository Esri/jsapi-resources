import React, { useRef, useEffect } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ArcGISMap from "@arcgis/core/Map";
import DictionaryRenderer from "@arcgis/core/renderers/DictionaryRenderer";
import MapView from "@arcgis/core/views/MapView";
import esriConfig from '@arcgis/core/config.js';

import "./App.css";

function App() {

  // Required: Set this property to insure assets resolve correctly.
  esriConfig.assetsPath = './assets'; 

  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const map = new ArcGISMap({
        basemap: "gray-vector",
      });

      const view = new MapView({
        map,
        container: mapDiv.current,
        extent: {
          spatialReference: {
            wkid: 102100,
          },
          xmax: -13581772,
          xmin: -13584170,
          ymax: 4436367,
          ymin: 4435053,
        },
      });

      const popupTemplate = {
        // autocasts as new PopupTemplate()
        title: "station: {Station_Name}",
        content: [
          {
            // It is also possible to set the fieldInfos outside of the content
            // directly in the popupTemplate. If no fieldInfos is specifically set
            // in the content, it defaults to whatever may be set within the popupTemplate.
            type: "fields",
            fieldInfos: [
              {
                fieldName: "Fuel_Type_Code",
                label: "Fuel type",
              },
              {
                fieldName: "EV_Network",
                label: "EV network",
              },
              {
                fieldName: "EV_Connector_Types",
                label: "EV connection types",
              },
              {
                fieldName: "Station_Name",
                label: "Station Name",
              },
            ],
          },
        ],
      };

      const scale = 36112;
      const layer1 = new FeatureLayer({
        url:
          "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer",
        outFields: ["*"],
        popupTemplate,
        renderer: new DictionaryRenderer({
          url:
            "https://jsapi.maps.arcgis.com/sharing/rest/content/items/30cfbf36efd64ccf92136201d9e852af",
          fieldMap: {
            fuel_type: "Fuel_Type_Code",
          },
          config: {
            show_label: "false",
          },
          visualVariables: [
            {
              type: "size",
              valueExpression: "$view.scale",
              stops: [
                { value: scale / 2, size: 20 },
                { value: scale * 2, size: 15 },
                { value: scale * 4, size: 10 },
                { value: scale * 8, size: 5 },
                { value: scale * 16, size: 2 },
                { value: scale * 32, size: 1 },
              ],
            },
          ],
        }),
        minScale: 0,
        maxScale: 10000,
      });

      const layer2 = new FeatureLayer({
        url:
          "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer",
        outFields: ["*"],
        popupTemplate,
        renderer: new DictionaryRenderer({
          url:
            "https://jsapi.maps.arcgis.com/sharing/rest/content/items/30cfbf36efd64ccf92136201d9e852af",
          fieldMap: {
            fuel_type: "Fuel_Type_Code",
            connector_types: "EV_Connector_Types",
            network: "EV_Network",
            name  : "Station_Name",
          },
          config: {
            show_label: "true",
          },
        }),
        minScale: 10000,
        maxScale: 0,
      });

      map.addMany([layer1, layer2]);
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default App;
