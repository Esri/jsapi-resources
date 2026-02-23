/* Handles UI-driven filtering for hiking paths, cable cars, and railways.
 It syncs layer visibility and feature effects, and toggles winter weather based on current selections. */

import { applyWinterService, clearWinterService } from "./weather.js";

let hikingView = null;
let cableCarView = null;
let railwayView = null;
let hikingPathLayerRef = null;
let cableCarLayerRef = null;
let railwayLayerRef = null;

export function setLayerRefs(hiking, cableCar, railway) {
  hikingPathLayerRef = hiking;
  cableCarLayerRef = cableCar;
  railwayLayerRef = railway;
}

export function setLayerViews(hiking, cableCar, railway) {
  hikingView = hiking;
  cableCarView = cableCar;
  railwayView = railway;
}

export function handlePathsListChange(sceneEl) {
  const trailListEl = document.getElementById("trail-list");
  const transportListEl = document.getElementById("transport-list");
  const panoramicSwitch = document.getElementById("panoramic-switch");
  const winterSwitch = document.getElementById("winter-switch");
  const selectedItems = [...(trailListEl?.selectedItems || []), ...(transportListEl?.selectedItems || [])];
  const selections = selectedItems.reduce(
    (acc, item) => {
      const [layer, filter] = (item.value || "").split(":");
      if (layer === "hiking") acc.hiking.push(filter);
      if (layer === "cablecar") acc.cable.push(filter);
      if (layer === "railway") acc.railway = true;
      return acc;
    },
    { hiking: [], cable: [], railway: false },
  );

  const selectedDifficulties = selections.hiking;
  const selectedCable = selections.cable;
  const panoramicSelected = Boolean(panoramicSwitch?.checked);
  const winterSelected = Boolean(winterSwitch?.checked);
  // apply winter scene weather when "Open in winter" is selected
  const view = sceneEl?.view;
  if (view) {
    if (winterSelected) applyWinterService(view);
    else clearWinterService(view);
  }
  const anyItemSelected = selectedItems.length > 0 || panoramicSelected || winterSelected;

  const buildIn = (field, values) => (values.length ? `${field} IN (${values.map((v) => `'${v}'`).join(", ")})` : "");

  // ------------------------
  // Reset layers if nothing selected
  // ------------------------
  if (!anyItemSelected) {
    if (hikingPathLayerRef) hikingPathLayerRef.visible = true;
    if (cableCarLayerRef) cableCarLayerRef.visible = true;
    if (railwayLayerRef) railwayLayerRef.visible = true;
    if (hikingView) {
      hikingView.filter = null;
      hikingView.featureEffect = null;
    }
    if (cableCarView) {
      cableCarView.filter = null;
    }
    if (railwayView) {
      railwayView.filter = null;
    }
    return;
  }

  // ------------------------
  // Hiking paths
  // ------------------------
  if (hikingView) {
    let hikingWhere = buildIn("difficulty", selectedDifficulties);
    if (panoramicSelected) {
      const panoWhere = "theme = 'panoramic'";
      hikingWhere = hikingWhere ? `(${hikingWhere}) AND ${panoWhere}` : panoWhere;
    }
    hikingView.filter = hikingWhere ? { where: hikingWhere } : null;

    hikingView.featureEffect = panoramicSelected
      ? { filter: { where: hikingWhere }, includedEffect: "bloom(3.2, 2.4px, 0.65)" }
      : null;
    if (hikingPathLayerRef) hikingPathLayerRef.visible = selectedDifficulties.length > 0 || panoramicSelected;
  }

  // ------------------------
  // Cable cars
  // ------------------------
  if (cableCarView) {
    const cableFields = cableCarLayerRef?.layer?.fields?.map((f) => f.name) || [];

    let cableWhere = null;

    if (selectedCable.length > 0 && cableFields.includes("status")) {
      if (winterSelected) {
        cableWhere = "status = 'open'";
      } else {
        cableWhere = null;
      }
    }

    cableCarView.filter = cableWhere ? { where: cableWhere } : null;

    if (cableCarLayerRef) cableCarLayerRef.visible = selectedCable.length > 0;
  }

  // ------------------------
  // Railways
  // ------------------------
  if (railwayView) {
    const railwayFields = railwayLayerRef?.layer?.fields?.map((f) => f.name) || [];

    let railwayWhere = null;

    if (selections.railway) {
      if (railwayFields.includes("status")) {
        if (winterSelected) {
          railwayWhere = "status = 'open'";
        } else {
          railwayWhere = null;
        }
      }
    }
    if (railwayLayerRef) railwayLayerRef.visible = selections.railway;
  }
}
