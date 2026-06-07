import { notFound } from "next/navigation";
import Link from "next/link";
import { getCaseSlugs, getCaseMeta } from "@/lib/cases";

export function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const meta = getCaseMeta(slug);
    const url = `/cases/${slug}`;
    return {
      title: meta.title,
      description: meta.summary,
      alternates: { canonical: url },
      openGraph: {
        type: "article",
        url,
        title: meta.title,
        description: meta.summary,
      },
      twitter: {
        card: "summary_large_image",
        title: meta.title,
        description: meta.summary,
      },
    };
  } catch {
    return { title: "Case" };
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
    <article className="container-tight overflow-hidden py-20">
      <Link
        href="/"
        className="font-mono text-[11px] uppercase tracking-label text-muted hover:text-ink"
      >
        ← Tyne Works
      </Link>

      <header className="case-detail-header mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16 items-start border-b border-rule pb-12 mb-12">
        <div className="min-w-0">
          <div className="flex items-center gap-3 mb-6">
            <span className="label">{meta!.client ?? "Tyne Works"}</span>
          </div>
          <h1 className="case-detail-title display-1">{meta!.title}</h1>
        </div>
        <p className="min-w-0 text-lg text-muted leading-relaxed md:pt-3">{meta!.summary}</p>
      </header>

      <CaseLogo client={meta!.client ?? ""} />

      <div className="case-detail-prose">
        <MDXContent />
      </div>
    </article>
  );
}

function CaseLogo({ client }: { client: string }) {
  const logo =
    client === "Wijn van Jurjen"
      ? { src: "/cases/jurjen-logo.svg", alt: "Wijn van Jurjen logo" }
      : client === "Breakaway Koeriers"
        ? { src: "/cases/breakaway-logo.svg", alt: "Breakaway Koeriers logo" }
      : null;

  if (!logo) {
    return null;
  }

  return (
    <section className="case-logo-strip" aria-label={`${client} logo`}>
      <img src={logo.src} alt={logo.alt} className="case-logo-strip-image" />
    </section>
  );
}
