// This file defines the LLM node for the Location Services Agent
// The node takes the conversation messages as input and generates a response
// that may include tool calls to perform geospatial operations.

import type { RunnableConfig } from "@langchain/core/runnables";
import { sendTraceMessage, invokeToolPrompt } from "@arcgis/ai-components/utils/index.js";
import type { LocationServicesGraphStateType } from "../state/locationServicesState";
import { locationServicesTools } from "../tools";

const locationServicesPrompt = `You are a location services assistant that helps users perform geospatial operations.

Assigned task:
{assignedTask}

Original user request:
{userRequest}

Prior steps:
{priorSteps}

Use the available tools when needed to complete the assigned task.`;

export const locationServicesLLM = async (
  state: LocationServicesGraphStateType,
  config?: RunnableConfig,
): Promise<LocationServicesGraphStateType> => {
  await sendTraceMessage({ text: "Location Services: processing request" }, config);

  const response = await invokeToolPrompt({
    promptText: locationServicesPrompt,
    modelTier: "fast",
    inputVariables: {
      assignedTask: state.agentExecutionContext.assignedTask,
      userRequest: state.agentExecutionContext.userRequest,
      priorSteps: state.agentExecutionContext.priorSteps,
    },
    tools: locationServicesTools,
  });

  const messages = [...state.agentExecutionContext.messages, response];
  const outputMessage = response.content.toString();

  return { ...state, agentExecutionContext: { ...state.agentExecutionContext, messages }, outputMessage };
};
