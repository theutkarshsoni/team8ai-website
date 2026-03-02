import { workflowStages } from "@/config/workflow";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Workflow() {
  return (
    <section id="workflow" className="border-b border-border-white py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="7-stage workflow"
          title="Capture → Decide → Generate → Verify → Approve → Submit → Track"
          description="The system is designed to keep the human approval point visible, deliberate, and central to the workflow."
        />

        <div className="grid gap-4 md:grid-cols-7">
          {workflowStages.map((stage, index) => (
            <div key={stage.label} className="relative">
              {index !== workflowStages.length - 1 ? (
                <div className="absolute left-[calc(100%-0.5rem)] top-6 hidden h-px w-[calc(100%+1rem)] bg-border-white md:block" />
              ) : null}
              <div
                className={`relative h-full rounded-2xl border p-4 ${
                  stage.featured
                    ? "border-accent-blue bg-accent-blue/10 shadow-[var(--shadow-panel)]"
                    : "border-border-white bg-card-bg"
                }`}
              >
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold ${
                    stage.featured
                      ? "bg-accent-blue text-white"
                      : "border border-border-white bg-background text-primary-text"
                  }`}
                >
                  {index + 1}
                </div>
                <h3
                  className={`text-base font-semibold ${stage.featured ? "text-white" : "text-primary-text"}`}
                >
                  {stage.label}
                </h3>
                <p
                  className={`mt-2 text-sm leading-6 ${stage.featured ? "text-blue-100" : "text-secondary-text"}`}
                >
                  {stage.description}
                </p>
                {stage.featured ? (
                  <div className="mt-4 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white">
                    Human approval required
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
