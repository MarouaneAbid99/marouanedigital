export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type CredibilityItem = {
  title: string;
  detail: string;
};

export type ProcessStep = {
  title: string;
  summary: string;
};

export type FeaturedProject = {
  title: string;
  category: string;
  context: string;
  productDecisions: string[];
  roleOwnership: string;
  uxSystem: string;
  technicalExecution: string;
  outcome: string;
  tags: string[];
};

export type Project = {
  title: string;
  category: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  outcome: string;
  role: string;
  tags: string[];
  result: string;
  ctaLabel: "Read Case Study" | "Open Product Preview";
  ctaHref: string;
  visual: {
    primaryLabel: string;
    secondaryLabel: string;
    metric: string;
    status: string;
    modules: [string, string, string];
    sideItems: [string, string, string];
    sideMetric: string;
  };
};

export type Capability = {
  title: string;
  outcome: string;
  explanation: string;
  tools: string[];
};

export type ContactInfo = {
  email: string;
  location: string;
  availability: string;
  responseTime: string;
  socials: SocialLink[];
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  keywords: string[];
};

export const siteConfig: SiteConfig = {
  name: "MAROUANEDIGITAL",
  title: "MAROUANEDIGITAL | Full Stack Developer for SaaS Platforms and Web Applications",
  description:
    "Full stack developer building scalable SaaS platforms, dashboard systems, admin platforms, and business web applications with clean architecture and reliable execution.",
  url: "https://marouanedigital.com",
  locale: "en_US",
  keywords: [
    "full stack developer",
    "saaS developer",
    "dashboard systems",
    "admin platforms",
    "business web applications",
    "frontend backend developer",
    "next.js full stack developer",
    "next.js portfolio",
    "typescript developer",
    "marouane abid"
  ]
};

export const contactInfo: ContactInfo = {
  email: "abidmarouane9@gmail.com",
  location: "Casablanca, Morocco (GMT+1)",
  availability: "Available for one focused product engagement at a time.",
  responseTime: "Typical response within 24 hours.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/marouane-abid-3612ab400/" },
    { label: "GitHub", href: "https://github.com/MarouaneAbid99" }
  ]
};

