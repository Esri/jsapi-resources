/// <reference types="@esri/calcite-components/types/react" />
/// <reference types="@arcgis/map-components/types/react" />
/// <reference types="@arcgis/charts-components/types/react" />
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/AppProvider";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
);
