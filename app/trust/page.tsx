'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  FileCheck2,
  Fingerprint,
  Gauge,
  Lock,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Verified,
  WalletCards,
} from 'lucide-react';
import { useState } from 'react';

const controls = [
  {
    icon: Fingerprint,
    title: 'Capability, not self-claims',
    copy: 'Public work, verified artifacts, and delivery history become a transparent capability record.',
    accent: 'blue',
  },
  {
    icon: Lock,
    title: 'Privacy by construction',
    copy: 'The translator shares only the technical signal a supplier needs, while proprietary context stays protected.',
    accent: 'emerald',
  },
  {
    icon: FileCheck2,
    title: 'Proof before payout',
    copy: 'Each milestone has an evidence request, review state, and explicit release rule before funds move.',
    accent: 'amber',
  },
];

const milestones = [
  { label: 'Baseline audit', amount: '$1,250', status: 'Released', detail: 'Lighthouse report + bottleneck map' },
  { label: 'Render optimization', amount: '$2,800', status: 'In review', detail: 'Before / after performance evidence' },
  { label: 'Cache rollout', amount: '$1,950', status: 'Locked', detail: 'Production verification and handoff' },
];

export default function TrustPage() {
  const [activeMilestone, setActiveMilestone] = useState(1);
  const [verificationType, setVerificationType] = useState<'individual' | 'enk' | 'as'>('individual');
  const [verificationState, setVerificationState] = useState<'ready' | 'checking' | 'verified'>('ready');

  const verificationCopy = {
    individual: { label: 'Individual', description: 'Verify your real name and identity through Vipps.', field: 'Personal identity' },
    enk: { label: 'ENK', description: 'Verify the proprietor and connect the sole proprietorship organization number.', field: 'ENK organization number' },
    as: { label: 'AS', description: 'Verify the authorized person and connect the limited company organization number.', field: 'AS organization number' },
  };

  const activeVerification = verificationCopy[verificationType];

  const startVerification = () => {
    setVerificationState('checking');
    window.setTimeout(() => setVerificationState('verified'), 1400);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-8 xl:px-0">
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:24px_24px] opacity-30" />
        <nav className="glass mb-10 flex items-center justify-between rounded-full px-4 py-3 md:px-6">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 shadow-glow">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Astera</div>
              <div className="text-sm font-semibold text-slate-50">Trust layer</div>
            </div>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="/" className="transition hover:text-white">Home</a>
            <a href="/demand" className="transition hover:text-white">Demand</a>
            <a href="/supplier" className="transition hover:text-white">Supplier</a>
            <a href="/trust" className="text-white">Trust</a>
            <a href="/workspace" className="transition hover:text-white">Workspace</a>
          </div>

          <a href="/demand" className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-500/20">
            Start safely
          </a>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5" />
              Trust is a product feature
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Make technical work legible before money, access, or confidence changes hands.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Astera makes trust operational. Both sides can see what is known, what is protected, what must be proven, and when value is earned.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#escrow" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400">
                See the trust flow
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/supplier" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                Build your proof
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.08, duration: 0.5 }} className="glass rounded-[30px] p-5">
            <div className="rounded-[25px] border border-white/10 bg-slate-950/70 p-4">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Trust control tower</div>
                  <div className="mt-1 text-xl font-medium text-white">Performance intervention</div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Live
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Fingerprint className="h-4 w-4 text-blue-300" />
                  <div className="mt-4 text-2xl font-semibold text-white">92%</div>
                  <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Capability fit</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Lock className="h-4 w-4 text-emerald-300" />
                  <div className="mt-4 text-2xl font-semibold text-white">Private</div>
                  <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Brief visibility</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <WalletCards className="h-4 w-4 text-amber-300" />
                  <div className="mt-4 text-2xl font-semibold text-white">$6k</div>
                  <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Protected funds</div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-500/5 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Evidence completeness</span>
                  <span className="font-semibold text-blue-200">78%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-800">
                  <motion.div initial={{ width: 0 }} animate={{ width: '78%' }} transition={{ delay: 0.35, duration: 0.7 }} className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-300" />
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  Every release is linked to a visible deliverable.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 xl:px-0">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">Identity and entity trust</div>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">A real person behind every account. A real entity behind every contract.</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">Use Vipps to establish a verified real name for individuals. For companies, connect the verified person to an ENK or AS organization number before work, access, or payout begins.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Real-name verification for individuals</div>
              <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Organization identity for ENK and AS</div>
              <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Store verification status, not unnecessary identity data</div>
            </div>
          </div>

          <div className="glass rounded-[30px] p-5">
            <div className="rounded-[25px] border border-white/10 bg-slate-950/70 p-4">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300"><Verified className="h-5 w-5" /></div><div><div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Verification center</div><div className="font-medium text-white">Choose account type</div></div></div>
                <div className="rounded-full border border-blue-400/30 bg-blue-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-blue-200">Vipps-ready</div>
              </div>

              <div className="grid gap-2 sm:grid-cols-3">
                {(['individual', 'enk', 'as'] as const).map((type) => {
                  const selected = verificationType === type;
                  return <button key={type} onClick={() => { setVerificationType(type); setVerificationState('ready'); }} className={`rounded-2xl border p-3 text-left transition ${selected ? 'border-blue-400/50 bg-blue-500/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}><div className="flex items-center gap-2 text-sm font-medium text-white">{type === 'individual' ? <UserRoundCheck className="h-4 w-4 text-blue-300" /> : <Building2 className="h-4 w-4 text-emerald-300" />}{verificationCopy[type].label}</div><div className="mt-2 text-[10px] leading-4 text-slate-400">{type === 'individual' ? 'Person' : type === 'enk' ? 'Sole proprietorship' : 'Limited company'}</div></button>;
                })}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-medium text-white">{activeVerification.description}</div>
                <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-xs"><span className="text-slate-400">{activeVerification.field}</span><span className="text-slate-500">Protected</span></div>
                <button onClick={startVerification} disabled={verificationState === 'checking'} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-70">
                  {verificationState === 'checking' ? 'Waiting for Vipps...' : verificationState === 'verified' ? <><Check className="h-4 w-4" /> Verified account</> : <>Continue with Vipps <ArrowRight className="h-4 w-4" /></>}
                </button>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500"><Lock className="h-3.5 w-3.5" /> Verification is used for trust decisions, not public exposure.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 xl:px-0">
        <div className="mb-8 max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.2em] text-blue-300">The trust architecture</div>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Four questions, answered in the interface.</h2>
          <p className="mt-4 text-slate-400">Trust becomes credible when it is observable. The system should explain its decisions instead of asking either side to take an opaque score on faith.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {controls.map((control, index) => {
            const Icon = control.icon;
            const color = control.accent === 'emerald' ? 'text-emerald-300' : control.accent === 'amber' ? 'text-amber-300' : 'text-blue-300';
            return (
              <motion.div key={control.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="glass rounded-[26px] p-5">
                <Icon className={`h-5 w-5 ${color}`} />
                <h3 className="mt-5 text-xl font-medium text-white">{control.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{control.copy}</p>
                <div className="mt-6 flex items-center gap-2 text-xs text-slate-300"><Check className="h-3.5 w-3.5 text-emerald-300" /> Visible to the right person at the right time</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="escrow" className="mx-auto max-w-7xl px-5 py-14 md:px-8 xl:px-0">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="glass rounded-[30px] p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300"><CircleDollarSign className="h-5 w-5" /></div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Smart escrow</div>
                <div className="text-xl font-medium text-white">Funds follow proof</div>
              </div>
            </div>
            <div className="space-y-4">
              {['Trust deposit confirms intent', 'Funds lock against defined milestones', 'Evidence is reviewed before release'].map((step, index) => (
                <div key={step} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-xs font-semibold text-emerald-300">{index + 1}</div>
                  <div><div className="font-medium text-white">{step}</div><div className="mt-1 text-sm text-slate-400">No silent handoffs. Both parties see the state.</div></div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-amber-400/20 bg-amber-500/5 p-4 text-sm leading-6 text-amber-100"><strong className="font-semibold">Design principle:</strong> the deposit is a quality and commitment signal, not a punishment or an access toll.</div>
          </div>

          <div className="glass rounded-[30px] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div><div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Milestone ledger</div><div className="mt-1 text-xl font-medium text-white">Performance intervention</div></div>
              <div className="text-sm text-emerald-300">$6,000 total</div>
            </div>
            <div className="space-y-3">
              {milestones.map((milestone, index) => {
                const selected = activeMilestone === index;
                return (
                  <button key={milestone.label} onClick={() => setActiveMilestone(index)} className={`w-full rounded-2xl border p-4 text-left transition ${selected ? 'border-blue-400/50 bg-blue-500/10' : 'border-white/10 bg-slate-950/60 hover:border-white/20'}`}>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3"><div className={`flex h-8 w-8 items-center justify-center rounded-full ${milestone.status === 'Released' ? 'bg-emerald-500/15 text-emerald-300' : selected ? 'bg-blue-500/20 text-blue-300' : 'bg-slate-800 text-slate-400'}`}>{milestone.status === 'Released' ? <Check className="h-4 w-4" /> : index + 1}</div><div><div className="font-medium text-white">{milestone.label}</div><div className="mt-1 text-xs text-slate-400">{milestone.detail}</div></div></div>
                      <div className="text-right"><div className="font-semibold text-white">{milestone.amount}</div><div className={`mt-1 text-[10px] uppercase tracking-[0.16em] ${milestone.status === 'Released' ? 'text-emerald-300' : milestone.status === 'In review' ? 'text-blue-300' : 'text-slate-500'}`}>{milestone.status}</div></div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300"><MessageSquareText className="h-4 w-4 text-blue-300" /> Selected: {milestones[activeMilestone].detail}</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 xl:px-0">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass rounded-[30px] p-6">
            <div className="mb-5 flex items-center gap-3"><Gauge className="h-5 w-5 text-blue-300" /><div><div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Reputation, made legible</div><div className="text-xl font-medium text-white">One score is not enough.</div></div></div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[['Speed', '4.8', 'text-blue-300'], ['Reliability', '96%', 'text-emerald-300'], ['Quality', 'A+', 'text-amber-300']].map(([label, value, color]) => <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"><div className={`text-2xl font-semibold ${color}`}>{value}</div><div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-slate-400">{label}</div></div>)}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">Scores are tied to project evidence and context. A fast supplier who misses acceptance criteria should not look identical to a slower supplier who delivers durable outcomes.</p>
          </div>
          <div className="rounded-[30px] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-slate-900/80 to-emerald-500/10 p-6">
            <ShieldCheck className="h-6 w-6 text-emerald-300" />
            <h2 className="mt-5 text-3xl font-semibold text-white">Trust should lower the cost of saying yes.</h2>
            <p className="mt-4 leading-7 text-slate-300">For businesses, that means less fear of a bad technical decision. For suppliers, it means less time proving they are real. For Astera, it creates a defensible operating layer around every match.</p>
            <a href="/demand" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-200">Enter a protected brief <ChevronRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
