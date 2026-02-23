import "./styles.css";

import { watch } from "@arcgis/core/core/reactiveUtils";

import "@arcgis/map-components/components/arcgis-scene";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-navigation-toggle";
import "@arcgis/map-components/components/arcgis-compass";
import "@arcgis/map-components/components/arcgis-expand";
import "@arcgis/map-components/components/arcgis-daylight";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-shell-panel";
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-block";
import "@esri/calcite-components/components/calcite-list";
import "@esri/calcite-components/components/calcite-list-item";
import "@esri/calcite-components/components/calcite-tile-group";
import "@esri/calcite-components/components/calcite-tile";
import "@esri/calcite-components/components/calcite-icon";
import "@esri/calcite-components/components/calcite-label";
import "@esri/calcite-components/components/calcite-switch";

import { aerialTram21, circle21, diamondTwo21, squareSmall21, train21 } from "calcite-point-symbols";

import { hikingPathRenderer, cableCarRenderer, railwayRenderer } from "./scripts/symbols.js";
import { toggleTheme } from "./scripts/theme.js";
import { handlePathsListChange, setLayerRefs, setLayerViews } from "./scripts/filters.js";
import { setupInsetMap } from "./scripts/inset-map.js";
import { renderPointSymbol, renderLinePreview } from "./scripts/ui-helpers.js";

const sceneEl = document.querySelector("arcgis-scene");

let hikingView = null;
let cableCarView = null;
let railwayView = null;
let hikingPathLayerRef = null;
let cableCarLayerRef = null;
let railwayLayerRef = null;

globalThis.handlePathsListChange = () => handlePathsListChange(sceneEl);
globalThis.toggleTheme = (toDark) => toggleTheme(sceneEl, toDark);

