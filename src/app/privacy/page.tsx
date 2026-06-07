import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & cookies",
  description: "Privacy- en cookieverklaring van Tyne Works.",
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
        <p className="label mb-4 text-accent">Privacy & cookies</p>
        <h1 className="display-1">Hoe we met gegevens omgaan.</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Tyne Works gebruikt alleen gegevens die nodig zijn om de website te laten werken,
          contact mogelijk te maken en de website met toestemming te verbeteren.
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
          <h2>Functionele cookies</h2>
          <p>
            Functionele cookies en vergelijkbare technieken gebruiken we om de website goed,
            betrouwbaar en veilig te laten werken. Deze gebruiken we altijd. Ook slaan we je
            cookievoorkeur lokaal op, zodat de banner niet bij elk bezoek opnieuw verschijnt.
          </p>
        </section>

        <section>
          <h2>Analytische cookies met PostHog</h2>
          <p>
            Als je analytische cookies accepteert, gebruiken we PostHog om te meten hoe bezoekers
            de website gebruiken. Daarbij kunnen gebruiksgegevens worden verwerkt, zoals
            paginaweergaven, klikgedrag, browser- en apparaatinformatie en een bezoekers-ID.
          </p>
          <p>
            We gebruiken deze gegevens om de website te verbeteren, technische problemen te
            onderzoeken en de gebruikservaring te analyseren. Als onderdeel hiervan kunnen we
            sessies opnemen. Invoervelden worden standaard gemaskeerd om gevoelige gegevens te
            beschermen. We gebruiken PostHog via de EU-regio.
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
          <h2>Toestemming aanpassen</h2>
          <p>
            Je kunt je keuze wijzigen door de opgeslagen cookievoorkeur in je browser te wissen.
            Daarna verschijnt de cookiebanner opnieuw. Je kunt ook mailen als je hulp wilt bij het
            aanpassen of verwijderen van gegevens.
          </p>
        </section>
      </div>
    </article>
  );
}
