"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/section-header";
import { projects } from "@/data/content";
import { motionTokens, sectionReveal, staggerParent } from "@/lib/motion";
import { CaseStudyCard } from "@/components/sections/case-study-card";

export function ProjectsGrid() {
  return (
    <section id="projects" className="section-padding section-shell">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: motionTokens.revealAmount }}
        variants={staggerParent(motionTokens.stagger.section)}
      >
        <motion.div variants={sectionReveal}>
          <SectionHeader
            label="Selected Work"
            title="Selected product cases with clear problem-to-outcome framing."
            description="Each case preview captures product context, ownership scope, and delivery impact in a fast, credible format."
          />
        </motion.div>

        <motion.div variants={sectionReveal} className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <CaseStudyCard key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