export const navItems: NavItem[] = [
  { label: "Work", href: "#featured" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const credibilityItems: CredibilityItem[] = [
  {
    title: "SaaS and Admin Domain Depth",
    detail: "Hands-on delivery across dashboards, admin operations, and workflow-heavy business products."
  },
  {
    title: "End-to-End Ownership",
    detail: "Product decisions, backend model thinking, and frontend execution handled in one loop."
  },
  {
    title: "System-First Implementation",
    detail: "Reusable product architecture and interface systems built for long-term maintainability."
  },
  {
    title: "Business-Aligned Delivery",
    detail: "Work scoped around decision speed, operational reliability, and measurable product outcomes."
  }
];

export const featuredProject: FeaturedProject = {
  title: "VisionDesk",
  category: "Flagship SaaS Operations Platform",
  context:
    "Operations and delivery teams were managing execution across disconnected docs, spreadsheets, and status threads. VisionDesk consolidated planning, task control, and operational visibility into one SaaS workspace.",
  productDecisions: [
    "Designed one operational model for priorities, ownership, milestones, and status flow.",
    "Defined role-based permissions and review states to reduce execution ambiguity.",
    "Implemented structured logs and history trails to preserve context across handoffs."
  ],
  roleOwnership:
    "Owned solution architecture, backend/frontend system decisions, data flow design, and end-to-end delivery.",
  uxSystem:
    "Built a modular dashboard and admin interface system with reusable high-density patterns for planning, review, and execution.",
  technicalExecution:
    "Implemented with Next.js and TypeScript, integrating API contracts, role-aware states, and scalable component architecture for production reliability.",
  outcome:
    "Established a more reliable operating rhythm with faster operational reviews, clearer accountability, and better release predictability.",
  tags: ["Full Stack Architecture", "Dashboard Systems", "SaaS Operations", "Next.js", "TypeScript"]
};

export const projectRegistry: Project[] = [
  {
    title: "NexaPulse",
    category: "Revenue Intelligence Dashboard",
    overview: "An executive analytics workspace for revenue, activation, and pipeline decision-making.",
    problem: "Weekly growth reviews were delayed by fragmented metrics and inconsistent definitions.",
    solution: "Built a unified KPI command center with shared metric logic and review workflows.",
    keyFeatures: ["KPI command center", "Role-based board views", "Forecast and export workflows"],
    outcome: "Leadership reviews moved from data reconciliation to faster, action-focused planning.",
    role: "Full Stack Architecture, Data Modeling, Frontend Systems",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Dashboard UX"],
    result: "Outcome: one trusted operating dashboard replaced scattered reporting rituals.",
    ctaLabel: "Read Case Study",
    ctaHref: "#contact",
    visual: {
      primaryLabel: "Executive Overview",
      secondaryLabel: "Weekly Revenue and Activation Timeline",
      metric: "Decision Signal Quality",
      status: "Shipped",
      modules: ["Revenue", "Activation", "Pipeline"],
      sideItems: ["Forecast Sync", "Owner Alerts", "Board Export"],
      sideMetric: "Review Cycle Aligned"
    }
  },
  {
    title: "RoutePilot Ops",
    category: "Operations Routing Console",
    overview: "A workflow console for routing operational requests with clear ownership and escalation control.",
    problem: "Manual triage created queue noise, inconsistent ownership, and missed SLA windows.",
    solution: "Designed a rule-based routing workflow with approval checkpoints and audit visibility.",
    keyFeatures: ["Routing rules engine", "Approval queue", "Escalation audit trail"],
    outcome: "Support leads gained predictable routing behavior and clearer escalation handling.",
    role: "Workflow Architecture, Backend Services, Frontend Delivery",
    tags: ["TypeScript", "Node APIs", "Workflow Systems", "React"],
    result: "Outcome: triage became consistent and operational load was easier to control.",
    ctaLabel: "Open Product Preview",
    ctaHref: "#contact",
    visual: {
      primaryLabel: "Routing Command Panel",
      secondaryLabel: "Approval and Escalation Queue",
      metric: "Queue SLA Health",
      status: "Live Pilot",
      modules: ["Rules", "Queue", "Approvals"],
      sideItems: ["Policy Logic", "Escalations", "Audit Trail"],
      sideMetric: "Ownership Clarity Raised"
    }
  },
  {
    title: "LaunchBoard",
    category: "SaaS Onboarding and Activation Platform",
    overview: "A conversion-focused onboarding product layer for SaaS trials and activation journeys.",
    problem: "Signup growth did not convert to activation because onboarding lacked decision clarity.",
    solution: "Reframed onboarding into modular steps with intent-based messaging and progressive setup.",
    keyFeatures: ["Intent-based onboarding", "Activation checkpoints", "Lifecycle instrumentation"],
    outcome: "Teams improved first-value clarity and generated more qualified product conversations.",
    role: "Full Stack Implementation, Funnel Logic, UX Systems",
    tags: ["Next.js", "TypeScript", "Instrumentation", "Conversion UX"],
    result: "Outcome: onboarding quality improved with clearer funnel learning for product teams.",
    ctaLabel: "Read Case Study",
    ctaHref: "#contact",
    visual: {
      primaryLabel: "Value Narrative Framework",
      secondaryLabel: "Activation Workflow Stages",
      metric: "Activation Flow Clarity",
      status: "Shipped",
      modules: ["Positioning", "Proof", "Activation"],
      sideItems: ["A/B Test", "Lead Score", "CRM Sync"],
      sideMetric: "First-Value Time Reduced"
    }
  },
  {
    title: "OpsConsole",
    category: "Enterprise Admin Control Center",
    overview: "A high-density admin workspace for policy reviews, approvals, and operational safeguards.",
    problem: "Critical policy actions were scattered across disconnected screens and inconsistent states.",
    solution: "Redesigned admin IA around task status, risk level, and batch action workflows.",
    keyFeatures: ["Priority action queue", "Policy inspector", "Bulk execution safeguards"],
    outcome: "Operations teams handled high-risk actions faster with stronger review confidence.",
    role: "Information Architecture, API Integration, Frontend Systems",
    tags: ["React", "TypeScript", "RBAC", "Audit Logging"],
    result: "Outcome: review cycles became faster with clearer visibility into critical actions.",
    ctaLabel: "Open Product Preview",
    ctaHref: "#contact",
    visual: {
      primaryLabel: "Operational Action Queue",
      secondaryLabel: "Policy Review and Audit Layer",
      metric: "Admin Flow Reliability",
      status: "Production V2",
      modules: ["Queue", "Inspector", "Bulk"],
      sideItems: ["Policy Check", "Owner Notes", "Rollback"],
      sideMetric: "Critical Actions Controlled"
    }
  }
];

export const projects: Project[] = projectRegistry;

export const capabilities: Capability[] = [
  {
    title: "Solution Architecture",
    outcome: "I define scalable application architecture before implementation complexity grows.",
    explanation: "I design data models, service boundaries, and integration flows to keep delivery predictable and maintainable.",
    tools: ["System Design", "Data Modeling", "Service Boundaries"]
  },
  {
    title: "Interface Systems",
    outcome: "I build interface systems that stay coherent as products add complexity.",
    explanation: "Reusable patterns, interaction rules, and hierarchy logic keep high-density SaaS interfaces clear and scalable.",
    tools: ["Figma", "Design Tokens", "Interaction Patterns"]
  },
  {
    title: "Full Stack Delivery",
    outcome: "I ship production-ready frontend and backend layers with clean integration contracts.",
    explanation: "From API implementation to interface delivery, I ensure system behavior is consistent, testable, and deployment-ready.",
    tools: ["Next.js", "TypeScript", "Node APIs", "SQL"]
  },
  {
    title: "Platform Architecture",
    outcome: "I design scalable application foundations for SaaS and operations-heavy products.",
    explanation: "Data modeling, permissions, and service boundaries are shaped to support reliable growth without rework.",
    tools: ["Auth and Permissions", "Service Boundaries", "Observability"]
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    summary: "Clarify business goals, user constraints, and where product friction actually exists."
  },
  {
    title: "Define",
    summary: "Translate findings into product scope, decision framework, and execution priorities."
  },
  {
    title: "Design",
    summary: "Build interface systems and interaction patterns that are clear, scalable, and implementation-ready."
  },
  {
    title: "Deliver",
    summary: "Ship production-grade frontend with quality checks, iteration loops, and measurable outcomes."
  }
];
