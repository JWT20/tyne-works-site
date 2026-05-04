import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Camera, FileText, MessagesSquare, PackageCheck, Route } from "lucide-react";
import { getCaseSlugs, getCaseMeta } from "@/lib/cases";

export function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const meta = getCaseMeta(slug);
    return { title: `${meta.title} — Tyne Works` };
  } catch {
    return { title: "Case — Tyne Works" };
  }
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let meta;
  try {
    meta = getCaseMeta(slug);
  } catch {
    notFound();
  }

  let MDXContent;
  try {
    MDXContent = (await import(`@/content/cases/${slug}.mdx`)).default;
  } catch {
    notFound();
  }

  return (
    <article className="container-tight py-16">
      <Link href="/cases" className="text-sm text-brand-700 hover:underline">
        Portfolio
      </Link>
      {meta!.label && (
        <span className="inline-block text-xs font-medium text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full mt-4 mb-3">
          {meta!.label}
        </span>
      )}
      <h1 className="text-3xl md:text-4xl heading-rule">{meta!.title}</h1>
      <p className="text-lg text-ink/80 max-w-prose mb-10">{meta!.summary}</p>

      {slug === "cross-docking-dozen-app" && <CrossDockingVisuals />}

      <div className="prose prose-headings:text-brand-700 prose-headings:font-bold prose-strong:text-ink max-w-prose">
        <MDXContent />
      </div>
    </article>
  );
}

function CrossDockingVisuals() {
  return (
    <section className="case-visual-block" aria-label="Screenshots van de cross-docking app">
      <div className="case-visual-main">
        <div className="case-visual-label">Scan & Boek</div>
        <Image
          src="/cases/mobile-scan.png"
          alt="Mobiele scanflow waarin een doos met de camera wordt herkend"
          width={1170}
          height={2532}
          className="case-mobile-image"
        />
        <p>
          De koerier scant een doos met de telefoon. De app koppelt de scan aan order, voorraad en
          klanttoewijzing.
        </p>
      </div>

      <div className="case-visual-side">
        <div className="case-shot">
          <div className="case-visual-label">Inbound extractie</div>
          <Image
            src="/cases/inbound-extraction.png"
            alt="Inbound scherm waarin een pakbon is omgezet naar geëxtraheerde regels"
            width={2940}
            height={1912}
            className="case-inbound-image"
          />
          <p>
            Een pakbonfoto wordt omgezet naar productregels, aantallen, supplier codes en
            controlepunten.
          </p>
        </div>

        <div className="case-flow-card">
          <div className="case-flow-step">
            <MessagesSquare className="h-5 w-5" />
            <span>WhatsApp order + ongelabelde doos</span>
          </div>
          <ArrowDown className="case-flow-arrow" />
          <div className="case-flow-step">
            <Camera className="h-5 w-5" />
            <span>AI herkent of leest uit</span>
          </div>
          <ArrowDown className="case-flow-arrow" />
          <div className="case-flow-step">
            <FileText className="h-5 w-5" />
            <span>Software controleert order en voorraad</span>
          </div>
          <ArrowDown className="case-flow-arrow" />
          <div className="case-flow-step">
            <PackageCheck className="h-5 w-5" />
            <span>Doos naar juiste klantrolcontainer</span>
          </div>
          <div className="case-flow-footer">
            <Route className="h-4 w-4" />
            <span>Van kennis in het hoofd naar een overdraagbaar proces.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
