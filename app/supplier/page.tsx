'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  AlertTriangle,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  GitBranch,
  Globe,
  ShieldCheck,
  Send,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from 'lucide-react';
import { useMemo, useState } from 'react';

const stackTags = ['React', 'Next.js', 'Node.js', 'Redis', 'PostgreSQL', 'AWS', 'Tailwind', 'TypeScript'];

const bountyBoards = [
  { title: 'Outdated payment gateway', company: 'Northfield Commerce', risk: 'High', bounty: '$18,000' },
  { title: 'Legacy auth flow', company: 'Aster Health', risk: 'Medium', bounty: '$12,500' },
  { title: 'Render bottleneck on product grid', company: 'Horizon Goods', risk: 'Medium', bounty: '$9,800' },
];

export default function SupplierPage() {
  const [url, setUrl] = useState('https://github.com/shiftpilot');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [selectedClient, setSelectedClient] = useState('Northfield Commerce');
  const [outreachSent, setOutreachSent] = useState(false);

  const capabilitySummary = useMemo(
    () => ({
      name: 'Ari Chen',
      role: 'Senior Frontend / Systems Engineer',
      match: '92% fit for performance & growth work',
    }),
    []
  );

  const handleGenerate = () => {
    setIsGenerating(true);
    setGenerated(false);

    window.setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 1800);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 xl:px-0">
        <nav className="glass mb-10 flex items-center justify-between rounded-full px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Astera</div>
              <div className="text-sm font-semibold text-white">Supplier network</div>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/demand" className="hover:text-white">Demand</a>
            <a href="/supplier" className="text-white">Supplier</a>
            <a href="/trust" className="hover:text-white">Trust</a>
            <a href="/workspace" className="hover:text-white">Workspace</a>
          </div>

          <a href="/" className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200">
            Join as solver
          </a>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="glass rounded-[30px] p-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Proof of capability
            </div>

            <h1 className="text-4xl font-semibold text-white md:text-5xl">Turn public proof into a trusted capability profile.</h1>
            <p className="mt-4 max-w-xl text-lg text-slate-300">
              Auto-scan GitHub, LinkedIn, YouTube, project pages, and public work to generate a credible technical profile without manual rewriting.
            </p>

            <div className="mt-6 rounded-[26px] border border-white/10 bg-slate-950/70 p-4">
              <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-slate-400">Public URL</label>
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-slate-100 outline-none"
              />

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isGenerating ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Generating profile...
                  </>
                ) : (
                  <>
                    Generate Profile
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.45 }} className="glass rounded-[30px] p-5">
            {!generated && !isGenerating ? (
              <div className="flex h-full min-h-[330px] flex-col items-center justify-center rounded-[24px] border border-dashed border-white/10 bg-slate-900/60 p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300">
                  <Globe className="h-7 w-7" />
                </div>
                <p className="max-w-xs text-slate-400">
                  Paste a profile URL to generate a validated capability snapshot and tag stack.
                </p>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-[26px] border border-white/10 bg-slate-900/70 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-emerald-400/20 text-lg font-semibold text-white">
                      AC
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">{capabilitySummary.name}</div>
                      <div className="text-sm text-slate-400">{capabilitySummary.role}</div>
                    </div>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                    Verified
                  </div>
                </div>

                <div className="mb-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 px-3 py-2 text-sm text-emerald-200">
                  {capabilitySummary.match}
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {stackTags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-3">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Speed</div>
                    <div className="mt-2 text-xl font-semibold text-white">4.8/5</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-3">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Reliability</div>
                    <div className="mt-2 text-xl font-semibold text-white">96%</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-3">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Quality</div>
                    <div className="mt-2 text-xl font-semibold text-white">A+</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 xl:px-0">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-[30px] p-6">
            <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
              <BriefcaseBusiness className="h-4 w-4 text-blue-300" />
              Active opportunities
            </div>

            <div className="space-y-4">
              {[
                { title: 'Performance sprint', company: 'Northfield Commerce', budget: '$12k' },
                { title: 'Checkout optimization', company: 'Horizon Goods', budget: '$9.4k' },
                { title: 'Security remediation', company: 'Aster Health', budget: '$14k' },
              ].map((job) => (
                <div key={job.title} className="rounded-[24px] border border-white/10 bg-slate-950/70 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold text-white">{job.title}</div>
                      <div className="text-sm text-slate-400">{job.company}</div>
                    </div>
                    <div className="text-sm font-medium text-emerald-300">{job.budget}</div>
                  </div>
                  <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
                    View brief
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[30px] p-6">
            <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
              <Zap className="h-4 w-4 text-amber-300" />
              Vulnerability bounty
            </div>

            <div className="space-y-4">
              {bountyBoards.map((item) => (
                <div key={item.title} className="rounded-[24px] border border-white/10 bg-slate-950/70 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-lg font-semibold text-white">{item.title}</div>
                    <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-amber-300">{item.risk}</span>
                  </div>
                  <div className="text-sm text-slate-400">{item.company}</div>
                  <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 px-3 py-2 text-sm text-emerald-200">
                    {item.bounty} bounty
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 xl:px-0">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-300">
              <AlertTriangle className="h-3.5 w-3.5" />
              Preventive consulting
            </div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Help a client avoid the incident before it becomes a project.</h2>
            <p className="mt-4 max-w-xl text-lg leading-7 text-slate-300">Suppliers can responsibly flag a visible technical risk, explain the likely business consequence, and offer a small funded diagnostic before the cost compounds.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Use public, non-sensitive signals only</div>
              <div className="flex items-center gap-3"><Send className="h-4 w-4 text-blue-300" /> Send one respectful, reviewable outreach</div>
              <div className="flex items-center gap-3"><Wallet className="h-4 w-4 text-amber-300" /> Convert accepted risk into a funded diagnostic</div>
            </div>
          </div>

          <div className="glass rounded-[30px] p-5">
            <div className="rounded-[25px] border border-white/10 bg-slate-950/70 p-4">
              <div className="mb-5 flex items-center justify-between">
                <div><div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Proactive outreach desk</div><div className="mt-1 text-xl font-medium text-white">Call out a vulnerability</div></div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-emerald-300">Safe disclosure</div>
              </div>

              <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-slate-400">Client</label>
              <select value={selectedClient} onChange={(event) => { setSelectedClient(event.target.value); setOutreachSent(false); }} className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-slate-100 outline-none">
                <option>Northfield Commerce</option>
                <option>Horizon Goods</option>
                <option>Aster Health</option>
              </select>

              <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-500/5 p-4">
                <div className="flex items-center justify-between"><div className="text-sm font-medium text-white">Payment gateway dependency</div><span className="text-[10px] uppercase tracking-[0.15em] text-amber-300">Medium risk</span></div>
                <p className="mt-2 text-sm leading-6 text-slate-400">Public checkout behavior suggests an outdated integration path. A controlled upgrade could reduce failed payments and emergency migration cost.</p>
              </div>

              <div className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-500/5 p-4 text-sm leading-6 text-blue-100">“We noticed a public compatibility risk in your checkout flow. We can run a bounded diagnostic and share the evidence before recommending any change.”</div>
              <button onClick={() => setOutreachSent(true)} disabled={outreachSent} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-emerald-600/80">{outreachSent ? <><CheckCircle2 className="h-4 w-4" /> Outreach queued for review</> : <>Send for client review <Send className="h-4 w-4" /></>}</button>
              <div className="mt-3 text-center text-xs text-slate-500">Astera rate-limits outreach and never exposes private vulnerability details.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 xl:px-0">
        <div className="glass rounded-[30px] p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Trust and rewards</div>
              <div className="mt-1 text-xl font-medium text-white">Reputation and protection</div>
            </div>
            <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-300">
              secure
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-4">
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-300">
                <Wallet className="h-4 w-4 text-emerald-300" />
                Trust deposit
              </div>
              <div className="text-2xl font-semibold text-white">$1,250</div>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-4">
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-300">
                <GitBranch className="h-4 w-4 text-blue-300" />
                Delivery score
              </div>
              <div className="text-2xl font-semibold text-white">4.8/5</div>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-4">
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Team mode
              </div>
              <div className="text-2xl font-semibold text-white">Elastic squad</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
