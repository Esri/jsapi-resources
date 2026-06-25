import { LLMAgent } from "@arcgis/ai-components/agent-utils/LLMAgent.js";
import { agentTools } from "./tools";
import { createAgentMiddleware } from "@arcgis/ai-components/agent-utils/middlewares/middleware.js";

const prompt = String.raw`Provides tools for geospatial services and operations including finding facilities and optimized routes.

	**Available Tools:**

	- **findServiceAreas**: Calculates the area that can be reached when driving or walking on a street network. The calculated area is based on either time or distance to or from one or more facilities or destinations. Here are the coordinates of the facility: {coords}.

		_Example queries:_
			- "How far can I go by car in 15 minutes from Esri, Redlands, CA?"
			- "Generate service areas for delivery trucks from our warehouse locations"

		Do NOT ask about output format. Do NOT invent locations or coordinates for facilities if not known. Do NOT attempt to geocode locations without first using the Navigation agent. If you are unaware of an existing location, prompt the user to navigate to the location first or to provide the address.
	`;

const description = `You are a network analysis assistant that helps users perform geospatial network operations, such as calculating service areas, routes, and geocoding locations.`;

const extractCoords = createAgentMiddleware<any>(
  "extractCoords",
  {
    beforeAgent: (request) => {
      console.log("Extract Coords Middleware - beforeAgent:", request);
      const sharedState = request.state.agentExecutionContext?.sharedState as
        | Record<string, { value?: { location?: { x?: number; y?: number } } }>
        | undefined;
      const location = sharedState?.lastResolvedLocation?.value?.location;
      return {
        coords: {
          x: location?.x,
          y: location?.y,
        },
      };
    },
  },
  {
    outputKey: "coords",
  },
);

const networkAnalysisAgent = new LLMAgent({
  name: "Network Analysis",
  description,
  prompt,
  middlewares: [extractCoords],
  modelTier: "fast",
  tools: agentTools,
});

export const NetworkAnalysisAgent = networkAnalysisAgent.registration;
