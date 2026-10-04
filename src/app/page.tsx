"use client";

import { useState } from "react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
];

const features = [
  { number: "01", title: "Automate repetitive work", body: "Design no-code workflows that move information between your tools without manual follow-ups.", accent: "cyan" },
  { number: "02", title: "Keep your team aligned", body: "Bring projects, approvals, tasks and important updates into one focused workspace.", accent: "blue" },
  { number: "03", title: "Use AI where it matters", body: "Draft replies, summarize activity and turn natural-language requests into repeatable actions.", accent: "violet" },
];

const integrations = ["Slack", "Notion", "HubSpot", "Google Drive", "Stripe", "Linear"];

const testimonials = [
  { quote: "SaaSFlow gave our team back hours every week. The biggest win is how quickly we can build and change workflows.", name: "Maya Chen", role: "COO, Northstar" },
  { quote: "The interface feels simple, but the automation underneath is powerful enough for our entire operations stack.", name: "Daniel Ortiz", role: "Head of Ops, Orbit" },
  { quote: "We moved three manual processes into SaaSFlow in one afternoon. Adoption was almost immediate.", name: "Ava Morgan", role: "Founder, Lumen" },
];

const faqs = [
  { q: "Can I try SaaSFlow before paying?", a: "Yes. Every plan starts with a 14-day free trial and no credit card is required." },
  { q: "Do I need technical knowledge to build workflows?", a: "No. The core workflow builder is designed for non-technical teams, with natural-language AI assistance layered on top." },
  { q: "Can SaaSFlow connect to the tools we already use?", a: "Yes. SaaSFlow is designed around integrations and webhooks so teams can connect their existing tools." },
  { q: "Is there an annual plan?", a: "Yes. Switching to annual billing gives you roughly two months free compared with monthly billing." },
];

