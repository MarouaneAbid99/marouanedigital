"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/section-header";
import { featuredProject } from "@/data/content";
import { motionTokens, sectionReveal, staggerParent } from "@/lib/motion";

export function FeaturedFlagship() {
  return (
    <section id="featured" className="section-padding section-shell">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: motionTokens.revealAmount }}
        variants={staggerParent(motionTokens.stagger.section)}
      >
        <motion.div variants={sectionReveal}>
          <SectionHeader
            label="Featured Flagship"
            title={`${featuredProject.title} - flagship case in product direction, system design, and delivery.`}
            description={featuredProject.context}
          />
        </motion.div>

        <motion.div variants={sectionReveal} className="mt-12 grid gap-7 lg:grid-cols-12">
          <article className="card-border rounded-3xl bg-surface/78 p-6 shadow-card lg:col-span-8 md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.22em] text-accent/85">{featuredProject.category}</p>
              <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
                Flagship Case
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-semibold text-text md:text-3xl">Product Decisions</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-soft">
              {featuredProject.productDecisions.map((decision) => (
                <li key={decision} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent/90" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-line/20 bg-canvas/60 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-text-muted">Role and Ownership</p>
                <p className="mt-2 text-sm leading-relaxed text-text-soft">{featuredProject.roleOwnership}</p>
              </div>
              <div className="rounded-2xl border border-line/20 bg-canvas/60 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-text-muted">UX and System Decisions</p>
                <p className="mt-2 text-sm leading-relaxed text-text-soft">{featuredProject.uxSystem}</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-line/20 bg-canvas/60 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-text-muted">Technical Execution</p>
              <p className="mt-2 text-sm leading-relaxed text-text-soft">{featuredProject.technicalExecution}</p>
            </div>
          </article>

          <article className="card-border relative overflow-hidden rounded-3xl bg-surface/72 p-6 shadow-card lg:col-span-4 md:p-7">
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-accent/16 blur-3xl" />
            <p className="relative text-xs uppercase tracking-[0.2em] text-text-muted">Outcome Framing</p>
            <p className="relative mt-4 text-sm leading-relaxed text-text">{featuredProject.outcome}</p>

            <div className="relative mt-5 rounded-2xl border border-line/20 bg-canvas/60 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-text-muted">Why It Matters</p>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-text-soft">
                <li>Built as one product system, not disconnected screens.</li>
                <li>Decisions were documented and reusable across releases.</li>
                <li>Frontend delivery preserved design intent in production.</li>
              </ul>
            </div>

            <div className="relative mt-6 flex flex-wrap gap-2">
              {featuredProject.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line/25 bg-canvas/60 px-2.5 py-1 text-[11px] text-text-muted">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#projects"
              className="focus-ring relative mt-8 inline-flex items-center justify-center rounded-xl border border-accent/35 bg-accent/12 px-4 py-2 text-sm font-semibold text-text transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/60 hover:bg-accent/20 hover:shadow-glow"
            >
              View Related Case Studies
            </a>
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}
