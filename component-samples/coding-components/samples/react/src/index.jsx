import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ArcadeEditor from "./components/ArcadeEditor";

// Set the asset path for calcite components
import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';
setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ArcadeEditor />
  </StrictMode>
);
