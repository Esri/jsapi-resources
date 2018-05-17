import WebMap = require("esri/WebMap");
import SceneView = require("esri/views/SceneView");
import * as React from "react";

interface ComponentProps {
  webmap: WebMap;
  onload: (view: SceneView) => void;
}

export class WebMapComponent extends React.Component<ComponentProps, {}> {
  mapDiv: any;

  componentDidMount() {
    const view = new SceneView({
      map: this.props.webmap,
      container: this.mapDiv
    });
    this.props.onload(view);
  }

  render() {
    return (
      <div className="webmap"
        ref={
          element => this.mapDiv = element
        }>
      </div>
    );
  }
}
