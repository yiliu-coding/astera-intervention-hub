'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileText,
  Gauge,
  Lock,
  Lightbulb,
  MessageSquareText,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  WalletCards,
} from 'lucide-react';
import { useState } from 'react';

const matches = [
  { name: 'Ari Chen', role: 'Frontend / systems', score: 94, reasons: ['React performance', 'Checkout systems', '4.8 delivery score'] },
  { name: 'Mila Noor', role: 'Growth engineering', score: 91, reasons: ['Conversion optimization', 'E-commerce systems', 'Fast response time'] },
  { name: 'Jules Park', role: 'Backend infrastructure', score: 89, reasons: ['Redis and caching', 'AWS architecture', 'Reliable handoffs'] },
];

const milestones = [
  { title: 'Baseline audit', status: 'Complete', detail: 'Performance trace and bottleneck map approved.' },
  { title: 'Render optimization', status: 'In review', detail: 'Before/after Lighthouse evidence is ready for review.' },
  { title: 'Cache rollout', status: 'Next', detail: 'Production rollout follows acceptance of the optimization milestone.' },
];

const intelligenceViews = {
  patterns: {
    label: 'Challenge patterns',
    title: 'Checkout performance is becoming a repeatable intervention.',
    insight: '42 similar interventions found across anonymized projects',
    detail: 'The most common combination is render churn plus cache gaps. Astera can suggest the diagnostic sequence before a new client has to describe the issue perfectly.',
    metric: '68%',
    metricLabel: 'faster initial scoping',
  },
  benchmark: {
    label: 'Peer benchmarks',
    title: 'Give a business a useful baseline, not a generic promise.',
    insight: 'Performance and delivery evidence compared against a relevant peer set',
    detail: 'A client can see how its baseline, expected effort, and milestone pace compare with similar interventions without exposing another company’s identity or raw data.',
    metric: '3.2x',
    metricLabel: 'more confident decisions',
  },
  playbooks: {
    label: 'Reusable playbooks',
    title: 'Every completed intervention improves the next one.',
    insight: 'A validated playbook is ready for the next high-fit match',
    detail: 'Successful evidence sequences become reusable guidance for suppliers and clearer intake prompts for demanders. Human review keeps weak or context-specific advice out of the shared layer.',
    metric: '17',
    metricLabel: 'validated playbooks',
  },
};

