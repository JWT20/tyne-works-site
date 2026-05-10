import Link from "next/link";
import { ArrowRight, Camera, FileText, Inbox } from "lucide-react";
import { getAllCases } from "@/lib/cases";

export default function HomePage() {
  const cases = getAllCases();

  return (
    <>
      <section className="container-tight pt-20 pb-24">
        <p className="label mb-8">Tyne Works · Jans Tigelaar</p>
        <div className="grid gap-12 md:grid-cols-[1.55fr_1fr] md:gap-16 items-start">
          <div>
            <h1 className="display-1">
              Lichte software voor de manier waarop{" "}
              <span className="font-serif italic text-accent">jij werkt</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              SaaS is vaak te generiek voor hoe jouw bedrijf echt werkt. Maatwerk is meestal te
              duur en te traag. Daartussen ligt lichte software op maat: kort traject, vaste prijs,
              gebouwd rond jouw proces — met AI als capability waar dat nuttig is.
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

          <aside className="info-card">
            <p className="label mb-5">Werkwijze in het kort</p>
            <dl>
              <div className="info-row">
                <dt>Scope</dt>
                <dd>Eén proces, één team, één tastbaar resultaat.</dd>
              </div>
              <div className="info-row">
                <dt>Aanpak</dt>
                <dd>Discovery → Build → Run, geen open einde.</dd>
              </div>
              <div className="info-row">
                <dt>Focus</dt>
                <dd>Bedrijfslogica eerst, AI waar het verschil maakt.</dd>
              </div>
              <div className="info-row">
                <dt>Output</dt>
                <dd>Werkende software, geen rapport.</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="container-tight py-20">
        <p className="section-marker">01 — Voor wie</p>
        <h2 className="display-2 max-w-3xl mb-12">
          Voor bedrijven met processen die nergens netjes inpassen.
        </h2>
        <div>
          <NumberedRow n="01" body="Je werk zit vol uitzonderingen die geen standaardpakket goed afvangt." />
          <NumberedRow n="02" body="De cruciale kennis zit in de hoofden van een paar mensen — en daar wil je niet permanent van afhankelijk blijven." />
          <NumberedRow n="03" body="SaaS sluit net niet aan: je past je proces aan het systeem aan in plaats van andersom." />
          <NumberedRow n="04" body="Een ERP-traject voelt overkill voor de schaal en het tempo waarop jij wilt bewegen." />
          <NumberedRow n="05" body="Je wilt groeien zonder dat de werkwijze platslaat tot iets generieks." />
        </div>
      </section>

      <section className="container-tight py-20">
        <p className="section-marker">02 — Capabilities</p>
        <h2 className="display-2 max-w-3xl mb-12">
          Waar AI het verschil maakt.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Capability
            Icon={Camera}
            title="Beeldherkenning"
            body="Producten, dozen, locaties of staat herkennen op foto — direct in de operatie, zonder labels of barcodes."
          />
          <Capability
            Icon={FileText}
            title="Documenten uitlezen"
            body="Pakbonnen, facturen, formulieren en scans omzetten naar gestructureerde regels die je software kan controleren."
          />
          <Capability
            Icon={Inbox}
            title="Ongestructureerde input"
            body="Mails, WhatsApp-berichten en losse Excels samenvatten tot iets waar een proces mee verder kan."
          />
        </div>
      </section>

      <section className="container-tight py-20">
        <p className="section-marker">03 — Werkwijze</p>
        <h2 className="display-2 max-w-3xl mb-12">
          Drie stappen, geen open einde.
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="step-card">
            <div className="step-label">Stap 01 · Discovery</div>
            <div className="step-meta">Proces & advies</div>
            <h3 className="step-title">We pluizen één proces uit.</h3>
            <p className="text-muted text-sm leading-relaxed">
              Korte sessie waarin we het proces in kaart brengen, kansen benoemen en een concreet
              voorstel maken. Tastbaar advies, geen rapport om in een la te leggen.
            </p>
          </div>
          <div className="step-card is-primary">
            <div className="step-label">Stap 02 · Build</div>
            <div className="step-meta">Vaste prijs · vast traject</div>
            <h3 className="step-title">We bouwen de eerste werkende versie.</h3>
            <p className="text-paper/75 text-sm leading-relaxed">
              Een afgebakende oplossing rond het proces. Vaste prijs, vaste duur, werkende
              software aan het eind. Geen scope-creep, geen lopende rekening.
            </p>
          </div>
          <div className="step-card">
            <div className="step-label">Stap 03 · Run</div>
            <div className="step-meta">Maandelijks</div>
            <h3 className="step-title">We houden het levend.</h3>
            <p className="text-muted text-sm leading-relaxed">
              Hosting, monitoring en doorontwikkeling op een maandelijks ritme. Klein begint,
              groeit mee met wat het oplevert.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy-800 text-paper mt-20">
        <div className="container-tight py-20">
          <p className="section-marker text-paper/60">
            <span className="text-paper/60">04 — Recent gebouwd</span>
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
            <p className="section-marker">05 — Over</p>
            <h2 className="display-2 mb-8 max-w-xl">
              We maken impliciete bedrijfskennis operationeel schaalbaar.
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-prose">
              Tyne Works is opgezet door Jans Tigelaar. De insteek is simpel: bedrijven die werken
              met uitzonderingen, persoonlijke kennis of eigen logica verdienen software die
              daarbij past — niet een systeem waar ze omheen moeten werken.
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

function Capability({
  Icon,
  title,
  body,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="border border-rule p-6 md:p-7">
      <Icon className="h-6 w-6 text-ink mb-6" />
      <h3 className="font-serif text-2xl mb-3 leading-tight">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{body}</p>
    </div>
  );
}
