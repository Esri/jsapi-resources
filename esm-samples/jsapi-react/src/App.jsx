import React, { useRef, useEffect } from "react";
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

import "./App.css";

function App() {

  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const webmap = new WebMap({
        portalItem: {
          id: "70b726074af04a7e9839d8a07f64c039"
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

      // Add the widget to the top-right corner of the view
      view.ui.add(bkExpand, "top-right");

      // bonus - how many bookmarks in the webmap?
      view.when(() => {
        if (webmap.bookmarks && webmap.bookmarks.length) {
          console.log("Bookmarks: ", webmap.bookmarks.length);
        } else {
          console.log("No bookmarks in this webmap.");
        }
      });
    }
  }, [mapDiv]);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default App;