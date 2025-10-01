import { Card } from "@/components/ui/card";

const stats = [
  {
    value: "2,847",
    label: "AI Agents Cataloged",
    description: "Comprehensive agent profiles",
  },
  {
    value: "156",
    label: "Vulnerabilities Tracked",
    description: "Active security threats",
  },
  {
    value: "98%",
    label: "Coverage Rate",
    description: "Of known agent types",
  },
  {
    value: "24/7",
    label: "Threat Monitoring",
    description: "Real-time updates",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-card/50 border-border/50 glow-accent"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
