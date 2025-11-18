export interface Agent {
  id: string;
  name: string;
  category: string;
  description: string;
  capabilities: string[];
  architecture: string;
  riskLevel: "low" | "medium" | "high";
  lastUpdated: string;
}

export interface AgentListItem {
  description?: string | undefined;
  id: string;
  name: string;
  category: Agent["category"];
  riskLevel: Agent["riskLevel"];
  lastUpdated: string;
  shortDescription?: string;
  topCapabilities?: string[];
  badge?: "New" | "Updated" | "Experimental" | "Stable";
  iconKey?: string;
}
