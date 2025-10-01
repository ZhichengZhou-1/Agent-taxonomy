import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";

export function MainSection() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            <span className="text-primary">v1.0</span> for 839E
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Comprehensive <span className="text-primary">AI Agent</span>
            <br />
            taxonomy and security.
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Map the AI agent landscape with our comprehensive taxonomy and
            vulnerability database.
          </p>
        </div>
      </div>
    </section>
  );
}
