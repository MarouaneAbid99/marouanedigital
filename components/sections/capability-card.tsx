"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Capability } from "@/data/content";
import { motionTokens } from "@/lib/motion";

type CapabilityCardProps = {
  capability: Capability;
};

export function CapabilityCard({ capability }: CapabilityCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: -3 }}
      transition={{ duration: motionTokens.duration.standard, ease: motionTokens.ease }}
      className="card-border rounded-2xl bg-surface/70 p-6 shadow-card"
    >
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">{capability.title}</p>
      <p className="mt-3 text-base font-semibold leading-relaxed text-text">{capability.outcome}</p>
      <p className="mt-3 text-sm leading-relaxed text-text-soft">{capability.explanation}</p>
      <p className="mt-5 text-xs text-text-muted">{capability.tools.join(" | ")}</p>
    </motion.article>
  );
}
