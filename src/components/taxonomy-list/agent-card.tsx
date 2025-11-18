import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AgentListItem } from "@/interface/agent";
import { Globe, Code2, Camera, Bot, DollarSign } from "lucide-react";
import Link from "next/link";

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
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
      aria-hidden="true"
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
      aria-hidden="true"
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
} as const;

type Category =
  | "Web Agent"
  | "Coding Agent"
  | "Multimodal Agent"
  | "Embodied Agent"
  | "Financial Agent";

const categoryIconMap: Record<
  Category,
  React.ComponentType<{ className?: string }>
> = {
  "Web Agent": Globe,
  "Coding Agent": Code2,
  "Multimodal Agent": Camera,
  "Embodied Agent": Bot,
  "Financial Agent": DollarSign,
};

const categoryTintMap: Record<Category, string> = {
  "Web Agent": "text-sky-500",
  "Coding Agent": "text-indigo-500",
  "Multimodal Agent": "text-pink-500",
  "Embodied Agent": "text-emerald-500",
  "Financial Agent": "text-amber-500",
};

// --- helpers ---
function formatRelativeTime(iso: string) {
  const ts = new Date(iso).getTime();
  if (Number.isNaN(ts)) return iso; // fallback
  const diffMs = Date.now() - ts;
  const sec = Math.floor(diffMs / 1000);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const day = Math.floor(hr / 24);

  if (sec < 60) return "just now";
  if (min < 60) return `${min} min ago`;
  if (hr < 24) return `${hr} hr${hr > 1 ? "s" : ""} ago`;
  if (day < 30) return `${day} day${day > 1 ? "s" : ""} ago`;
  // month-ish
  const month = Math.floor(day / 30);
  if (month < 12) return `${month} mo${month > 1 ? "s" : ""} ago`;
  const year = Math.floor(month / 12);
  return `${year} yr${year > 1 ? "s" : ""} ago`;
}

export function AgentCard({ agent }: { agent: AgentListItem }) {
  const risk = riskConfig[agent.riskLevel];
  const RiskIcon = risk.icon;

  const category = agent.category as Category;
  const CategoryIcon = categoryIconMap[category] ?? Globe;
  const catTint = categoryTintMap[category] ?? "text-muted-foreground";

  // const caps = Array.isArray(agent.capabilities) ? agent.capabilities : [];
  // const top3 = caps.slice(0, 3);
  // const remaining = Math.max(0, caps.length - top3.length);

  const relative = formatRelativeTime(agent.lastUpdated);

  return (
    <Link href={`/taxonomy/${agent.id}`}>
      <Card
        className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl focus-within:ring-2 focus-within:ring-primary/40 group"
        role="article"
        aria-label={`${agent.name} card`}
        tabIndex={0}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3 mb-1">
            <div className="flex items-center gap-2">
              <span className={`p-2 rounded-lg ${catTint}/10`}>
                <CategoryIcon
                  className={`h-4 w-4 ${catTint}`}
                  aria-hidden="true"
                />
              </span>
              <Badge variant="outline" className="text-[10px] leading-none">
                {agent.category}
              </Badge>
            </div>

            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-full ${risk.bg}`}
              aria-label={risk.label}
              title={risk.label}
            >
              <RiskIcon className={`h-3 w-3 ${risk.color}`} />
              <span className={`text-xs font-medium ${risk.color}`}>
                {risk.label}
              </span>
            </div>
          </div>

          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {agent.name}
          </CardTitle>

          {/* Truncated description for list view (2 lines). If you don't use the Tailwind line-clamp plugin, replace with a single-line truncate. */}
          {/* <CardDescription className="text-sm leading-relaxed line-clamp-2">
          {agent.description}
        </CardDescription> */}
        </CardHeader>

        <CardContent className="space-y-3 pt-0">
          {/* Capabilities: top 3 + “+N more” */}
          {/* {top3.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold mb-1.5 text-foreground/90">
              Capabilities
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {top3.map((cap) => (
                <Badge key={cap} variant="secondary" className="text-[10px]">
                  {cap}
                </Badge>
              ))}
              {remaining > 0 && (
                <Badge variant="outline" className="text-[10px]">
                  +{remaining} more
                </Badge>
              )}
            </div>
          </div>
        )} */}

          {/* Footer meta: Architecture (single line, truncated) + Updated (relative) */}
          <div className="pt-3 border-t border-border/60 grid grid-cols-2 gap-2 text-xs">
            <div className="min-w-0">
              <span className="text-muted-foreground">Architecture</span>
              {/* <div
              className="font-medium text-foreground truncate"
              title={agent.architecture}
            >
              {agent.architecture}
            </div> */}
            </div>
            <div className="text-right">
              <span className="text-muted-foreground">Updated</span>
              <div
                className="font-medium text-foreground"
                title={agent.lastUpdated}
              >
                {relative}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
