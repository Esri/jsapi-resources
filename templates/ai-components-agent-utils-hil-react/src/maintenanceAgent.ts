import { FunctionAgent } from "@arcgis/ai-components/agent-utils/FunctionAgent.js";
import { LLMAgent } from "@arcgis/ai-components/agent-utils/LLMAgent.js";
import { WorkflowAgent } from "@arcgis/ai-components/agent-utils/WorkflowAgent.js";
import { SequentialWorkflow } from "@arcgis/ai-components/agent-utils/workflows/SequentialWorkflow.js";
import {
  createHumanInTheLoopMiddleware,
  getHumanInTheLoopPayload,
} from "@arcgis/ai-components/agent-utils/middlewares/humanInTheLoop.js";
import type { AgentRegistration } from "@arcgis/ai-components/utils/index.js";
import type { FunctionAgentExecute } from "@arcgis/ai-components/agent-utils/FunctionAgent.js";
import z from "zod";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import Point from "@arcgis/core/geometry/Point.js";
import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";

interface ServiceMaintenanceTicket {
  category: "Blockage" | "Cracks" | "Debris" | "Erosion" | "Faded Paint" | "Other" | "Pothole";
  address: string;
  notes: string;
  severity: "Critical" | "High" | "Low" | "Moderate";
  CreationDate?: Date;
}

type ServiceMaintenanceContext = {
  mapElement: ArcgisMap;
};

type MaintenanceWorkflowState = {
  ticket?: ServiceMaintenanceTicket | null;
};

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

const maintenanceTicketSchema = z.object({
  category: z.enum(["Pothole", "Cracks", "Faded Paint", "Debris", "Erosion", "Blockage", "Other"]),
  notes: z
    .string()
    .describe("Additional details about the maintenance issue not already captured in other fields")
    .max(250),
  severity: z.enum(["Low", "Moderate", "High", "Critical"]),
  address: z.string(),
});

const extractMaintenanceOutputSchema = z.object({
  ticket: maintenanceTicketSchema.nullable(),
});

const approvalMaintenanceOutputSchema = z.object({
  ticket: maintenanceTicketSchema.nullable(),
});

const persistMaintenanceInputSchema = z.object({
  ticket: maintenanceTicketSchema.nullable(),
});

const extractMaintenanceAgent = new LLMAgent<MaintenanceWorkflowState, { ticket: ServiceMaintenanceTicket | null }>({
  name: "Extract Maintenance Incident",
  description: "Extracts maintenance category, notes, severity, and address from the user request.",
  prompt: serviceMaintenanceIncidentPrompt,
  modelTier: "default",
  outputSchema: extractMaintenanceOutputSchema,
});

const approvalMaintenanceExecute: FunctionAgentExecute<
  MaintenanceWorkflowState,
  { ticket: ServiceMaintenanceTicket | null }
> = (state, config) => {
  const ticket = state.ticket ?? null;

  if (!ticket) {
    return {
      ticket: null,
    };
  }

  const response = getHumanInTheLoopPayload<string>(config);

  const approved = response === "Yes";

  if (!approved) {
    return {
      ticket: null,
    };
  }

  return {
    ticket: {
      ...ticket,
      CreationDate: ticket.CreationDate ?? new Date(),
    },
  };
};

const approvalMaintenanceAgent = new FunctionAgent<
  MaintenanceWorkflowState,
  { ticket: ServiceMaintenanceTicket | null }
>({
  name: "Approve Maintenance Incident",
  description: "Requests explicit user confirmation before logging a maintenance incident.",
  execute: approvalMaintenanceExecute,
  outputSchema: approvalMaintenanceOutputSchema,
  middlewares: [
    createHumanInTheLoopMiddleware<MaintenanceWorkflowState>({
      interrupt: async ({ state, agentId }) => {
        const ticket = state.ticket as ServiceMaintenanceTicket | null | undefined;

        if (!ticket) {
          return {
            kind: "singleSelection",
            message:
              "I couldn't create a maintenance ticket from that message. Please describe the issue and include an address.",
            metadata: ["Okay"],
          };
        }

        const userFriendlyTime = (ticket.CreationDate ?? new Date()).toLocaleString();
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

        return {
          agentId,
          kind: "singleSelection",
          message: confirmationMessage,
          metadata: ["Yes", "No", "Maybe later"],
        };
      },
    }),
  ],
});

