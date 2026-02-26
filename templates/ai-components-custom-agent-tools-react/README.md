# AI Components (beta) custom agent with tools React sample

This sample shows how to create a custom agent that may call tools in behalf of the user within the context of the `arcgis-assistant` component (beta) using React + TypeScript. The agent defined in this example includes one tool that calculates a service area from natural language input. You can use this example to learn how to write tools for custom agents.

📁 **[Click here to download this directory as a ZIP file](https://esri.github.io/jsapi-resources/zips/ai-components-custom-agent-tools-react.zip)** 📁

See the [Get started with npm guide](https://developers.arcgis.com/javascript/latest/get-started/#use-arcgiscreate) for full instructions and the [AI components (beta) reference](https://developers.arcgis.com/javascript/latest/references/ai-components/) documentation for more information.

See the [Custom agents](https://developers.arcgis.com/javascript/latest/agentic-apps/ai-custom-agents/) conceptual guide for more guidance on getting started with building a custom agent.

**AI components are currently in [beta](https://developers.arcgis.com/javascript/latest/faq/#what-does-the-beta-tag-mean).** Due to the non-deterministic nature of generative AI, there may be inaccuracies or unexpected behavior when using the out-of-the-box agents. We are actively working on improving the accuracy and capabilities of the agents. During the beta period, we welcome your [feedback](https://developers.arcgis.com/javascript/latest/faq/#how-can-i-provide-feedback-or-request-features-for-ai-components) to help us improve and shape the future of these capabilities.

The JS Maps SDK doesn't provide an out-of-the-box API for building custom agents. Custom agents are built using the following third party libraries, which are automatically included when you install `@arcgis/ai-components`:

- [LangGraph](https://docs.langchain.com/oss/javascript/langgraph/overview) (v1.1) is used to define the orchestration graph agents and tools, manages global state and LLM calls, and defines multi-step workflows
- [LangChainJS](https://docs.langchain.com/oss/javascript/langchain/overview) (v1.1) manages LLM and embeddings calls
- [Zod](https://zod.dev/) (v3) enforces structured outputs, schemas, and typing
