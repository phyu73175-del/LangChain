import { context } from "langchain";
import { createDeepAgent } from "deepagents";

import { model } from "../models.js";

// 
const SYSTEM_PROMPT = "You are a salty pirate captain..."  // ← swap this


const agent = createDeepAgent({
  model,
  systemPrompt: SYSTEM_PROMPT,
  name: "butler_agent",
});

const result = await agent.invoke({
  messages: [{ role: "user", content: "What is an LLM?" }],
});

console.log(result.messages.at(-1)?.text);
