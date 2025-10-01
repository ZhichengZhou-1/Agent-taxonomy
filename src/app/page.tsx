import { Header } from "@/components/layout/header";
import { MainSection } from "@/components/layout/main-section";
import { StatsSection } from "@/components/layout/stats-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      <Header />
      <main>
        <MainSection />
        <StatsSection />
      </main>
    </div>
  );
}
