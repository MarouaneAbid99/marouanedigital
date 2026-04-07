import Link from "next/link";
import { getProjectBySlug, projectsData } from "@/lib/projects-data";

export const metadata = {
  title: "BookCenter - Booking System Case Study",
  description: "Appointment and booking management system for service businesses.",
};

export default function BookCenterPage() {
  const project = getProjectBySlug("bookcenter");
  const previousProject = projectsData.find(p => p.slug === "atlas-build");
  const nextProject = projectsData.find(p => p.slug === "visiondesk");

  if (!project) return null;

  return (
    <div className="w-full bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-300 text-sm font-medium">
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

      {/* Booking System Preview */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Booking Interface</h2>
          
          <div className="bg-slate-900 border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-slate-800/80 border-b border-gray-700 px-6 py-4 backdrop-blur-sm">
              <h3 className="text-gray-200 font-medium text-sm">BookCenter / Schedule Management</h3>
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              {/* Calendar Section */}
              <div className="md:col-span-2 bg-slate-800/40 border border-gray-700/50 rounded-lg p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-gray-200 font-medium text-sm">April 2026</h4>
                  <div className="flex gap-2">
                    <button className="px-2 py-1 text-gray-400 hover:text-gray-200 text-xs">←</button>
                    <button className="px-2 py-1 text-gray-400 hover:text-gray-200 text-xs">→</button>
                  </div>
                </div>
                
                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="text-center text-xs font-semibold text-gray-400">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 30 }).map((_, idx) => {
                    const isBooking = [7, 12, 15, 20, 25].includes(idx);
                    return (
                      <div
                        key={idx}
                        className={`aspect-square flex items-center justify-center text-xs font-medium rounded ${
                          isBooking
                            ? "bg-cyan-600/30 border border-cyan-500/50 text-cyan-300"
                            : "bg-slate-700/20 border border-gray-700/30 text-gray-400"
                        } hover:border-gray-600 transition-colors cursor-pointer`}
                      >
                        {idx + 1}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Appointments List */}
              <div className="bg-slate-800/40 border border-gray-700/50 rounded-lg p-5">
                <h4 className="text-gray-200 font-medium text-sm mb-4">Today's Bookings</h4>
                <div className="space-y-3">
                  {[
                    { time: "09:00", service: "Hair Cut", client: "Sarah M." },
                    { time: "10:30", service: "Color", client: "Lisa K." },
                    { time: "14:00", service: "Styling", client: "Emma J." }
                  ].map((booking, idx) => (
                    <div key={idx} className="bg-slate-700/30 border border-gray-700/30 rounded p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-cyan-400 text-xs font-semibold">{booking.time}</span>
                        <span className="text-green-400 text-xs">✓</span>
                      </div>
                      <p className="text-gray-200 text-xs font-medium">{booking.service}</p>
                      <p className="text-gray-400 text-xs">{booking.client}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats Footer */}
            <div className="bg-slate-800/30 border-t border-gray-700/50 px-6 py-4 grid grid-cols-3 gap-4">
              {[
                { label: "Bookings", value: "18" },
                { label: "Revenue", value: "$1,240" },
                { label: "Occupancy", value: "89%" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
                  <p className="text-cyan-300 font-bold text-lg">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            BookCenter is a comprehensive appointment and booking management system designed for service businesses like salons, clinics, consultancies, and fitness studios. The platform reduces no-shows, streamlines scheduling, and improves customer experience.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            The system features an intuitive calendar interface, automated reminders, real-time availability, customer self-service booking, and powerful analytics to help businesses optimize their operations.
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
                  <div className="text-cyan-400 text-2xl font-bold flex-shrink-0">→</div>
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
          <h2 className="text-4xl font-bold text-white mb-8">Customer Workflow</h2>
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
              { category: "Frontend", items: ["React", "TypeScript", "TailwindCSS"] },
              { category: "Backend", items: ["Node.js", "PostgreSQL", "REST APIs"] },
              { category: "Infrastructure", items: ["Docker", "AWS", "Redis Cache"] }
            ].map((group, idx) => (
              <div key={idx}>
                <h3 className="text-white font-semibold mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
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
                    <p className="text-3xl font-bold text-cyan-400 mb-2">{metric.value}</p>
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
