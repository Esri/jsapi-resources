/* Controls light/dark theme transitions and smoothly animates scene lighting between day and night.
   It computes target times and applies incremental updates to the SceneView environment. */

let __themeAnimationActive = false;

function getNextMidnight(date) {
  const d = new Date(date);
  d.setHours(12, 0, 0, 0);
  if (d.getTime() <= date.getTime()) d.setDate(d.getDate() + 1);
  return d;
}

function getNextNoon(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  if (d.getTime() <= date.getTime()) d.setDate(d.getDate() + 1);
  return d;
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function animateLighting(view, fromDate, toDate, duration = 2000) {
  if (!view || !view.environment || __themeAnimationActive) return Promise.resolve();
  __themeAnimationActive = true;
  const start = performance.now();
  const startMs = fromDate.getTime();
  const endMs = toDate.getTime();

  return new Promise((resolve) => {
    function step(now) {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = easeInOutQuad(t);
      const currentMs = Math.round(startMs + (endMs - startMs) * eased);
      view.environment.lighting = view.environment.lighting || {};
      view.environment.lighting.date = new Date(currentMs);
      if (t < 1) requestAnimationFrame(step);
      else {
        __themeAnimationActive = false;
        view.environment.lighting = view.environment.lighting || {};
        view.environment.lighting.date = new Date(endMs);
        resolve();
      }
    }

    requestAnimationFrame(step);
  });
}

export async function toggleTheme(sceneEl, toDark) {
  const desired = typeof toDark === "boolean" ? toDark : !document.body.classList.contains("calcite-mode-dark");
  document.body.classList.toggle("calcite-mode-dark", desired);

  const view = sceneEl?.view;
  const currentLighting = view?.environment?.lighting?.date ? new Date(view.environment.lighting.date) : new Date();

  if (!view || !view.environment) {
    return;
  }

  if (desired) {
    const night = getNextMidnight(currentLighting);
    await animateLighting(view, currentLighting, night, 2000);
    try {
      view.environment.lighting = view.environment.lighting || {};
      view.environment.lighting.date = new Date(night);
    } catch (e) {}
  } else {
    const nextNoon = getNextNoon(currentLighting);
    await animateLighting(view, currentLighting, nextNoon, 2000);
    try {
      view.environment.lighting = view.environment.lighting || {};
      view.environment.lighting.date = new Date(nextNoon);
    } catch (e) {}
  }
}
