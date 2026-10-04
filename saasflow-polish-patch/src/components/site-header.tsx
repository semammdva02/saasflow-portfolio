"use client";

import { useState } from "react";

const items = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#07111f]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" aria-label="SaaSFlow home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/8 text-cyan-300">✦</span>
          <span className="text-[17px] font-semibold tracking-tight">SaaS<span className="text-cyan-300">Flow</span></span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">{item.label}</a>
          ))}
          <a href="https://github.com/semammdva02/saasflow-portfolio" target="_blank" rel="noreferrer" className="text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">Source code</a>
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a href="#features" className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">Explore</a>
          <a href="#pricing" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">View pricing</a>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation menu" : "Open navigation menu"} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 sm:hidden">
          {open ? "×" : "☰"}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/8 bg-[#081321] px-6 py-4 sm:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {items.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">{item.label}</a>)}
            <a href="https://github.com/semammdva02/saasflow-portfolio" target="_blank" rel="noreferrer" className="rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">Source code</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950">View pricing</a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
