import { Button } from "@/components/ui/button";
import { Shield, Menu } from "lucide-react";
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

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/taxonomy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Taxonomy
            </Link>
            <Link
              href="/vulnerabilities"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Vulnerabilities
            </Link>
            <Link
              href="/research"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Research
            </Link>
            <Link
              href="/docs"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex">
              Sign In
            </Button>
            <Button className="glow-primary">Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
