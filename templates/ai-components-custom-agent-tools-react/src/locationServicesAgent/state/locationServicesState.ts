import { Annotation } from "@langchain/langgraph/web";
import { createAgentRuntimeState } from "@arcgis/ai-components/utils/index.js";

export const LocationServicesState = Annotation.Root({
  ...createAgentRuntimeState(),
});

export type LocationServicesGraphStateType = typeof LocationServicesState.State;
