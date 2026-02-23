/* Provides lightweight SVG rendering helpers for point icons and line previews in the UI.
These utilities build inline visuals from path or stroke layer definitions. */

export function renderPointSymbol(nodeId, pathData, { size = 16, viewBox = 21 } = {}) {
  const node = document.getElementById(nodeId);
  if (!node || !pathData) return;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${viewBox} ${viewBox}`);
  svg.setAttribute("width", String(size));
  svg.setAttribute("height", String(size));
  svg.classList.add("point-symbol-svg");

  const paths = Array.isArray(pathData) ? pathData : [{ d: pathData }];
  for (const entry of paths) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", entry.d);
    if (entry.opacity) path.setAttribute("opacity", entry.opacity);
    svg.appendChild(path);
  }

  node.replaceChildren(svg);
}

export function renderLinePreview(nodeId, layers, { width = 56, height = 16 } = {}) {
  const node = document.getElementById(nodeId);
  if (!node || !layers?.length) return;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("width", String(width));
  svg.setAttribute("height", String(height));
  svg.classList.add("line-preview-svg");

  const y = height / 2;
  for (const layer of layers) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "2");
    line.setAttribute("x2", String(width - 2));
    line.setAttribute("y1", String(y));
    line.setAttribute("y2", String(y));
    line.setAttribute("stroke", layer.color);
    line.setAttribute("stroke-width", String(layer.width || 3));
    line.setAttribute("stroke-linecap", "round");
    if (layer.dasharray) line.setAttribute("stroke-dasharray", layer.dasharray);
    svg.appendChild(line);
  }

  node.replaceChildren(svg);
}
