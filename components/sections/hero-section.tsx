import { HeroContent } from "@/components/sections/hero-content";
import { HeroStudioPreview } from "@/components/sections/hero-studio-preview";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-clip pt-32 md:pt-40 xl:pt-44">
      <div className="mx-auto grid w-full max-w-[1280px] gap-14 px-6 pb-24 md:px-10 lg:grid-cols-12 lg:gap-10 lg:pb-32 xl:px-16">
        <div className="lg:col-span-5">
          <HeroContent />
        </div>
        <div className="lg:col-span-7">
          <HeroStudioPreview />
        </div>
      </div>
    </section>
  );
}
