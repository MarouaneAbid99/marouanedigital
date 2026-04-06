"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Project } from "@/data/content";
import { motionTokens } from "@/lib/motion";

type CaseStudyCardProps = {
  project: Project;
};

export function CaseStudyCard({ project }: CaseStudyCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: motionTokens.interaction.cardLift
            }
      }
      transition={{ duration: motionTokens.duration.standard, ease: motionTokens.ease }}
      className="group card-border relative overflow-hidden rounded-3xl bg-surface/70 p-4 shadow-card transition-[border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/35 md:p-5"
    >
      <div
        style={{ transitionDuration: `${motionTokens.durationMs.standard}ms` }}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(150deg,transparent_30%,rgb(var(--color-accent)/0.1)_100%)] opacity-0 transition-opacity group-hover:opacity-100"
      />

      <div className="relative rounded-2xl border border-line/20 bg-canvas/55 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full border border-line/25 bg-surface/70 px-2.5 py-1 text-[11px] font-medium text-text-soft">
            {project.category}
          </span>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
            {project.visual.status}
          </span>
        </div>

        <div className="card-border relative overflow-hidden rounded-xl bg-surface/80 p-3 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]">
          <div className="mb-2 flex items-center justify-between text-[11px] text-text-muted">
            <span>{project.visual.primaryLabel}</span>
            <span>{project.visual.metric}</span>
          </div>

          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-8 rounded-lg border border-line/25 bg-surface-strong/80 p-3">
              <div className="h-2 w-3/5 rounded bg-accent/30" />
              <div className="mt-2 h-1.5 w-4/5 rounded bg-text-soft/25" />
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                {project.visual.modules.map((module, index) => (
                  <div
                    key={module}
                    className={`flex h-8 items-center justify-center rounded-md border border-line/20 text-[10px] font-medium ${
                      index === 1 ? "bg-violet/20 text-text-soft" : "bg-accent/20 text-text-soft"
                    }`}
                  >
                    {module}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-4 rounded-lg border border-line/25 bg-canvas/70 p-2">
              {project.visual.sideItems.map((item) => (
                <p key={item} className="truncate text-[10px] text-text-muted">
                  {item}
                </p>
              ))}
              <div className="mt-4 flex h-10 items-center justify-center rounded-md border border-accent/20 bg-accent/15 px-2 text-center text-[10px] font-medium text-text-soft">
                {project.visual.sideMetric}
              </div>
            </div>
          </div>

          <div className="mt-2 rounded-lg border border-line/20 bg-canvas/70 p-2 text-[11px] text-text-muted">
            {project.visual.secondaryLabel}
          </div>

          <div
            style={{ transitionDuration: `${motionTokens.durationMs.standard}ms` }}
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_35%,rgb(255_255_255/0.09)_52%,transparent_68%)] opacity-40 transition-transform group-hover:translate-x-2"
          />
        </div>
      </div>

      <div className="relative px-1 pb-1 pt-5">
        <h3 className="font-display text-2xl font-semibold text-text">{project.title}</h3>
        <p className="mt-2 text-sm leading-snug text-text-soft">{project.overview}</p>

        <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-text-muted">Problem</p>
        <p className="mt-1 text-sm leading-snug text-text-soft">{project.problem}</p>

        <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-text-muted">Solution</p>
        <p className="mt-1 text-sm leading-snug text-text-soft">{project.solution}</p>

        <p className="mt-3 text-sm font-medium leading-snug text-text">{project.outcome}</p>
        <p className="mt-3 text-xs uppercase tracking-[0.16em] text-text-muted">{project.role}</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.keyFeatures.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-line/25 bg-canvas/60 px-2.5 py-1 text-[11px] font-medium text-text-soft"
            >
              {feature}
            </span>
          ))}
        </div>

        <p className="mt-2 text-xs text-text-soft">{project.result}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line/25 bg-canvas/60 px-2.5 py-1 text-[11px] font-medium text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.ctaHref}
          className="focus-ring mt-5 inline-flex items-center rounded-lg border border-line/25 bg-canvas/65 px-3 py-2 text-xs font-semibold text-text-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/45 hover:text-text"
        >
          {project.ctaLabel}
        </a>
      </div>
    </motion.article>
  );
}
