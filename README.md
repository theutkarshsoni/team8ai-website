# Team8AI

**Team8AI** is a human-led career automation system built on the philosophy of **Teammate AI** where AI handles the repetitive grunt work, while the human remains the pilot.

This project is the public-facing single-page website for documenting the **Building in Public** journey behind Team8AI.

---

## Philosophy

Most job-search automation tools force a bad trade-off:

- **Manual search** is slow, exhausting, and hard to sustain
- **Blind automation** can hallucinate experience, damage trust, and create compliance risks

**Team8AI** is built to solve that tension.

Instead of replacing the human, Team8AI removes the repetitive work:
- collecting job descriptions
- filtering roles
- extracting keywords
- tailoring materials
- verifying claims
- preparing safe-mode submissions

The human stays in control of:
- judgment
- approval
- truth
- final submission

---

## Core idea: Teammate AI, not autopilot AI

Team8AI is based on three principles:

1. **AI handles repetition**  
   Parsing, ranking, drafting, and organizing

2. **Human owns judgment**  
   Positioning, approval, and professional accountability

3. **Integrity is designed in**  
   Facts Ledger, Verifier Agent, and no-new-facts enforcement

---

## The 8-Agent Squad

Team8AI is structured around 8 focused agents:

1. **Collector**  
   Captures and structures job descriptions from job boards and company sites

2. **Gatekeeper**  
   Filters roles by fit, location, stack, and priority

3. **Researcher**  
   Builds company context, product clues, and hiring signals

4. **Keyword Extractor**  
   Identifies ATS terms, repeated requirements, and ranking signals

5. **Resume Tailor**  
   Reframes approved experience against the role without inventing facts

6. **Cover Letter Writer**  
   Drafts tailored narrative while keeping the human pilot in control

7. **Verifier**  
   Checks every claim against the Facts Ledger before approval or submission

8. **Submitter**  
   Handles approval-gated, safe-mode submission flows and logs evidence

---

## The 7-Stage Workflow

Team8AI follows a verification-first workflow:

**Capture → Decide → Generate → Verify → Approve → Submit → Track**

### Stages
- **Capture** — ingest and normalize the job description
- **Decide** — score fit before spending effort
- **Generate** — tailor resume and application materials
- **Verify** — enforce no-new-facts checks
- **Approve** — human reviews changes before anything is sent
- **Submit** — safe-mode form filling or guided send
- **Track** — save evidence, outcomes, and follow-ups

The key differentiator is **Approve**: the human remains the final gate.

---

## No-New-Facts Enforcement

The most important rule in Team8AI is simple:

> **No new facts.**

The system should not invent experience, inflate ownership or fabricate outcomes.

Every claim must be checked against a structured **Facts Ledger** built from real:
- projects
- metrics
- roles
- timelines
- outcomes

If a generated claim does not exist in the approved ledger, it should be blocked.

---

## Website Goal

This repository contains the public website for Team8AI.

The site is meant to:
- explain the problem Team8AI is solving
- communicate the Teammate AI philosophy
- show the 8-agent architecture and workflow
- highlight the Verifier and no-new-facts rule
- document the roadmap publicly
- serve as a proof-of-work artifact

---

## Tech Stack

### Frontend
- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React**

### Deployment
- **Vercel**

### MVP Data Layer
- **Airtable** for CRM, saved jobs, and evidence tracking

### Automation
- **Playwright** for safe-mode form filling

---

## Project Structure

```text
team8ai/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ agents-grid.tsx
│  ├─ container.tsx
│  ├─ footer.tsx
│  ├─ hero.tsx
│  ├─ navbar.tsx
│  ├─ problem-solution.tsx
│  ├─ roadmap.tsx
│  ├─ section-heading.tsx
│  ├─ tech-stack.tsx
│  ├─ verifier.tsx
│  └─ workflow.tsx
├─ config/
│  ├─ agents.ts
│  ├─ roadmap.ts
│  ├─ site.ts
│  └─ workflow.ts
├─ lib/
│  ├─ airtable.ts
│  └─ utils.ts
├─ public/
├─ .env.local.example
├─ next.config.ts
├─ postcss.config.mjs
└─ tsconfig.json