# AI Components (beta) agent utils HIL React sample

This sample shows how to create a custom agent using the ArcGIS JavaScript Maps SDK's [agent utilities](https://developers.arcgis.com/javascript/latest/agentic-apps/ai-custom-agents/#agent-utilities) with a human-in-the-loop (HIL) workflow for the `arcgis-assistant` component (beta) React + TypeScript.

Human-in-the-loop provides an interrupt in an agentic workflow that prompts the human/user for additional information prior to proceeding. This is often used to safeguard against LLMs making decisions that lead to destructive actions. For example, you may use an interrupt to prompt the user to confirm whether to proceed with given parameters before executing a tool. The LLM may also not have confidence in a user's intent and could prompt them to provide more information in freeform text. You can also present deterministic options as a menu to the user before proceeding with a workflow.

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/ai-components-agent-utils-hil-react.zip)** 📁 or run:

```bash
npx @arcgis/create -n my-arcgis-app -t "ai-components-agent-utils-hil-react (beta)"
```

See the [Get started with npm guide](https://developers.arcgis.com/javascript/latest/get-started/#use-arcgiscreate) for full instructions and the [AI components (beta) reference](https://developers.arcgis.com/javascript/latest/references/ai-components/) documentation for more information.

See the [Custom agents](https://developers.arcgis.com/javascript/latest/agentic-apps/ai-custom-agents/) conceptual guide for more guidance on getting started with building a custom agent.

**AI components are currently in [beta](https://developers.arcgis.com/javascript/latest/faq/#what-does-the-beta-tag-mean).** Due to the non-deterministic nature of generative AI, there may be inaccuracies or unexpected behavior when using the out-of-the-box agents. We are actively working on improving the accuracy and capabilities of the agents. During the beta period, we welcome your [feedback](https://developers.arcgis.com/javascript/latest/faq/#how-can-i-provide-feedback-or-request-features-for-ai-components) to help us improve and shape the future of these capabilities.
