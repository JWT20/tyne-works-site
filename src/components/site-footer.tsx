export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-paper mt-20">
      <div className="container-tight py-10 grid gap-8 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block h-5 w-5 bg-ink" aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-label text-ink">
              Tyne Works
            </span>
          </div>
          <p className="text-sm text-muted max-w-xs leading-relaxed">
            Software en AI voor processen die niet standaard zijn.
          </p>
        </div>
        <div>
          <p className="label mb-3">Contact</p>
          <p className="text-sm text-ink">jans.tigelaar@tyneworks.nl</p>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="container-tight py-4 text-xs text-muted flex justify-between gap-6 font-mono uppercase tracking-label">
          <span>© {new Date().getFullYear()} Tyne Works · KVK 42059892</span>
          <span className="text-right">
            Jans Tigelaar
            <span className="block mt-1">Co-creator: Stijn Verhoeff</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
