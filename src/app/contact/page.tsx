import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export const metadata = { title: "Contact — Tyne Works" };

export default function ContactPage() {
  return (
    <article className="container-tight py-20">
      <p className="section-marker">Contact</p>
      <h1 className="display-1 max-w-3xl mb-8">
        Van handwerk naar een werkbaar systeem.
      </h1>
      <p className="text-lg text-muted max-w-prose mb-16 leading-relaxed">
        Heb je een proces dat draait op uitzonderingen, ervaring of losse tools? We brengen
        eerst het echte proces in kaart — daarna kijken we welke software of AI logisch is.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mb-16">
        <div className="step-card is-primary">
          <div className="step-label">Aanbevolen start</div>
          <div className="step-meta">Vaste prijs op aanvraag</div>
          <h2 className="step-title">Discovery</h2>
          <p className="text-paper/75 leading-relaxed mb-6">
            Een korte, betaalde verkenning van één concreet proces. We brengen het in kaart,
            benoemen kansen en leveren een tastbaar voorstel voor de Build-fase. Geen rapport om
            in een la te leggen — uitkomst is een werkbaar plan en een prijs voor de bouw.
          </p>
          <Link
            href="mailto:jans@tyneworks.nl?subject=Discovery"
            className="inline-flex items-center gap-2 bg-paper px-5 py-3 text-ink font-mono text-xs uppercase tracking-label hover:bg-paper/90 transition w-fit"
          >
            Plan Discovery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div id="sessie" className="step-card scroll-mt-24">
          <div className="step-label">Vrijblijvend</div>
          <div className="step-meta">45 minuten · gratis</div>
          <h2 className="step-title">AI-inspiratiesessie</h2>
          <p className="text-muted leading-relaxed mb-6">
            In 45 minuten kijken we naar wat AI nu eigenlijk is, waar het wel en niet goed in is,
            welke risico&apos;s en governance erbij horen, en hoe je van idee naar praktijk komt.
          </p>
          <Link
            href="mailto:jans@tyneworks.nl?subject=AI-inspiratiesessie"
            className="btn-ghost w-fit"
          >
            Plan AI-sessie <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-rule pt-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="label mb-2">Of direct</p>
          <p className="font-serif text-2xl">Mail Jans</p>
        </div>
        <Link
          href="mailto:jans@tyneworks.nl"
          className="inline-flex items-center gap-3 font-mono text-sm text-ink hover:text-accent"
        >
          <Mail className="h-4 w-4" />
          jans@tyneworks.nl
        </Link>
      </div>
    </article>
  );
}
