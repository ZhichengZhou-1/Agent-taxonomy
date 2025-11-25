export interface Agent {
  id: string;
  name: string;
  category: string;
  description: string;
  capabilities: string[];
  lastUpdated: string;
}

export interface AgentListItem {
  id: string;
  name: string;
  category: Agent["category"];
  lastUpdated: string;
  description: string;
  capabilities: string[];
  badge?: "New" | "Updated" | "Experimental" | "Stable";
  iconKey?: string;
}
