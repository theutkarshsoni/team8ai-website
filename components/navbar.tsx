import { siteConfig } from '@/config/site';
import { Container } from './container';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-white bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-[0.18em] text-primary-text">
          TEAM8<span className="text-accent-blue">AI</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-secondary-text md:flex">
          <a href="#problem" className="transition hover:text-primary-text">Problem</a>
          <a href="#agents" className="transition hover:text-primary-text">Agents</a>
          <a href="#workflow" className="transition hover:text-primary-text">Workflow</a>
          <a href="#roadmap" className="transition hover:text-primary-text">Roadmap</a>
          <a href="#connect" className="transition hover:text-primary-text">Connect</a>
        </nav>

        <a
          href={siteConfig.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-border-white bg-card-bg px-4 py-2 text-sm font-medium text-primary-text transition hover:border-accent-blue hover:text-accent-blue"
        >
          Follow on LinkedIn
        </a>
      </Container>
    </header>
  );
}