async function saveMaintenanceTicketToDb(
  ticket: ServiceMaintenanceTicket,
  layer: FeatureLayer,
  location: Point,
): Promise<void> {
  const reportedAtEpoch = ticket.CreationDate instanceof Date ? ticket.CreationDate.getTime() : Date.now();

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

  const editsResults = await layer.applyEdits({
    addFeatures: features,
  });

  layer.refresh();

  if (!editsResults?.addFeatureResults?.length) {
    throw new Error("Failed to add Maintenance ticket to the database.");
  }
}

const persistMaintenanceExecute: FunctionAgentExecute<MaintenanceWorkflowState, Record<string, never>> = async (
  state,
  config,
) => {
  const ticket = (state.ticket as ServiceMaintenanceTicket | null | undefined) ?? null;

  if (!ticket) {
    return "I couldn't create a maintenance ticket from that message. Please describe the issue and include an address.";
  }

  const context = config?.configurable?.context as ServiceMaintenanceContext | undefined;
  if (!context?.mapElement) {
    throw new Error("Maintenance context with mapElement is required in configurable context");
  }

  const layer = context.mapElement.map?.layers.find((item) => item.title === "Maintenance issues");

  if (!layer) {
    throw new Error("Maintenance issues layer was not found on the map");
  }

  await saveMaintenanceTicketToDb(ticket, layer, context.mapElement.center);

  const humanReadableTime = (ticket.CreationDate ?? new Date()).toLocaleString();

  context.mapElement.graphics.removeAll();

  return [
    "Thanks, I've logged your maintenance report:",
    "",
    `- Category: ${ticket.category}`,
    `- Notes: ${ticket.notes}`,
    `- Severity: ${ticket.severity}`,
    `- Address: ${ticket.address}`,
    `- Time reported: ${humanReadableTime}`,
  ].join("\n");
};

const persistMaintenanceAgent = new FunctionAgent<MaintenanceWorkflowState, Record<string, never>>({
  name: "Maintenance Incident Reporter",
  description: "Reports an approved maintenance incident to the Maintenance issues layer.",
  inputSchema: persistMaintenanceInputSchema,
  execute: persistMaintenanceExecute,
});

const maintenanceWorkflow = new SequentialWorkflow<MaintenanceWorkflowState>({
  agents: [extractMaintenanceAgent, approvalMaintenanceAgent, persistMaintenanceAgent],
});

const ServiceMaintenanceAgentDescription = String.raw`- **Maintenance** — User wants to report a street maintenance issue, such as a pothole, faded paint, debris, erosion, blockage, or other hazard. The assistant should extract the issue category, severity, notes, and address from the user message. The assistant should then ask the user to confirm before logging the issue.

  The agent extracts the issue category, severity, notes, and address from the user request, timestamps it with the current time, and writes a Maintenance ticket to a database.
  _Example: "I see a pothole at 380 New York St, Redlands, CA"_
  → Category: "pothole"
  → Notes: "large pothole in the middle of the street"
  → Severity: "moderate"
  → Address: "380 New York St, Redlands, CA"
  → Time reported: [current time when the agent runs].`;

const maintenanceWorkflowAgent = new WorkflowAgent<MaintenanceWorkflowState>({
  name: "Maintenance Service Agent",
  description: ServiceMaintenanceAgentDescription,
  workflow: maintenanceWorkflow,
});

const ServiceMaintenanceAgent: AgentRegistration = maintenanceWorkflowAgent.registration;

export { ServiceMaintenanceAgent };
