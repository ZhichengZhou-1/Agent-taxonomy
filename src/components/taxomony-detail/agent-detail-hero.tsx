import { Badge } from "@/components/ui/badge";
import { AgentDetail } from "@/lib/agent-detail-data";
import Link from "next/link";

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M19 12H5M12 19l-7-7 7-7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AgentDetailHero({ agent }: { agent: AgentDetail }) {
  return (
    <div className="border-b border-border bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/taxonomy"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Main page
        </Link>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Last updated: {agent.lastUpdated}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            {agent.name}
          </h1>

          <p className="text-xl text-muted-foreground text-pretty max-w-3xl leading-relaxed">
            {agent.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {agent.capabilities.map((capability) => (
              <Badge key={capability} variant="secondary">
                {capability}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
