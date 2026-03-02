import { fetchAirtableJobs } from '@/lib/airtable';
import { AgentsGrid } from '@/components/agents-grid';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { ProblemSolution } from '@/components/problem-solution';
import { Roadmap } from '@/components/roadmap';
import { TechStack } from '@/components/tech-stack';
import { Verifier } from '@/components/verifier';
import { Workflow } from '@/components/workflow';

export default async function HomePage() {
  const jobs = await fetchAirtableJobs();

  return (
    <main className="min-h-screen bg-background text-primary-text">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <AgentsGrid />
      <Workflow />
      <Verifier />
      <Roadmap />
      <TechStack />

      <section className="border-b border-border-white py-16">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">
          <div className="rounded-2xl border border-border-white bg-card-bg p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-secondary-text">MVP CRM preview</p>
            <h2 className="mt-2 text-2xl font-semibold text-primary-text">Airtable evidence layer</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-secondary-text">
              This placeholder fetch shows how Team8AI can surface captured roles and pipeline state from Airtable while the deeper evidence agent is still in rollout.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {jobs.map((job) => (
                <div key={job.id} className="rounded-2xl border border-border-white bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-secondary-text">{job.company}</p>
                  <h3 className="mt-2 text-lg font-semibold text-primary-text">{job.title}</h3>
                  <div className="mt-4 inline-flex rounded-full border border-border-white bg-card-bg px-3 py-1 text-xs text-secondary-text">
                    {job.stage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}