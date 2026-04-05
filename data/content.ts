export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  type: string;
  problem: string;
  outcome: string;
  tags: string[];
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
  twitterHandle: string;
  keywords: string[];
};

export const siteConfig: SiteConfig = {
  name: "MAROUANEDIGITAL",
  title: "MAROUANEDIGITAL | Digital Product Builder for SaaS and AI Products",
  description:
    "MAROUANEDIGITAL helps SaaS and startup teams design, build, and ship premium digital products with product strategy, interface systems, and modern frontend execution.",
  url: "https://marouanedigital.com",
  locale: "en_US",
  twitterHandle: "@marouanedigital",
  keywords: [
    "digital product builder",
    "product designer developer",
    "next.js freelancer",
    "saaS product design",
    "ai workflow ux",
    "frontend engineer",
    "ui ux casablanca",
    "marouane digital"
  ]
};

export const contactInfo: ContactInfo = {
  email: "hello@marouanedigital.com",
  location: "Casablanca, Morocco (GMT+1)",
  availability: "Accepting 1 new client engagement this cycle.",
  responseTime: "Replies within 24 hours.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/marouanedigital" },
    { label: "GitHub", href: "https://github.com/marouanedigital" },
    { label: "X", href: "https://x.com/marouanedigital" }
  ]
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const projects: Project[] = [
  {
    title: "NexaPulse",
    type: "B2B Analytics Platform",
    problem: "Growth teams waited days for reliable reporting.",
    outcome: "A live KPI workspace cut reporting time by 62%.",
    tags: ["Product Strategy", "Dashboard UX", "Next.js"],
    visual: {
      primaryLabel: "Executive Overview",
      secondaryLabel: "Weekly Performance Timeline",
      metric: "+62% Reporting Speed",
      status: "Shipped",
      modules: ["MRR", "Activation", "Pipeline"],
      sideItems: ["Forecast Sync", "Team Alerts", "Board Export"],
      sideMetric: "8.7 / 10 PM Clarity"
    }
  },
  {
    title: "RoutePilot AI",
    type: "AI Workflow Orchestrator",
    problem: "Operations teams repeated manual triage all day.",
    outcome: "AI routing with approvals reduced handling time by 41%.",
    tags: ["AI UX", "Workflow Design", "TypeScript"],
    visual: {
      primaryLabel: "Intent Router",
      secondaryLabel: "Human-in-the-Loop Queue",
      metric: "41% Faster Resolution",
      status: "In Pilot",
      modules: ["Classify", "Route", "Approve"],
      sideItems: ["Policy Rules", "Escalations", "Audit Trail"],
      sideMetric: "1.9 min Avg Triage"
    }
  },
  {
    title: "LaunchBoard",
    type: "PLG Site + Onboarding",
    problem: "Strong traffic converted poorly after first click.",
    outcome: "Message-to-onboarding redesign lifted qualified signups by 34%.",
    tags: ["Conversion UX", "Messaging", "Frontend"],
    visual: {
      primaryLabel: "Value Narrative Flow",
      secondaryLabel: "Trial Activation Steps",
      metric: "+34% Qualified Signups",
      status: "Shipped",
      modules: ["Headline Fit", "Proof Stack", "Activation CTA"],
      sideItems: ["A/B Variant", "Lead Score", "CRM Push"],
      sideMetric: "27% Demo Request Rate"
    }
  },
  {
    title: "OpsConsole",
    type: "Enterprise Admin Console",
    problem: "Approval workflows were dense and error-prone.",
    outcome: "Task-first IA reduced approval errors by 29%.",
    tags: ["B2B UX", "IA Design", "React"],
    visual: {
      primaryLabel: "Action Queue",
      secondaryLabel: "Review and Audit Panel",
      metric: "-29% Approval Errors",
      status: "V2 Rollout",
      modules: ["Queue", "Inspector", "Bulk Actions"],
      sideItems: ["Policy Check", "Owner Notes", "Rollback"],
      sideMetric: "12s Faster Approval"
    }
  }
];

export const capabilities: Capability[] = [
  {
    title: "Product Direction",
    outcome: "You get sharper product decisions before costly build effort.",
    explanation: "Scope, UX architecture, and feature sequence are aligned to measurable goals.",
    tools: ["FigJam", "Notion", "Analytics Mapping"]
  },
  {
    title: "Interface Design",
    outcome: "You get premium interfaces that increase clarity and trust.",
    explanation: "High-fidelity systems with intentional hierarchy and scalable interaction detail.",
    tools: ["Figma", "Design Tokens", "Interactive Prototyping"]
  },
  {
    title: "Frontend Engineering",
    outcome: "You get production-ready execution without design drift.",
    explanation: "Component-driven implementation built for responsiveness, speed, and maintainability.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "AI-Enabled Delivery",
    outcome: "You get practical AI features that improve product utility.",
    explanation: "AI workflows integrated into real product journeys, not surface-level novelty.",
    tools: ["OpenAI APIs", "Automation Workflows", "Prompt Systems"]
  }
];
