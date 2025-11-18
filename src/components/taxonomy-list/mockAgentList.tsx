import { AgentListItem } from "@/interface/agent";
/**
 * TODO: replace this with data fetching layer
 */
export const agentListMock: AgentListItem[] = [
  {
    id: "web-001",
    name: "BrowserGPT",
    category: "Web Agent",
    riskLevel: "high",
    lastUpdated: "2025-10-31",
    shortDescription:
      "Autonomous web-browsing agent capable of extracting, summarizing, and reasoning over live webpages.",
    topCapabilities: [
      "web navigation",
      "content summarization",
      "form submission",
    ],
    badge: "Updated",
    iconKey: "web",
  },
  {
    id: "code-001",
    name: "CodePilot",
    category: "Coding Agent",
    riskLevel: "medium",
    lastUpdated: "2025-09-15",
    shortDescription:
      "AI pair programmer that writes, debugs, and explains code across multiple programming languages.",
    topCapabilities: ["code generation", "debugging", "test creation"],
    iconKey: "code",
  },
  {
    id: "multi-001",
    name: "VisionLLM",
    category: "Multimodal Agent",
    riskLevel: "high",
    lastUpdated: "2025-11-02",
    shortDescription:
      "Processes and aligns text, image, and video inputs to perform multimodal reasoning and perception tasks.",
    topCapabilities: [
      "image captioning",
      "video understanding",
      "cross-modal retrieval",
    ],
    badge: "New",
    iconKey: "camera",
  },
  {
    id: "emb-001",
    name: "RoboMind",
    category: "Embodied Agent",
    riskLevel: "medium",
    lastUpdated: "2025-08-12",
    shortDescription:
      "Embodied decision-making agent for robot navigation, manipulation, and human-robot interaction.",
    topCapabilities: [
      "motion planning",
      "sensor fusion",
      "reinforcement learning",
    ],
    iconKey: "robot",
  },
  {
    id: "fin-001",
    name: "FinGPT",
    category: "Financial Agent",
    riskLevel: "high",
    lastUpdated: "2025-11-04",
    shortDescription:
      "Autonomous trading and portfolio management agent with market forecasting and risk assessment capabilities.",
    topCapabilities: [
      "market analysis",
      "portfolio optimization",
      "risk modeling",
    ],
    badge: "New",
    iconKey: "finance",
  },
  {
    id: "web-002",
    name: "CaMeL-Web",
    category: "Web Agent",
    riskLevel: "low",
    lastUpdated: "2025-10-10",
    shortDescription:
      "Web agent implementing CaMeL-style policy separation for secure browsing and restricted tool access.",
    topCapabilities: [
      "secure browsing",
      "policy enforcement",
      "data sanitization",
    ],
    iconKey: "web",
  },
  {
    id: "code-002",
    name: "Progent-Coder",
    category: "Coding Agent",
    riskLevel: "medium",
    lastUpdated: "2025-09-28",
    shortDescription:
      "Programmable privilege-controlled coding agent inspired by Progent architecture for safe tool use.",
    topCapabilities: [
      "code synthesis",
      "tool management",
      "vulnerability detection",
    ],
    iconKey: "code",
  },
];
