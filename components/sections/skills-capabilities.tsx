"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/section-header";
import { capabilities } from "@/data/content";
import { motionTokens, sectionReveal, staggerParent } from "@/lib/motion";
import { CapabilityCard } from "@/components/sections/capability-card";

export function SkillsCapabilities() {
  return (
    <section id="skills" className="section-padding section-shell">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: motionTokens.revealAmount }}
        variants={staggerParent(motionTokens.stagger.section)}
      >
        <motion.div variants={sectionReveal}>
          <SectionHeader
            label="Capabilities"
            title="Service-level capability blocks built around client outcomes."
            description="Tools are secondary. The primary focus is helping teams make better product decisions, ship cleaner interfaces, and execute with less risk."
          />
        </motion.div>

        <motion.div variants={sectionReveal} className="mt-14 grid gap-5 md:grid-cols-2">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
