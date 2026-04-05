import { contactInfo } from "@/data/content";

export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-12 md:pb-14">
      <div className="flex flex-col items-start justify-between gap-5 border-t border-line/20 pt-6 text-sm text-text-muted lg:flex-row lg:items-center">
        <div>
          <p className="font-display tracking-[0.16em] text-text-soft">MAROUANEDIGITAL</p>
          <p className="mt-2 text-xs text-text-muted">(c) {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${contactInfo.email}`}
            className="focus-ring rounded-sm transition-colors duration-300 hover:text-text"
          >
            {contactInfo.email}
          </a>
          {contactInfo.socials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-sm transition-colors duration-300 hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
