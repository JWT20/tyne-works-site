import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-paper mt-20">
      <div className="container-tight py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block h-5 w-5 bg-ink" aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-label text-ink">
              Tyne Works
            </span>
          </div>
          <p className="text-sm text-muted max-w-xs leading-relaxed">
            Lichte software op maat. Tussen generieke SaaS en duur maatwerk.
          </p>
        </div>
        <div>
          <p className="label mb-3">Site</p>
          <ul className="space-y-2 text-sm text-ink">
            <li><Link href="/cases" className="hover:text-accent">Werk</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="label mb-3">Contact</p>
          <p className="text-sm text-ink">jans@tyneworks.nl</p>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="container-tight py-4 text-xs text-muted flex justify-between font-mono uppercase tracking-label">
          <span>© {new Date().getFullYear()} Tyne Works</span>
          <span>Jans Tigelaar</span>
        </div>
      </div>
    </footer>
  );
}
