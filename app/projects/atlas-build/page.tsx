import Link from "next/link";
import { getProjectBySlug, projectsData } from "@/lib/projects-data";

export const metadata = {
  title: "Atlas Build - Company Website Case Study",
  description: "Professional marketing website for construction and design services.",
};

export default function AtlasBuildPage() {
  const project = getProjectBySlug("atlas-build");
  const previousProject = projectsData.find(p => p.slug === "bizpilot");
  const nextProject = projectsData.find(p => p.slug === "bookcenter");

  if (!project) return null;

  return (
    <div className="w-full bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-lg text-orange-300 text-sm font-medium">
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

      {/* Website Preview */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Website Design</h2>
          
          <div className="bg-slate-900 border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
            {/* Browser Chrome */}
            <div className="bg-slate-800/80 border-b border-gray-700 px-4 py-3 flex items-center gap-3 backdrop-blur-sm">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 ml-4 px-3 py-1 bg-slate-700/50 rounded text-xs text-gray-300">www.atlasbuild.com</div>
            </div>

            {/* Website Content */}
            <div className="bg-gradient-to-b from-slate-800 to-slate-900">
              {/* Hero Section */}
              <div className="relative h-40 bg-gradient-to-r from-orange-600/30 to-orange-500/10 border-b border-gray-700/50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-white mb-2">Atlas Build</h1>
                  <p className="text-sm text-gray-300">Exceptional Construction & Design</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="p-6 border-b border-gray-700/50">
                <h3 className="text-sm font-semibold text-gray-200 mb-4">Services</h3>
                <div className="grid grid-cols-3 gap-3">
                  {["Commercial Builds", "Residential", "Renovations"].map((service, idx) => (
                    <div key={idx} className="bg-slate-800/50 border border-gray-700/30 rounded p-3 text-center">
                      <p className="text-xs font-medium text-orange-400">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio Preview */}
              <div className="p-6 border-b border-gray-700/50">
                <h3 className="text-sm font-semibold text-gray-200 mb-4">Featured Projects</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Downtown Plaza", "Riverside Homes", "Tech Campus", "Urban Center"].map((project, idx) => (
                    <div key={idx} className="bg-gradient-to-b from-orange-500/20 to-orange-600/10 border border-orange-500/20 rounded p-3 flex items-center justify-center text-xs text-orange-300 font-medium h-20">
                      {project}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 flex flex-col gap-3">
                <button className="w-full px-4 py-2.5 bg-orange-600/80 hover:bg-orange-600 text-white text-xs font-semibold rounded transition-colors">
                  Request Quote
                </button>
                <p className="text-xs text-gray-400 text-center">Get your project started today</p>
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
            Atlas Build is a professional, SEO-optimized website for a construction and design firm that showcases their work, attracts qualified leads, and establishes brand credibility in the market.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            The site features a polished portfolio of completed projects, team profiles, service offerings, and client testimonials all designed to convert prospects into customers. Optimized for search engines and fully responsive across all devices.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.features.map((feature, idx) => (
              <div key={idx} className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-orange-400 text-2xl font-bold flex-shrink-0">→</div>
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
          <h2 className="text-4xl font-bold text-white mb-12">Website Pages</h2>
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
          <h2 className="text-4xl font-bold text-white mb-8">User Journey</h2>
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
              { category: "CMS", items: ["Contentful", "Static Generation", "SEO"] },
              { category: "Hosting", items: ["Vercel", "CDN", "Analytics"] }
            ].map((group, idx) => (
              <div key={idx}>
                <h3 className="text-white font-semibold mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
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
                    <p className="text-3xl font-bold text-orange-400 mb-2">{metric.value}</p>
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
