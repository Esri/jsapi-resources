// This file defines the adapter function and tool for finding service areas (drive time polygons)
// using ArcGIS services.
// The tool takes input parameters such as facility locations,
// drive time cutoffs, travel mode, and travel direction,
// and returns a response that includes the generated service area polygons.

import { FunctionTool, type FunctionToolExecute } from "@arcgis/ai-components/agent-utils/tools/FunctionTool.js";
import z from "zod";
import { findServiceAreas } from "./core";
import { getNetworkAnalysisContext } from "../../context/";

type FindServiceAreasInput = {
  facilities: { x: number; y: number }[];
  driveTimeCutoffs: number[];
  travelModeName:
    | "Driving Distance"
    | "Driving Time"
    | "Trucking Distance"
    | "Trucking Time"
    | "Walking Distance"
    | "Walking Time";
  travelDirection: "from-facility" | "to-facility";
};

export const findServiceAreasWrapper: FunctionToolExecute<FindServiceAreasInput, string> = async (
  { facilities, driveTimeCutoffs, travelModeName, travelDirection },
  config,
): Promise<string> => {
  const { mapElement } = getNetworkAnalysisContext(config);

  return await findServiceAreas(
    {
      facilities,
      driveTimeCutoffs,
      travelModeName,
      travelDirection,
    },
    mapElement,
  );
};

export const findServiceAreasSchema = z.object({
  facilities: z
    .array(
      z.object({
        x: z.number().describe("Longitude coordinate (e.g., -118.2437)"),
        y: z.number().describe("Latitude coordinate (e.g., 34.0522)"),
      }),
    )
    .describe("Array of facility locations with x (longitude) and y (latitude) coordinates."),
  driveTimeCutoffs: z
    .array(z.number())
    .describe(
      "Array of drive time cutoffs in minutes. Each number generates a service area polygon based on the travel time from/to the facilities. Example: [5, 10, 15] for 5, 10, and 15 minute service areas.",
    ),
  travelModeName: z
    .enum([
      "Walking Time",
      "Walking Distance",
      "Driving Time",
      "Driving Distance",
      "Trucking Time",
      "Trucking Distance",
    ])
    .describe(
      "Mode of travel. Use 'Walking Time' or 'Walking Distance' for pedestrian/walking, 'Driving Time' or 'Driving Distance' for car/driving, 'Trucking Time' or 'Trucking Distance' for freight/delivery vehicles.",
    ),
  travelDirection: z
    .enum(["from-facility", "to-facility"])
    .describe(
      "Direction of travel analysis. Use 'from-facility' to calculate areas reachable FROM the locations (default). Use 'to-facility' to calculate areas that can reach TO the locations.",
    ),
});

export const findServiceAreasTool = new FunctionTool<FindServiceAreasInput, string>({
  name: "findServiceAreas",
  description:
    "Calculates service areas (drive time polygons) that represent the area that can be reached when driving or walking on a street network. The calculated area is based on travel time to or from one or more facilities or destinations.",
  inputSchema: findServiceAreasSchema,
  execute: findServiceAreasWrapper,
});
