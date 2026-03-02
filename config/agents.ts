import {
    Bot,
    FileSearch,
    Building2,
    ScanSearch,
    FilePenLine,
    Mail,
    ShieldCheck,
    Send,
} from 'lucide-react';

export const agents = [
    {
        name: 'Collector',
        description: 'Captures and structures job descriptions from job boards and company sites.',
        status: 'Foundation',
        icon: FileSearch,
    },
    {
        name: 'Gatekeeper',
        description: 'Filters roles by fit, location, stack and priority before effort is spent.',
        status: 'March 9',
        icon: Bot,
    },
    {
        name: 'Researcher',
        description: 'Builds company context, product clues and hiring signals for better positioning.',
        status: 'Planned',
        icon: Building2,
    },
    {
        name: 'Keyword Extractor',
        description: 'Identifies ATS terms, repeated requirements and signal-rich language.',
        status: 'March 16',
        icon: ScanSearch,
    },
    {
        name: 'Resume Tailor',
        description: 'Reframes approved experience against the role without inventing facts.',
        status: 'March 16',
        icon: FilePenLine,
    },
    {
        name: 'Cover Letter Writer',
        description: 'Drafts tailored narrative while keeping the human pilot in control.',
        status: 'March 16',
        icon: Mail,
    },
    {
        name: 'Verifier',
        description: 'Checks every claim against the Facts Ledger before approval or submission.',
        status: 'Online',
        icon: ShieldCheck,
        featured: true,
    },
    {
        name: 'Submitter',
        description: 'Runs approval-gated, safe-mode submission flows and logs evidence.',
        status: 'March 30',
        icon: Send,
    },
] as const;