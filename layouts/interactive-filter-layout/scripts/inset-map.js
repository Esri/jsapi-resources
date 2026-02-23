/* Creates and maintains a small inset map that tracks the main view extent.
   It updates basemap styling with theme changes and keeps the highlighted extent in sync. */

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import { watch } from "@arcgis/core/core/reactiveUtils.js";

export function setupInsetMap(view) {
  const insetContainer = document.getElementById("inset-map");
  if (!insetContainer) return;

  const insetMap = new Map({ basemap: "gray-vector" });
  const insetLayer = new GraphicsLayer();
  insetMap.add(insetLayer);
  const insetView = new MapView({
    container: insetContainer,
    map: insetMap,
    center: [7.8, 46.0],
    zoom: 0,
    ui: { components: [] },
    constraints: {
      snapToZoom: false,
      rotationEnabled: false,
    },
    navigation: {
      mouseWheelZoomEnabled: false,
      browserTouchPanEnabled: false,
    },
  });

  const applyInsetBasemap = () => {
    const isDark = document.body.classList.contains("calcite-mode-dark");
    insetView.map.basemap = isDark ? "streets-night-vector" : "streets-vector";
  };

  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) if (m.attributeName === "class") applyInsetBasemap();
  });
  mo.observe(document.body, { attributes: true, attributeFilter: ["class"] });
  insetView.when(applyInsetBasemap);

  const getHighlightColors = () => {
    const isDark = document.body.classList.contains("calcite-mode-dark");
    return {
      rgb: isDark ? [245, 220, 120] : [245, 199, 79],
      outlineAlpha: 0.85,
      fillAlpha: 0.85,
    };
  };

  const updateInsetExtent = () => {
    const ext = view.extent;
    if (!ext || !insetView) return;

    const sr = ext.spatialReference || { wkid: 4326 };
    const outerRing =
      sr.isWebMercator || sr.wkid === 3857
        ? [
            [-20037508.342789244, -20037508.342789244],
            [-20037508.342789244, 20037508.342789244],
            [20037508.342789244, 20037508.342789244],
            [20037508.342789244, -20037508.342789244],
            [-20037508.342789244, -20037508.342789244],
          ]
        : [
            [-180, -90],
            [-180, 90],
            [180, 90],
            [180, -90],
            [-180, -90],
          ];

    const innerRing = [
      [ext.xmin, ext.ymin],
      [ext.xmin, ext.ymax],
      [ext.xmax, ext.ymax],
      [ext.xmax, ext.ymin],
      [ext.xmin, ext.ymin],
    ];

    const polygon = {
      type: "polygon",
      rings: [innerRing],
      spatialReference: sr,
    };

    const colors = getHighlightColors();
    const fillColor = [...colors.rgb, colors.fillAlpha];
    const highlightSymbol = {
      type: "simple-fill",
      color: fillColor,
      outline: { color: fillColor, width: 1 },
    };

    insetLayer.removeAll();
    insetLayer.add(new Graphic({ geometry: polygon, symbol: highlightSymbol }));

    let factor = 20;
    let expandedExtent = ext.clone().expand(factor);
    const minWidth = sr.isWebMercator || sr.wkid === 3857 ? 50000 : 0.5;
    while (Math.abs(expandedExtent.xmax - expandedExtent.xmin) < minWidth && factor < 1024) {
      factor *= 2;
      expandedExtent = ext.clone().expand(factor);
    }

    insetView.goTo(expandedExtent, { animate: false, duration: 0 }).catch(() => {});
  };

  const panelEl = insetContainer.closest("#inset-panel");
  if (panelEl) panelEl.loading = true;
  let initialInsetLoad = true;

  watch(
    () => insetView.updating,
    (updating) => {
      if (!initialInsetLoad) return;
      if (panelEl) panelEl.loading = !!updating;
      if (!updating) {
        initialInsetLoad = false;
        if (panelEl) panelEl.loading = false;
      }
    },
  );

  insetView.when(() => {
    if (panelEl && !insetView.updating) {
      initialInsetLoad = false;
      panelEl.loading = false;
    }
  });

  watch(() => view.extent, updateInsetExtent);
  insetView.when(updateInsetExtent);
}
