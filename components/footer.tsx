import { Mail, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "./container";

export function Footer() {
  return (
    <footer id="connect" className="py-16">
      <Container>
        <div className="rounded-2xl border border-border-white bg-card-bg p-8">
          <p className="text-sm uppercase tracking-[0.22em] text-accent-blue">
            Connect & collaborate
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary-text">
            Interested in the tech? Have feedback on the “No-new-facts” rule?
            Let's collaborate.
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border-white bg-background px-5 py-3 text-sm font-semibold text-primary-text transition hover:border-accent-blue hover:text-accent-blue"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent-blue px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
