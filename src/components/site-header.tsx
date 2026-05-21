import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-paper/95 backdrop-blur">
      <div className="container-tight flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-block h-6 w-6 bg-ink" aria-hidden />
          <span className="font-mono text-[11px] uppercase tracking-label text-ink">
            Tyne Works
          </span>
        </Link>
        <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-label text-muted md:flex">
          <Link href="/#aanpak" className="hover:text-ink">
            Aanpak
          </Link>
          <Link href="/#cases" className="hover:text-ink">
            Cases
          </Link>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
        </nav>
        <Link href="/contact" className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-label text-ink md:inline-flex">
          Start gesprek <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </header>
  );
}
