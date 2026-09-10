# Astera Intervention Hub

[中文 README](README.zh-CN.md)

Astera is an AI-assisted technical intervention platform for small businesses, freelancers, super-individuals, and boutique technical teams.

It is designed to solve a specific problem: a business may know that something technical is hurting growth, reliability, or security, but may not know how to diagnose, scope, or safely commission the fix. Astera turns that uncertainty into a protected, measurable intervention.

## Product Idea

Astera is not a generic freelance marketplace. It combines:

- AI-assisted translation of vague business pain into technical milestones
- Privacy-safe scoping before sensitive business details are shared
- Supplier capability profiles generated from public proof and project evidence
- Real-name verification for individuals through a Vipps-ready flow
- ENK and AS company verification concepts
- Milestone-based smart escrow and evidence-linked payment release
- Reputation across speed, reliability, and quality
- Proactive supplier outreach when public signals suggest an avoidable technical risk
- Vulnerability bounties, preventive diagnostics, and elastic supplier teams

The core promise is simple: reduce uncertainty before work begins, make delivery evidence visible, and help prevent expensive technical incidents before they happen.

## Website Flows

### Home

The landing page introduces the platform and routes visitors into the relevant role-based experience.

### Demand: `/demand`

For businesses and other demanders:

- Describe a technical problem in plain language
- Translate the problem into a structured technical brief
- Protect sensitive business information through anonymized scoping
- Review supplier matches, milestones, budgets, and delivery risk
- Use escrow and milestone evidence to protect execution

### Supplier: `/supplier`

For technical suppliers and solvers:

- Generate a capability profile from GitHub, LinkedIn, YouTube, CVs, and project pages
- Surface mapped technology skills and validated public signals
- Discover structured, high-fit project opportunities
- Identify public technical risks for potential clients
- Send bounded, respectful preventive outreach for client review
- Participate in vulnerability bounties and elastic delivery squads

### Trust: `/trust`

The trust control layer demonstrates:

- Individual real-name verification through Vipps
- ENK proprietor and organization verification
- AS authorized-person and company verification
- Privacy-preserving identity status
- Smart escrow with locked, in-review, and released milestones
- Evidence-linked delivery and multidimensional reputation

### Workspace: `/workspace`

An interactive presentation demo showing the product layer between matching and delivery:

- Demand and supplier role views
- Explainable supplier match scores
- Milestone status and evidence review
- Reputation signals across speed, reliability, and quality
- Moderated proactive outreach from draft to review queue
- Collective intelligence views for anonymized patterns, peer benchmarks, and reusable playbooks

### Collective intelligence

Once the network has enough verified clients, suppliers, interventions, and delivery evidence, Astera can create a privacy-preserving learning layer:

- Aggregate recurring technical challenges into recognizable patterns.
- Give businesses relevant peer benchmarks without exposing another client's identity or raw metrics.
- Turn successful evidence sequences into reusable diagnostic and delivery playbooks.
- Improve AI intake prompts, matching, prevention suggestions, and supplier recommendations over time.

This layer should use consent, aggregation thresholds, anonymization, source provenance, human review, and deletion controls. Private briefs, client names, raw financial metrics, and proprietary evidence should not automatically enter the shared insight layer.

The current Vipps and company verification interactions are frontend concept flows. A production implementation would connect them to Vipps Login/API and an appropriate Norwegian organization registry or verification provider.

## Technology

- Next.js 14 with the App Router
- React 18 and TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Python and `python-pptx` for the companion strategy decks

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a production build:

```bash
npm run build
```

## Project Structure

```text
app/
  page.tsx              # Main landing page
  demand/page.tsx       # Demand-side experience
  supplier/page.tsx     # Supplier-side experience
  trust/page.tsx        # Trust and verification experience
  globals.css           # Global styling and visual system
business_strategy_summary.md
generate_ppt.py         # English strategy deck generator
translate_v1_to_zh.py   # Chinese translation generator for the v1 deck
```

## Companion Materials

The repository also contains strategy notes and presentation material:

- `business_strategy_summary.md` contains the business, UX, technical, and logic analysis.
- `ai_talent_exchange_brainstorming_v1.pptx` is the English strategy deck.
- `ai_talent_exchange_brainstorming_v1_zh.pptx` is the Chinese translation of the v1 deck.
- `ai_talent_exchange_brainstorming_v2.pptx` contains the expanded trust, verification, prevention, and liquidity model.

## Product Principles

1. Trust should be observable, not merely claimed.
2. Privacy should be built into scoping and disclosure.
3. Funds should follow verifiable outcomes.
4. Public technical signals should support prevention, not public shaming.
5. AI should reduce ambiguity while keeping important decisions reviewable.
6. Marketplace growth should preserve quality rather than trade it for volume.
