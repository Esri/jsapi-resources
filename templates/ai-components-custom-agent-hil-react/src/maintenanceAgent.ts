import { StateGraph, START, END, Annotation, messagesStateReducer, NodeInterrupt } from "@langchain/langgraph/web";
import { invokeStructuredPrompt, sendTraceMessage } from "@arcgis/ai-components/utils/index.js";
import type { AgentRegistration, ChatHistory, UiInterrupt } from "@arcgis/ai-components/utils/index.js";
import type { RunnableConfig } from "@langchain/core/runnables";
import z from "zod";
import type { CustomConfigurableType } from "@arcgis/ai-components/utils/index.js";
import MapView from "@arcgis/core/views/MapView.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import Point from "@arcgis/core/geometry/Point.js";

/**
 * --- Types ---
 */
interface ServiceMaintenanceTicket {
  category: "Blockage" | "Cracks" | "Debris" | "Erosion" | "Faded Paint" | "Other" | "Pothole";
  address: string;
  notes: string;
  severity: "Critical" | "High" | "Low" | "Moderate";
  CreationDate?: Date;
}

/**
 * Context required by the Maintenance Service Agent.
 * Supplied by the application via the agent `getContext()` provider.
 */
type ServiceMaintenanceContext = {
  mapView: MapView;
};

/**
 * --- State ---
 * inputMessages: comes from global context
 * outputMessages: goes back to global context
 * ticket: structured Maintenance report for this agent
 */
const ServiceMaintenanceState = Annotation.Root({
  messages: Annotation<ChatHistory>({
    reducer: messagesStateReducer,
    default: () => [],
  }),
  // Accumulates user-visible output across graph nodes.
  // Each node may append text to `outputMessage`; the final value is
  // concatenated in execution order and returned to the orchestrator.
  // Only plain text should be written here (no tool messages or tool calls).
  outputMessage: Annotation<string>({
    reducer: (current = "", update) =>
      typeof update === "string" && update.trim() ? (current ? `${current}\n\n${update}` : update) : current,
    default: () => "",
  }),
  ticket: Annotation<ServiceMaintenanceTicket | null>({
    reducer: (_current, update) => update ?? null,
    default: () => null,
  }),
});

type ServiceMaintenanceGraphStateType = typeof ServiceMaintenanceState.State;

/**
 * --- Prompt ---
 */
const serviceMaintenanceIncidentPrompt = String.raw`
You are an assistant that logs road maintenance issues for a city public works department.

From the user's message, extract:
- "category": one of the following categories: "Pothole", "Cracks", "Faded Paint", "Debris", "Erosion", "Blockage", or "Other". If you can't determine a category, use "Other".
- "notes": any additional details about the issue that might be helpful for city workers.
- "severity": the severity of the issue, which can be "Low", "Moderate", "High", or "Critical". If you can't determine severity, default to "Moderate".
- "address": the location or address as a single line (e.g. "380 New York St, Redlands").

If the user gives a landmark or partial address, normalize it as best you can into one line.
If you truly cannot find an address, set "address" to "unknown".
`;

/**
 * --- Node 1: "extractMaintenance" ---
 *  Looks at the user message, LLM extracts the issue + address.
 */
const extractMaintenanceLLM = async (
  state: ServiceMaintenanceGraphStateType,
  config?: RunnableConfig,
): Promise<Partial<ServiceMaintenanceGraphStateType>> => {
  await sendTraceMessage({ text: "Maintenance: extracting category, notes, severity, and address" }, config);

  const incidentSchema = z.object({
    category: z.enum(["Pothole", "Cracks", "Faded Paint", "Debris", "Erosion", "Blockage", "Other"]),
    notes: z.string(),
    severity: z.enum(["Low", "Moderate", "High", "Critical"]),
    address: z.string(),
  });

  const response = await invokeStructuredPrompt({
    promptText: serviceMaintenanceIncidentPrompt,
    modelTier: "default",
    messages: state.messages,
    schema: incidentSchema,
  });

  const category = (response.category?.trim() || "Other") as ServiceMaintenanceTicket["category"];
  const notes = response.notes?.trim() || "";
  const severity = (response.severity?.trim() || "Moderate") as ServiceMaintenanceTicket["severity"];
  const address = response.address?.trim() || "unknown";

  const ticket: ServiceMaintenanceTicket = {
    category,
    notes,
    severity,
    address,
    CreationDate: new Date(),
  };

  return {
    ticket,
  };
};

/**
 * --- Node 2: "approvalMaintenance" ---
 *  Asks the user to confirm before persisting the ticket.
 */
