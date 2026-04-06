import { projectRegistry } from "@/data/content";
import ProjectCard from "./project-card";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section className="relative py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Detailed explorations of enterprise platforms and systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectRegistry.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white font-semibold rounded-lg transition-colors duration-200"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}