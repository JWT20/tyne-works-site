import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Box, Camera, Warehouse } from "lucide-react";

const description =
  "Pick producten zonder barcode met beeldherkenning. Lees pakbonnen uit en werk je voorraad automatisch bij met Dockscan.";

export const metadata: Metadata = {
  title: "Dockscan — producten picken zonder barcode",
  description,
  alternates: { canonical: "/dockscan" },
  openGraph: {
    title: "Dockscan — producten picken zonder barcode",
    description,
    url: "/dockscan",
  },
};

const steps = [
  {
    number: "01",
    title: "Leg het product vast",
    body: "Voeg één of meerdere foto's toe van een product of verpakking. Dockscan gebruikt deze referentiefoto's om het product bij volgende scans te herkennen.",
  },
  {
    number: "02",
    title: "Scan met je telefoon",
    body: "Kies een order en fotografeer het product. AI vergelijkt de verpakking of het etiket met de referentiefoto's en zoekt het bijbehorende artikel.",
  },
  {
    number: "03",
    title: "Boek op de juiste order",
    body: "Het herkende product wordt op de order geboekt en aan de rolcontainer van de klant toegewezen. De aantallen worden bijgewerkt, zodat je ziet wat er nog ontbreekt.",
  },
];

const features = [
  {
    icon: Camera,
    title: "Picken met beeldherkenning",
    body: "Herken producten aan hun uiterlijk met je telefooncamera en boek ze op de juiste order. Een barcode is niet nodig.",
    detail: "Zo hoeft een medewerker niet elk product uit het hoofd te kennen. Ontbreekt een referentiefoto, dan kan de medewerker het juiste artikel kiezen en de scan meteen als eerste referentie opslaan.",
  },
  {
    icon: Warehouse,
    title: "Voorraad bijwerken met pakbonnen",
    body: "Upload een pakbon. Dockscan leest producten en aantallen uit. Controleer de regels en boek de levering: je voorraad wordt automatisch bijgewerkt.",
    detail: "Bekende leverancierscodes koppelen de regels aan je artikelen. Bij een ontbrekende koppeling kies je zelf het juiste product. Die koppeling kun je bewaren voor de volgende levering, zodat je minder hoeft over te typen.",
  },
];

export default function DockscanPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-rule">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container-tight relative py-16 md:py-24">
          <p className="label mb-6 text-accent">Dockscan · Software van Tyne Works</p>
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div className="min-w-0">
              <h1 className="display-1 max-w-3xl">
                Producten picken <span className="italic text-accent">zonder barcode.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                Herken producten met je telefooncamera. Pick de juiste order met
                beeldherkenning en werk je voorraad automatisch bij vanuit pakbonnen.
              </p>
              <p className="mt-5 max-w-xl leading-relaxed text-muted">
                Dockscan is er voor magazijnen waar producten geen barcode hebben.
                Van wijndozen en flessen tot andere artikelen: herken producten aan hun
                uiterlijk, verzamel bestellingen en verwerk binnenkomende leveringen in één systeem.
              </p>
            </div>
            <div className="border border-ink bg-navy-800 p-6 text-paper md:p-8">
              <p className="label mb-8 text-paper/60">Van beeld naar boeking</p>
              <div className="relative flex aspect-[4/3] items-center justify-center border border-paper/20">
                <span className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-accent" aria-hidden="true" />
                <span className="absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-accent" aria-hidden="true" />
                <Box className="h-24 w-24 text-paper/80" strokeWidth={1} aria-hidden="true" />
                <span className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-accent" aria-hidden="true" />
                <span className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-accent" aria-hidden="true" />
              </div>
              <ol className="mt-6 divide-y divide-paper/15">
                {["Product herkennen", "Koppelen aan de order", "Boeken op de klant"].map((label, index) => (
                  <li key={label} className="flex items-center gap-4 py-3 text-sm">
                    <span className="font-mono text-[11px] text-paper/50">0{index + 1}</span>
                    {label}
                    <ArrowRight className="ml-auto h-4 w-4 text-paper/50" aria-hidden="true" />
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs leading-relaxed text-paper/50">Schematische weergave van de scanflow.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="werkwijze" className="container-tight scroll-mt-24 py-16 md:py-20">
        <p className="section-marker">De werkwijze</p>
        <h2 className="display-2 mb-6 max-w-2xl">Vastleggen. Scannen. Boeken.</h2>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted">
          Je legt het assortiment vast met foto's. Tijdens het picken gebruikt de medewerker
          de camera van een telefoon om producten te herkennen en op de order te boeken.
          De software houdt de voortgang bij.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="info-card">
              <p className="label mb-6 text-accent">{step.number}</p>
              <h3 className="mb-4 font-serif text-2xl leading-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-800 text-paper">
        <div className="container-tight py-16 md:py-20">
          <p className="section-marker text-paper/60">Picken en ontvangen</p>
          <h2 className="display-2 mb-12 max-w-2xl">Van foto naar order. Van pakbon naar voorraad.</h2>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {features.map(({ icon: Icon, title, body, detail }) => (
              <div key={title} className="border-t border-paper/20 pt-6">
                <Icon className="mb-5 h-6 w-6 text-paper/60" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mb-3 font-serif text-3xl">{title}</h3>
                <p className="max-w-lg text-sm leading-relaxed text-paper/75">{body}</p>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/75">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-tight pt-16 md:pt-20">
        <p className="section-marker">Dockscan in jouw magazijn</p>
        <div className="grid items-start gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <h2 className="display-2 max-w-2xl">Bekijk Dockscan in actie.</h2>
          <div>
            <p className="mb-6 text-lg leading-relaxed text-muted">
              We laten je zien hoe het werkt met jouw producten en pakbonnen.
            </p>
            <Link href="mailto:jans.tigelaar@tyneworks.nl?subject=Demo%20Dockscan" className="btn-primary">
              Vraag een demo aan <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
