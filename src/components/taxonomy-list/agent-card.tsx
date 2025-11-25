import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Agent } from "@/interface/agent";
import Link from "next/link";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link href={`/taxonomy/${agent.id}`}>
      <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary group h-full">
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {agent.name}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {agent.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold mb-2 text-foreground">
              Capabilities
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {agent.capabilities.map((capability) => (
                <Badge key={capability} variant="secondary" className="text-xs">
                  {capability}
                </Badge>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Last Updated</span>
              <span className="text-foreground font-medium">
                {agent.lastUpdated}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
