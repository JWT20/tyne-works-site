import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllCases } from "@/lib/cases";
import { ScrollHighlights } from "@/components/scroll-highlights";

export default function HomePage() {
  const cases = getAllCases();

  return (
    <>
      <section className="hero relative overflow-hidden">
        <div className="hero-grid" aria-hidden />
        <div className="container-tight pt-10 pb-16 relative">
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
          <div className="proof-strip mt-16">
            <ProofPoint
              title="Proces eerst"
              body="We brengen het echte werk in kaart voordat er software wordt bedacht."
              detail="Dat voorkomt mooie schermen die niet passen bij de praktijk. Uitzonderingen, overdrachten en beslismomenten worden eerst zichtbaar."
            />
            <ProofPoint
              title="Maatwerk"
              body="Kleine, gerichte systemen rond bestaande tools en mensen."
              detail="Geen groot platform wanneer een slimme koppeling, dashboard of workflow genoeg is. Het systeem blijft compact en beheersbaar."
            />
            <ProofPoint
              title="AI waar logisch"
              body="AI helpt bij variatie; software bewaakt de stappen en beslissingen."
              detail="AI wordt ingezet voor ongestructureerde input zoals tekst, foto's of uitzonderingen. De vaste procesregels blijven controleerbaar."
            />
          </div>
        </div>
      </section>

      <ScrollHighlights
        items={[
          {
            n: "01",
            body: "Standaardsoftware dekt 80% van je proces. De laatste 20% kost de meeste tijd.",
            detail:
              "Juist die laatste uitzonderingen bepalen vaak de kwaliteit van levering, klantcontact en marge. Daar bouwen we precies omheen.",
          },
          {
            n: "02",
            body: "Cruciale kennis zit in hoofden, niet in systemen.",
            detail:
              "Als alleen ervaren mensen weten wat er moet gebeuren, wordt groei kwetsbaar. We maken die kennis stap voor stap overdraagbaar.",
          },
          {
            n: "03",
            body: "Groeien betekent nu nog meer handwerk, of generieker worden.",
            detail:
              "Het doel is processen te automatiseren en slimmer in te richten, met behoud van de eigen manier van werken.",
          },
          {
            n: "04",
            body: "Medewerkers bouwen zelf tools en prototypes - sneller dan systemen ze kunnen bijhouden.",
            detail:
              "Juist dan wordt het belangrijk om te kiezen wat tijdelijk mag blijven en wat betrouwbaar, beheersbaar en overdraagbaar moet worden.",
          },
        ]}
      />

      <section id="aanpak" className="container-tight pt-16 pb-10 scroll-mt-20">
        <p className="section-marker">02 - Aanpak</p>
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16 items-start">
          <h2 className="display-2 max-w-xl">
            Eerst begrijpen wat er echt gebeurt. Daarna pas bouwen.
          </h2>
          <div className="grid gap-4">
            <ApproachStep
              n="01"
              title="Ontdekken"
              body="We kiezen een concreet proces, tekenen de uitzonderingen uit en bepalen waar software of AI waarde toevoegt."
              detail="Aan het einde ligt er geen abstract advies, maar een scherp afgebakend bouwplan met keuzes, risico's en eerste prioriteiten."
            />
            <ApproachStep
              n="02"
              title="Prototype"
              body="Een kleine werkende versie maakt aannames zichtbaar en geeft gebruikers iets om op te reageren."
              detail="Door vroeg iets klikbaars te maken, zie je sneller wat logisch voelt in de dagelijkse operatie en wat nog schuurt."
            />
            <ApproachStep
              n="03"
              title="Bouwen"
              body="Wat werkt wordt strak gemaakt: rollen, data, controles, beheer en overdracht naar de dagelijkse operatie."
              detail="De build is gericht op betrouwbaar gebruik: minder losse acties, duidelijke feedback en beheer dat niet afhankelijk is van een ontwikkelaar."
            />
            <ApproachStep
              n="04"
              title="Inzicht"
              body="Zichtbaar blijft welke input, context en keuzes tot een uitkomst leiden. AI is geen zwarte doos: je verbetert op echte signalen, niet op gevoel."
            />
          </div>
        </div>
      </section>

      <section id="cases" className="bg-navy-800 text-paper mt-20 scroll-mt-20">
        <div className="container-tight pt-16 pb-8">
          <p className="section-marker text-paper/60">
            <span className="text-paper/60">03 - Recent gebouwd</span>
          </p>
          <h2 className="display-2 text-paper max-w-3xl mb-12">
            Software voor processen tussen mensen en systemen.
          </h2>
        </div>
        {cases.length > 3 && (
          <p className="cases-hint" aria-hidden>
            Sleep opzij voor meer <ArrowRight className="h-3.5 w-3.5" />
          </p>
        )}
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
        <div className="h-10" aria-hidden />
      </section>

      <section id="over" className="container-tight pt-16 pb-14 scroll-mt-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16 items-start">
          <div>
            <p className="section-marker">04 - Over</p>
            <h2 className="display-2 mb-8 max-w-xl">
              We maken impliciete bedrijfskennis operationeel schaalbaar.
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-prose">
              Tyne Works is het werk van Jans Tigelaar en Stijn Verhoeff, gevestigd in
              Groningen. Voor groeiende bedrijven waar werk vastloopt tussen
              standaardsoftware, spreadsheets, WhatsApp, losse documenten en handmatige
              overdracht bouwen we lichte software op maat voor specifieke
              bedrijfsprocessen.
            </p>
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
      </section>
    </>
  );
}

function ProofPoint({ title, body, detail }: { title: string; body: string; detail: string }) {
  return (
    <div className="proof-point" tabIndex={0}>
      <p className="proof-point-title">{title}</p>
      <p className="proof-point-body">{body}</p>
      <p className="hover-detail">
        <span>{detail}</span>
      </p>
    </div>
  );
}

function ApproachStep({
  n,
  title,
  body,
  detail,
}: {
  n: string;
  title: string;
  body: string;
  detail?: string;
}) {
  return (
    <div className="approach-step" tabIndex={0}>
      <span className="approach-step-num">{n}</span>
      <div>
        <h3 className="approach-step-title">{title}</h3>
        <p className="approach-step-body">{body}</p>
        {detail && (
          <p className="hover-detail">
            <span>{detail}</span>
          </p>
        )}
      </div>
    </div>
  );
}
