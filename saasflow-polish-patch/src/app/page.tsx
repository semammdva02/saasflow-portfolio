import { PricingSection } from "@/components/pricing-section";
import { SiteHeader } from "@/components/site-header";

const features = [
  { number: "01", title: "Automate repetitive work", body: "Design no-code workflows that move information between tools without manual follow-ups.", tone: "text-cyan-300" },
  { number: "02", title: "Keep your team aligned", body: "Bring projects, approvals, tasks and important updates into one focused workspace.", tone: "text-blue-300" },
  { number: "03", title: "Use AI where it matters", body: "Draft replies, summarize activity and turn natural-language requests into repeatable actions.", tone: "text-violet-300" },
];

const integrations = ["Slack", "Notion", "HubSpot", "Google Drive", "Stripe", "Linear"];

const highlights = [
  ["Next.js architecture", "App Router with a mostly server-rendered page and small client islands for interactive UI."],
  ["Type-safe frontend", "TypeScript keeps components, state and data structures predictable as the product grows."],
  ["Responsive by design", "The layout is built from mobile upward and adapts cleanly across tablet and desktop widths."],
  ["Accessibility", "Semantic landmarks, keyboard-visible focus states, labelled controls and native FAQ disclosure."],
  ["SEO & sharing", "Metadata, canonical URL, robots, sitemap and an Open Graph image are included."],
  ["Performance-minded", "No heavy UI libraries or external images are required for the core experience."],
];

