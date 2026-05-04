import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export const metadata = { title: "Contact — Tyne Works" };

export default function ContactPage() {
  return (
    <article className="container-tight py-16">
      <p className="eyebrow">Contact</p>
      <h1 className="text-3xl md:text-5xl leading-tight max-w-3xl mb-5">
        Laten we een bedrijfsproces uitpluizen.
      </h1>
      <p className="text-lg text-ink/80 max-w-prose mb-10">
        Heb je een proces waar veel handwerk, uitzonderingen, documenten of Excel-logica in zit?
        Stuur kort wat er speelt. Dan kijken we samen of AI daar praktisch iets kan toevoegen.
      </p>

      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="callout">
          <h2 className="text-2xl mb-4">AI-inspiratiesessie</h2>
          <p className="text-ink/80 mb-5">
            Een eerste gesprek van 45 minuten. We bespreken waar AI goed in is, waar de risico&apos;s
            zitten, en welke kleine pilot logisch zou zijn.
          </p>
          <ul className="space-y-3 text-sm text-ink/75">
            <li>Geen technische voorbereiding nodig.</li>
            <li>Geschikt voor processen met PDF&apos;s, Excels, mails, scans of uitzonderingen.</li>
            <li>Je krijgt een eerlijk beeld van wat haalbaar is en wat niet.</li>
          </ul>
        </div>

        <div className="card-soft">
          <Mail className="h-7 w-7 text-brand-700 mb-4" />
          <h2 className="text-xl mb-3">Mail Jans</h2>
          <p className="text-sm text-ink/70 mb-5">
            Beschrijf in een paar zinnen welk proces je wilt verbeteren.
          </p>
          <Link
            href="mailto:jans@tyneworks.nl?subject=AI-inspiratiesessie"
            className="btn-primary"
          >
            jans@tyneworks.nl <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
