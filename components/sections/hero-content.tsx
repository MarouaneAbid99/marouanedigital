"use client";

import { motion } from "framer-motion";
import { motionTokens, sectionReveal, staggerParent } from "@/lib/motion";

export function HeroContent() {
  return (
    <motion.div variants={staggerParent(motionTokens.stagger.heroText)} initial="hidden" animate="visible" className="max-w-xl">
      <motion.p variants={sectionReveal} className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.24em] text-accent/85">
        Digital Product Studio
      </motion.p>

      <motion.h1 variants={sectionReveal} className="font-display text-4xl font-semibold leading-tight text-text sm:text-5xl md:text-6xl">
        MAROUANEDIGITAL turns product strategy into shipped software.
      </motion.h1>

      <motion.p variants={sectionReveal} className="mt-6 max-w-lg text-base leading-relaxed text-text-soft md:text-lg">
        Digital Product Builder for SaaS and startup teams that need clear product logic, precise interface systems, and
        production-grade frontend delivery.
      </motion.p>

      <motion.div variants={sectionReveal} className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href="#contact"
          className="focus-ring inline-flex items-center justify-center rounded-xl border border-accent/35 bg-accent/12 px-5 py-3 text-sm font-semibold text-text transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/60 hover:bg-accent/20 hover:shadow-glow"
        >
          Start a Project
        </a>
        <a
          href="#projects"
          className="focus-ring inline-flex items-center justify-center rounded-xl border border-line/30 bg-surface/70 px-5 py-3 text-sm font-semibold text-text-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-line/55 hover:text-text"
        >
          View Projects
        </a>
      </motion.div>

      <motion.p variants={sectionReveal} className="mt-6 text-sm text-text-muted">
        Selected for SaaS, startup, and AI product engagements.
      </motion.p>
    </motion.div>
  );
}
