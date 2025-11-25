import { AgentListItem } from "@/interface/agent";
/**
 * TODO: replace this with data fetching layer
 */
export const agentList: AgentListItem[] = [
  {
    id: "web-agent",
    name: "Web Agent",
    category: "Web Interaction",
    description:
      "LLM-driven system that can navigate, interpret, and interact with real websites through browser automation.",
    capabilities: [
      "Navigation",
      "Information Extraction",
      "Interaction",
      "Planning & Reasoning",
      "Memory & State Tracking",
    ],
    lastUpdated: "2025-11",
  },
  {
    id: "coding-agent",
    name: "Coding Agent",
    category: "Code Generation",
    description:
      "Specialized agent for software development tasks including code generation, debugging, and architectural design.",
    capabilities: [
      "Code Generation",
      "Debugging",
      "Refactoring",
      "Documentation",
      "Testing",
    ],
    lastUpdated: "2025-11",
  },
  {
    id: "multimodal-agent",
    name: "Multimodal Agent",
    category: "Creative & Vision",
    description:
      "Multi-modal agent combining text, image, and vision capabilities for creative content production and analysis.",
    capabilities: [
      "Image Generation",
      "Vision Understanding",
      "Style Transfer",
      "Multi-modal Reasoning",
    ],
    lastUpdated: "2025-11",
  },
  {
    id: "embodied-agent",
    name: "Embodied Agent",
    category: "Robotics & Physical",
    description:
      "Agents that interact with the physical world through robotic systems, sensors, and actuators for real-world tasks.",
    capabilities: [
      "Physical Interaction",
      "Sensor Processing",
      "Motor Control",
      "Spatial Reasoning",
      "Real-world Navigation",
    ],
    lastUpdated: "2025-11",
  },
  {
    id: "finance-agent",
    name: "Finance Agent",
    category: "Financial Services",
    description:
      "Specialized agents for financial analysis, trading, risk assessment, and automated financial decision-making.",
    capabilities: [
      "Market Analysis",
      "Portfolio Management",
      "Risk Assessment",
      "Trading Automation",
      "Financial Forecasting",
    ],
    lastUpdated: "2025-11",
  },
];
