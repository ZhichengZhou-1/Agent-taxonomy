"use client";

import { useMemo, useState } from "react";
import {
  TaxonomyFilters,
  Category,
} from "@/components/taxonomy-list/taxonomy-filters";
import { TaxonomyGrid } from "@/components/taxonomy-list/taxonomy-grid";
import { agentListMock } from "@/components/taxonomy-list/mockAgentList";
import { AgentListItem } from "@/interface/agent";

// Helper to lowercase safely
const lc = (s?: string) => (s ?? "").toLowerCase();

export function TaxonomyClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const agentList = useMemo<AgentListItem[]>(() => {
    const q = lc(query.trim());

    return agentListMock.filter((a) => {
      // 1) Category filter
      const categoryOk =
        activeCategory === "All" || a.category === activeCategory;
      if (!categoryOk) return false;

      // 2) Text query (name + description + topCapabilities)
      if (!q) return true;

      const haystack = [
        a.name,
        // support either shortDescription or description depending on your mock
        (a as AgentListItem).shortDescription ??
          (a as AgentListItem).description,
        ...(a.topCapabilities ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
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
      <TaxonomyGrid agentList={agentList} />
    </>
  );
}
