// This file defines the LLM node for the Location Services Agent
// The node takes the conversation messages as input and generates a response
// that may include tool calls to perform geospatial operations.

import type { RunnableConfig } from "@langchain/core/runnables";
import { sendTraceMessage } from "@arcgis/ai-components/utils/index.js";
import { invokeToolPrompt } from "@arcgis/ai-components/utils/index.js";
import type { LocationServicesGraphStateType } from "../state/locationServicesState";
import { locationServicesTools } from "../tools";

const locationServicesPrompt = `You are a location services assistant that helps users perform geospatial operations.`;

export const locationServicesLLM = async (
  state: LocationServicesGraphStateType,
  config?: RunnableConfig,
): Promise<LocationServicesGraphStateType> => {
  await sendTraceMessage({ text: "Location Services: processing request" }, config);

  const response = await invokeToolPrompt({
    promptText: locationServicesPrompt,
    messages: state.messages,
    modelTier: "default",
    tools: locationServicesTools,
  });

  const messages = [...state.messages, response];
  const outputMessage = response.content.toString();

  return { ...state, messages, outputMessage };
};
