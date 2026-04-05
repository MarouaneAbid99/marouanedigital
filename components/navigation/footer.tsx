export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-12 md:pb-14">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-line/20 pt-6 text-sm text-text-muted sm:flex-row sm:items-center">
        <p className="font-display tracking-[0.16em] text-text-soft">MAROUANEDIGITAL</p>
        <p>(c) {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
