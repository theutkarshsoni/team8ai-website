export const workflowStages = [
  { label: 'Capture', description: 'Ingest and normalize the job description.', featured: false },
  { label: 'Decide', description: 'Score fit before spending energy tailoring.', featured: false },
  { label: 'Generate', description: 'Draft resume and application artifacts.', featured: false },
  { label: 'Verify', description: 'Run no-new-facts checks against the ledger.', featured: false },
  { label: 'Approve', description: 'Human reviews changes before anything is sent.', featured: true },
  { label: 'Submit', description: 'Safe-mode form filling or guided send.', featured: false },
  { label: 'Track', description: 'Save evidence, outcomes and follow-ups.', featured: false },
] as const;