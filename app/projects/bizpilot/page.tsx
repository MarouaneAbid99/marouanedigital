import Link from "next/link";
import { getProjectBySlug, projectsData } from "@/lib/projects-data";

export const metadata = {
  title: "BizPilot - Business Dashboard Case Study",
  description: "Business intelligence and performance dashboard for executive teams and decision makers.",
};

export default function BizPilotPage() {
  const project = getProjectBySlug("bizpilot");
  const previousProject = projectsData.find(p => p.slug === "shopflow");
  const nextProject = projectsData.find(p => p.slug === "atlas-build");

  if (!project) return null;

  return (
    <div className="w-full bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg text-purple-300 text-sm font-medium">
              {project.category}
            </span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">{project.name}</h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">{project.description}</p>
          
          <div>
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded text-gray-300 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Executive Dashboard</h2>
          
          <div className="bg-slate-900 border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-slate-800/80 border-b border-gray-700 px-6 py-4 flex items-center justify-between backdrop-blur-sm">
              <span className="text-gray-200 font-medium text-sm">BizPilot / Executive Dashboard</span>
              <div className="flex items-center gap-3">
                <button className="text-xs text-gray-400 hover:text-gray-200 transition-colors">Export</button>
                <div className="w-7 h-7 rounded-full bg-purple-600/30 border border-purple-500 flex items-center justify-center text-xs font-semibold text-purple-300">E</div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
                {[
                  { label: "Total Revenue", value: "$245K", change: "+12%" },
                  { label: "Growth Rate", value: "+18%", trend: "↑" },
                  { label: "Team Members", value: "24", change: "+2" },
                  { label: "Active Projects", value: "7", status: "On Track" }
                ].map((card, idx) => (
                  <div key={idx} className="bg-slate-800/40 border border-gray-700/50 rounded-lg p-4 hover:border-gray-600 transition-colors">
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">{card.label}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-bold text-white">{card.value}</p>
                      <p className="text-xs font-semibold text-green-400">{card.change || card.trend || card.status}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart Visualization */}
              <div className="bg-slate-800/40 border border-gray-700/50 rounded-lg p-6 mb-8">
                <h3 className="text-gray-200 font-medium text-sm mb-6">Revenue Trend (Last 6 Months)</h3>
                <div className="h-32 flex items-end justify-between gap-2">
                  {[60, 75, 70, 85, 92, 95].map((value, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-purple-500/20 to-purple-400/40 rounded-t border border-purple-500/30 hover:from-purple-500/30 hover:to-purple-400/50 transition-all"
                        style={{ height: `${value}%` }}
                      ></div>
                      <span className="text-xs text-gray-500">M{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "Conversion Rate", value: "3.2%" },
                  { label: "Avg Deal Size", value: "$14.5K" },
                  { label: "Pipeline Value", value: "$485K" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800/20 border border-gray-700/30 rounded p-3">
                    <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
                    <p className="text-lg font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            BizPilot is a comprehensive business intelligence dashboard built for executives and team leaders who need real-time visibility into their business metrics.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            The platform consolidates data from multiple sources into customizable KPI widgets, allowing decision-makers to see what matters most at a glance and drill down for deeper insights when needed.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.features.map((feature, idx) => (
              <div key={idx} className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-purple-400 text-2xl font-bold flex-shrink-0">→</div>
                  <p className="text-white font-semibold">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Dashboard Modules</h2>
          <div className="space-y-4">
            {project.modules.map((module, idx) => {
              const [title, description] = module.split(" - ");
              return (
                <div key={idx} className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">User Workflow</h2>
          <div className="bg-slate-900 border border-gray-800 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">{project.workflow}</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Technical Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { category: "Frontend", items: ["Next.js", "TypeScript", "TailwindCSS"] },
              { category: "Visualization", items: ["Chart.js", "D3.js", "Real-time Updates"] },
              { category: "Backend", items: ["PostgreSQL", "Prisma", "Node APIs"] }
            ].map((group, idx) => (
              <div key={idx}>
                <h3 className="text-white font-semibold mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Business Outcome</h2>
          <div className="mb-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{project.outcome}</p>
            
            {project.metrics && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-slate-900 border border-gray-800 rounded-lg p-6 text-center">
                    <p className="text-3xl font-bold text-purple-400 mb-2">{metric.value}</p>
                    <p className="text-gray-300 text-sm">{metric.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 bg-slate-900/50 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {previousProject && (
              <Link href={`/projects/${previousProject.slug}`} className="px-4 py-2 text-gray-400 hover:text-white transition-colors">
                ← {previousProject.name}
              </Link>
            )}
            <Link href="/projects" className="px-6 py-2 border border-gray-600 text-gray-400 hover:text-white rounded transition-colors">
              All Projects
            </Link>
            {nextProject && (
              <Link href={`/projects/${nextProject.slug}`} className="px-4 py-2 text-gray-400 hover:text-white transition-colors">
                {nextProject.name} →
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
