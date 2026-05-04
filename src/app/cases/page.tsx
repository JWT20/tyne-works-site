import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllCases } from "@/lib/cases";

export const metadata = { title: "Portfolio — Tyne Works" };

export default function CasesPage() {
  const cases = getAllCases();

  return (
    <article className="container-tight py-16">
      <p className="eyebrow">Portfolio</p>
      <h1 className="text-3xl md:text-5xl leading-tight max-w-3xl mb-5">
        Werk rond echte processen.
      </h1>
      <p className="text-lg text-ink/80 max-w-prose mb-12">
        Een compacte selectie van projecten waarin bedrijfsspecifieke logica is vertaald naar
        praktische software.
      </p>

      <div className="grid gap-6">
        {cases.map((c) => (
          <Link key={c.slug} href={`/cases/${c.slug}`} className="case-feature">
            <div>
              {c.label && <span className="pill">{c.label}</span>}
              <h2 className="text-2xl mt-4 mb-2">{c.title}</h2>
              <p className="text-ink/75 max-w-2xl">{c.summary}</p>
              <span className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-brand-700">
                Lees meer <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
