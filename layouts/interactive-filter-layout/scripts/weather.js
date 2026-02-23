/* Applies and clears a predefined winter weather preset on the SceneView environment.
   It preserves the prior weather state so the original configuration can be restored. */

let savedWeather = null;

// Apply the winter service payload on the SceneView environment.weather.
// This sets the payload exactly as requested: type: 'snowy' and snowCover: 'enabled'.
export function applyWinterService(view) {
  savedWeather = view?.environment?.weather ?? null;

  const winterPayload = {
    type: "snowy",
    cloudCover: 0.8,
    precipitation: 0.3,
    snowCover: "enabled",
  };

  if (!view) return;
  view.environment = view.environment || {};
  try {
    view.environment.weather = winterPayload;
  } catch (e) {
    console.warn("unable to apply winter service payload", e);
  }
}

export function clearWinterService(view) {
  if (!view) return;
  try {
    view.environment = view.environment || {};
    view.environment.weather = savedWeather || null;
  } catch (e) {
    console.warn("unable to clear winter service payload", e);
  }
}
