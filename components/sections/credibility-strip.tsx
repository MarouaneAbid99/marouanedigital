"use client";

import { motion } from "framer-motion";
import { credibilityItems } from "@/data/content";
import { motionTokens, sectionReveal, staggerParent } from "@/lib/motion";

export function CredibilityStrip() {
  return (
    <section id="credibility" className="section-shell pb-10 md:pb-14">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: motionTokens.revealAmount }}
        variants={staggerParent(motionTokens.stagger.section)}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {credibilityItems.map((item) => (
          <motion.article key={item.title} variants={sectionReveal} className="card-border rounded-xl bg-surface/40 border border-line/20 p-6 shadow-sm hover:border-line/40 transition-all duration-300">
            <p className="font-display text-sm font-semibold text-text leading-tight">{item.title}</p>
            <p className="mt-3 text-xs leading-relaxed text-text-muted">{item.detail}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
