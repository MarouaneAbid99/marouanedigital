"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/data/content";
import { motionTokens } from "@/lib/motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPoint = window.scrollY + 160;
      let current = "";

      for (const item of navItems) {
        const section = document.querySelector(item.href) as HTMLElement | null;
        if (section && section.offsetTop <= scrollPoint) {
          current = item.href;
        }
      }

      setActiveHref(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "";
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
        <div
          className={`mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between rounded-2xl px-4 md:px-6 ${
            isScrolled ? "border border-line/25 bg-canvas/80 backdrop-blur-xl" : "bg-transparent"
          }`}
        >
          <Link href="#top" aria-label="Go to top" className="focus-ring inline-flex items-center gap-3 rounded-xl p-1">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line/30 bg-surface/70 font-display text-xs font-semibold tracking-[0.22em] text-text-soft">
              MD
            </span>
            <span className="font-display text-sm font-medium tracking-[0.2em] text-text">MAROUANEDIGITAL</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeHref === item.href ? "page" : undefined}
                className={`focus-ring group relative rounded-md pb-1 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeHref === item.href ? "text-text" : "text-text-soft hover:text-text"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeHref === item.href ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              aria-label="Jump to contact section"
              className="focus-ring inline-flex items-center rounded-xl border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-text transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/60 hover:bg-accent/20 hover:shadow-glow"
            >
              Start a Project
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line/30 bg-surface/70 md:hidden"
          >
            <span className="relative h-4 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 bg-text transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-4 bg-text transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-4 bg-text transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: motionTokens.duration.fast }}
            className="fixed inset-0 z-40 bg-canvas/90 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: motionTokens.duration.standard, ease: motionTokens.ease }}
              className="section-shell flex h-full flex-col justify-between pb-12 pt-28"
            >
              <div className="space-y-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={activeHref === item.href ? "page" : undefined}
                    className={`focus-ring block w-fit rounded-md font-display text-3xl font-medium tracking-wide transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      activeHref === item.href ? "text-text" : "text-text-soft hover:text-text"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={closeMenu}
                aria-label="Jump to contact section"
                className="focus-ring inline-flex w-full items-center justify-center rounded-xl border border-accent/35 bg-accent/10 px-5 py-3 text-base font-semibold text-text transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/60 hover:bg-accent/20"
              >
                Start a Project
              </a>
            </motion.nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
