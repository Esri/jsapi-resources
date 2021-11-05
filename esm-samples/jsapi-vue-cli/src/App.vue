<template>
  <div class="mapdiv"></div>
</template>

<script>
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
// import Bookmarks from "@arcgis/core/widgets/Bookmarks";
// import Expand from "@arcgis/core/widgets/Expand"; 
// import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import WMSLayer from '@arcgis/core/layers/WMSLayer';
import WMSSublayer from "@arcgis/core/layers/support/WMSSublayer";
import Collection from "@arcgis/core/core/Collection";

export default {
  name: 'App',
  async mounted() {
    // const webmap = new WebMap({
    //   portalItem: {
    //     id: "aa1d3f80270146208328cf66d022e09c",
    //   },
    // });

    // const webmap = new Map({
    //   basemap: "topo-vector"
    // });

      const layer = new WMSLayer({
        url:
          "https://regclim.ceoas.oregonstate.edu:8443/thredds/wms/nccv2_maca_maps/rcp85/2050-2074_vs_1981-2010/MeanModel_rcp85_2050-2074_vs_1981-2010_anomalies.nc" +
          "?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetCapabilities"
      });
      layer.sublayers = new Collection([new WMSSublayer({ name: "tas" })]);
      layer.customParameters = {
        STYLES: "boxfill/cb_RdYlBu11-rev",
        COLORSCALERANGE: "-8.333333333,8.333333333",
        NUMCOLORBANDS: "64",
        TIME: "2001-01-01T00:00:00.000Z",
        BELOWMINCOLOR: "#313695",
        ABOVEMAXCOLOR: "#a50026"
      };  

        const webmap = new Map({
          basemap: "gray-vector",
          layers: layer
        });        

    // const featureLayer = new FeatureLayer({
    //   url: "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/us_zip_education_2016/FeatureServer/0",
    //   renderer: {
    //     type: "simple", 
    //     symbol: {
    //       type: "simple-fill", 
    //       color: "gray", 
    //       //outline: null,
    //     }
    //   }, 
    //   minScale: 0,
    //   popupTemplate: {
    //     content: "{OBJECTID}"
    //   }          
    // });
    // webmap.add(featureLayer);    

    const view = new MapView({
      // https://v3.vuejs.org/api/instance-properties.html#el
      container: this.$el,
      map: webmap,
      // center: [-95, 37], 
      // zoom: 6      
    });

    console.log(view);

    // const bookmarks = new Bookmarks({
    //   view: view,
    //   // allows bookmarks to be added, edited, or deleted
    //   editingEnabled: true,
    // });

    // const bkExpand = new Expand({
    //   view: view,
    //   content: bookmarks,
    //   expanded: true,
    // });

    // // Add the widget to the top-right corner of the view
    // view.ui.add(bkExpand, "top-right");

    // // bonus - how many bookmarks in the webmap?
    // webmap.when(function () {
    //   if (webmap.bookmarks && webmap.bookmarks.length) {
    //     console.log("Bookmarks: ", webmap.bookmarks.length);
    //   } else {
    //     console.log("No bookmarks in this webmap.");
    //   }
    // });
  }
}
</script>

<style scoped>
  @import './main.css';
</style>
