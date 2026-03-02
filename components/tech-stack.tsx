import { Database, Globe, PlaySquare } from "lucide-react";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

const items = [
  {
    title: "Frontend",
    stack: "Next.js + Vercel",
    description:
      "Fast, deploy-first public layer for documenting the build and shipping updates continuously.",
    icon: Globe,
  },
  {
    title: "Database / CRM",
    stack: "Airtable",
    description:
      "MVP home for saved jobs, generated artifacts, evidence logs, and basic pipeline tracking.",
    icon: Database,
  },
  {
    title: "Automation",
    stack: "Playwright",
    description:
      "Safe-mode browser automation for repetitive form filling with human approval still in the loop.",
    icon: PlaySquare,
  },
];

export function TechStack() {
  return (
    <section className="border-b border-border-white py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Proof of work"
          title="Built like a usable system, not just a landing page"
          description="The current stack is intentionally practical: fast to iterate, strong enough for the MVP, and aligned with a build-in-public workflow."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border-white bg-card-bg p-6"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-border-white bg-background p-3">
                  <Icon className="h-5 w-5 text-accent-blue" />
                </div>
                <p className="text-sm uppercase tracking-[0.22em] text-secondary-text">
                  {item.title}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-primary-text">
                  {item.stack}
                </h3>
                <p className="mt-3 text-sm leading-7 text-secondary-text">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
