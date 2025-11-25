"use client";

import { useState, useMemo } from "react";
import {
  TaxonomyFilters,
  Category,
} from "@/components/taxonomy-list/taxonomy-filters";
import { TaxonomyGrid } from "@/components/taxonomy-list/taxonomy-grid";
import { agentList } from "@/lib/agent-list-data";

const categoryToAgentName: Record<Category, string | null> = {
  All: null,
  "Web Agent": "Web Agent",
  "Coding Agent": "Coding Agent",
  "Multimodal Agent": "Multimodal Agent",
  "Embodied Agent": "Embodied Agent",
  "Financial Agent": "Finance Agent",
};

export function TaxonomyClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredAgents = useMemo(() => {
    return agentList.filter((agent) => {
      if (activeCategory !== "All") {
        const expectedName = categoryToAgentName[activeCategory];
        if (expectedName && agent.name !== expectedName) {
          return false;
        }
      }

      if (query.trim()) {
        const searchLower = query.toLowerCase();
        return (
          agent.name.toLowerCase().includes(searchLower) ||
          agent.description.toLowerCase().includes(searchLower) ||
          agent.capabilities.some((cap) =>
            cap.toLowerCase().includes(searchLower)
          )
        );
      }

      return true;
    });
  }, [query, activeCategory]);

  return (
    <>
      <TaxonomyFilters
        query={query}
        onQueryChange={setQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <TaxonomyGrid agentList={filteredAgents} />
    </>
  );
}
