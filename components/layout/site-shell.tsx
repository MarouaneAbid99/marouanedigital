import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutPrinciples } from "@/components/sections/about-principles";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { SkillsCapabilities } from "@/components/sections/skills-capabilities";
import { ContactPanel } from "@/components/sections/contact-panel";

export function SiteShell() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutPrinciples />
        <ProjectsGrid />
        <SkillsCapabilities />
        <ContactPanel />
      </main>
      <Footer />
    </>
  );
}
