"use client";

import Link from "next/link";
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
            title={`${featuredProject.title} - flagship case in full-stack architecture, dashboard systems, and delivery control.`}
            description={featuredProject.context}
          />
        </motion.div>

        <motion.div variants={sectionReveal} className="mt-14 grid gap-8 lg:grid-cols-12">
          <article className="card-border rounded-2xl bg-surface/40 border border-line/20 p-7 lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted font-semibold">{featuredProject.category}</p>
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-[10px] font-semibold text-accent">
                Featured
              </span>
            </div>

            <h3 className="font-display text-3xl font-semibold text-text mb-6 leading-tight">{featuredProject.title}</h3>
            <p className="text-base leading-relaxed text-text-soft mb-8">{featuredProject.context}</p>
            
            <h4 className="font-display font-semibold text-text mb-4">Key Decisions</h4>
            <ul className="space-y-3 text-sm leading-relaxed text-text-soft">
              {featuredProject.productDecisions.map((decision, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-line/20 bg-canvas/40 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-text-muted font-semibold mb-2">Role</p>
                <p className="text-sm leading-relaxed text-text-soft">{featuredProject.roleOwnership}</p>
              </div>
              <div className="rounded-xl border border-line/20 bg-canvas/40 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-text-muted font-semibold mb-2">Impact</p>
                <p className="text-sm leading-relaxed text-text-soft">{featuredProject.outcome}</p>
              </div>
            </div>
          </article>

          <article className="card-border relative overflow-hidden rounded-2xl bg-surface/40 border border-line/20 p-7 lg:col-span-4">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/12 blur-3xl" />
            <p className="relative text-xs uppercase tracking-[0.2em] text-text-muted font-semibold">Core Practice</p>
            <p className="relative mt-4 text-base font-semibold text-text leading-tight mb-6">{featuredProject.uxSystem}</p>
            <p className="relative text-sm leading-relaxed text-text-muted mb-6">Built with {featuredProject.tags.slice(0, 3).join(', ')}.</p>
            <Link
              href="/projects/visiondesk"
              className="relative inline-flex items-center justify-center rounded-lg border border-accent/40 bg-accent/10 px-4 py-2.5 text-xs font-semibold text-accent transition-all duration-300 hover:border-accent/60 hover:bg-accent/15"
            >
              Read Full Case Study →
            </Link>
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}
