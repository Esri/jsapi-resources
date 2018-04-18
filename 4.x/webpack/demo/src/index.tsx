import "./config";

import FeatureLayer = require("esri/layers/FeatureLayer");
import WebMap = require("esri/WebMap");

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/header";
import { WebMapComponent } from "./components/webmapview";

import "./css/main.scss";

const onComponentLoad = (view: any) => {
  featureLayer.when(() => {
    view.goTo({ target: featureLayer.fullExtent });
  });
};

const featureLayer = new FeatureLayer({
  id: "states",
  portalItem: {
    id: "b234a118ab6b4c91908a1cf677941702"
  },
  outFields: ["NAME", "STATE_NAME", "VACANT", "HSE_UNITS"],
  title: "U.S. counties"
});

const webmap = new WebMap({
  portalItem: {
    id: "3ff64504498c4e9581a7a754412b6a9e"
  },
  layers: [featureLayer]
});

/**
 * React portion of application
 */
ReactDOM.render(
  <div className="main">
    <Header appName="Webpack App"/>
    <WebMapComponent
      webmap={webmap}
      onload={onComponentLoad} />
  </div>,
  document.getElementById("app")
);
