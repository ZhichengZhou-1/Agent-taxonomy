"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  "All",
  "Web Agent",
  "Coding Agent",
  "Multimodal Agent",
  "Embodied Agent",
  "Financial Agent",
] as const;

export type Category = (typeof categories)[number];

export function TaxonomyFilters({
  query,
  onQueryChange,
  activeCategory,
  onCategoryChange,
}: {
  query: string;
  onQueryChange: (v: string) => void;
  activeCategory: Category;
  onCategoryChange: (c: Category) => void;
}) {
  return (
    <div className="mb-12 space-y-6">
      <div className="relative max-w-md">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" strokeWidth="2" />
          <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <Input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search agents..."
          className="pl-10 bg-card border-border"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
