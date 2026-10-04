"use client";

import { useState } from "react";

const plans = [
  { name: "Starter", monthly: 19, yearly: 15, description: "For small teams building their first automated workflows.", featured: false },
  { name: "Growth", monthly: 49, yearly: 39, description: "For teams that want AI-assisted automation across daily work.", featured: true },
  { name: "Scale", monthly: 129, yearly: 103, description: "For advanced teams with deeper integrations and higher limits.", featured: false },
];

const benefits = ["Unlimited workflows", "AI assistant", "Team workspace", "Analytics"];

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 lg:px-8" aria-labelledby="pricing-title">
      <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-cyan-300">Demo pricing UI</p>
          <h2 id="pricing-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A pricing experience built to convert.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">This is a fictional portfolio concept, so the plans below demonstrate the interface rather than a real offer.</p>
        </div>

        <div className="inline-flex w-fit rounded-full border border-white/8 bg-white/[0.025] p-1" aria-label="Billing period">
          <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)} className={!annual ? "rounded-full bg-white px-4 py-2 text-xs text-slate-950 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70" : "rounded-full px-4 py-2 text-xs text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"}>Monthly</button>
          <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)} className={annual ? "rounded-full bg-white px-4 py-2 text-xs text-slate-950 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70" : "rounded-full px-4 py-2 text-xs text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"}>Yearly <span className="ml-1 text-cyan-700">Save 20%</span></button>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = annual ? plan.yearly : plan.monthly;
          return (
            <article key={plan.name} className={plan.featured ? "rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.045] p-7 shadow-[0_16px_70px_rgba(34,211,238,.06)]" : "rounded-3xl border border-white/8 bg-white/[0.02] p-7"}>
              <div className="flex items-center justify-between gap-4"><h3 className="font-semibold">{plan.name}</h3>{plan.featured ? <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-[10px] font-medium text-cyan-200">Most popular</span> : null}</div>
              <p className="mt-4 min-h-[48px] text-sm leading-6 text-slate-400">{plan.description}</p>
              <div className="mt-7 flex items-end gap-2"><span className="text-4xl font-semibold tracking-tight">{"$"}{price}</span><span className="pb-1 text-sm text-slate-500">/ month</span></div>
              <a href="#pricing" onClick={(event) => event.preventDefault()} className={plan.featured ? "mt-7 flex w-full items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70" : "mt-7 flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"}>Choose {plan.name}</a>
              <div className="mt-7 space-y-3">{benefits.map((item) => <div key={item} className="flex items-center gap-2 text-sm text-slate-300"><span className="text-cyan-300" aria-hidden="true">✓</span>{item}</div>)}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
