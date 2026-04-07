import { projectsData } from "@/lib/projects-data";
import ProjectCard from "@/components/projects/project-card";

export const metadata = {
  title: "Projects - Full Stack Portfolio",
  description: "Case studies of SaaS platforms, dashboards, e-commerce systems, and business applications built with modern technology.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Full-stack case studies showcasing SaaS platforms, dashboards, e-commerce systems, and business applications
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 max-w-6xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
