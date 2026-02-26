// This file defines the tool calling node for the Location Services Agent.
// The node takes the output from the LLM node, determines which tool to call,
// and executes the tool with the appropriate input.

import type { RunnableConfig } from "@langchain/core/runnables";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import type { ToolMessage } from "@langchain/core/messages";
import { sendTraceMessage } from "@arcgis/ai-components/utils/index.js";
import type { LocationServicesGraphStateType } from "../state/locationServicesState";
import { locationServicesTools } from "../tools";

export async function locationServicesToolCalling(
  state: LocationServicesGraphStateType,
  config?: RunnableConfig,
): Promise<LocationServicesGraphStateType> {
  const locationServicesToolNode = new ToolNode(locationServicesTools);

  const res = (await locationServicesToolNode.invoke(
    {
      messages: state.messages,
    },
    config,
  )) as { messages: ToolMessage[] };

  const toolMessages = res.messages.map((msg) => msg.text).join("\n");
  await sendTraceMessage({ text: `Finished executing locationServices tool: ${toolMessages}` }, config);

  // Keep as ToolMessages in inputMessages (for LLM context)
  const messages = [...state.messages, ...res.messages];
  const outputMessage = res.messages.map((m) => m.text).join("\n");

  return { ...state, messages, outputMessage };
}