function ArrowUpRight() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4"><path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Check() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4"><path d="m5 10 3.2 3L15 6.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  return (
    <main className="noise min-h-screen overflow-x-hidden bg-[#07111f] text-white">
      <SiteHeader />

      <section className="hero-glow relative overflow-hidden" aria-labelledby="hero-title">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px]"><div className="grid-bg absolute inset-0 opacity-70" /><div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/8 blur-3xl" /><div className="absolute left-[24%] top-64 h-44 w-44 rounded-full bg-blue-500/7 blur-3xl" /><div className="absolute right-[18%] top-72 h-44 w-44 rounded-full bg-violet-500/7 blur-3xl" /></div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/6 px-4 py-2 text-xs font-medium text-cyan-100"><span className="pulse-soft h-2 w-2 rounded-full bg-cyan-300" />Portfolio concept · AI workflow automation</div>
            <h1 id="hero-title" className="mx-auto mt-7 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">Your team&apos;s<span className="block bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">work, in flow.</span></h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">SaaSFlow is a fictional product concept built to showcase modern frontend implementation with Next.js, TypeScript and Tailwind CSS.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80">Explore pricing UI <ArrowUpRight /></a><a href="https://github.com/semammdva02/saasflow-portfolio" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80">View source <ArrowUpRight /></a></div>
            <p className="mt-4 text-xs text-slate-500">Built as a portfolio project · Responsive · Accessible</p>
          </div>

          <div className="float relative mx-auto mt-16 max-w-6xl" aria-hidden="true">
            <div className="absolute -inset-8 rounded-[36px] bg-cyan-400/6 blur-3xl" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0a1626] shadow-2xl shadow-black/35">
              <div className="flex items-center gap-2 border-b border-white/8 bg-[#091321] px-5 py-3.5"><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><div className="mx-auto hidden h-7 w-5/12 rounded-lg border border-white/6 bg-white/[0.025] sm:block" /><span className="hidden text-xs text-slate-500 sm:block">app.saasflow.io</span></div>
              <div className="grid min-h-[500px] md:grid-cols-[205px_1fr]">
                <aside className="hidden border-r border-white/8 bg-[#081321] p-4 md:block"><div className="flex items-center gap-2 px-2 pt-1"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">✦</span><span className="text-xs font-semibold">SaaSFlow</span></div><div className="mt-7 space-y-1 text-xs">{["Overview","Projects","Automation","Team","Analytics"].map((item,index)=><div key={item} className={`rounded-lg px-3 py-2.5 ${index === 0 ? "bg-white/8 text-white" : "text-slate-500"}`}>{item}</div>)}</div><div className="mt-10 rounded-xl border border-cyan-300/10 bg-cyan-300/4 p-3"><p className="text-[10px] uppercase tracking-[0.18em] text-cyan-300">AI assistant</p><p className="mt-2 text-xs leading-5 text-slate-300">“Summarize this week and flag anything overdue.”</p><div className="mt-3 rounded-lg bg-white/5 px-2.5 py-2 text-[10px] text-cyan-100">4 actions completed</div></div></aside>
                <div className="dashboard-grid p-5 sm:p-7"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Workspace overview</p><h2 className="mt-2 text-xl font-semibold">Good morning, Sema 👋</h2></div><div className="w-fit rounded-xl border border-white/8 bg-white/4 px-4 py-2 text-xs text-slate-300">This month ▾</div></div><div className="mt-7 grid gap-4 sm:grid-cols-3">{[["Active projects","24","+12.5%"],["Automations","186","+24.8%"],["Hours saved","342","+18.2%"]].map(([label,value,growth])=><div key={label} className="rounded-2xl border border-white/8 bg-white/[0.025] p-5"><p className="text-[11px] text-slate-500">{label}</p><div className="mt-3 flex items-end justify-between gap-3"><span className="text-2xl font-semibold tracking-tight">{value}</span><span className="text-[11px] text-cyan-300">{growth}</span></div></div>)}</div><div className="mt-5 grid gap-5 lg:grid-cols-[1.45fr_1fr]"><div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5"><div className="flex items-center justify-between"><p className="text-sm font-medium">Workflow activity</p><span className="text-[11px] text-slate-500">Last 7 days</span></div><div className="mt-7 flex h-40 items-end gap-2">{[42,56,48,64,54,76,60,88,69,96,81,91].map((height,index)=><div key={index} className="relative flex-1"><div className="absolute bottom-0 w-full rounded-t-md bg-gradient-to-t from-cyan-400/15 to-cyan-300" style={{height: `${height}%`}} /></div>)}</div><div className="mt-4 flex justify-between text-[10px] text-slate-600">{["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((day)=><span key={day}>{day}</span>)}</div></div><div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5"><div className="flex items-center justify-between"><p className="text-sm font-medium">Recent automation</p><span className="text-[11px] text-cyan-300">Live</span></div><div className="mt-5 space-y-4">{[["New lead added","Completed"],["Invoice generated","Completed"],["Task assigned","Completed"],["Weekly report sent","2m ago"]].map(([item,state])=><div key={item} className="flex items-center justify-between gap-3 text-xs"><span className="text-slate-300">{item}</span><span className={state === "Completed" ? "text-cyan-300" : "text-slate-500"}>{state}</span></div>)}</div></div></div></div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-5xl border-y border-white/7 py-7"><p className="text-center text-[10px] uppercase tracking-[0.28em] text-slate-600">Concept integrations</p><div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 text-center text-xs font-semibold tracking-[0.16em] text-slate-500 sm:grid-cols-6">{integrations.map((name)=><span key={name}>{name}</span>)}</div></div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8" aria-labelledby="features-title"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-medium text-cyan-300">Built for momentum</p><h2 id="features-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Less coordination.<span className="block text-slate-400">More progress.</span></h2></div><p className="max-w-2xl text-sm leading-7 text-slate-400 lg:justify-self-end">The visual system is deliberately restrained: strong hierarchy, quiet surfaces, subtle motion and clear calls to action.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{features.map((feature)=><article key={feature.title} className="group rounded-3xl border border-white/8 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.045]"><div className="flex items-center justify-between"><span className={`text-xs ${feature.tone}`}>{feature.number}</span><ArrowUpRight /></div><h3 className="mt-14 text-xl font-semibold">{feature.title}</h3><p className="mt-4 text-sm leading-7 text-slate-400">{feature.body}</p></article>)}</div></section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16" aria-labelledby="workflow-title">
        <div className="overflow-hidden rounded-[32px] border border-white/8 bg-[#0a1626]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-14">
              <p className="text-sm font-medium text-cyan-300">Workflow builder</p>
              <h2 id="workflow-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Turn one request into a repeatable system.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">A product-style flow that demonstrates clear information architecture, states and hand-offs rather than a static marketing mockup.</p>
              <div className="mt-9 space-y-4">
                {[["Trigger","New customer submits a form"],["AI action","Summarize intent + assign priority"],["Workflow","Create CRM record + notify owner"]].map(([label,value],index)=>(
                  <div key={label} className="flex gap-4 rounded-2xl border border-white/7 bg-white/[0.02] p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/6 text-xs text-cyan-300">0{index+1}</div>
                    <div><p className="text-xs uppercase tracking-[0.18em] text-slate-600">{label}</p><p className="mt-1.5 text-sm text-slate-200">{value}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[430px] overflow-hidden border-t border-white/8 bg-[#081321] lg:border-l lg:border-t-0">
              <div className="absolute inset-0 opacity-50"><div className="grid-bg absolute inset-0" /></div>
              <div className="relative flex h-full items-center justify-center p-8">
                <div className="w-full max-w-md space-y-3">
                  <div className="rounded-2xl border border-white/8 bg-[#0d1b2e] p-4 shadow-2xl shadow-black/25">
                    <div className="flex items-center justify-between"><span className="text-xs font-medium">Workflow builder</span><span className="text-[10px] text-cyan-300">Active</span></div>
                  </div>
                  {[["Webhook","Customer form"],["AI","Classify lead"],["CRM","Create contact"]].map(([title,value],index)=>(
                    <div key={title} className="relative">
                      <div className="absolute left-1/2 top-0 h-3 w-px -translate-y-3 bg-white/10" />
                      <div className="rounded-2xl border border-white/8 bg-[#0d1b2e] p-4">
                        <div className="flex items-center justify-between"><span className="text-xs text-slate-300">{title}</span><span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-slate-500">{value}</span></div>
                      </div>
                      {index < 2 ? <div className="mx-auto h-3 w-px bg-white/10" /> : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8" aria-labelledby="highlights-title"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-medium text-cyan-300">Implementation highlights</p><h2 id="highlights-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">The portfolio proof behind the pixels.</h2></div><p className="max-w-xl text-sm leading-7 text-slate-400">This section is deliberately here for recruiters and clients: it makes the engineering decisions visible instead of hiding everything behind visuals.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{highlights.map(([title,body])=><article key={title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"><div className="flex items-center gap-2 text-cyan-300"><Check /><span className="text-xs font-medium uppercase tracking-[0.14em]">Included</span></div><h3 className="mt-5 text-base font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{body}</p></article>)}</div></section>

      <PricingSection />

      <section className="mx-auto max-w-4xl px-6 py-10 lg:px-8" aria-labelledby="faq-title"><div className="text-center"><p className="text-sm font-medium text-cyan-300">FAQ</p><h2 id="faq-title" className="mt-3 text-3xl font-semibold tracking-tight">Questions, answered.</h2></div><div className="mt-9 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02]">{[["Is SaaSFlow a real product?","No. It is a fictional SaaS concept created as a frontend portfolio project."],["Which technologies are used?","Next.js, React, TypeScript and Tailwind CSS, with small client components for the mobile navigation and pricing toggle."],["Is the layout responsive?","Yes. The page is designed across mobile, tablet and desktop breakpoints with accessible focus states."],["Can I inspect the source?","Yes. The source code is public in the linked GitHub repository."]].map(([question,answer])=><details key={question} className="group border-b border-white/8 last:border-b-0"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left text-sm font-medium text-white marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">{question}<span className="text-xl text-slate-500 transition group-open:rotate-45">+</span></summary><p className="px-6 pb-6 pr-12 text-sm leading-7 text-slate-400">{answer}</p></details>)}</div></section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8"><div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-gradient-to-br from-cyan-300/9 via-white/[0.02] to-violet-400/7 px-6 py-16 text-center sm:px-12"><div className="pointer-events-none absolute left-1/2 top-0 h-48 w-64 -translate-x-1/2 rounded-full bg-cyan-300/8 blur-3xl" /><div className="relative"><p className="text-sm font-medium text-cyan-300">Want the source?</p><h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Explore the code behind SaaSFlow.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">View the repository, inspect the implementation and see how a production-style frontend is structured.</p><a href="https://github.com/semammdva02/saasflow-portfolio" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">Open GitHub <ArrowUpRight /></a></div></div></section>

      <footer className="border-t border-white/8"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div className="flex items-center gap-2"><span className="text-cyan-300">✦</span><span>SaaSFlow</span></div><div className="flex flex-wrap items-center gap-x-5 gap-y-2"><a className="hover:text-slate-300" href="https://github.com/semammdva02/saasflow-portfolio" target="_blank" rel="noreferrer">GitHub</a><a className="hover:text-slate-300" href="https://saasflow-portfolio.vercel.app/" target="_blank" rel="noreferrer">Live demo</a><span>© 2026 Sema Memmedova</span></div></div></footer>
    </main>
  );
}
