  import "./styles.css";
  // Lazy loading ESM
  import { defineCustomElements } from "@arcgis/map-components/dist/loader";
  defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });
  
  const mapElement = document.querySelector('arcgis-map');
  mapElement.addEventListener('arcgisViewReadyChange', event => { 
    console.log('MapView ready', event);
  });