export function TaxonomySection() {
  return (
    <section className="container mx-auto px-4 pt-32 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="text-sm font-medium text-primary">
            AI Agent Classification
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
          Agent taxonomy and vulnerability atlas
        </h1>
        <p className="text-xl text-muted-foreground text-balance leading-relaxed">
          A comprehensive classification system for AI agents across different
          domains, capabilities, and architectures. Explore the evolving
          landscape of autonomous systems.
        </p>
      </div>
    </section>
  );
}
