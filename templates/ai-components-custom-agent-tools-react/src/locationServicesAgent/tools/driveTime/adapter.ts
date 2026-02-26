// This file defines the adapter function and tool for finding service areas (drive time polygons)
// using ArcGIS services.
// The tool takes input parameters such as facility locations,
// drive time cutoffs, travel mode, and travel direction,
// and returns a response that includes the generated service area polygons.

import type { RunnableConfig } from "@langchain/core/runnables";
import { tool } from "@langchain/core/tools";
import z from "zod";
import { findServiceAreas } from "./core";
import { getLocationServicesContext } from "../../context/getlocationServicesContext";

export async function findServiceAreasWrapper(
  {
    facilities,
    driveTimeCutoffs,
    travelMode,
    travelDirection,
  }: {
    facilities: { x: number; y: number }[];
    driveTimeCutoffs: number[];
    travelMode: "automobile" | "other" | "truck" | "walk";
    travelDirection: "from-facility" | "to-facility";
  },
  config?: RunnableConfig,
): Promise<string> {
  const { mapView } = getLocationServicesContext(config);

  return await findServiceAreas(
    {
      facilities,
      driveTimeCutoffs,
      travelMode,
      travelDirection,
    },
    mapView,
  );
}

const findServiceAreasSchema = z.object({
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
  travelMode: z
    .enum(["automobile", "truck", "walk", "other"])
    .describe(
      "Mode of travel. Use 'automobile' for car/driving (default), 'truck' for freight/delivery vehicles, 'walk' for pedestrian/walking, 'other' for any other mode.",
    ),
  travelDirection: z
    .enum(["from-facility", "to-facility"])
    .describe(
      "Direction of travel analysis. Use 'from-facility' to calculate areas reachable FROM the locations (default). Use 'to-facility' to calculate areas that can reach TO the locations.",
    ),
});

export const findServiceAreasTool = tool(findServiceAreasWrapper, {
  name: "findServiceAreas",
  description:
    "Calculates service areas (drive time polygons) that represent the area that can be reached when driving or walking on a street network. The calculated area is based on travel time to or from one or more facilities or destinations.",
  schema: findServiceAreasSchema,
});