function ArrowUpRight() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4"><path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Check() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4"><path d="m5 10 3.2 3L15 6.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="noise min-h-screen overflow-x-hidden bg-[#07111f] text-white">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#07111f]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/8 text-cyan-300">✦</span>
            <span className="text-[17px] font-semibold tracking-tight">SaaS<span className="text-cyan-300">Flow</span></span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">{item.label}</a>)}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <a href="#pricing" className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:text-white">Log in</a>
            <a href="#pricing" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">Get started</a>
          </div>

          <button type="button" onClick={() => setMenuOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 sm:hidden" aria-label="Toggle menu">
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && <div className="border-t border-white/8 bg-[#081321] px-6 py-4 sm:hidden"><div className="flex flex-col gap-1">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">{item.label}</a>)}
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950">Get started</a>
        </div></div>}
      </header>

      <section className="hero-glow relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px]"><div className="grid-bg absolute inset-0 opacity-70" /><div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/8 blur-3xl" /><div className="absolute left-[24%] top-64 h-44 w-44 rounded-full bg-blue-500/7 blur-3xl" /><div className="absolute right-[18%] top-72 h-44 w-44 rounded-full bg-violet-500/7 blur-3xl" /></div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/6 px-4 py-2 text-xs font-medium text-cyan-100"><span className="pulse-soft h-2 w-2 rounded-full bg-cyan-300" />AI-powered workflow automation <ArrowUpRight /></div>
            <h1 className="mt-7 text-5xl font-semibold leading-[1.03] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">Your team&apos;s<span className="block bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">work, in flow.</span></h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">SaaSFlow connects projects, people and AI-powered automation in one focused workspace — so your team spends less time managing work and more time moving it forward.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,.12),0_12px_38px_rgba(34,211,238,.14)] transition hover:bg-cyan-200">Start for free <ArrowUpRight /></a>
              <a href="#solutions" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10">Explore product</a>
            </div>
            <p className="mt-4 text-xs text-slate-500">14-day free trial · No credit card · Cancel anytime</p>
          </div>

          <div className="float relative mx-auto mt-16 max-w-6xl">
            <div className="absolute -inset-8 rounded-[36px] bg-cyan-400/6 blur-3xl" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0a1626] shadow-2xl shadow-black/35">
              <div className="flex items-center gap-2 border-b border-white/8 bg-[#091321] px-5 py-3.5"><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><div className="mx-auto hidden h-7 w-5/12 rounded-lg border border-white/6 bg-white/[0.025] sm:block" /><span className="hidden text-xs text-slate-500 sm:block">app.saasflow.io</span></div>

              <div className="grid min-h-[500px] md:grid-cols-[205px_1fr]">
                <aside className="hidden border-r border-white/8 bg-[#081321] p-4 md:block">
                  <div className="flex items-center gap-2 px-2 pt-1"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">✦</span><span className="text-xs font-semibold">SaaSFlow</span></div>
                  <div className="mt-7 space-y-1 text-xs">{["Overview", "Projects", "Automation", "Team", "Analytics"].map((item, index) => <div key={item} className={`rounded-lg px-3 py-2.5 ${index === 0 ? "bg-white/8 text-white" : "text-slate-500"}`}>{item}</div>)}</div>
                  <div className="mt-10 rounded-xl border border-cyan-300/10 bg-cyan-300/4 p-3"><p className="text-[10px] uppercase tracking-[0.18em] text-cyan-300">AI assistant</p><p className="mt-2 text-xs leading-5 text-slate-300">“Summarize this week and flag anything overdue.”</p><div className="mt-3 rounded-lg bg-white/5 px-2.5 py-2 text-[10px] text-cyan-100">4 actions completed</div></div>
                </aside>

                <div className="dashboard-grid p-5 sm:p-7">
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Workspace overview</p><h2 className="mt-2 text-xl font-semibold">Good morning, Sema 👋</h2></div><button className="w-fit rounded-xl border border-white/8 bg-white/4 px-4 py-2 text-xs text-slate-300">This month ▾</button></div>
                  <div className="mt-7 grid gap-4 sm:grid-cols-3">{[["Active projects", "24", "+12.5%"], ["Automations", "186", "+24.8%"], ["Hours saved", "342", "+18.2%"]].map(([label, value, growth]) => <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.025] p-5"><p className="text-[11px] text-slate-500">{label}</p><div className="mt-3 flex items-end justify-between gap-3"><span className="text-2xl font-semibold tracking-tight">{value}</span><span className="text-[11px] text-cyan-300">{growth}</span></div></div>)}</div>
                  <div className="mt-5 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5"><div className="flex items-center justify-between"><p className="text-sm font-medium">Workflow activity</p><span className="text-[11px] text-slate-500">Last 7 days</span></div><div className="mt-7 flex h-40 items-end gap-2">{[42,56,48,64,54,76,60,88,69,96,81,91].map((height, index) => <div key={index} className="relative flex-1"><div className="absolute bottom-0 w-full rounded-t-md bg-gradient-to-t from-cyan-400/15 to-cyan-300" style={{ height: `${height}%` }} /></div>)}</div><div className="mt-4 flex justify-between text-[10px] text-slate-600">{["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((day) => <span key={day}>{day}</span>)}</div></div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5"><div className="flex items-center justify-between"><p className="text-sm font-medium">Recent automation</p><span className="text-[11px] text-cyan-300">Live</span></div><div className="mt-5 space-y-4">{[["New lead added","Completed"],["Invoice generated","Completed"],["Task assigned","Completed"],["Weekly report sent","2m ago"]].map(([item,state]) => <div key={item} className="flex items-center justify-between gap-3 text-xs"><span className="text-slate-300">{item}</span><span className={state === "Completed" ? "text-cyan-300" : "text-slate-500"}>{state}</span></div>)}</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-5xl border-y border-white/7 py-7"><p className="text-center text-[10px] uppercase tracking-[0.28em] text-slate-600">Trusted by ambitious teams</p><div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 text-center text-xs font-semibold tracking-[0.16em] text-slate-500 sm:grid-cols-6">{["NORTHSTAR","ORBIT","LUMEN","VERTEX","MONARCH","PULSE"].map((name) => <span key={name}>{name}</span>)}</div></div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-medium text-cyan-300">Built for momentum</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Less coordination.<span className="block text-slate-400">More progress.</span></h2></div><p className="max-w-2xl text-sm leading-7 text-slate-400 lg:justify-self-end">SaaSFlow combines workflow automation with an interface your team can understand instantly. Every interaction is designed to get work out of the way.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{features.map((feature) => <article key={feature.title} className="group rounded-3xl border border-white/8 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.045]"><div className="flex items-center justify-between"><span className={`text-xs ${feature.accent === "cyan" ? "text-cyan-300" : feature.accent === "blue" ? "text-blue-300" : "text-violet-300"}`}>{feature.number}</span><ArrowUpRight /></div><h3 className="mt-14 text-xl font-semibold">{feature.title}</h3><p className="mt-4 text-sm leading-7 text-slate-400">{feature.body}</p></article>)}</div></section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16"><div className="overflow-hidden rounded-[32px] border border-white/8 bg-[#0a1626]"><div className="grid lg:grid-cols-2"><div className="p-8 sm:p-12 lg:p-14"><p className="text-sm font-medium text-cyan-300">Automation, without the busywork</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Turn a simple request into a repeatable system.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">Build flows that start with a trigger, use AI when it helps and complete the boring steps automatically.</p><div className="mt-9 space-y-4">{[["Trigger","New customer submits a form"],["AI action","Summarize intent + assign priority"],["Workflow","Create CRM record + notify owner"]].map(([label,value],index) => <div key={label} className="flex gap-4 rounded-2xl border border-white/7 bg-white/[0.02] p-4"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/6 text-xs text-cyan-300">0{index+1}</div><div><p className="text-xs uppercase tracking-[0.18em] text-slate-600">{label}</p><p className="mt-1.5 text-sm text-slate-200">{value}</p></div></div>)}</div></div><div className="relative min-h-[430px] overflow-hidden border-t border-white/8 bg-[#081321] lg:border-l lg:border-t-0"><div className="absolute inset-0 opacity-50"><div className="grid-bg absolute inset-0" /></div><div className="relative flex h-full items-center justify-center p-8"><div className="w-full max-w-md space-y-3"><div className="rounded-2xl border border-white/8 bg-[#0d1b2e] p-4 shadow-2xl shadow-black/25"><div className="flex items-center justify-between"><span className="text-xs font-medium">Workflow builder</span><span className="text-[10px] text-cyan-300">Active</span></div></div>{[["Webhook","Customer form"],["AI","Classify lead"],["CRM","Create contact"]].map(([title,value],index) => <div key={title} className="relative"><div className="absolute left-1/2 top-0 h-3 w-px -translate-y-3 bg-white/10" /><div className="rounded-2xl border border-white/8 bg-[#0d1b2e] p-4"><div className="flex items-center justify-between"><span className="text-xs text-slate-300">{title}</span><span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-slate-500">{value}</span></div></div>{index < 2 && <div className="mx-auto h-3 w-px bg-white/10" />}</div>)}</div></div></div></div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8"><div className="text-center"><p className="text-sm font-medium text-cyan-300">Connect your stack</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Works with the tools you already use.</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">Keep your existing tools. SaaSFlow sits between them and makes the handoffs automatic.</p></div><div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3">{integrations.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-xs text-slate-300">{item.slice(0,1)}</span><span className="text-sm text-slate-300">{item}</span></div>)}</div></section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-10 lg:px-8"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="text-sm font-medium text-cyan-300">Simple pricing</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Start small. Scale when ready.</h2></div><div className="inline-flex w-fit rounded-full border border-white/8 bg-white/[0.025] p-1"><button onClick={() => setAnnual(false)} className={`rounded-full px-4 py-2 text-xs ${!annual ? "bg-white text-slate-950" : "text-slate-400"}`}>Monthly</button><button onClick={() => setAnnual(true)} className={`rounded-full px-4 py-2 text-xs ${annual ? "bg-white text-slate-950" : "text-slate-400"}`}>Yearly <span className="ml-1 text-cyan-700">Save 20%</span></button></div></div><div className="mt-10 grid gap-5 lg:grid-cols-3">{[{name:"Starter",monthly:19,yearly:15,description:"For small teams getting started with automation.",featured:false},{name:"Growth",monthly:49,yearly:39,description:"For teams that want AI-powered workflows across the business.",featured:true},{name:"Scale",monthly:129,yearly:103,description:"For advanced teams with deeper integrations and support.",featured:false}].map((plan)=>{const price=annual?plan.yearly:plan.monthly;return <article key={plan.name} className={`rounded-3xl border p-7 ${plan.featured ? "border-cyan-300/20 bg-cyan-300/[0.045] shadow-[0_16px_70px_rgba(34,211,238,.06)]" : "border-white/8 bg-white/[0.02]"}`}><div className="flex items-center justify-between"><h3 className="font-semibold">{plan.name}</h3>{plan.featured&&<span className="rounded-full bg-cyan-300/10 px-3 py-1 text-[10px] font-medium text-cyan-200">Most popular</span>}</div><p className="mt-4 min-h-[48px] text-sm leading-6 text-slate-400">{plan.description}</p><div className="mt-7 flex items-end gap-2"><span className="text-4xl font-semibold tracking-tight">${price}</span><span className="pb-1 text-sm text-slate-500">/ month</span></div><a href="#" className={`mt-7 flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${plan.featured ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200" : "border border-white/10 bg-white/5 text-white hover:bg-white/8"}`}>Choose {plan.name}</a><div className="mt-7 space-y-3">{["Unlimited workflows","AI assistant","Team workspace","Analytics"].map((item)=><div key={item} className="flex items-center gap-2 text-sm text-slate-300"><span className="text-cyan-300"><Check /></span>{item}</div>)}</div></article>})}</div></section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8"><div className="grid gap-5 lg:grid-cols-3">{testimonials.map((item)=><figure key={item.name} className="rounded-3xl border border-white/8 bg-white/[0.02] p-7"><div className="text-cyan-300">★★★★★</div><blockquote className="mt-5 text-base leading-7 text-slate-200">“{item.quote}”</blockquote><figcaption className="mt-7 border-t border-white/8 pt-5"><p className="text-sm font-medium">{item.name}</p><p className="mt-1 text-xs text-slate-500">{item.role}</p></figcaption></figure>)}</div></section>

      <section className="mx-auto max-w-4xl px-6 py-10 lg:px-8"><div className="text-center"><p className="text-sm font-medium text-cyan-300">FAQ</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Questions, answered.</h2></div><div className="mt-9 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02]">{faqs.map((item,index)=>{const open=openFaq===index;return <div key={item.q} className="border-b border-white/8 last:border-b-0"><button type="button" onClick={()=>setOpenFaq(open?null:index)} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left" aria-expanded={open}><span className="text-sm font-medium text-white">{item.q}</span><span className="text-xl text-slate-500">{open?"−":"+"}</span></button>{open&&<div className="px-6 pb-6 pr-12 text-sm leading-7 text-slate-400">{item.a}</div>}</div>})}</div></section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8"><div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-gradient-to-br from-cyan-300/9 via-white/[0.02] to-violet-400/7 px-6 py-16 text-center sm:px-12"><div className="pointer-events-none absolute left-1/2 top-0 h-48 w-64 -translate-x-1/2 rounded-full bg-cyan-300/8 blur-3xl" /><div className="relative"><p className="text-sm font-medium text-cyan-300">Ready to move faster?</p><h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Build better workflows with SaaSFlow.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">A focused workspace for teams that want less busywork and more momentum.</p><a href="#pricing" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">Start your free trial <ArrowUpRight /></a></div></div></section>

      <footer className="border-t border-white/8"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div className="flex items-center gap-2"><span className="text-cyan-300">✦</span><span>SaaSFlow</span></div><span>© 2026 SaaSFlow. Portfolio project by Sema Memmedova.</span></div></footer>
    </main>
  );
}
