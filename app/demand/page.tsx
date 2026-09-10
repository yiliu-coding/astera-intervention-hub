'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Lock,
  MessageSquareText,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import { useState } from 'react';

const suppliers = [
  { name: 'Ari Chen', specialty: 'Performance systems', fit: '94%', rate: '$85/hr', verified: true },
  { name: 'Mila Noor', specialty: 'Conversion optimization', fit: '91%', rate: '$72/hr', verified: true },
  { name: 'Jules Park', specialty: 'Backend infra & cache', fit: '89%', rate: '$96/hr', verified: true },
];

export default function DemandPage() {
  const [brief, setBrief] = useState('Our website is too slow and loses sales');
  const [submitted, setSubmitted] = useState(false);

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
              <div className="text-sm font-semibold text-white">Intervention Hub</div>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/demand" className="text-white">Demand</a>
            <a href="/supplier" className="hover:text-white">Supplier</a>
            <a href="/trust" className="hover:text-white">Trust</a>
          </div>

          <a href="/" className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
            Back to home
          </a>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="glass rounded-[30px] p-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-blue-300">
              <Search className="h-3.5 w-3.5" />
              Demand-side AI flow
            </div>

            <h1 className="text-4xl font-semibold text-white md:text-5xl">Describe the problem, we translate it into technical execution.</h1>
            <p className="mt-4 max-w-xl text-lg text-slate-300">
              We turn vague pain into scoping, validation, and supplier matching without exposing your core business signals.
            </p>

            <div className="mt-6 rounded-[26px] border border-white/10 bg-slate-950/70 p-4">
              <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-slate-400">Business pain</label>
              <textarea
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                rows={4}
                className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm text-slate-100 outline-none"
              />

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setSubmitted(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  Translate brief
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200">
                  Privacy review
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.45 }} className="glass rounded-[30px] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                  <MessageSquareText className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Technical translator</div>
                  <div className="font-medium text-white">Agentic AI</div>
                </div>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                encrypted
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-sm text-slate-200">
                <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">Original brief</div>
                {brief}
              </div>

              <div className="ml-auto max-w-[90%] rounded-2xl border border-blue-500/20 bg-blue-500/10 p-3 text-sm text-blue-100">
                <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-blue-200">AI output</div>
                I translated this into a milestone brief: optimize React render cycles, reduce checkout bundle churn, and implement Redis caching for high-intent product pages.
              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-3 text-sm text-emerald-100">
                <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                  <Lock className="h-3.5 w-3.5" />
                  Privacy layer
                </div>
                Sensitive business information is anonymized before supplier discovery.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 xl:px-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="glass rounded-[30px] p-6">
            <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              Structured milestone brief
            </div>

            <div className="space-y-4">
              <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-4">
                <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">Objective</div>
                Improve page performance and restore conversion loss on high-intent product flows.
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-4">
                  <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">Milestone 1</div>
                  Optimize render cycles of checkout and product pages.
                </div>
                <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-4">
                  <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">Milestone 2</div>
                  Add Redis caching and bundle optimization.
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-[30px] p-6">
            <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
              <TrendingUp className="h-4 w-4 text-blue-300" />
              Suggested suppliers
            </div>

            <div className="space-y-4">
              {suppliers.map((item) => (
                <div key={item.name} className="rounded-[22px] border border-white/10 bg-slate-950/70 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold text-white">{item.name}</div>
                      <div className="text-sm text-slate-400">{item.specialty}</div>
                    </div>
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                      {item.verified ? 'verified' : 'new'}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                    <span>Fit score</span>
                    <span className="font-medium text-white">{item.fit}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
                    <span>Rate</span>
                    <span className="font-medium text-white">{item.rate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 xl:px-0">
        <div className="glass rounded-[30px] p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
              <Wallet className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Escrow + trust</div>
              <div className="text-xl font-medium text-white">Secure execution</div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-4">
              <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">Member fee</div>
              <div className="text-2xl font-semibold text-white">$1,250</div>
              <div className="mt-2 text-sm text-slate-400">Refundable trust deposit</div>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-4">
              <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">Escrow</div>
              <div className="text-2xl font-semibold text-white">Locked</div>
              <div className="mt-2 text-sm text-slate-400">Escrow released after milestone proof</div>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-4">
              <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">Reputation</div>
              <div className="text-2xl font-semibold text-white">4.8/5</div>
              <div className="mt-2 text-sm text-slate-400">Speed, quality, and reliability score</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