sceneEl.addEventListener("arcgisViewReadyChange", async () => {
  const map = sceneEl.map;
  const view = sceneEl.view;

  // Wait for the view and basic resources to settle before removing loading UI
  async function waitSceneReady() {
    try {
      if (view?.when) await view.when();

      const layers = map?.allLayers?.toArray ? map.allLayers.toArray() : [];
      const layerViewPromises = layers.map((l) => sceneEl.view.whenLayerView(l).catch(() => null));
      const layerViews = (await Promise.all(layerViewPromises)).filter(Boolean);

      const loadPromises = [];
      const basemapBase = map?.basemap?.baseLayers || [];
      const basemapRef = map?.basemap?.referenceLayers || [];
      basemapBase.concat(basemapRef).forEach((b) => {
        if (b?.load) loadPromises.push(b.load().catch(() => null));
      });
      layers.forEach((l) => {
        if (l?.load) loadPromises.push(l.load().catch(() => null));
      });

      const resourcesTimeout = new Promise((r) => setTimeout(r, 12000));
      await Promise.race([Promise.all(loadPromises), resourcesTimeout]);

      // Poll until view and layers stop updating for a short stable window
      const stableWindow = 1200;
      const pollInterval = 150;
      const maxWait = 30000;
      const start = Date.now();
      let lastActive = Date.now();

      await new Promise((resolve) => {
        const check = () => {
          const now = Date.now();
          const viewActive = !!view?.updating;
          const anyLayerActive = layerViews.some((lv) => lv?.updating);
          if (viewActive || anyLayerActive) lastActive = now;
          if (now - lastActive >= stableWindow) return resolve();
          if (now - start >= maxWait) return resolve();
          setTimeout(check, pollInterval);
        };
        check();
      });
    } catch (err) {
      console.warn("waitSceneReady error", err);
    } finally {
      const uiContainer = document.querySelector("calcite-shell");
      if (uiContainer) {
        uiContainer.classList.remove("loading");
      }
    }
  }

  waitSceneReady();

  const hikingPathLayer = map.allLayers.find((layer) => layer.title === "HikingPaths");
  const cableCarLayer = map.allLayers.find((layer) => layer.title === "CableCars");
  const railwayLayer = map.allLayers.find((layer) => layer.title === "Railway");

  hikingPathLayerRef = hikingPathLayer || null;
  cableCarLayerRef = cableCarLayer || null;
  railwayLayerRef = railwayLayer || null;

  function updateInlineAttribution() {
    try {
      const el = document.querySelector("#attribution");
      if (!el || !map) return;
      const atts = new Set();

      const collect = (layer, includeIfNotVisible = false) => {
        try {
          if (!layer) return;
          if (!includeIfNotVisible && typeof layer.visible !== "undefined" && layer.visible === false) return;

          if (typeof layer.attribution === "string" && layer.attribution.trim()) atts.add(layer.attribution.trim());
          if (layer.copyright) atts.add(layer.copyright);
          if (layer.copyrightText) atts.add(layer.copyrightText);

          if (layer.source && layer.source.attribution) {
            const s = layer.source.attribution;
            if (typeof s === "string" && s.trim()) atts.add(s.trim());
            else if (s.text) atts.add(s.text);
          }
          if (atts.size === 0 && layer.title) atts.add(layer.title);
        } catch (e) {}
      };

      try {
        const basemapBase = (map.basemap && (map.basemap.baseLayers || [])) || [];
        const basemapRef = (map.basemap && (map.basemap.referenceLayers || [])) || [];
        basemapBase.concat(basemapRef).forEach((b) => collect(b, true));
      } catch (e) {}

      try {
        const all = map.allLayers?.toArray ? map.allLayers.toArray() : [];
        all.forEach((l) => collect(l, false));
      } catch (e) {}

      const items = [...atts].filter(Boolean);
      if (items.length) el.innerHTML = items.join(" • ");
      else el.textContent = "© Esri";
    } catch (e) {
      console.warn("updateInlineAttribution error", e);
    }
  }
  function wireAttributionUpdates(map, view) {
    if (!map) return;
    updateInlineAttribution();

    watch(() => map.basemap, updateInlineAttribution);

    const coll = map.allLayers;
    if (coll?.on) {
      try {
        coll.on("after-add", updateInlineAttribution);
      } catch (e) {}
      try {
        coll.on("after-remove", updateInlineAttribution);
      } catch (e) {}
      try {
        coll.on("change", updateInlineAttribution);
      } catch (e) {}
    }

    const layers = map.allLayers?.toArray ? map.allLayers.toArray() : [];
    layers.forEach((layer) => {
      layers.forEach((layer) => {
        if (layer) {
          watch(() => layer.visible, updateInlineAttribution);
        }
      });
      if (typeof layer.load === "function")
        layer
          .load()
          .then(updateInlineAttribution)
          .catch(() => {});
    });
  }

  wireAttributionUpdates(map, view);

  setLayerRefs(hikingPathLayerRef, cableCarLayerRef, railwayLayerRef);

  if (hikingPathLayer) hikingPathLayer.visible = true;
  if (cableCarLayer) cableCarLayer.visible = true;
  if (railwayLayer) railwayLayer.visible = true;

  if (hikingPathLayer) hikingPathLayer.renderer = hikingPathRenderer;
  if (cableCarLayer) cableCarLayer.renderer = cableCarRenderer;
  if (railwayLayer) railwayLayer.renderer = railwayRenderer;

  async function renderTransportNow() {
    try {
      if (cableCarLayerRef) {
        cableCarLayerRef.visible = true;
        if (!cableCarLayerRef.renderer) cableCarLayerRef.renderer = cableCarRenderer;
        if (typeof cableCarLayerRef.refresh === "function") {
          try {
            cableCarLayerRef.refresh();
          } catch (e) {}
        }
        await sceneEl.view.whenLayerView(cableCarLayerRef);
      }
      if (railwayLayerRef) {
        railwayLayerRef.visible = true;
        if (!railwayLayerRef.renderer) railwayLayerRef.renderer = railwayRenderer;
        if (typeof railwayLayerRef.refresh === "function") {
          try {
            railwayLayerRef.refresh();
          } catch (e) {}
        }
        await sceneEl.view.whenLayerView(railwayLayerRef);
      }
    } catch (e) {
      console.warn("renderTransportNow error", e);
    }
  }

  globalThis.renderTransportNow = renderTransportNow;

  renderTransportNow();

  sceneEl.camera = {
    position: {
      longitude: 7.8304,
      latitude: 46.3516,
      z: 8000,
    },
    altitude: 9196.4666,
    heading: 188.7133,
    tilt: 79.6,
  };

  view.constraints = {
    altitude: {
      min: 4000,
      max: 15000,
    },
    tilt: {
      min: 45,
      max: 80,
    },
    geometry: {
      type: "extent",
      xmin: 7,
      ymin: 45.0,
      xmax: 9.0,
      ymax: 47.0,
      spatialReference: { wkid: 4326 },
    },
  };

  // --------------------
  // List filters
  // --------------------
  hikingView = hikingPathLayer ? await sceneEl.view.whenLayerView(hikingPathLayer) : null;
  cableCarView = cableCarLayer ? await sceneEl.view.whenLayerView(cableCarLayer) : null;
  railwayView = railwayLayer ? await sceneEl.view.whenLayerView(railwayLayer) : null;

  setLayerViews(hikingView, cableCarView, railwayView);

  setupInsetMap(view);

  function logSceneState() {
    const cam = view.camera || {};
    const pos = cam.position || {};
    const altitude = pos.z ?? pos[2] ?? null;
    const lon = pos.longitude ?? pos.x ?? null;
    const lat = pos.latitude ?? pos.y ?? null;

    return { altitude, lon, lat };
  }

  watch(
    () => [view.camera, view.scale],
    () => logSceneState(),
  );

  globalThis.logSceneState = logSceneState;

  const trailListEl = document.getElementById("trail-list");
  const transportListEl = document.getElementById("transport-list");
  const listElements = [trailListEl, transportListEl].filter(Boolean);
  if (listElements.length > 0) {
    await Promise.all(listElements.map((list) => list.componentOnReady?.() || null));
    listElements.forEach((list) => {
      const listItems = list.querySelectorAll("calcite-list-item");
      listItems.forEach((item) => {
        item.selected = true;
      });
    });

    handlePathsListChange(sceneEl);
    try {
      if (hikingPathLayerRef) hikingPathLayerRef.visible = true;
      if (hikingView) hikingView.filter = null;
    } catch (e) {
      console.warn("could not ensure hiking trails visible on load", e);
    }
  }

  try {
    const controlsPanel = document.getElementById("controls-panel");
    const controlsPanel2 = document.getElementById("controls-panel-2");
    const insetPanel = document.getElementById("inset-panel");
    if (controlsPanel) controlsPanel.loading = false;
    if (controlsPanel2) controlsPanel2.loading = false;
    if (insetPanel) insetPanel.loading = false;
  } catch (e) {}

  renderPointSymbol("icon-easy", circle21, { size: 16, viewBox: 21 });
  renderPointSymbol("icon-medium", squareSmall21, { size: 16, viewBox: 21 });
  renderPointSymbol("icon-difficult", diamondTwo21, { size: 16, viewBox: 21 });
  renderPointSymbol("icon-rail", train21, { size: 16, viewBox: 21 });
  renderPointSymbol("icon-cable", aerialTram21, { size: 16, viewBox: 21 });
  renderLinePreview("symbol-hiking-easy", [{ color: "#2e7d32", width: 4 }]);
  renderLinePreview("symbol-hiking-medium", [{ color: "#2196f3", width: 4, dasharray: "8 4" }]);
  renderLinePreview("symbol-hiking-difficult", [{ color: "#0f0f0f", width: 4, dasharray: "2 4" }]);
  renderLinePreview("symbol-transport-cable", [{ color: "#f57c00", width: 4 }]);
  renderLinePreview("symbol-transport-rail", [
    { color: "#f57c00", width: 5 },
    { color: "#fff8e1", width: 2.5 },
    { color: "#f57c00", width: 2.5, dasharray: "6 6" },
  ]);
});
