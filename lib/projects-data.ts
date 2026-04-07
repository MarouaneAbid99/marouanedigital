export interface ProjectData {
  slug: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  stack: string[];
  features: string[];
  modules: string[];
  workflow: string;
  outcome: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projectsData: ProjectData[] = [
  {
    slug: "visiondesk",
    name: "VisionDesk",
    category: "SaaS Platform",
    description: "Comprehensive SaaS platform for optical businesses to manage clients, prescriptions, inventory, and orders in one unified system.",
    shortDescription: "Client and order management for optical businesses",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS", "Prisma", "Auth0"],
    features: [
      "Client management with prescription history",
      "Inventory tracking and stock control",
      "Order processing and fulfillment",
      "Real-time dashboards and analytics",
      "User roles and permissions",
      "Automated reporting"
    ],
    modules: [
      "Client Dashboard - Overview of key metrics",
      "Client Management - Create, edit, store patient data",
      "Prescription Module - Track prescriptions and history",
      "Inventory System - Products, stock levels, reordering",
      "Orders - Process, track, and manage orders",
      "Reports - Generate sales, inventory, and performance reports"
    ],
    workflow: "Admin logs in → Dashboard shows key metrics → Navigate to clients → View client details and prescription history → Create or modify orders → Track inventory levels → Generate reports for business analysis.",
    outcome: "Optical businesses gain 40% faster order processing, complete visibility into inventory, and organized client records that reduce manual work by hours per week.",
    metrics: [
      { label: "Order Processing Time", value: "-40%" },
      { label: "Manual Work Reduced", value: "8 hours/week" },
      { label: "Data Organization", value: "100%" }
    ]
  },
  {
    slug: "shopflow",
    name: "ShopFlow",
    category: "E-Commerce Platform",
    description: "Full-featured e-commerce admin system for managing products, orders, inventory, and customer data with an intuitive dashboard and real-time updates.",
    shortDescription: "E-commerce admin system with inventory and order management",
    stack: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS", "Stripe API", "NextAuth"],
    features: [
      "Product catalog and management",
      "Inventory tracking and low-stock alerts",
      "Order management and fulfillment",
      "Customer database with purchase history",
      "Payment processing integration",
      "Sales analytics and reporting",
      "Multi-user access with role control"
    ],
    modules: [
      "Dashboard - Sales overview, orders pending, low stock alerts",
      "Products - Add, edit, categorize products with pricing",
      "Inventory - Real-time stock tracking, reorder alerts",
      "Orders - View, process, ship, and track orders",
      "Customers - Customer profiles, purchase history, segments",
      "Analytics - Revenue, top products, customer trends"
    ],
    workflow: "Store owner logs in → Dashboard shows daily sales and pending orders → Click to fulfill orders → Update inventory automatically → Monitor stock levels → View customer analytics to inform business decisions.",
    outcome: "E-commerce businesses streamline order processing by 50%, reduce inventory errors through automated tracking, and gain data-driven insights to grow sales.",
    metrics: [
      { label: "Order Processing", value: "-50%" },
      { label: "Inventory Accuracy", value: "+95%" },
      { label: "Sales Insights Gained", value: "Real-time" }
    ]
  },
  {
    slug: "bizpilot",
    name: "BizPilot",
    category: "Business Dashboard",
    description: "Executive dashboard for business teams to track KPIs, team performance, projects, and strategic metrics with customizable views and real-time data.",
    shortDescription: "Business intelligence and performance dashboard",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS", "Chart.js", "Prisma"],
    features: [
      "Customizable KPI widgets",
      "Real-time performance metrics",
      "Team productivity tracking",
      "Project status monitoring",
      "Data visualization and charts",
      "Export and reporting capabilities",
      "User roles and data permissions"
    ],
    modules: [
      "Overview - KPI cards showing business health",
      "Analytics - Chart-based performance visualization",
      "Team - Team metrics, productivity, individual progress",
      "Projects - Active projects, milestones, status tracking",
      "Reports - Generate custom reports and exports",
      "Settings - Configure dashboards, roles, data sources"
    ],
    workflow: "Executive opens dashboard → Sees key metrics at a glance → Drills into teams or projects for details → Reviews trends in analytics section → Exports report for stakeholders.",
    outcome: "Business leaders save hours on reporting, make faster decisions with real-time data visibility, and align teams around clear metrics.",
    metrics: [
      { label: "Reporting Time", value: "-60%" },
      { label: "Decision Speed", value: "+3x" },
      { label: "Data Visibility", value: "100%" }
    ]
  },
  {
    slug: "atlas-build",
    name: "Atlas Build",
    category: "Company Website",
    description: "Professional company website for a construction and design firm showcasing services, portfolio, team, and client testimonials with SEO optimization.",
    shortDescription: "Marketing website for construction and design services",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Contentful CMS", "Vercel"],
    features: [
      "Responsive design across all devices",
      "SEO-optimized content pages",
      "Project portfolio showcase",
      "Team profiles and bios",
      "Client testimonials section",
      "Contact forms with email integration",
      "Blog for industry insights"
    ],
    modules: [
      "Homepage - Hero, featured projects, call-to-action",
      "Services - Detailed service offerings with descriptions",
      "Portfolio - Case studies and completed projects",
      "Team - Company culture and team member profiles",
      "Blog - Industry articles and company news",
      "Contact - Contact form and inquiry handling"
    ],
    workflow: "Prospect visits site → Views services and portfolio → Reads testimonials → Fills contact form → Receives response from team.",
    outcome: "Construction firm establishes professional online presence, captures qualified leads through improved SEO, and showcases expertise to attract new clients.",
    metrics: [
      { label: "Lead Generation", value: "+250%" },
      { label: "SEO Rankings", value: "Top 3 keywords" },
      { label: "Mobile Traffic", value: "65%" }
    ]
  },
  {
    slug: "bookcenter",
    name: "BookCenter",
    category: "Booking System",
    description: "Appointment and booking system for service businesses including calendar management, client scheduling, reminders, and business analytics.",
    shortDescription: "Booking and appointment management platform",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS", "Node.js", "Twilio"],
    features: [
      "Interactive calendar booking",
      "Automated reminders via email and SMS",
      "Service and staff management",
      "Client database and history",
      "Availability scheduling",
      "Payment collection",
      "Business analytics and reporting"
    ],
    modules: [
      "Calendar - Visual booking calendar with availability",
      "Services - Service types, duration, pricing setup",
      "Staff - Manage staff schedules and specialties",
      "Clients - Client profiles, booking history, preferences",
      "Billing - Payments, invoices, revenue tracking",
      "Analytics - Booking trends, revenue, team performance"
    ],
    workflow: "Client visits site → Views available times → Books appointment → Receives confirmation → Admin manages scheduling → Automatic reminders sent → Tracks revenue and client data.",
    outcome: "Service businesses eliminate scheduling conflicts, reduce no-shows through automated reminders, and organize client data for better service delivery.",
    metrics: [
      { label: "No-Shows Reduced", value: "-75%" },
      { label: "Admin Time Saved", value: "10 hours/week" },
      { label: "Client Retention", value: "+40%" }
    ]
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(p => p.slug === slug);
}
