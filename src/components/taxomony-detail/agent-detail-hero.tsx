import { Badge } from "@/components/ui/badge";
import { AgentDetail } from "@/lib/agent-data";
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

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path
        d="m9 12 2 2 4-4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AlertTriangleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 9v4" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 17h.01" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AlertCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path d="M12 8v4" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 16h.01" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const riskConfig = {
  low: {
    icon: CheckCircleIcon,
    color: "text-green-500",
    bg: "bg-green-500/10",
    label: "Low Risk",
  },
  medium: {
    icon: AlertTriangleIcon,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    label: "Medium Risk",
  },
  high: {
    icon: AlertCircleIcon,
    color: "text-red-500",
    bg: "bg-red-500/10",
    label: "High Risk",
  },
};

export function AgentDetailHero({ agent }: { agent: AgentDetail }) {
  const risk = riskConfig[agent.riskLevel];
  const RiskIcon = risk.icon;

  return (
    <div className="border-b border-border bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/taxonomy"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Taxonomy
        </Link>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="text-sm">
              {agent.category}
            </Badge>
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${risk.bg}`}
            >
              <RiskIcon className={`h-4 w-4 ${risk.color}`} />
              <span className={`text-sm font-medium ${risk.color}`}>
                {risk.label}
              </span>
            </div>
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

          <div className="flex items-center gap-4 pt-4 text-sm">
            <div>
              <span className="text-muted-foreground">Architecture: </span>
              <span className="text-foreground font-medium">
                {agent.architecture}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