export default function WorkspacePage() {
  const [role, setRole] = useState<'demand' | 'supplier'>('demand');
  const [activeMatch, setActiveMatch] = useState(0);
  const [activeMilestone, setActiveMilestone] = useState(1);
  const [outreachStatus, setOutreachStatus] = useState<'draft' | 'review' | 'queued'>('draft');
  const [intelligenceView, setIntelligenceView] = useState<keyof typeof intelligenceViews>('patterns');
  const summaryCards = [
    { label: 'Project health', value: 'On track', icon: CheckCircle2, color: 'text-emerald-300' },
    { label: 'Milestone progress', value: '2 / 3', icon: ClipboardCheck, color: 'text-blue-300' },
    { label: 'Evidence quality', value: '78%', icon: Gauge, color: 'text-amber-300' },
    { label: 'Protected brief', value: 'Private', icon: Lock, color: 'text-emerald-300' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 xl:px-0">
        <nav className="glass mb-8 flex items-center justify-between rounded-full px-4 py-3 md:px-6">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-300"><Sparkles className="h-4 w-4" /></div>
            <div><div className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Astera</div><div className="text-sm font-semibold text-white">Demo workspace</div></div>
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex"><a href="/" className="hover:text-white">Home</a><a href="/demand" className="hover:text-white">Demand</a><a href="/supplier" className="hover:text-white">Supplier</a><a href="/trust" className="hover:text-white">Trust</a><a href="/workspace" className="text-white">Workspace</a></div>
          <a href="/" className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">Exit demo</a>
        </nav>

        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><div className="text-[10px] uppercase tracking-[0.2em] text-blue-300">Interactive product walkthrough</div><h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">One workspace for the work between matching and delivery.</h1><p className="mt-4 max-w-2xl text-lg leading-7 text-slate-400">This demo shows how Astera makes matching explainable, project progress visible, and proactive outreach reviewable.</p></div>
          <div className="flex rounded-full border border-white/10 bg-white/5 p-1"><button onClick={() => setRole('demand')} className={`rounded-full px-4 py-2 text-sm transition ${role === 'demand' ? 'bg-blue-500 text-white' : 'text-slate-400'}`}>Demand view</button><button onClick={() => setRole('supplier')} className={`rounded-full px-4 py-2 text-sm transition ${role === 'supplier' ? 'bg-emerald-500 text-white' : 'text-slate-400'}`}>Supplier view</button></div>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {summaryCards.map(({ label, value, icon: Icon, color }) => <div key={label} className="glass rounded-2xl p-4"><Icon className={`h-4 w-4 ${color}`} /><div className="mt-4 text-2xl font-semibold text-white">{value}</div><div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">{label}</div></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8 xl:px-0">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="glass rounded-[30px] p-5">
            <div className="mb-5 flex items-center justify-between"><div><div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Active intervention</div><div className="mt-1 text-xl font-medium text-white">Recover checkout performance</div></div><span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-300">{role === 'demand' ? 'Client view' : 'Supplier view'}</span></div>
            <div className="mb-5 rounded-2xl border border-blue-400/20 bg-blue-500/5 p-4"><div className="flex items-center gap-2 text-sm font-medium text-blue-100"><MessageSquareText className="h-4 w-4" /> AI-translated objective</div><p className="mt-3 text-sm leading-6 text-slate-300">Improve high-intent page performance and recover conversion loss without exposing proprietary revenue data to the supplier shortlist.</p><div className="mt-3 flex flex-wrap gap-2"><span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-slate-300">React rendering</span><span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-slate-300">Checkout</span><span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-slate-300">Redis caching</span></div></div>
            <div className="space-y-3">{milestones.map((milestone, index) => <button key={milestone.title} onClick={() => setActiveMilestone(index)} className={`w-full rounded-2xl border p-4 text-left transition ${activeMilestone === index ? 'border-blue-400/50 bg-blue-500/10' : 'border-white/10 bg-slate-950/60 hover:border-white/20'}`}><div className="flex items-center gap-3"><div className={`flex h-8 w-8 items-center justify-center rounded-full ${milestone.status === 'Complete' ? 'bg-emerald-500/15 text-emerald-300' : activeMilestone === index ? 'bg-blue-500/20 text-blue-300' : 'bg-slate-800 text-slate-400'}`}>{milestone.status === 'Complete' ? <Check className="h-4 w-4" /> : index + 1}</div><div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-4"><span className="font-medium text-white">{milestone.title}</span><span className="text-[10px] uppercase tracking-[0.15em] text-slate-400">{milestone.status}</span></div><div className="mt-1 text-sm text-slate-400">{milestone.detail}</div></div></div></button>)}</div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300"><FileText className="h-4 w-4 text-blue-300" /> Evidence panel: {milestones[activeMilestone].detail}</div>
          </div>

          <div className="space-y-5">
            <div className="glass rounded-[30px] p-5"><div className="mb-4 flex items-center justify-between"><div><div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Explainable matching</div><div className="mt-1 text-xl font-medium text-white">Why these suppliers?</div></div><Target className="h-5 w-5 text-blue-300" /></div><div className="space-y-3">{matches.map((match, index) => <button key={match.name} onClick={() => setActiveMatch(index)} className={`w-full rounded-2xl border p-4 text-left transition ${activeMatch === index ? 'border-emerald-400/40 bg-emerald-500/5' : 'border-white/10 bg-slate-950/60 hover:border-white/20'}`}><div className="flex items-center justify-between"><div><div className="font-medium text-white">{match.name}</div><div className="text-sm text-slate-400">{match.role}</div></div><div className="text-right"><div className="text-lg font-semibold text-emerald-300">{match.score}%</div><div className="text-[10px] uppercase tracking-[0.15em] text-slate-500">fit</div></div></div>{activeMatch === index && <div className="mt-3 flex flex-wrap gap-2">{match.reasons.map((reason) => <span key={reason} className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] text-emerald-200">{reason}</span>)}</div>}</button>)}</div></div>

            <div className="glass rounded-[30px] p-5"><div className="mb-4 flex items-center justify-between"><div><div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Supplier control</div><div className="mt-1 text-xl font-medium text-white">Preventive outreach</div></div><AlertTriangle className="h-5 w-5 text-amber-300" /></div><div className="rounded-2xl border border-amber-400/20 bg-amber-500/5 p-4"><div className="text-sm font-medium text-white">Possible payment gateway risk</div><p className="mt-2 text-sm leading-6 text-slate-400">Public behavior suggests a compatibility risk. The proposal is limited to a diagnostic and avoids exposing private security details.</p></div><div className="mt-4 flex items-center gap-2 text-xs text-slate-500"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Moderated, rate-limited, and reviewable</div><button onClick={() => setOutreachStatus(outreachStatus === 'draft' ? 'review' : 'queued')} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-sm font-medium text-blue-100">{outreachStatus === 'draft' ? <>Review outreach <ArrowRight className="h-4 w-4" /></> : outreachStatus === 'review' ? <>Queue for moderation <Send className="h-4 w-4" /></> : <><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Queued for moderation</>}</button></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 xl:px-0"><div className="grid gap-5 md:grid-cols-3"><div className="rounded-[24px] border border-white/10 bg-white/5 p-5"><Users className="h-5 w-5 text-blue-300" /><h3 className="mt-4 font-medium text-white">Role dashboards</h3><p className="mt-2 text-sm leading-6 text-slate-400">The same intervention is presented differently to the business and the supplier without duplicating the underlying trust state.</p></div><div className="rounded-[24px] border border-white/10 bg-white/5 p-5"><WalletCards className="h-5 w-5 text-emerald-300" /><h3 className="mt-4 font-medium text-white">Evidence-linked delivery</h3><p className="mt-2 text-sm leading-6 text-slate-400">Every milestone has a visible state and evidence explanation, ready to connect to real storage and review APIs later.</p></div><div className="rounded-[24px] border border-white/10 bg-white/5 p-5"><ShieldCheck className="h-5 w-5 text-amber-300" /><h3 className="mt-4 font-medium text-white">Governed prevention</h3><p className="mt-2 text-sm leading-6 text-slate-400">Supplier insights become respectful, bounded outreach rather than unmoderated vulnerability claims.</p></div></div></section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 xl:px-0">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-violet-300"><Lightbulb className="h-3.5 w-3.5" /> Collective intelligence</div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">The network gets smarter without making private problems public.</h2>
            <p className="mt-4 max-w-xl text-lg leading-7 text-slate-300">Once Astera has enough verified interventions, shared challenge patterns, evidence sequences, and delivery outcomes can improve the service for everyone.</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-400"><Lock className="h-4 w-4 text-emerald-300" /> Aggregated, anonymized, permission-aware learning</div>
          </div>

          <div className="glass rounded-[30px] p-5">
            <div className="mb-4 flex flex-wrap gap-2">
              {(Object.keys(intelligenceViews) as Array<keyof typeof intelligenceViews>).map((key) => <button key={key} onClick={() => setIntelligenceView(key)} className={`rounded-full px-3 py-2 text-xs font-medium transition ${intelligenceView === key ? 'bg-violet-500 text-white' : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white'}`}>{intelligenceViews[key].label}</button>)}
            </div>
            <motion.div key={intelligenceView} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-[24px] border border-violet-400/20 bg-violet-500/5 p-5">
              <div className="flex items-start justify-between gap-4"><div><div className="text-[10px] uppercase tracking-[0.18em] text-violet-300">{intelligenceViews[intelligenceView].insight}</div><h3 className="mt-3 text-2xl font-semibold text-white">{intelligenceViews[intelligenceView].title}</h3></div><BarChart3 className="h-5 w-5 shrink-0 text-violet-300" /></div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{intelligenceViews[intelligenceView].detail}</p>
              <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4"><div><div className="text-3xl font-semibold text-violet-200">{intelligenceViews[intelligenceView].metric}</div><div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">{intelligenceViews[intelligenceView].metricLabel}</div></div><div className="max-w-[220px] text-right text-xs leading-5 text-slate-500">No client names, raw briefs, or proprietary metrics enter the shared insight layer.</div></div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
