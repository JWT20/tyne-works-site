import Link from "next/link";
import { ArrowRight, Boxes, FileText, GitBranch, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section className="container-tight pt-20 pb-14">
        <p className="text-sm font-medium text-brand-700 mb-4">Tyne Works · Jans Tigelaar</p>
        <h1 className="text-4xl md:text-6xl leading-tight max-w-4xl">
          Van bedrijfsspecifieke uitdaging naar werkende AI-oplossing.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-ink/80 max-w-3xl">
          Ik help organisaties hun eigen processen, documenten, Excel-logica en uitzonderingen
          vertalen naar praktische software. Niet AI om de AI, maar een technische oplossing die
          past bij hoe het werk echt loopt.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Plan een AI-inspiratiesessie <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#portfolio" className="btn-ghost">
            Bekijk portfolio
          </Link>
        </div>
      </section>

      <section className="container-tight py-12">
        <div className="grid gap-5 md:grid-cols-3">
          <Point
            Icon={GitBranch}
            title="Processen expliciet maken"
            body="We halen de echte regels boven water: uitzonderingen, controles, keuzes, overdrachten en de logica die nu in hoofden of spreadsheets zit."
          />
          <Point
            Icon={FileText}
            title="Ongestructureerde input begrijpen"
            body="AI kan variatie in mails, PDF's, scans, rapporten en Excels verwerken zonder voor elke vorm een nieuw systeem te bouwen."
          />
          <Point
            Icon={ShieldCheck}
            title="Veilig automatiseren"
            body="Een goede oplossing combineert AI met logging, validatie, zekerheden per veld en menselijke controle waar dat nodig is."
          />
        </div>
      </section>

      <section id="portfolio" className="container-tight py-14">
        <div className="section-intro">
          <p className="eyebrow">Portfolio</p>
          <h2 className="text-3xl md:text-4xl max-w-3xl">
            Concrete software rond een concreet proces.
          </h2>
        </div>
        <Link href="/cases/cross-docking-dozen-app" className="case-feature">
          <div>
            <span className="pill">Live case</span>
            <h3 className="text-2xl md:text-3xl mt-4 mb-3">
              Cross-docking dozen app
            </h3>
            <p className="text-ink/75 max-w-2xl">
              Een operationele AI-app waarmee een fietskoerier ongelabelde dozen kan herkennen,
              boeken en aan de juiste klantorder koppelen zonder dat alle kennis bij de ondernemer
              zelf hoeft te zitten.
            </p>
            <span className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-brand-700">
              Lees de case <ArrowRight className="h-4 w-4" />
            </span>
          </div>
          <div className="case-sketch" aria-hidden="true">
            <Boxes className="h-10 w-10" />
            <div className="flow-line" />
            <FileText className="h-10 w-10" />
            <div className="flow-line" />
            <GitBranch className="h-10 w-10" />
          </div>
        </Link>
      </section>

      <section id="sessie" className="container-tight py-14">
        <div className="callout">
          <p className="eyebrow">AI-inspiratiesessie</p>
          <h2 className="text-3xl md:text-4xl mb-4">
            Eerst begrijpen waar AI wel en niet nuttig is.
          </h2>
          <p className="text-ink/80 max-w-3xl mb-6">
            In 45 minuten kijken we naar een proces uit jouw organisatie. Je krijgt een nuchter
            beeld van kansen, risico&apos;s en een mogelijke eerste pilot. Geen technische voorbereiding
            nodig.
          </p>
          <div className="grid gap-3 md:grid-cols-3 mb-7">
            <SmallNote text="Waar zit repetitief kenniswerk?" />
            <SmallNote text="Welke data is ongestructureerd?" />
            <SmallNote text="Waar blijft menselijke controle nodig?" />
          </div>
          <Link href="/contact" className="btn-primary">
            Neem contact op <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Point({
  Icon,
  title,
  body,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="card-soft">
      <Icon className="h-7 w-7 text-brand-700 mb-4" />
      <h3 className="text-lg mb-2">{title}</h3>
      <p className="text-sm text-ink/75">{body}</p>
    </div>
  );
}

function SmallNote({ text }: { text: string }) {
  return (
    <div className="rounded-lg bg-white/70 border border-brand-100 px-4 py-3 text-sm text-ink/75">
      {text}
    </div>
  );
}
