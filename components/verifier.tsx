import { CheckCircle2, ShieldAlert, ShieldCheck } from "lucide-react";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

const verificationItems = [
  {
    claim: "Improved platform load time to sub-100ms for a SaaS experience.",
    status: "Verified",
    note: "Matched to approved performance optimization evidence in Facts Ledger.",
  },
  {
    claim: "Reduced manual review workload by 85% in a claims workflow.",
    status: "Verified",
    note: "Matched to approved automation and adjudication project evidence.",
  },
  {
    claim: "Led hiring across 3 engineering teams.",
    status: "Blocked",
    note: "No supporting evidence found in Facts Ledger.",
  },
];

export function Verifier() {
  return (
    <section className="border-b border-border-white py-20">
      <Container className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Integrity innovation"
            title="The rule that matters: No new facts"
            description="Team8AI does not allow the system to invent experience, inflate scope, or fabricate outcomes. Every claim must be cross-referenced against a structured Facts Ledger built from real projects, real metrics, and real professional history."
          />

          <div className="rounded-2xl border border-border-white bg-card-bg p-6">
            <div className="mb-4 inline-flex rounded-2xl border border-verified-green/30 bg-verified-green/10 p-3">
              <ShieldCheck className="h-5 w-5 text-verified-green" />
            </div>
            <h3 className="text-xl font-semibold text-primary-text">
              Facts Ledger + Verifier Agent
            </h3>
            <p className="mt-3 leading-7 text-secondary-text">
              If a resume bullet mentions performance gains or workflow
              improvement, the Verifier checks whether that claim already exists
              in the approved ledger. If it does not, the claim is blocked
              before approval.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border-white bg-card-bg p-6 shadow-[var(--shadow-panel)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-secondary-text">
                Verification Report
              </p>
              <h3 className="mt-2 text-xl font-semibold text-primary-text">
                Claim-by-claim audit
              </h3>
            </div>
            <span className="rounded-full border border-verified-green/30 bg-verified-green/10 px-3 py-1 text-xs font-medium text-verified-green">
              Ledger connected
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {verificationItems.map((item) => {
              const verified = item.status === "Verified";
              return (
                <div
                  key={item.claim}
                  className="rounded-2xl border border-border-white bg-background/80 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="max-w-[80%] text-sm leading-7 text-primary-text">
                      {item.claim}
                    </p>
                    <div className="mt-1">
                      {verified ? (
                        <CheckCircle2 className="h-5 w-5 text-verified-green" />
                      ) : (
                        <ShieldAlert className="h-5 w-5 text-red-400" />
                      )}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-xs">
                    <span
                      className={`rounded-full px-3 py-1 font-medium ${
                        verified
                          ? "border border-verified-green/30 bg-verified-green/10 text-verified-green"
                          : "border border-red-500/20 bg-red-500/10 text-red-300"
                      }`}
                    >
                      {item.status}
                    </span>
                    <span className="text-secondary-text">{item.note}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
