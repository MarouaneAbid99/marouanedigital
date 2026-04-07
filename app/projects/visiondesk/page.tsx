import Link from "next/link";
import { getProjectBySlug, projectsData } from "@/lib/projects-data";

export const metadata = {
  title: "VisionDesk - SaaS Case Study",
  description: "Client and order management for optical businesses. Full-stack SaaS platform case study.",
};

export default function VisionDeskPage() {
  const project = getProjectBySlug("visiondesk");
  const previousProject = projectsData.find(p => p.slug === "bookcenter");
  const nextProject = projectsData.find(p => p.slug === "shopflow");

  if (!project) return null;

  return (
    <div className="w-full bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-3.5 py-1.5 bg-blue-500/20 border border-blue-500/50 rounded-lg text-blue-300 text-xs font-medium uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">{project.name}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">{project.description}</p>
          
          {/* Tech Stack */}
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-gray-800/50 border border-gray-700/60 rounded-lg text-gray-300 text-xs font-medium hover:border-gray-600 transition-colors">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 md:py-32 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Product Interface</h2>
          
          {/* Simulated Dashboard */}
          <div className="bg-slate-900 border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
            {/* Top Bar */}
            <div className="bg-slate-800/80 border-b border-gray-700 px-6 py-4 flex items-center justify-between backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-gray-200 font-medium text-sm">VisionDesk / Dashboard</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-3 py-1 text-xs text-gray-400 hover:text-gray-200 transition-colors">Help</button>
                <div className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-500 flex items-center justify-center text-xs font-semibold text-blue-300">M</div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex">
              {/* Sidebar */}
              <div className="w-52 bg-slate-800/50 border-r border-gray-700 p-4 hidden md:block">
                <nav className="space-y-1">
                  {["Dashboard", "Clients", "Orders", "Inventory", "Reports"].map((item, idx) => (
                    <div
                      key={idx}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        idx === 0
                          ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                          : "text-gray-400 hover:text-gray-200 hover:bg-slate-700/30"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-8">
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                  {[
                    { label: "Active Clients", value: "284", change: "+12%" },
                    { label: "Orders This Month", value: "126", change: "+8%" },
                    { label: "Inventory Items", value: "1,847", change: "OK" }
                  ].map((card, idx) => (
                    <div key={idx} className="bg-slate-800/40 border border-gray-700/50 rounded-lg p-5 hover:border-gray-600 transition-colors">
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">{card.label}</p>
                      <div className="flex items-end justify-between">
                        <p className="text-2xl font-bold text-white">{card.value}</p>
                        <p className={`text-xs font-semibold ${card.change.includes('+') ? 'text-green-400' : 'text-blue-400'}`}>{card.change}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table Preview */}
                <div className="bg-slate-800/40 border border-gray-700/50 rounded-lg overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-700/50 bg-slate-800/20">
                    <h3 className="text-gray-200 font-medium text-sm">Recent Orders</h3>
                  </div>
                  <div className="divide-y divide-gray-700/30">
                    {[
                      { order: "#2847", client: "Sarah Johnson", status: "Completed", amount: "$340" },
                      { order: "#2846", client: "Michael Chen", status: "Processing", amount: "$420" },
                      { order: "#2845", client: "Emma Davis", status: "Shipped", amount: "$285" }
                    ].map((row, idx) => (
                      <div key={idx} className="px-6 py-3.5 flex items-center justify-between text-sm hover:bg-slate-700/20 transition-colors">
                        <span className="text-gray-300 font-medium">{row.order}</span>
                        <span className="text-gray-400 flex-1 ml-8">{row.client}</span>
                        <span className={`px-2.5 py-1 rounded text-xs font-medium ${
                          row.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                          row.status === 'Processing' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-blue-500/20 text-blue-300'
                        }`}>{row.status}</span>
                        <span className="text-gray-300 font-medium ml-8">{row.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-32 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Overview</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              VisionDesk is a comprehensive SaaS platform designed specifically for optical businesses. It consolidates all customer-facing and operational data into one unified system, replacing scattered spreadsheets and manual processes.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              The platform handles the complete customer lifecycle: from initial client intake and prescription management through inventory tracking, order processing, and business reporting. Optical store owners and managers gain complete visibility into their business while spending less time on administrative work.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 md:py-32 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, idx) => (
              <div key={idx} className="border border-gray-700/50 bg-slate-800/20 rounded-lg p-6 hover:border-gray-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 text-2xl font-bold flex-shrink-0">→</div>
                  <div>
                    <p className="text-white font-semibold mb-2">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 md:py-32 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">System Modules</h2>
          <div className="space-y-3">
            {project.modules.map((module, idx) => {
              const [title, description] = module.split(" - ");
              return (
                <div key={idx} className="border border-gray-700/50 bg-slate-800/20 rounded-lg p-5 md:p-6 hover:border-gray-600 transition-colors group">
                  <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">{title}</h3>
                  <p className="text-gray-400 text-sm">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 md:py-32 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">User Workflow</h2>
          <div className="bg-slate-900/40 border border-gray-700/50 rounded-lg p-8 md:p-10">
            <p className="text-gray-300 text-lg leading-relaxed">{project.workflow}</p>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20 md:py-32 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Technical Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { category: "Frontend", items: ["Next.js", "TypeScript", "TailwindCSS"] },
              { category: "Backend", items: ["Node.js", "Prisma", "PostgreSQL"] },
              { category: "DevOps", items: ["Auth0", "Vercel", "PostgreSQL Cloud"] }
            ].map((group, idx) => (
              <div key={idx} className="bg-slate-800/20 border border-gray-700/50 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-5">{group.category}</h3>
                <ul className="space-y-2.5">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2.5 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400/60 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome & Metrics */}
      <section className="py-20 md:py-32 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Business Outcome</h2>
          <div className="mb-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-10">{project.outcome}</p>
            
            {project.metrics && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-slate-900/40 border border-gray-700/50 rounded-lg p-6 md:p-8 text-center hover:border-blue-500/30 transition-colors">
                    <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{metric.value}</p>
                    <p className="text-gray-400 text-sm">{metric.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 bg-slate-900/50 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {previousProject && (
              <Link href={`/projects/${previousProject.slug}`} className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm">
                ← {previousProject.name}
              </Link>
            )}
            <Link href="/projects" className="px-6 py-2 border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 rounded transition-colors text-sm">
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
