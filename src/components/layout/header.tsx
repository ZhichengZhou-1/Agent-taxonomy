import { Shield } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10 glow-primary">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-semibold text-foreground">
              AgentAtlas
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
