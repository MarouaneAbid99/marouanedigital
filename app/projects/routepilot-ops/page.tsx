import Link from "next/link";
import { projectRegistry } from "@/data/content";

export const metadata = {
  title: "RoutePilot Ops - Case Study",
  description: "Operations routing console case study. Workflow automation with intelligent routing and SLA tracking.",
};

export default function RoutePilotOpsPage() {
  const project = projectRegistry.find(p => p.title === "RoutePilot Ops");
  
  if (!project) {
    return <div className="w-full min-h-screen bg-slate-950 flex items-center justify-center text-white">Project not found</div>;
  }

  return (
    <div className="w-full bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-sm font-medium">
              Case Study
            </span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-4">{project.category}</p>
          <p className="text-lg text-gray-400 leading-relaxed">{project.overview}</p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Problem */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Problem</h2>
            <p className="text-gray-400 text-lg leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Solution</h2>
            <p className="text-gray-400 text-lg leading-relaxed">{project.solution}</p>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-amber-400 text-lg mt-1">✓</span>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Outcome</h2>
            <p className="text-gray-400 text-lg leading-relaxed">{project.outcome}</p>
            <p className="text-gray-400 text-lg leading-relaxed mt-4">{project.result}</p>
          </div>

          {/* Role & Tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-800">
            <div>
              <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-3">Role & Responsibilities</h3>
              <p className="text-gray-300">{project.role}</p>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-800 border border-gray-700 rounded text-gray-300 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="relative py-16 px-4 bg-slate-900/50 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/projects" className="px-6 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg transition-colors">
              ← Back to Cases
            </Link>
            <Link href="/" className="px-6 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
