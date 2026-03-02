export const workflowStages = [
  { label: 'Capture', description: 'Ingest and normalize the job description.' },
  { label: 'Decide', description: 'Score fit before spending energy tailoring.' },
  { label: 'Generate', description: 'Draft resume and application artifacts.' },
  { label: 'Verify', description: 'Run no-new-facts checks against the ledger.' },
  { label: 'Approve', description: 'Human reviews changes before anything is sent.', featured: true },
  { label: 'Submit', description: 'Safe-mode form filling or guided send.' },
  { label: 'Track', description: 'Save evidence, outcomes and follow-ups.' },
] as const;