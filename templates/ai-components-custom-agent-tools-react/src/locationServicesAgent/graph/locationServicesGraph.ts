// Defines the graph for the Location Services Agent,
// which includes an LLM node and a tool calling node.
// The agent is designed to handle geospatial queries and
// operations using ArcGIS services.

import { StateGraph, START, END } from "@langchain/langgraph/web";
import type { AgentRegistration } from "@arcgis/ai-components/utils/index.js";
import { locationServicesLLM } from "../nodes/locationServicesLLM";
import { LocationServicesState, type LocationServicesGraphStateType } from "../state/locationServicesState";
import { locationServicesToolCalling } from "../nodes/locationServicesToolCalling";

const createLocationServicesAgentGraph = (): StateGraph<LocationServicesGraphStateType> =>
  new StateGraph(LocationServicesState)
    .addNode("locationServicesLLM", locationServicesLLM)
    .addNode("locationServicesToolNode", locationServicesToolCalling)
    .addEdge(START, "locationServicesLLM")
    .addEdge("locationServicesLLM", "locationServicesToolNode")
    .addEdge("locationServicesToolNode", END) as StateGraph<LocationServicesGraphStateType>;

const locationServicesAgentDescription = String.raw`- **Location Services** — Provides tools for geospatial services and operations including finding facilities, places, optimized routes, enriching data, and other mapping operations.

  **Available Tools:**

  - **Find Service Areas**: Calculates the area that can be reached when driving or walking on a street network. The calculated area is based on either time or distance to or from one or more facilities or destinations.

  _Example queries:_
  - "How far can I go by car in 15 minutes from Esri, Redlands, CA?"
  - "Generate service areas for delivery trucks from our warehouse locations"

  Do NOT ask about output format. If you are unaware of an existing location, prompt the user to navigate to the location first.`;

export const LocationServicesAgent: AgentRegistration = {
  id: "locationServices",
  name: "Location Services",
  description: locationServicesAgentDescription,
  createGraph: createLocationServicesAgentGraph,
  workspace: LocationServicesState,
};
