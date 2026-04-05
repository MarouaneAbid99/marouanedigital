"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/common/section-header";
import { motionTokens, sectionReveal, staggerParent } from "@/lib/motion";

const principles = [
  {
    title: "Product Judgment Over Feature Noise",
    copy: "I prioritize product decisions around user value, business leverage, and delivery reality."
  },
  {
    title: "Systems Thinking in Every Interface",
    copy: "I design reusable interaction systems so products scale without clarity loss."
  },
  {
    title: "Execution Quality Without Handoff Friction",
    copy: "I implement directly with frontend discipline, keeping product intent intact through shipping."
  }
];

export function AboutPrinciples() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="section-padding section-shell">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: motionTokens.revealAmount }}
        variants={staggerParent(motionTokens.stagger.section)}
        className="grid gap-10 lg:grid-cols-12 lg:gap-12"
      >
        <motion.div variants={sectionReveal} className="lg:col-span-5">
          <SectionHeader
            label="About"
            title="A strategic product partner focused on decision quality, systems thinking, and delivery discipline."
            description="I combine product judgment, interface systems thinking, and frontend execution to reduce handoff friction and improve delivery quality."
          />
        </motion.div>

        <motion.div variants={sectionReveal} className="grid gap-4 md:grid-cols-2 lg:col-span-7 lg:grid-cols-1">
          {principles.map((item, idx) => (
            <motion.article
              key={item.title}
              variants={sectionReveal}
              whileHover={reducedMotion ? undefined : { y: -3 }}
              transition={{ duration: motionTokens.duration.standard, ease: motionTokens.ease }}
              className="card-border rounded-2xl bg-surface/70 p-6 shadow-card"
              style={idx === 1 ? { background: "rgb(var(--color-surface-strong) / 0.88)" } : undefined}
            >
              <h3 className="font-display text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-soft">{item.copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
