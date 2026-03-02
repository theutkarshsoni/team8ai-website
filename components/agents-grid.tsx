import { agents } from "@/config/agents";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function AgentsGrid() {
  return (
    <section id="agents" className="border-b border-border-white py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="The 8-agent squad"
          title="A teammate system designed for control, evidence, and throughput"
          description="Each agent handles a focused slice of the workflow, while the human pilot remains the approval gate for anything that affects reputation or truth."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {agents.map((agent) => {
            const Icon = agent.icon;
            const featured = agent.featured;

            return (
              <article
                key={agent.name}
                className={`rounded-2xl border p-5 transition hover:-translate-y-1 ${
                  featured
                    ? "border-verified-green/30 bg-verified-green/5 shadow-[var(--shadow-panel)]"
                    : "border-border-white bg-card-bg"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-2xl border border-border-white bg-background p-3">
                    <Icon
                      className={`h-5 w-5 ${featured ? "text-verified-green" : "text-accent-blue"}`}
                    />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      agent.featured
                        ? "border border-verified-green/30 bg-verified-green/10 text-verified-green"
                        : "border border-border-white bg-background text-secondary-text"
                    }`}
                  >
                    {agent.status}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-primary-text">
                  {agent.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-secondary-text">
                  {agent.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
