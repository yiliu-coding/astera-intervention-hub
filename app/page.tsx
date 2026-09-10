'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  GitBranch,
  GitPullRequest,
  Globe,
  Lock,
  MessageSquareText,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRoundCheck,
  Wand2,
} from 'lucide-react';
import { useMemo, useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const stackTags = [
  'React',
  'Next.js',
  'Node.js',
  'Redis',
  'PostgreSQL',
  'AWS',
  'Tailwind',
  'TypeScript',
  'GraphQL',
  'SEO',
];

export default function Page() {
  const [url, setUrl] = useState('https://github.com/shiftpilot');
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setHasGenerated(false);

    window.setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 1800);
  };

  const capabilitySummary = useMemo(
    () => ({
      name: 'Ari Chen',
      role: 'Senior Frontend / Systems Engineer',
      match: '92% fit for performance & growth work',
      verified: true,
    }),
    []
  );

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-8 md:px-8 xl:px-0">
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:24px_24px] opacity-30" />
        <nav className="glass mb-10 flex items-center justify-between rounded-full px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 shadow-glow">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Astera</div>
              <div className="text-sm font-semibold text-slate-50">Intervention Hub</div>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#platform" className="transition hover:text-white">Platform</a>
            <a href="#proof" className="transition hover:text-white">Proof</a>
            <a href="/trust" className="transition hover:text-white">Trust</a>
            <a href="#scale" className="transition hover:text-white">Scale</a>
            <a href="/demand" className="transition hover:text-white">Demand</a>
            <a href="/supplier" className="transition hover:text-white">Supplier</a>
            <a href="/workspace" className="transition hover:text-white">Workspace</a>
          </div>

          <a href="/supplier" className="rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/20">
            Join network
          </a>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5" />
              Trusted technical intervention for SMBs
            </div>

            <h1 className="max-w-xl text-balance text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
              The targeted intervention hub for technical solvers and small businesses.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Turn vague operational pain into scoped technical milestones, match with verified experts,
              and protect delivery with AI-powered scoping and smart escrow.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/demand" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400">
                I Need Solutions
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/supplier" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-50 transition hover:bg-white/10">
                I Provide Solutions
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Verified capability
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Encrypted scoping
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Milestone-based escrow
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative"
          >
            <div className="glass relative overflow-hidden rounded-[30px] border border-white/10 p-5 shadow-[0_35px_120px_rgba(15,23,42,0.9)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-400/10" />
              <div className="relative rounded-[24px] border border-white/10 bg-slate-900/80 p-4">
                <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  </div>
                  <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-blue-300">
                    AI match live
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[0.75fr_1.25fr]">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                        <Cpu className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.16em] text-slate-400">Business</div>
                        <div className="font-medium text-slate-50">Pain signal</div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-dashed border-white/10 bg-slate-900/70 p-3">
                      <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-slate-400">
                        <Wand2 className="h-3.5 w-3.5" />
                        Problem brief
                      </div>
                      <p className="text-sm leading-6 text-slate-300">
                        “Our site is too slow and loses checkout conversions.”
                      </p>
                    </div>

                    <div className="mt-4 h-px w-full bg-white/10" />

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <span>Needs</span>
                      <span className="text-emerald-300">Scoping ready</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['React', 'Performance', 'Checkout'].map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 p-1.5 text-emerald-300">
                          <UserRoundCheck className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.15em] text-slate-400">Matched solver</div>
                          <div className="font-medium text-slate-50">Ari Chen</div>
                        </div>
                      </div>
                      <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-300">
                        Verified
                      </div>
                    </div>

                    <div className="relative mb-4 h-24 rounded-2xl bg-gradient-to-r from-blue-500/20 via-slate-800 to-emerald-500/10">
                      <div className="absolute left-3 top-3 h-14 w-14 rounded-2xl border border-blue-300/40 bg-blue-500/20" />
                      <div className="absolute left-20 top-6 rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs text-slate-200">
                        Performance systems
                      </div>
                      <div className="absolute bottom-3 right-4 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-300">
                        92% fit
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-slate-300">
                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                        <span>AI Technical Translator</span>
                        <span className="text-emerald-300">Ready</span>
                      </div>
                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                        <span>Protected brief</span>
                        <span className="text-blue-300">Encrypted</span>
                      </div>
                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                        <span>Escrow status</span>
                        <span className="text-emerald-300">Funded</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-5 py-16 md:px-8 xl:px-0">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45 }} className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-blue-300">
            <Search className="h-3.5 w-3.5" />
            Proof of capability
          </div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Frictionless supplier onboarding</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="glass rounded-[30px] p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Capability generator</div>
                <h3 className="mt-2 text-xl font-medium text-white">AI profile synthesis</h3>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                Verified
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 focus-within:border-blue-500/50">
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-slate-400">Public URL</label>
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://github.com/yourprofile"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500"
              />
            </div>

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

            {isGenerating && (
              <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
                <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-blue-300">
                  <span>AI synthesis</span>
                  <span>42%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '42%' }}
                    transition={{ duration: 0.7 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400"
                  />
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="glass rounded-[30px] p-5"
          >
            {!hasGenerated && !isGenerating ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-[24px] border border-dashed border-white/10 bg-slate-900/60 p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300">
                  <Globe className="h-7 w-7" />
                </div>
                <p className="max-w-xs text-slate-400">
                  Paste a URL to generate a verified profile draft from public proof of capability.
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

      <section id="platform" className="mx-auto max-w-7xl px-5 py-16 md:px-8 xl:px-0">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45 }} className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
            <MessageSquareText className="h-3.5 w-3.5" />
            Agentic scoping
          </div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">AI technical translator for demand-side clarity</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="glass rounded-[30px] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 p-2 text-blue-300">
                  <MessageSquareText className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Technical translator</div>
                  <div className="font-medium text-white">Agentic AI</div>
                </div>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-300">
                Encrypted
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-sm text-slate-300">
                <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-400">Business owner</div>
                “Our website is too slow and loses sales.”
              </div>

              <div className="ml-auto max-w-[85%] rounded-2xl border border-blue-500/20 bg-blue-500/10 p-3 text-sm text-blue-100">
                <div className="mb-2 text-xs uppercase tracking-[0.18em] text-blue-200">Technical translator</div>
                I converted this into a scoped intervention: optimize React render cycles, reduce bundle churn,
                and implement Redis caching for high-traffic product pages.
              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-3 text-sm text-emerald-100">
                <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-emerald-300">
                  <Lock className="h-3.5 w-3.5" />
                  Privacy layer
                </div>
                Proprietary business signals are anonymized and encrypted before supplier exposure.
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/80 p-2">
              <input
                defaultValue="Our website is too slow and loses sales"
                className="flex-1 border-none bg-transparent px-2 py-2 text-sm text-slate-200 outline-none placeholder:text-slate-500"
              />
              <button className="rounded-full bg-blue-500 px-3 py-2 text-xs font-semibold text-white">Send</button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.08 }} className="glass rounded-[30px] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Structured milestone</div>
                <h3 className="mt-2 text-xl font-medium text-white">AI-generated brief</h3>
              </div>
              <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-blue-300">
                Sanitized
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                  <GitBranch className="h-3.5 w-3.5" />
                  Objective
                </div>
                <p className="text-base text-slate-100">Improve page render efficiency and restore conversion loss on high-intent product pages.</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-4">
                  <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-400">Milestone 1</div>
                  <p className="text-sm text-slate-100">Optimize React render cycles</p>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-4">
                  <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-400">Milestone 2</div>
                  <p className="text-sm text-slate-100">Implement Redis caching layer</p>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Expected outcome
                </div>
                <p className="text-sm text-slate-100">Reduce time-to-interactive and increase product-page conversion while preserving business confidentiality.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