const approvalMaintenance = (
  state: ServiceMaintenanceGraphStateType,
  config: RunnableConfig,
): Partial<ServiceMaintenanceGraphStateType> => {
  const ticket = state.ticket;

  if (!ticket) {
    // If no ticket was extracted, skip
    return state;
  }

  const { hitlResponse } = config.configurable as CustomConfigurableType;

  // Check if we already have a  response for this approval
  if (hitlResponse?.agentId !== "serviceMaintenance" || hitlResponse.id !== "approveMaintenanceTicket") {
    const userFriendlyTime = ticket.CreationDate?.toLocaleString();

    const confirmationMessage = [
      "I've prepared the following Maintenance report:",
      "",
      `- Category: ${ticket.category}`,
      `- Notes: ${ticket.notes}`,
      `- Severity: ${ticket.severity}`,
      `- Address: ${ticket.address}`,
      `- Time reported: ${userFriendlyTime}`,
      "",
      "Are you sure you want to proceed?",
    ].join("\n");

    const interrupt: UiInterrupt = {
      agentId: ServiceMaintenanceAgent.id,
      id: "approveMaintenanceTicket",
      kind: "singleSelection",
      message: confirmationMessage,
      metadata: ["Yes", "No", "Maybe later"], // options for the user to choose from
    };

    throw new NodeInterrupt(interrupt);
  }

  // User has responded - check their answer
  const approved = hitlResponse.payload === "Yes";

  if (!approved) {
    return {
      outputMessage:
        "Okay, I've cancelled the Maintenance report. Let me know if you'd like to submit a different report.",
      ticket: null, // Clear the ticket
    };
  }

  return state;
};

async function saveMaintenanceTicketToDb(
  ticket: ServiceMaintenanceTicket,
  layer: FeatureLayer,
  location: Point,
): Promise<void> {
  const reportedAtEpoch = ticket.CreationDate || Date.now();

  const features = [
    new Graphic({
      geometry: location,
      attributes: {
        category: ticket.category,
        notes: ticket.notes,
        severity: ticket.severity,
        address: ticket.address,
        ReportedAt: reportedAtEpoch,
      },
    }),
  ];

  await layer.load();

  const editsResults = await layer?.applyEdits({
    addFeatures: features,
  });

  layer.refresh();

  if (editsResults?.addFeatureResults.length === 0) {
    throw new Error("Failed to add Maintenance ticket to the database.");
  }
}

/**
 * --- Node 2: "persistMaintenance" ---
 *  Writes the ticket to the database and returns a confirmation message.
 */
const persistMaintenance = async (
  state: ServiceMaintenanceGraphStateType,
  config?: RunnableConfig,
): Promise<Partial<ServiceMaintenanceGraphStateType>> => {
  await sendTraceMessage({ text: "Maintenance: persisting ticket" }, config);

  const ticket = state.ticket;

  if (!ticket) {
    return {
      outputMessage:
        "I couldn't create a maintenance ticket from that message. Please describe the issue and include an address.",
    };
  }

  const configurable = config?.configurable;
  const context = configurable?.context as ServiceMaintenanceContext;
  if (!context?.mapView) {
    throw new Error("Maintenance context with mapView is required in configurable context");
  }

  const layer = context.mapView.map!.layers.find((layer) => layer.title === "Maintenance issues") as FeatureLayer;

  try {
    await saveMaintenanceTicketToDb(ticket, layer, context.mapView.center);
    await sendTraceMessage({ text: "Maintenance: Incident reported" }, config);
  } catch (e) {
    throw new Error(`Failed to save Maintenance ticket: ${(e as Error).message}`);
  }

  const humanReadableTime = ticket.CreationDate?.toLocaleString();

  const reply = [
    "Thanks, I’ve logged your maintenance report:",
    "",
    `- Category: ${ticket.category}`,
    `- Notes: ${ticket.notes}`,
    `- Severity: ${ticket.severity}`,
    `- Address: ${ticket.address}`,
    `- Time reported: ${humanReadableTime}`,
  ].join("\n");

  return {
    outputMessage: reply,
  };
};

/**
 * --- Graph builder ---
 */
const createServiceMaintenanceAgentGraph = (): StateGraph<ServiceMaintenanceGraphStateType> => {
  const graph = new StateGraph(ServiceMaintenanceState)
    .addNode("extractMaintenanceLLM", extractMaintenanceLLM)
    .addNode("approvalMaintenance", approvalMaintenance)
    .addNode("persistMaintenance", persistMaintenance)
    .addEdge(START, "extractMaintenanceLLM")
    .addEdge("extractMaintenanceLLM", "approvalMaintenance")
    .addEdge("approvalMaintenance", "persistMaintenance")
    .addEdge("persistMaintenance", END);

  return graph as StateGraph<ServiceMaintenanceGraphStateType>;
};

/**
 * --- Agent registration ---
 */
const ServiceMaintenanceAgentDescription = String.raw`- **Maintenance** — User wants to report a street maintenance issue, such as a pothole, faded paint, debris, erosion, blockage, or other hazard. The assistant should extract the issue category, severity, notes, and address from the user message. The assistant should then ask the user to confirm before logging the issue.

  The agent extracts the issue category, severity, notes, and address from the user request, timestamps it with the current time, and writes a Maintenance ticket to a database.
  _Example: "I see a pothole at 380 New York St, Redlands, CA"_
  → Category: "pothole"
  → Notes: "large pothole in the middle of the street"
  → Severity: "moderate"
  → Address: "380 New York St, Redlands, CA"
  → Time reported: [current time when the agent runs].`;

const ServiceMaintenanceAgent: AgentRegistration = {
  id: "serviceMaintenance",
  name: "Maintenance Service Agent",
  description: ServiceMaintenanceAgentDescription,
  createGraph: createServiceMaintenanceAgentGraph,
  workspace: ServiceMaintenanceState,
};

export { ServiceMaintenanceAgent, type ServiceMaintenanceContext };
