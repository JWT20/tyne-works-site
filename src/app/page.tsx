import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllCases } from "@/lib/cases";

export default function HomePage() {
  const cases = getAllCases();

  return (
    <>
      <section className="hero relative overflow-hidden">
        <div className="hero-grid" aria-hidden />
        <div className="container-tight pt-20 pb-24 relative">
          <p className="label text-accent mb-3">Software & AI voor bedrijfsspecifieke processen</p>
          <h1 className="display-1 max-w-4xl">
            Van vakkennis naar{" "}
            <span className="font-serif italic text-accent">slimme processen</span>
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
        </div>
      </section>

      <section className="container-tight py-20">
        <p className="section-marker">01 — Voor wie</p>
        <h2 className="display-2 max-w-3xl mb-12">
          Voor bedrijven waar groei vastloopt tussen handwerk en systemen.
        </h2>
        <div>
          <NumberedRow n="01" body="Standaardsoftware dekt 80% van je proces. De laatste 20% kost de meeste tijd." />
          <NumberedRow n="02" body="Cruciale kennis zit in hoofden, niet in systemen." />
          <NumberedRow n="03" body="Groeien betekent nu nóg meer handwerk, of generieker worden." />
          <NumberedRow n="04" body="Medewerkers bouwen zelf tools en prototypes — sneller dan systemen ze kunnen bijhouden." />
        </div>
      </section>

      <section className="bg-navy-800 text-paper mt-20">
        <div className="container-tight py-20">
          <p className="section-marker text-paper/60">
            <span className="text-paper/60">02 — Recent gebouwd</span>
          </p>
          <h2 className="display-2 text-paper max-w-3xl mb-12">
            Software voor processen tussen mensen en systemen.
          </h2>
        </div>
        <div className="cases-scroller">
          <div className="cases-scroller-track">
            {cases.map((c) => (
              <Link key={c.slug} href={`/cases/${c.slug}`} className="case-card">
                <div className="case-card-meta">
                  <span>{c.client ?? "Tyne Works"}</span>
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
        <div className="h-20" aria-hidden />
      </section>

      <section className="container-tight py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16 items-start">
          <div>
            <p className="section-marker">03 — Over</p>
            <h2 className="display-2 mb-8 max-w-xl">
              We maken impliciete bedrijfskennis operationeel schaalbaar.
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-prose">
              Tyne Works bouwt lichte software op maat voor specifieke bedrijfsprocessen.
              We richten ons op het deel van een proces dat handmatig gaat of buiten
              bestaande systemen valt.
            </p>

            <div className="portrait mt-10">
              <div className="portrait-frame">
                <span className="placeholder">Portret Jans Tigelaar</span>
              </div>
              <p className="portrait-caption">Jans Tigelaar — oprichter</p>
            </div>
          </div>
          <div className="info-card">
            <p className="label mb-5">Aan de slag</p>
            <p className="text-ink text-base leading-relaxed mb-6">
              Heb je een concreet proces in gedachten? Begin met een Discovery: we werken het
              samen uit en je krijgt een werkbaar plan met prijs. Wil je eerst meer leren over
              wat AI is en wat het voor jouw bedrijf kan betekenen? Een vrijblijvende
              AI-inspiratiesessie geeft je een eerlijk beeld van de mogelijkheden, risico&apos;s
              en governance.
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

        <div className="mt-20">
          <p className="label mb-8">Zo werken we</p>
          <div className="grid gap-4 md:grid-cols-2">
            <StepCard
              n="01"
              title="Discovery"
              body="We brengen je proces in kaart: waar zit de kennis, het handwerk, de uitzonderingen. Je krijgt een helder beeld en een werkbaar plan met prijs."
            />
            <StepCard
              n="02"
              title="Bouwen"
              body="Lichte software: één afgebakend proces, geen platform. Ingepast in de tools die je al gebruikt."
            />
            <StepCard
              n="03"
              title="Inzicht"
              body="Zichtbaar blijft welke input, context en keuzes tot een uitkomst leiden. AI is geen zwarte doos: je verbetert op echte signalen, niet op gevoel."
              primary
            />
            <StepCard
              n="04"
              title="Oplevering & support"
              body="We zetten het live. Daarna kies je: wij nemen onderhoud en doorontwikkeling op ons, of we dragen het over aan je team."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function StepCard({
  n,
  title,
  body,
  primary,
}: {
  n: string;
  title: string;
  body: string;
  primary?: boolean;
}) {
  return (
    <div className={primary ? "step-card is-primary" : "step-card"}>
      <p className="step-label">{n}</p>
      <h3 className="step-title">{title}</h3>
      <p className="leading-relaxed text-[15px] md:text-base">{body}</p>
    </div>
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
