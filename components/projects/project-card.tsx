import Link from "next/link";
import { ProjectData } from "@/lib/projects-data";

export default function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors">
        {/* Preview Block */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 h-48 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-3 gap-2 p-4 h-full">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-slate-700 rounded"></div>
              ))}
            </div>
          </div>
          <div className="relative text-center">
            <div className="text-sm font-semibold text-gray-400 mb-2">
              {project.category}
            </div>
            <div className="text-2xl font-bold text-white">
              {project.name}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-400 text-sm mb-4">
            {project.shortDescription}
          </p>

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-slate-800 border border-gray-700 rounded text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="px-2 py-1 text-xs text-gray-500">
                  +{project.stack.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* CTA */}
          <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors text-sm">
            Read Case Study
          </button>
        </div>
      </div>
    </Link>
  );
}
