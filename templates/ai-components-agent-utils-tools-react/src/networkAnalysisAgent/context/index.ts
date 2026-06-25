import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";

/**
 * Context required by the Network Analysis agent.
 * Supplied by the application via an agent `getContext()` provider.
 */
export type NetworkAnalysisContext = {
  mapElement: ArcgisMap;
};

export const networkAnalysisContextRequiredKeys = ["mapElement"] as const;

type AgentExecutionConfigLike = {
  configurable?: Record<string, unknown>;
};

export function getNetworkAnalysisContext(config?: AgentExecutionConfigLike): NetworkAnalysisContext {
  const configurable = config?.configurable;
  const context = configurable?.context;

  if (!context || typeof context !== "object") {
    throw new Error("Network Analysis context missing");
  }

  const missing = networkAnalysisContextRequiredKeys.filter((key) => !(key in context));
  if (missing.length) {
    throw new Error(`Network Analysis context missing: ${missing.join(", ")}`);
  }

  return context as NetworkAnalysisContext;
}
