"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/section-header";
import { processSteps } from "@/data/content";
import { motionTokens, sectionReveal, staggerParent } from "@/lib/motion";

export function ProcessSection() {
  return (
    <section id="process" className="section-padding section-shell">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: motionTokens.revealAmount }}
        variants={staggerParent(motionTokens.stagger.section)}
      >
        <motion.div variants={sectionReveal}>
          <SectionHeader
            label="Process"
            title="A practical workflow for turning ambiguity into shipped product quality."
            description="Each engagement follows a clear four-stage system to keep strategy, design, and execution aligned."
          />
        </motion.div>

        <motion.div variants={sectionReveal} className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="card-border rounded-2xl bg-surface/72 p-5 shadow-card">
              <p className="text-xs uppercase tracking-[0.2em] text-accent/80">{`0${index + 1}`}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-soft">{step.summary}</p>
            </article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
