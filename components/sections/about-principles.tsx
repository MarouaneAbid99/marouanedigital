"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/common/section-header";
import { motionTokens, sectionReveal, staggerParent } from "@/lib/motion";

const principles = [
  {
    title: "From Brief to Product Direction",
    copy: "I turn founder goals and user signals into a clear feature roadmap and execution plan."
  },
  {
    title: "Design Systems That Ship",
    copy: "Interfaces are designed as reusable systems, so delivery stays fast and consistent."
  },
  {
    title: "Execution with Product Accountability",
    copy: "I build and iterate in production with measurable outcomes, not static mockups."
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
            title="Solo product partner for SaaS teams that need clarity, craft, and shipping discipline."
            description="Based in Casablanca and working globally, I lead product direction, interface design, and Next.js delivery across focused client engagements."
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
