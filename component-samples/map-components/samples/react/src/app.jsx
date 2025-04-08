// Import ArcGIS map components
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-search";

export default function App() {
  return (
    <arcgis-map
      item-id="d5dda743788a4b0688fe48f43ae7beb9"
      onarcgisViewReadyChange={(event) => {
        console.log("MapView ready", event);
      }}
    >
      <arcgis-search position="top-right"></arcgis-search>
      <arcgis-legend position="bottom-left"></arcgis-legend>
    </arcgis-map>
  );
}
