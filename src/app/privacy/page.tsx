import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacyverklaring van Tyne Works.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="container-tight py-20">
      <Link
        href="/"
        className="font-mono text-[11px] uppercase tracking-label text-muted hover:text-ink"
      >
        ← Tyne Works
      </Link>

      <header className="mt-10 max-w-3xl border-b border-rule pb-10 mb-12">
        <p className="label mb-4 text-accent">Privacy</p>
        <h1 className="display-1">Hoe we met gegevens omgaan.</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Tyne Works gebruikt alleen gegevens die nodig zijn om de website te laten werken en
          contact mogelijk te maken.
        </p>
      </header>

      <div className="privacy-prose">
        <section>
          <h2>Verantwoordelijke</h2>
          <p>
            Tyne Works is verantwoordelijk voor de verwerking van gegevens via deze website.
            Voor vragen kun je mailen naar{" "}
            <a href="mailto:jans.tigelaar@tyneworks.nl">jans.tigelaar@tyneworks.nl</a>.
          </p>
        </section>

        <section>
          <h2>Chat met Crisp</h2>
          <p>
            Voor chat gebruiken we Crisp. Crisp wordt niet automatisch geladen wanneer je de
            website opent. Pas wanneer je de chatknop gebruikt, laden we Crisp om het gesprek
            mogelijk te maken.
          </p>
          <p>
            Bij het gebruik van de chat kunnen technische gegevens en chatberichten worden
            verwerkt, zodat het gesprek werkt en we kunnen reageren op je vraag.
          </p>
        </section>

        <section>
          <h2>Jouw gegevens</h2>
          <p>
            Wil je weten welke gegevens we van je hebben, of wil je gegevens laten aanpassen of
            verwijderen? Mail dan naar{" "}
            <a href="mailto:jans.tigelaar@tyneworks.nl">jans.tigelaar@tyneworks.nl</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
