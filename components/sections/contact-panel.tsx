"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/data/content";
import { motionTokens, sectionReveal, staggerParent } from "@/lib/motion";

export function ContactPanel() {
  return (
    <section id="contact" className="section-shell pb-24 pt-8 md:pb-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: motionTokens.revealAmount }}
        variants={staggerParent(motionTokens.stagger.section)}
        className="card-border relative overflow-hidden rounded-3xl bg-surface/80 p-7 shadow-card md:p-10"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/18 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-48 w-48 rounded-full bg-violet/20 blur-3xl" />

        <motion.p variants={sectionReveal} className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-accent/85">
          Contact
        </motion.p>
        <motion.h2 variants={sectionReveal} className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-text md:text-4xl">
          Need a product partner to define and ship a serious SaaS experience?
        </motion.h2>
        <motion.p variants={sectionReveal} className="mt-4 max-w-2xl text-base leading-relaxed text-text-soft">
          Best fit for teams that need clearer product decisions, stronger interface systems, and production-ready frontend delivery.
        </motion.p>

        <motion.p variants={sectionReveal} className="mt-6 text-sm text-text">
          Availability: {contactInfo.availability} {contactInfo.responseTime}
        </motion.p>

        <motion.p variants={sectionReveal} className="mt-2 text-sm text-text">
          Direct email:{" "}
          <a
            href={`mailto:${contactInfo.email}`}
            aria-label={`Email ${contactInfo.email}`}
            className="focus-ring rounded-sm underline decoration-line/40 underline-offset-4 transition-colors duration-300 hover:text-text"
          >
            {contactInfo.email}
          </a>
        </motion.p>

        <motion.p variants={sectionReveal} className="mt-1 text-sm text-text-soft">
          {contactInfo.location}
        </motion.p>

        <motion.div variants={sectionReveal} className="mt-8">
          <a
            href={`mailto:${contactInfo.email}`}
            aria-label="Start a project via email"
            className="focus-ring inline-flex items-center justify-center rounded-xl border border-accent/35 bg-accent/12 px-6 py-3 text-sm font-semibold text-text transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/20 hover:shadow-glow"
          >
            Start a Project
          </a>
        </motion.div>

        <motion.div variants={sectionReveal} className="mt-5 flex flex-wrap items-center gap-4 text-sm text-text-muted">
          {contactInfo.socials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} profile`}
              className="focus-ring rounded-sm transition-colors duration-300 hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
