import Link from "next/link";
import { getProjectBySlug, projectsData } from "@/lib/projects-data";

export const metadata = {
  title: "ShopFlow - E-Commerce Case Study",
  description: "E-commerce admin system with inventory and order management for online stores.",
};

export default function ShopFlowPage() {
  const project = getProjectBySlug("shopflow");
  const previousProject = projectsData.find(p => p.slug === "visiondesk");
  const nextProject = projectsData.find(p => p.slug === "bizpilot");

  if (!project) return null;

  return (
    <div className="w-full bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm font-medium">
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

      {/* App Preview Section */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">E-Commerce Dashboard</h2>
          
          <div className="bg-slate-900 border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-slate-800/80 border-b border-gray-700 px-6 py-4 flex items-center justify-between backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-gray-200 font-medium text-sm">ShopFlow / Store Dashboard</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-3 py-1 text-xs text-gray-400 hover:text-gray-200 transition-colors">⚙️ Settings</button>
                <div className="w-7 h-7 rounded-full bg-green-600/30 border border-green-500 flex items-center justify-center text-xs font-semibold text-green-300">S</div>
              </div>
            </div>

            <div className="flex">
              <div className="w-52 bg-slate-800/50 border-r border-gray-700 p-4 hidden md:block">
                <nav className="space-y-1">
                  {["Overview", "Products", "Orders", "Inventory", "Customers"].map((item, idx) => (
                    <div
                      key={idx}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        idx === 0
                          ? "bg-green-600/20 text-green-300 border border-green-500/30"
                          : "text-gray-400 hover:text-gray-200 hover:bg-slate-700/30"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="flex-1 p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                  {[
                    { label: "Total Orders", value: "1,243", change: "+15%" },
                    { label: "Revenue This Month", value: "$48.2K", change: "+22%" },
                    { label: "Low Stock Items", value: "12", change: "⚠️ Alert" }
                  ].map((card, idx) => (
                    <div key={idx} className="bg-slate-800/40 border border-gray-700/50 rounded-lg p-5 hover:border-gray-600 transition-colors">
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">{card.label}</p>
                      <div className="flex items-end justify-between">
                        <p className="text-2xl font-bold text-white">{card.value}</p>
                        <p className={`text-xs font-semibold ${card.change.includes('+') ? 'text-green-400' : 'text-yellow-400'}`}>{card.change}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-800/40 border border-gray-700/50 rounded-lg overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-700/50 bg-slate-800/20">
                    <h3 className="text-gray-200 font-medium text-sm">Recent Orders</h3>
                  </div>
                  <div className="divide-y divide-gray-700/30">
                    {[
                      { order: "#5001", customer: "Acme Corp", amount: "$245", status: "Processing" },
                      { order: "#5000", customer: "Blue Industries", amount: "$890", status: "Shipped" },
                      { order: "#4999", customer: "Green Solutions", amount: "$165", status: "Delivered" }
                    ].map((row, idx) => (
                      <div key={idx} className="px-6 py-3.5 flex items-center justify-between text-sm hover:bg-slate-700/20 transition-colors">
                        <span className="text-gray-300 font-medium">{row.order}</span>
                        <span className="text-gray-400 flex-1 ml-8">{row.customer}</span>
                        <span className={`px-2.5 py-1 rounded text-xs font-medium ${
                          row.status === 'Delivered' ? 'bg-green-500/20 text-green-300' :
                          row.status === 'Shipped' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-yellow-500/20 text-yellow-300'
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
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            ShopFlow is an end-to-end e-commerce admin system that gives online store owners complete control over their business operations. From product management to order fulfillment, all operations are streamlined into one intuitive dashboard.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            The platform handles the entire customer transaction cycle: product listings, inventory management, order processing, payment handling, and customer analytics. Store owners spend less time managing chaos and more time growing their business.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.features.map((feature, idx) => (
              <div key={idx} className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-green-400 text-2xl font-bold flex-shrink-0">→</div>
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
          <h2 className="text-4xl font-bold text-white mb-12">System Modules</h2>
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

      {/* Technical Stack */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Technical Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { category: "Frontend", items: ["Next.js", "TypeScript", "TailwindCSS"] },
              { category: "Backend", items: ["Node.js", "MongoDB", "Stripe API"] },
              { category: "Payments", items: ["Stripe", "NextAuth", "Vercel"] }
            ].map((group, idx) => (
              <div key={idx}>
                <h3 className="text-white font-semibold mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
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
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Business Outcome</h2>
          <div className="mb-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{project.outcome}</p>
            
            {project.metrics && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-slate-900 border border-gray-800 rounded-lg p-6 text-center">
                    <p className="text-3xl font-bold text-green-400 mb-2">{metric.value}</p>
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
