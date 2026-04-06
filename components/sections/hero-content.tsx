"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/data/content";
import { motionTokens, sectionReveal, staggerParent } from "@/lib/motion";

export function HeroContent() {
  return (
    <motion.div variants={staggerParent(motionTokens.stagger.heroText)} initial="hidden" animate="visible" className="max-w-xl">
      <motion.p variants={sectionReveal} className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.24em] text-accent/85">
        Full Stack Developer for SaaS Platforms and Web Applications
      </motion.p>

      <motion.h1 variants={sectionReveal} className="font-display text-4xl font-semibold leading-tight text-text sm:text-5xl md:text-6xl">
        I build scalable SaaS platforms and business applications with clean architecture and reliable execution.
      </motion.h1>

      <motion.p variants={sectionReveal} className="mt-6 max-w-lg text-base leading-relaxed text-text-soft md:text-lg">
        From backend model decisions to interface delivery, I own the path from product intent to production-ready execution.
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
          View Case Studies
        </a>
      </motion.div>

      <motion.p variants={sectionReveal} className="mt-6 text-sm text-text-muted">
        <a
          href={`mailto:${contactInfo.email}`}
          className="focus-ring rounded-sm underline decoration-line/40 underline-offset-4 transition-colors duration-300 hover:text-text"
        >
          Email me directly
        </a>
      </motion.p>
    </motion.div>
  );
}
