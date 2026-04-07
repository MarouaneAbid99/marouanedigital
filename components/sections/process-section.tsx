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

        <motion.div variants={sectionReveal} className="mt-14 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="card-border rounded-xl bg-surface/40 border border-line/20 p-6 hover:border-line/40 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <p className="text-2xl font-bold text-text/20 font-display">{`${index + 1}`.padStart(2, '0')}</p>
                <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-display text-base font-semibold text-text">{step.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-text-muted">{step.summary}</p>
            </article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
