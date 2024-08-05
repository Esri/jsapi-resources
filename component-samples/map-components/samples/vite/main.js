  import "./styles.css";
  
  // Individual imports for each component
  import "@arcgis/map-components/dist/components/arcgis-map";
  import "@arcgis/map-components/dist/components/arcgis-legend";
  import "@arcgis/map-components/dist/components/arcgis-search";
  
/**
 * Uncomment when working with local assets for your component package
 */

// import { setArcgisAssetPath as setMapAssetPath} from '@arcgis/map-components/dist/components';
// setMapAssetPath(`${location.origin}${location.pathname}assets`);

  const mapElement = document.querySelector('arcgis-map');
  mapElement.addEventListener('arcgisViewReadyChange', event => {
    console.log('MapView ready', event);
  });