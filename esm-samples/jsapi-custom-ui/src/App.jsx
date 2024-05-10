import { useRef, useEffect, useState } from "react";
import Bookmarks from '@arcgis/core/widgets/Bookmarks.js';
import Expand from '@arcgis/core/widgets/Expand.js';
import MapView from "@arcgis/core/views/MapView.js";
import WebMap from "@arcgis/core/WebMap.js";
import CenterComponent from "./CenterComponent.jsx";

import "./App.css";

function App() {

  const [viewState, setViewState] = useState(null);
  const centerComponentID = useRef("center-component");
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const webmap = new WebMap({
        portalItem: {
          id: "aa1d3f80270146208328cf66d022e09c"
        }
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webmap
      });

      const bookmarks = new Bookmarks({
        view
      });

      const bkExpand = new Expand({
        view,
        content: bookmarks,
        expanded: true
      });

      // Add the Expand and BookMarks widgets to the top-right corner of the view
      view.ui.add(bkExpand, "top-right");
      // Add Center component to the bottom-right corner of the view
      view.ui.add(document.getElementById(centerComponentID.current), "bottom-right");

      view.when(() => {
        setViewState({view});
      });
    }
  }, [mapDiv]);

  return <div className="mapDiv" ref={mapDiv}><CenterComponent id={centerComponentID.current} view={viewState}></CenterComponent></div>;
}

export default App;
