export interface AgentDetail {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  capabilities: string[];
  architecture: string;
  riskLevel: "low" | "medium" | "high";
  lastUpdated: string;
  detailedInfo: {
    overview: {
      title: string;
      content: string;
      references?: string[];
    };
    taxonomy: {
      title: string;
      sections: {
        title: string;
        items: {
          name: string;
          description: string;
          references?: string[];
        }[];
      }[];
    };
    vulnerabilities: {
      title: string;
      items: {
        name: string;
        severity: "low" | "medium" | "high";
        description: string;
        references?: string[];
      }[];
    };
    attacks: {
      title: string;
      items: {
        name: string;
        description: string;
        references?: string[];
      }[];
    };
  };
}

const agentsData: AgentDetail[] = [
  {
    id: "1",
    name: "Web Agent",
    slug: "web-001",
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
    architecture: "LLM + Browser Interface",
    riskLevel: "high",
    lastUpdated: "2024-03",
    detailedInfo: {
      overview: {
        title: "What is a Web Agent?",
        content:
          "A Web Agent is an LLM-driven system that can navigate, interpret, and interact with real websites through a browser automation environment. It typically uses structured observations (DOM, screenshots, extracted text) to plan actions such as clicking, typing, submitting forms, or gathering information. This idea aligns with prior environments like MiniWoB++ (Shi et al., 2017), where agents interact with controlled UI tasks, and more recent fully realistic ecosystems such as WebArena (Zhou et al., 2023), which extend these interactions to real websites. Modern LLM-powered web agents also follow the design direction of WebGPT (OpenAI, 2021) and WebShop (Yao et al., 2022), showing that language models can reason over dynamic web content and perform multi-step tasks.",
        references: [
          "Shi et al., 2017",
          "Zhou et al., 2023",
          "OpenAI, 2021",
          "Yao et al., 2022",
        ],
      },
      taxonomy: {
        title: "Taxonomy of Web Agents",
        sections: [
          {
            title: "Core Capabilities",
            items: [
              {
                name: "Navigation",
                description:
                  "Web agents can load URLs, follow internal links, scroll, and maintain a multi-step navigation plan. This capability is fundamental across all web-agent benchmarks, with WebArena specifically emphasizing multi-page reasoning (Zhou et al., 2023).",
                references: ["Zhou et al., 2023"],
              },
              {
                name: "Information Extraction",
                description:
                  "Agents extract DOM text, identify elements, gather structured data, or parse tables. This is a continuation of early UI-extraction benchmarks like MiniWoB++ (Shi et al., 2017).",
                references: ["Shi et al., 2017"],
              },
              {
                name: "Interaction",
                description:
                  "Agents can click, type, select options, upload files, or submit forms. Realistic interaction is a core component of WebShop, where customers complete shopping tasks (Yao et al., 2022).",
                references: ["Yao et al., 2022"],
              },
              {
                name: "Planning & Reasoning",
                description:
                  "The LLM produces step-by-step plans—sometimes explicitly, sometimes internally—to determine what actions to take. Autonomous multi-step planning is a major research direction in agent security, especially in AgentDojo (Chen et al., 2024).",
                references: ["Chen et al., 2024"],
              },
              {
                name: "Memory & State Tracking",
                description:
                  "Web agents maintain short-term memory of previous steps, previously visited pages, and goals. State summarization and contextual tracking are emphasized in recent research on safe multi-agent systems like CaMeL (Kim et al., 2024).",
                references: ["Kim et al., 2024"],
              },
            ],
          },
          {
            title: "Architecture",
            items: [
              {
                name: "LLM Backbone",
                description:
                  "Most systems use a large-model planner (GPT-4 series, Claude, DeepSeek R1) supported by system prompts and reasoning.",
              },
              {
                name: "Browser Interface",
                description:
                  "Common backends include Playwright, Selenium, Chrome DevTools, or hosted APIs like OpenAI's Web Interaction API.",
              },
              {
                name: "Tool or Action Layer",
                description:
                  "The agent transforms reasoning steps into explicit actions such as click(selector). Safety frameworks like ProAgent (Bai et al., 2024) analyze these calls to prevent unsafe execution.",
                references: ["Bai et al., 2024"],
              },
              {
                name: "Observation Filter",
                description:
                  "To mitigate prompt injections or misleading HTML, systems often sanitize observations before passing them to the LLM—this strategy is highlighted in CaMeL (Kim et al., 2024).",
                references: ["Kim et al., 2024"],
              },
            ],
          },
        ],
      },
      vulnerabilities: {
        title: "Common Vulnerabilities",
        items: [
          {
            name: "Prompt Injection (PI)",
            severity: "high",
            description:
              "Web-based prompt injection occurs when malicious instructions are embedded in webpage text, HTML attributes, hidden spans, or CSS (Carlini et al., 2023). WebArena and AgentDojo both show that even benign-looking elements can override agent rules (Zhou et al., 2023; Chen et al., 2024).",
            references: [
              "Carlini et al., 2023",
              "Zhou et al., 2023",
              "Chen et al., 2024",
            ],
          },
          {
            name: "Tool Misuse / Unsafe Action Execution",
            severity: "high",
            description:
              'Agents might unintentionally click destructive buttons ("delete account," "confirm purchase"). The ProAgent framework quantifies how often LLM agents take unsafe actions without user intention (Bai et al., 2024).',
            references: ["Bai et al., 2024"],
          },
          {
            name: "Hallucinated Actions",
            severity: "medium",
            description:
              "LLMs sometimes hallucinate nonexistent UI elements, leading to invalid operations or broken navigation (Chen et al., 2024).",
            references: ["Chen et al., 2024"],
          },
          {
            name: "State Desynchronization",
            severity: "medium",
            description:
              "Because the DOM changes rapidly, the agent may take actions based on outdated observations—a failure mode described in WebArena during multi-step planning tasks (Zhou et al., 2023).",
            references: ["Zhou et al., 2023"],
          },
          {
            name: "Data Leakage",
            severity: "high",
            description:
              "LLMs can unintentionally reveal sensitive data (cookies, API keys). Leakage concerns are formally studied in LessLeak-Bench (Ye et al., 2024).",
            references: ["Ye et al., 2024"],
          },
          {
            name: "Overtrust in Web Content",
            severity: "medium",
            description:
              "Agents may assume the site is honest, enabling phishing or manipulation. LLM susceptibility to misleading instructions has been documented in prompt-injection studies (Carlini et al., 2023).",
            references: ["Carlini et al., 2023"],
          },
        ],
      },
      attacks: {
        title: "Attack Types",
        items: [
          {
            name: "Hidden HTML Instructions",
            description:
              'Using <span style="display:none"> to embed malicious instructions that are invisible to users but processed by the agent (PI demonstration: Carlini et al., 2023).',
            references: ["Carlini et al., 2023"],
          },
          {
            name: "CSS-Encoded Instructions",
            description:
              "Embedding instructions through CSS properties that agents parse during DOM analysis (Zhou et al., 2023).",
            references: ["Zhou et al., 2023"],
          },
          {
            name: "Fake Login or Payment Pages",
            description:
              "Phishing pages designed to trick agents into submitting credentials or payment information (WebArena phishing experiments).",
          },
          {
            name: "Instruction-in-URL Attacks",
            description:
              "Encoded parameters in URLs that steer agent behavior in unintended directions (Chen et al., 2024).",
            references: ["Chen et al., 2024"],
          },
          {
            name: "Pop-up or Overlay Traps",
            description:
              "Modal dialogs or overlays that obscure the real state and confuse agent navigation (Yao et al., 2022).",
            references: ["Yao et al., 2022"],
          },
        ],
      },
    },
  },
  // TODO: Additional agent types to be added
];

export function getAgentBySlug(slug: string): AgentDetail | undefined {
  return agentsData.find((agent) => agent.slug === slug);
}

export function getAllAgents(): AgentDetail[] {
  return agentsData;
}
