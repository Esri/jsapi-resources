import type { RunnableConfig } from "@langchain/core/runnables";
import type { CustomConfigurableType } from "@arcgis/ai-components/utils/index.js";
import { locationServicesContextRequiredKeys, type LocationServicesContext } from "./locationServicesContext";

export function getLocationServicesContext(config?: RunnableConfig): LocationServicesContext {
  const configurable = config?.configurable;
  const context = configurable?.context;

  if (!context || typeof context !== "object") {
    throw new Error("Location Services context missing");
  }

  const missing = locationServicesContextRequiredKeys.filter((key) => !(key in context));
  if (missing.length) {
    throw new Error(`Location Services context missing: ${missing.join(", ")}`);
  }

  return context as LocationServicesContext;
}
