import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

const webmap = new WebMap({
  portalItem: {
    id: "aa1d3f80270146208328cf66d022e09c",
  },
});

const view = new MapView({
  container: "viewDiv",
  map: webmap,
});

const bookmarks = new Bookmarks({
  view,
});

const bkExpand = new Expand({
  view,
  content: bookmarks,
  expanded: true,
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
