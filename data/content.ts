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
  problem: string;
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
  title: "MAROUANEDIGITAL | Digital Product Builder for SaaS and AI Products",
  description:
    "Digital Product Builder for SaaS and AI products. I help teams turn product strategy into shipped, high-performing digital experiences.",
  url: "https://marouanedigital.com",
  locale: "en_US",
  keywords: [
    "digital product builder",
    "saaS product strategy",
    "ai product design",
    "frontend product engineer",
    "next.js portfolio",
    "product-led interface design",
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
    title: "SaaS Workflow Expertise",
    detail: "Experience shaping dense, decision-heavy product flows for B2B and PLG teams."
  },
  {
    title: "Design-to-Code Ownership",
    detail: "Product direction, UI system design, and frontend delivery handled end-to-end."
  },
  {
    title: "System-First Interfaces",
    detail: "Reusable interaction patterns built to scale across modules and releases."
  },
  {
    title: "Outcome-Oriented Delivery",
    detail: "Work framed around adoption clarity, execution quality, and delivery momentum."
  }
];

export const featuredProject: FeaturedProject = {
  title: "VisionDesk",
  category: "Flagship AI Product Workspace",
  context:
    "Teams were planning in docs, tracking in spreadsheets, and deciding in chat threads. VisionDesk consolidated product context into one workspace so strategy, execution, and accountability stayed aligned.",
  productDecisions: [
    "Unified priorities, owners, and timelines into one operating layer.",
    "Embedded AI support around real product entities instead of isolated chat prompts.",
    "Structured decision logs so context survived handoffs and release cycles."
  ],
  roleOwnership:
    "Led product direction, UX architecture, interface system design, and frontend implementation as a single owner.",
  uxSystem:
    "Built a modular workspace system with reusable states, high-density information hierarchy, and clear patterns for planning, review, and execution.",
  technicalExecution:
    "Delivered a Next.js + TypeScript frontend with componentized UI primitives, responsive app-shell behavior, and production-ready interaction models.",
  outcome:
    "Created a clearer product operating rhythm with stronger cross-team visibility, better handoff quality, and faster decision alignment.",
  tags: ["Product Direction", "UX Systems", "Next.js", "TypeScript", "AI Integration"]
};

export const projects: Project[] = [
  {
    title: "NexaPulse",
    category: "SaaS Growth Intelligence Dashboard",
    problem: "Revenue and activation signals lived in separate tools, slowing weekly decisions.",
    outcome: "Unified KPI workspace made growth reviews faster and easier to trust.",
    role: "Product Direction, UX Systems, Frontend",
    tags: ["Dashboard UX", "Information Design", "Next.js"],
    result: "Result: teams moved from fragmented reporting to one planning rhythm.",
    ctaLabel: "Read Case Study",
    ctaHref: "#contact",
    visual: {
      primaryLabel: "Executive Overview",
      secondaryLabel: "Weekly Performance Timeline",
      metric: "KPI Signal Clarity",
      status: "Shipped",
      modules: ["MRR", "Activation", "Pipeline"],
      sideItems: ["Forecast Sync", "Team Alerts", "Board Export"],
      sideMetric: "Weekly Review Aligned"
    }
  },
  {
    title: "RoutePilot AI",
    category: "AI Operations Routing System",
    problem: "Support and ops teams manually triaged high-volume requests.",
    outcome: "Designed AI-assisted routing with clear human approval checkpoints.",
    role: "Workflow Product Design, AI UX, Frontend",
    tags: ["AI UX", "Workflow Systems", "TypeScript"],
    result: "Result: triage became more consistent and escalations easier to manage.",
    ctaLabel: "Open Product Preview",
    ctaHref: "#contact",
    visual: {
      primaryLabel: "Intent Router",
      secondaryLabel: "Human-in-the-Loop Queue",
      metric: "Routing Confidence",
      status: "In Pilot",
      modules: ["Classify", "Route", "Approve"],
      sideItems: ["Policy Rules", "Escalations", "Audit Trail"],
      sideMetric: "Escalations Structured"
    }
  },
  {
    title: "LaunchBoard",
    category: "PLG Conversion and Onboarding",
    problem: "High-intent visitors dropped before meaningful activation.",
    outcome: "Restructured messaging and first-run flow around user intent.",
    role: "Product Narrative, UX, Frontend",
    tags: ["Conversion UX", "Messaging", "Frontend"],
    result: "Result: onboarding quality improved and demo leads became better qualified.",
    ctaLabel: "Read Case Study",
    ctaHref: "#contact",
    visual: {
      primaryLabel: "Value Narrative Flow",
      secondaryLabel: "Trial Activation Steps",
      metric: "Activation Journey Improved",
      status: "Shipped",
      modules: ["Headline Fit", "Proof Stack", "Activation CTA"],
      sideItems: ["A/B Variant", "Lead Score", "CRM Push"],
      sideMetric: "Trial Flow Clarified"
    }
  },
  {
    title: "OpsConsole",
    category: "Enterprise Admin Operations Console",
    problem: "Approvals and policy actions required too many disconnected steps.",
    outcome: "Reframed admin IA around task states and action priority.",
    role: "Information Architecture, UX Systems, Frontend",
    tags: ["B2B UX", "Admin Systems", "React"],
    result: "Result: operational reviews became faster with fewer missed actions.",
    ctaLabel: "Open Product Preview",
    ctaHref: "#contact",
    visual: {
      primaryLabel: "Action Queue",
      secondaryLabel: "Review and Audit Panel",
      metric: "Operational Flow Simplified",
      status: "V2 Rollout",
      modules: ["Queue", "Inspector", "Bulk Actions"],
      sideItems: ["Policy Check", "Owner Notes", "Rollback"],
      sideMetric: "Action Clarity Increased"
    }
  }
];

export const capabilities: Capability[] = [
  {
    title: "Product Direction",
    outcome: "You get clearer product decisions before expensive execution.",
    explanation: "I define priorities, flows, and feature logic around business and user outcomes.",
    tools: ["Discovery", "Product Mapping", "Feature Prioritization"]
  },
  {
    title: "Interface Systems",
    outcome: "You get premium UI systems that scale without visual drift.",
    explanation: "I design structured, reusable interface patterns for high-clarity product experiences.",
    tools: ["Figma", "Design Tokens", "Interaction Patterns"]
  },
  {
    title: "Frontend Delivery",
    outcome: "You get production-ready interfaces aligned with product intent.",
    explanation: "I implement component architecture and responsive behavior with quality-first code discipline.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "AI Integration",
    outcome: "You get practical AI features integrated into real workflows.",
    explanation: "I design AI interactions around decisions, guardrails, and operational usability.",
    tools: ["OpenAI APIs", "Prompt Design", "Workflow Automation"]
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
