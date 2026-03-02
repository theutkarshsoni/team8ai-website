import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  UserRoundCog,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "./container";

const statusItems = [
  {
    label: "Agents online",
    value: "0 / 8",
    icon: Cpu,
    state: "text-accent-blue",
  },
  {
    label: "Approval mode",
    value: "Required",
    icon: UserRoundCog,
    state: "text-primary-text",
  },
  {
    label: "Verifier",
    value: "Offline",
    icon: ShieldCheck,
    state: "text-verified-green",
  },
  {
    label: "Evidence log",
    value: "Active",
    icon: CheckCircle2,
    state: "text-verified-green",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border-white"
    >
      <div className="absolute inset-0 opacity-50 grid-bg" />

      <Container className="relative grid gap-10 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.2em] text-secondary-text">
            <span className="rounded-full border border-border-white bg-card-bg px-3 py-1">
              Human-in-the-loop
            </span>
            <span className="rounded-full border border-border-white bg-card-bg px-3 py-1">
              No-new-facts
            </span>
            <span className="rounded-full border border-border-white bg-card-bg px-3 py-1">
              Safe-mode automation
            </span>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-primary-text md:text-6xl">
              <span className="bg-accent-blue">Team8AI:</span> Your Career Search, Powered by a Squad of 8 AI Agents.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-secondary-text md:text-xl">
              Moving beyond blind automation to a human-led partnership. Solving
              the trade-off between volume and quality with professional
              integrity.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#workflow"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent-blue px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
            >
              View the Technical Blueprint <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-border-white bg-card-bg px-5 py-3 text-sm font-semibold text-primary-text transition hover:border-accent-blue hover:text-accent-blue"
            >
              Follow the Journey on LinkedIn
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-border-white bg-card-bg p-6 shadow-[var(--shadow-panel)] backdrop-blur-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-secondary-text">
                System Status Panel
              </p>
              <h3 className="mt-2 text-xl font-semibold text-primary-text">
                Foundation rollout
              </h3>
            </div>
            <span className="rounded-full border border-verified-green/30 bg-verified-green/10 px-3 py-1 text-xs font-medium text-verified-green">
              March 2 • Live
            </span>
          </div>

          <div className="space-y-4">
            {statusItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-border-white px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-border-white bg-background p-2">
                      <Icon className={`h-4 w-4 ${item.state}`} />
                    </div>
                    <span className="text-sm text-secondary-text">
                      {item.label}
                    </span>
                  </div>
                  <span className={`text-sm font-semibold ${item.state}`}>
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-border-white bg-background/70 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-secondary-text">
              Recent log
            </p>
            <div className="mt-3 space-y-3 text-sm text-secondary-text">
              <p className="text-verified-green">Collector → Parsed job description</p>
              <p>Gatekeeper → Fit score queued</p>
              <p>Resume Tailor → Draft ready</p>
              <p>Verifier → Claim check passed</p>
              <p>Submitter → Awaiting approval</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
