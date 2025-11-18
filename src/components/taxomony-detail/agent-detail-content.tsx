import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AgentDetail } from "@/lib/agent-data";

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

function ShieldAlertIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 8v4" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 16h.01" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const severityConfig = {
  low: {
    icon: CheckCircleIcon,
    color: "text-green-500",
    bg: "bg-green-500/10",
    label: "Low",
  },
  medium: {
    icon: AlertTriangleIcon,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    label: "Medium",
  },
  high: {
    icon: AlertCircleIcon,
    color: "text-red-500",
    bg: "bg-red-500/10",
    label: "High",
  },
};

export function AgentDetailContent({ agent }: { agent: AgentDetail }) {
  const { detailedInfo } = agent;

  return (
    <div className="space-y-16">
      {/* Overview Section */}
      <section id="overview" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-balance">
          {detailedInfo.overview.title}
        </h2>
        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {detailedInfo.overview.content}
            </p>
            {detailedInfo.overview.references && (
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold mb-3 text-foreground">
                  References
                </h4>
                <div className="flex flex-wrap gap-2">
                  {detailedInfo.overview.references.map((ref) => (
                    <Badge key={ref} variant="outline" className="text-xs">
                      {ref}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Taxonomy Section */}
      <section id="taxonomy" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-balance">
          {detailedInfo.taxonomy.title}
        </h2>
        <div className="space-y-8">
          {detailedInfo.taxonomy.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-2xl font-semibold mb-4 text-balance">
                {section.title}
              </h3>
              <div className="grid gap-4">
                {section.items.map((item) => (
                  <Card key={item.name} className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-pretty">
                        {item.description}
                      </p>
                      {item.references && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.references.map((ref) => (
                            <Badge
                              key={ref}
                              variant="outline"
                              className="text-xs"
                            >
                              {ref}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vulnerabilities Section */}
      <section id="vulnerabilities" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <ShieldAlertIcon className="h-8 w-8 text-red-500" />
          <h2 className="text-3xl font-bold text-balance">
            {detailedInfo.vulnerabilities.title}
          </h2>
        </div>
        <div className="grid gap-4">
          {detailedInfo.vulnerabilities.items.map((vuln) => {
            const severity = severityConfig[vuln.severity];
            const SeverityIcon = severity.icon;

            return (
              <Card key={vuln.name} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-lg">{vuln.name}</CardTitle>
                    <div
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${severity.bg} shrink-0`}
                    >
                      <SeverityIcon
                        className={`h-3.5 w-3.5 ${severity.color}`}
                      />
                      <span className={`text-xs font-medium ${severity.color}`}>
                        {severity.label}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {vuln.description}
                  </p>
                  {vuln.references && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {vuln.references.map((ref) => (
                        <Badge key={ref} variant="outline" className="text-xs">
                          {ref}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Attacks Section */}
      <section id="attacks" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-balance">
          {detailedInfo.attacks.title}
        </h2>
        <div className="grid gap-4">
          {detailedInfo.attacks.items.map((attack) => (
            <Card key={attack.name} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">{attack.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {attack.description}
                </p>
                {attack.references && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {attack.references.map((ref) => (
                      <Badge key={ref} variant="outline" className="text-xs">
                        {ref}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
