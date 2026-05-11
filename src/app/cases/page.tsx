import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllCases } from "@/lib/cases";

export const metadata = { title: "Werk — Tyne Works" };

export default function CasesPage() {
  const cases = getAllCases();

  return (
    <article className="container-tight py-20">
      <p className="section-marker">Werk</p>
      <h1 className="display-1 max-w-3xl mb-8">
        Software rond echte processen.
      </h1>
      <p className="text-lg text-muted max-w-prose mb-16 leading-relaxed">
        Een compacte selectie van projecten waarin bedrijfsspecifieke logica is vertaald naar
        lichte software op maat.
      </p>

      <div className="border-t border-rule">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/cases/${c.slug}`}
            className="block border-b border-rule py-10 md:py-12 group"
          >
            <div className="grid gap-6 md:grid-cols-[200px_1fr_auto] md:gap-10 items-baseline">
              <div>
                <span className="label">{c.client ?? "Tyne Works"}</span>
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-3 group-hover:text-accent transition">
                  {c.title}
                </h2>
                <p className="text-muted max-w-2xl leading-relaxed">{c.summary}</p>
              </div>
              <span className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-ink">
                Lees <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
