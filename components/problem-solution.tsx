import { AlertTriangle, BriefcaseBusiness, Shield } from "lucide-react";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function ProblemSolution() {
  return (
    <section id="problem" className="border-b border-border-white py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="The problem"
          title="Between manual exhaustion and reckless automation"
          description="The current job search experience forces a bad trade-off: either spend endless time tailoring every application, or let generic AI tools generate fast but untrustworthy output."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border-white bg-card-bg p-6">
            <div className="mb-5 inline-flex rounded-2xl border border-border-white bg-background p-3">
              <BriefcaseBusiness className="h-5 w-5 text-primary-text" />
            </div>
            <h3 className="text-xl font-semibold text-primary-text">
              Manual search burns energy
            </h3>
            <p className="mt-3 leading-7 text-secondary-text">
              Every strong application needs tailoring. Doing that repeatedly is
              mentally expensive, slow, and difficult to sustain with
              consistency.
            </p>
          </div>

          <div className="rounded-2xl border border-border-white bg-card-bg p-6">
            <div className="mb-5 inline-flex rounded-2xl border border-border-white bg-background p-3">
              <AlertTriangle className="h-5 w-5 text-accent-blue" />
            </div>
            <h3 className="text-xl font-semibold text-primary-text">
              Blind AI introduces risk
            </h3>
            <p className="mt-3 leading-7 text-secondary-text">
              Hallucinated experience, low-integrity outreach, and automated
              submissions can create compliance problems and damage trust.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border-white bg-gradient-to-br from-card-bg to-background p-8">
          <div className="mb-5 inline-flex rounded-2xl border border-verified-green/30 bg-verified-green/10 p-3">
            <Shield className="h-5 w-5 text-verified-green" />
          </div>
          <h3 className="text-2xl font-semibold text-primary-text">
            Teammate AI, not autopilot AI
          </h3>
          <p className="mt-4 text-lg leading-8 text-secondary-text">
            Team8AI removes the grunt work while keeping the human pilot
            responsible for judgment, approval, and professional integrity. The
            goal is not to remove the human. The goal is to remove the
            repetitive work that stops the human from doing better work.
          </p>
        </div>
      </Container>
    </section>
  );
}
