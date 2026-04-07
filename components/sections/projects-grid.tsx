"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "@/components/common/section-header";
import { projectsData } from "@/lib/projects-data";
import { motionTokens, sectionReveal, staggerParent } from "@/lib/motion";

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
            label="Projects"
            title="Full stack applications built for real business problems."
            description="Each project represents complete implementation ownership from conception through deployment."
          />
        </motion.div>

        <motion.div variants={sectionReveal} className="mt-14 grid gap-6 md:grid-cols-2">
          {projectsData.map((project) => {
            const accentColor = {
              'visiondesk': 'from-blue-600/20 to-blue-500/5',
              'shopflow': 'from-green-600/20 to-green-500/5',
              'bizpilot': 'from-purple-600/20 to-purple-500/5',
              'atlas-build': 'from-orange-600/20 to-orange-500/5',
              'bookcenter': 'from-cyan-600/20 to-cyan-500/5'
            }[project.slug];
            
            return (
              <Link 
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group card-border relative overflow-hidden rounded-2xl bg-surface/50 shadow-card transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-lg hover:bg-surface/60"
              >
                {/* Visual Preview Area */}
                <div className={`h-32 bg-gradient-to-b ${accentColor || 'from-slate-700/30 to-slate-800/30'} border-b border-line/15 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-text/20 mb-1">{project.name.substring(0, 1)}</div>
                      <p className="text-xs text-text-muted/40 font-medium">{project.category}</p>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-text">{project.name}</h3>
                    </div>
                    <span className="rounded-full border border-line/40 bg-canvas/60 px-2 py-1 text-[10px] font-medium text-text-muted">
                      Live
                    </span>
                  </div>
                  
                  <p className="mb-4 text-xs text-text-muted leading-relaxed">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.slice(0, 2).map((tech) => (
                      <span key={tech} className="inline-block px-2 py-1 rounded text-[10px] font-medium border border-line/20 bg-canvas/40 text-text-soft">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 2 && (
                      <span className="inline-block px-2 py-1 rounded text-[10px] font-medium border border-line/20 bg-canvas/40 text-text-soft">
                        +{project.stack.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="inline-flex items-center text-xs font-semibold text-accent group-hover:gap-1.5 gap-0.5 transition-all">
                    View Case
                    <span>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
