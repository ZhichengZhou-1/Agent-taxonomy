import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AgentDetail } from "@/lib/agent-detail-data";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import {
  ClipboardCheckIcon,
  CodeIcon,
  DatabaseIcon,
  InfoIcon,
  LightbulbIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "./agent-detail-icon";

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
        <div className="flex items-center gap-3 mb-6">
          <InfoIcon className="h-7 w-7 text-purple-500 self-center flex-shrink-0" />
          <h2 className="text-3xl font-bold text-balance leading-tight">
            {detailedInfo.overview.title}
          </h2>
        </div>
        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {detailedInfo.overview.content}
            </p>
            {detailedInfo.overview.references &&
              detailedInfo.overview.references.length > 0 && (
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

      {/* Capabilities Section */}
      <section id="capabilities" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-6 self-center flex-shrink-0">
          <ZapIcon className="h-7 w-7 text-yellow-500" />
          <h2 className="text-3xl font-bold text-balance">Capabilities</h2>
        </div>

        <div className="space-y-8">
          {detailedInfo.capabilities.items.map((section) => (
            <div key={section.name}>
              <div className="grid gap-4">
                <Card key={section.name} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{section.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                      {section.description}
                    </p>
                    {section.references.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <h4 className="text-sm font-semibold mb-3 text-foreground">
                          References
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {section.references.map((ref) => (
                            <Badge
                              key={ref}
                              variant="outline"
                              className="text-xs"
                            >
                              {ref}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Data Source Section */}
      <section id="data_source_bench" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <DatabaseIcon className="h-7 w-7 text-blue-500 self-center flex-shrink-0" />
          <h2 className="text-3xl font-bold text-balance">
            Data Source & Benchmarks
          </h2>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Data Sources</h3>

            <div className="grid gap-6">
              {detailedInfo.data_source_bench.dataSources.map((section) => (
                <Card key={section.name} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{section.name}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                      {section.description}
                    </p>

                    {section.references && section.references.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <h4 className="text-sm font-semibold mb-3">
                          References
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {section.references.map((ref) => (
                            <Badge
                              key={ref}
                              variant="outline"
                              className="text-xs"
                            >
                              {ref}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Benchmarks</h3>

            <div className="grid gap-6">
              {detailedInfo.data_source_bench.benchmarks.map((bench) => {
                const [categoryLabel, shortName] = bench.name.includes(":")
                  ? bench.name.split(":").map((s) => s.trim())
                  : [undefined, bench.name];

                return (
                  <Card key={bench.name} className="bg-card border-border">
                    <CardHeader>
                      {categoryLabel && (
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">
                          {categoryLabel}
                        </p>
                      )}
                      <CardTitle className="text-lg">{shortName}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-pretty">
                        {bench.description}
                      </p>

                      {bench.references && bench.references.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-border">
                          <h4 className="text-sm font-semibold mb-3">
                            References
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {bench.references.map((ref) => (
                              <Badge
                                key={ref}
                                variant="outline"
                                className="text-xs"
                              >
                                {ref}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
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
            return (
              <Card key={vuln.name} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-lg">{vuln.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {vuln.description}
                  </p>
                  {vuln.references && vuln.references.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="text-sm font-semibold mb-3 text-foreground">
                        References
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {vuln.references.map((ref) => (
                          <Badge
                            key={ref}
                            variant="outline"
                            className="text-xs"
                          >
                            {ref}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Defense Section */}
      <section id="defenses" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheckIcon className="h-7 w-7 text-green-500 " />
          <h2 className="text-3xl font-bold text-balance">Defenses</h2>
        </div>
        <div className="grid gap-4">
          {detailedInfo.defense.items.map((defense) => (
            <Card key={defense.name} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">{defense.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {defense.description}
                </p>
                {defense.references.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">
                      References
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {defense.references.map((ref) => (
                        <Badge key={ref} variant="outline" className="text-xs">
                          {ref}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Example Agent Section */}
      <section id="example_agent" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <LightbulbIcon className="h-7 w-7 text-orange-500" />
          <h2 className="text-3xl font-bold text-balance">Example Agent</h2>
        </div>
        <div className="grid gap-4">
          {detailedInfo.example_agent.items.map((example_agent) => (
            <Card key={example_agent.name} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">{example_agent.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {example_agent.description}
                </p>
                {example_agent.image && (
                  <div className="mt-4">
                    <Image
                      src={example_agent.image}
                      alt={example_agent.image}
                      width={800}
                      height={420}
                      className="rounded-lg object-cover"
                    />
                  </div>
                )}
                {example_agent.references.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">
                      References
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {example_agent.references.map((ref) => (
                        <Badge key={ref} variant="outline" className="text-xs">
                          {ref}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Prompt Template Section */}
      <section id="prompt_template" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <CodeIcon className="h-7 w-7 text-cyan-500" />
          <h2 className="text-3xl font-bold text-balance">Prompt Template</h2>
        </div>
        <div className="grid gap-4">
          <Card
            key={detailedInfo.prompt_template.title}
            className="bg-card border-border"
          >
            <CardHeader>
              <CardTitle className="text-lg">
                {detailedInfo.prompt_template.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {detailedInfo.prompt_template.code.map((c, i) => (
                <div
                  key={i}
                  className="
      rounded-lg border border-border/70 bg-muted/60
      p-4 font-mono text-xs leading-relaxed
      whitespace-pre-wrap overflow-x-auto
    "
                >
                  {c}
                </div>
              ))}
              {detailedInfo.prompt_template.references.length > 0 && (
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold mb-3 text-foreground">
                    References
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {detailedInfo.prompt_template.references.map((ref) => (
                      <Badge key={ref} variant="outline" className="text-xs">
                        {ref}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Setup Checklist Section */}
      <section id="setup_checklist" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <ClipboardCheckIcon className="h-7 w-7 text-indigo-500" />
          <h2 className="text-3xl font-bold text-balance">Setup Checklist</h2>
        </div>

        <div className="grid gap-4">
          {detailedInfo.setup_checklist.items.map((block) => (
            <Card key={block.name} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">{block.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {block.items.map((step: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>

                {block.references && block.references.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">
                      References
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {block.references.map((ref) => (
                        <Badge key={ref} variant="outline" className="text-xs">
                          {ref}
                        </Badge>
                      ))}
                    </div>
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
