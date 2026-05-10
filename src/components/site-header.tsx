import Link from "next/link";

const NAV = [
  { href: "/cases", label: "Werk" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-rule bg-paper">
      <div className="container-tight flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-block h-6 w-6 bg-ink" aria-hidden />
          <span className="font-mono text-[11px] uppercase tracking-label text-ink">
            Tyne Works
          </span>
        </Link>
        <nav className="flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-mono text-[11px] uppercase tracking-label text-ink hover:text-accent"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
