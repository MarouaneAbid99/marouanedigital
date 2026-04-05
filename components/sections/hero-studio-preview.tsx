"use client";

import { motion } from "framer-motion";
import { motionTokens, sectionReveal, staggerParent } from "@/lib/motion";

const layers = [
  {
    id: "intent",
    title: "Intent Layer",
    subtitle: "Problem + User Goals",
    tone: "text-text-soft",
    panel: "bg-surface/55 border-line/20",
    chips: ["Opportunity"],
    metric: "Signal 82%"
  },
  {
    id: "system",
    title: "System Layer",
    subtitle: "Component Logic + Interaction",
    tone: "text-text",
    panel: "bg-surface-strong/95 border-accent/35 shadow-glow",
    chips: ["Tokens", "Patterns", "States"],
    metric: "Coherence 94%"
  },
  {
    id: "delivery",
    title: "Delivery Layer",
    subtitle: "Release Track + QA",
    tone: "text-text-soft",
    panel: "bg-surface/55 border-line/20",
    chips: ["Ship"],
    metric: "Ready 88%"
  }
];

export function HeroStudioPreview() {
  return (
    <motion.div
      variants={staggerParent(motionTokens.stagger.heroMatrix)}
      initial="hidden"
      animate="visible"
      className="relative mx-auto w-full max-w-[650px]"
    >
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_center,_rgb(var(--color-accent)/0.25),transparent_58%)] blur-2xl" />
      <div className="pointer-events-none absolute -right-12 -top-10 h-44 w-44 rounded-full bg-violet/20 blur-3xl" />

      <motion.div
        variants={sectionReveal}
        className="card-border relative rounded-3xl bg-canvas/80 p-4 shadow-card backdrop-blur-xl md:p-6"
      >
        <div className="mb-5 flex items-center justify-between rounded-2xl border border-line/20 bg-surface/75 px-4 py-3">
          <p className="font-display text-xs uppercase tracking-[0.18em] text-text-soft">MAROUANEDIGITAL // Build Matrix</p>
          <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            Active Build
          </span>
        </div>

        <div className="relative grid gap-2.5 md:gap-3">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              variants={sectionReveal}
              className={`relative rounded-2xl border ${
                index === 1 ? "p-4 md:p-5" : "p-3 opacity-85"
              } ${layer.panel}`}
              style={{
                transform: `translateX(${index === 0 ? "-3%" : index === 2 ? "3%" : "0"})`,
                zIndex: index === 1 ? 3 : 2
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className={`font-display text-sm tracking-wide ${layer.tone}`}>{layer.title}</p>
                  <p className={`mt-1 text-text-muted ${index === 1 ? "text-xs" : "text-[11px]"}`}>{layer.subtitle}</p>
                </div>
                <span className="rounded-full border border-line/25 bg-canvas/60 px-2.5 py-1 text-[11px] text-text-soft">
                  {layer.metric}
                </span>
              </div>

              <div className={`mt-3 grid ${layer.chips.length === 3 ? "grid-cols-3" : "grid-cols-1"} gap-2`}>
                {layer.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-lg border border-line/20 bg-canvas/45 px-2 py-1 text-center text-[11px] font-medium text-text-muted"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={sectionReveal} className="mt-5 rounded-2xl border border-line/20 bg-surface/65 p-4">
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-text-muted">
            <span className="rounded-full border border-line/20 bg-canvas/60 px-2.5 py-1">Problem</span>
            <span className="text-accent/90">-&gt;</span>
            <span className="rounded-full border border-line/20 bg-canvas/60 px-2.5 py-1">System</span>
            <span className="text-accent/90">-&gt;</span>
            <span className="rounded-full border border-line/20 bg-canvas/60 px-2.5 py-1">Interface</span>
            <span className="text-accent/90">-&gt;</span>
            <span className="rounded-full border border-line/20 bg-canvas/60 px-2.5 py-1">Release</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
