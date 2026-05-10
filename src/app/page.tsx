import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllCases } from "@/lib/cases";

export default function HomePage() {
  const cases = getAllCases();

  return (
    <>
      <section className="container-tight pt-20 pb-24">
        <p className="label mb-8">Tyne Works · Jans Tigelaar</p>
        <h1 className="display-1 max-w-4xl">
          Van vakkennis naar{" "}
          <span className="font-serif italic text-accent">schaalbare systemen</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          Tyne Works zet bedrijfsspecifieke kennis om in systemen die processen verbeteren
          en nieuwe omzet mogelijk maken.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Plan een Discovery <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact#sessie" className="btn-ghost">
            Of een AI-inspiratiesessie
          </Link>
        </div>
      </section>

      <section className="container-tight py-20">
        <p className="section-marker">01 — Voor wie</p>
        <h2 className="display-2 max-w-3xl mb-12">
          Voor bedrijven waar groei vastloopt op handwerk en ervaring.
        </h2>
        <div>
          <NumberedRow n="01" body="Je werkt met situaties die geen standaardpakket goed afvangt — er zit altijd nét iets extra in." />
          <NumberedRow n="02" body="Cruciale kennis zit in hoofden in plaats van systemen." />
          <NumberedRow n="03" body="Het echte werk gebeurt buiten het systeem." />
          <NumberedRow n="04" body="Tussen je mensen en je ERP zit nog veel handmatig werk." />
          <NumberedRow n="05" body="Je wilt groeien zonder generiek te worden." />
        </div>
      </section>

      <section className="bg-navy-800 text-paper mt-20">
        <div className="container-tight py-20">
          <p className="section-marker text-paper/60">
            <span className="text-paper/60">02 — Recent gebouwd</span>
          </p>
          <h2 className="display-2 text-paper max-w-3xl mb-12">
            Werk rond echte processen.
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((c) => (
              <Link key={c.slug} href={`/cases/${c.slug}`} className="case-card">
                <div className="case-card-meta">
                  <span>{c.client ?? "Tyne Works"}</span>
                  <span className="text-paper/30">/</span>
                  <span>{c.label}</span>
                </div>
                <h3 className="case-card-title">{c.title}</h3>
                <p className="case-card-summary">{c.summary}</p>
                <span className="case-card-link">
                  Lees de case <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-tight py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16 items-start">
          <div>
            <p className="section-marker">03 — Over</p>
            <h2 className="display-2 mb-8 max-w-xl">
              We maken impliciete bedrijfskennis operationeel schaalbaar.
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-prose">
              Tyne Works is opgezet door Jans Tigelaar. De insteek is simpel: bedrijven met
              persoonlijke kennis, eigen logica of een ERP waar nog veel handwerk omheen zit,
              verdienen software die bij hun werkwijze past — niet een systeem waar ze omheen
              moeten werken.
            </p>
          </div>
          <div className="info-card">
            <p className="label mb-5">Aan de slag</p>
            <p className="text-ink text-base leading-relaxed mb-6">
              Discovery is de logische start: één proces uitpluizen, kansen helder krijgen,
              voorstel op tafel. Liever eerst breed verkennen wat AI in jouw context kan? Plan
              dan een vrijblijvende AI-inspiratiesessie.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Plan Discovery <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact#sessie" className="btn-ghost">
                AI-sessie
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function NumberedRow({ n, body }: { n: string; body: string }) {
  return (
    <div className="numbered-row">
      <div className="num">{n}</div>
      <div className="body">{body}</div>
    </div>
  );
}
