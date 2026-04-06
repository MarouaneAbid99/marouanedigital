import Link from "next/link";
import { Project } from "@/data/content";

interface ProjectCardProps extends Project {
  id?: string;
}

export default function ProjectCard({
  title,
  category,
  overview,
  ctaLabel,
  ctaHref
}: ProjectCardProps) {
  // Determine accent color based on category
  const getAccentColor = (category: string) => {
    if (category.includes("Analytics") || category.includes("Revenue")) return "blue";
    if (category.includes("Operations") || category.includes("Routing")) return "amber";
    if (category.includes("Onboarding") || category.includes("Activation")) return "emerald";
    if (category.includes("Admin") || category.includes("Enterprise")) return "violet";
    return "blue";
  };

  const accent = getAccentColor(category);

  const accentColors: Record<string, string> = {
    blue: "hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 bg-blue-950/10",
    amber: "hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10 bg-amber-950/10",
    emerald: "hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 bg-emerald-950/10",
    violet: "hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 bg-violet-950/10"
  };

  const accentButtons: Record<string, string> = {
    blue: "bg-blue-600 hover:bg-blue-700",
    amber: "bg-amber-600 hover:bg-amber-700",
    emerald: "bg-emerald-600 hover:bg-emerald-700",
    violet: "bg-violet-600 hover:bg-violet-700"
  };

  return (
    <div className={`border border-gray-800 rounded-lg p-8 transition-all duration-300 ${accentColors[accent]}`}>
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-800/50 rounded text-gray-300 mb-3">
          {category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
      </div>

      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {overview}
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={ctaHref}
          className={`px-6 py-2 ${accentButtons[accent]} text-white font-semibold rounded-lg transition-colors duration-200 text-center`}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
