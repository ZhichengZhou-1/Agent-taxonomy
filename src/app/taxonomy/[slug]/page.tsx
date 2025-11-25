import { notFound } from "next/navigation";
import { AgentDetailHero } from "@/components/taxomony-detail/agent-detail-hero";
import { AgentDetailNav } from "@/components/taxomony-detail/agent-detail-nav";
import { AgentDetailContent } from "@/components/taxomony-detail/agent-detail-content";
import { getAgentBySlug } from "@/lib/agent-detail-data";

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <AgentDetailHero agent={agent} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sticky Navigation */}
          <div className="lg:col-span-3">
            <AgentDetailNav />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <AgentDetailContent agent={agent} />
          </div>
        </div>
      </div>
    </div>
  );
}
