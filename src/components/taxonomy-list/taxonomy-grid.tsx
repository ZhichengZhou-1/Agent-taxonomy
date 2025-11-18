import { AgentListItem } from "@/interface/agent";
import { AgentCard } from "./agent-card";
/**
 * TODO: replace this with data fetching layer
 */

export function TaxonomyGrid({ agentList }: { agentList: AgentListItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {agentList.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}
