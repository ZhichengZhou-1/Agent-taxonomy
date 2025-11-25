import { Header } from "@/components/layout/header";
import { MainSection } from "@/components/layout/main-section";
import { TaxonomyClient } from "@/components/taxonomy-list/taxonomy-client";
import { TaxonomySection } from "@/components/taxonomy-list/taxonomy-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      <Header />
      <main>
        <TaxonomySection />
        <div className="container mx-auto px-4 py-12">
          <TaxonomyClient />
        </div>
      </main>
    </div>
  );
}
