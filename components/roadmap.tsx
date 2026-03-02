import { roadmapSteps } from "@/config/roadmap";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Roadmap() {
  return (
    <section id="roadmap" className="border-b border-border-white py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Live roadmap"
          title="March rollout"
          description="A public build log for taking Team8AI from concept to a usable, verification-first system."
        />

        <div className="space-y-5">
          {roadmapSteps.map((step) => {
            const isCurrent = step.status === "current";
            const isNext = step.status === "next";

            return (
              <div
                key={step.date}
                className="grid gap-4 rounded-2xl border border-border-white bg-card-bg p-5 md:grid-cols-[180px_1fr_auto] md:items-center"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-3 w-3 rounded-full ${isCurrent ? "bg-accent-blue" : isNext ? "bg-white" : "bg-secondary-text/50"}`}
                  />
                  <p className="text-sm font-medium text-secondary-text">
                    {step.date}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary-text">
                    {step.title} {isCurrent ? "📍 We are here" : ""}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-secondary-text">
                    {step.description}
                  </p>
                </div>

                <div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      isCurrent
                        ? "border border-accent-blue/30 bg-accent-blue/10 text-accent-blue"
                        : isNext
                          ? "border border-white/15 bg-background text-primary-text"
                          : "border border-border-white bg-background text-secondary-text"
                    }`}
                  >
                    {isCurrent ? "Live" : isNext ? "Next" : "Planned"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
