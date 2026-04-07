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
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ duration: motionTokens.duration.standard, ease: motionTokens.ease }}
      className="card-border rounded-xl bg-surface/40 border border-line/20 p-6 hover:border-line/40 transition-all duration-300"
    >
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">{capability.title}</p>
      <p className="mt-4 text-base font-semibold leading-relaxed text-text">{capability.outcome}</p>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">{capability.explanation}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {capability.tools.map((tool) => (
          <span key={tool} className="inline-block px-2.5 py-1 rounded text-[11px] font-medium bg-canvas/40 border border-line/20 text-text-soft">
            {tool}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
