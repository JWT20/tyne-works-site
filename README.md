# Tyne Works — site

Compacte portfolio- en contactsite voor Tyne Works, het bedrijf van Jans Tigelaar.

Tyne Works vertaalt bedrijfsspecifieke uitdagingen naar praktische AI-oplossingen:
processen expliciet maken, ongestructureerde input begrijpen, en werkende software bouwen
rond bestaande systemen en werkwijzen.

## Stack

- Next.js 15 met App Router
- Statische export (`output: "export"`)
- Tailwind CSS
- MDX voor portfolio/cases
- Lucide-react voor iconen

## Lokaal draaien

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Bouwen

```bash
npm run build
```

De statische output staat in `out/`.

## Structuur

```text
src/
  app/
    page.tsx              home met korte positionering
    cases/page.tsx        portfolio-overzicht
    cases/[slug]/page.tsx portfolio-detail
    contact/page.tsx      contact en AI-inspiratiesessie
    layout.tsx
    globals.css
  components/
    site-header.tsx
    site-footer.tsx
  content/
    cases/
      cross-docking-dozen-app.mdx
  lib/
    cases.ts
  mdx-components.tsx
```

## Cases toevoegen

Plaats een `.mdx` bestand in `src/content/cases/` met frontmatter:

```mdx
---
title: "Titel van de case"
label: "Live"
summary: "Korte samenvatting."
date: "2025-09-01"
---

## Het probleem
...
```

De case verschijnt automatisch op `/cases` en op `/cases/<bestandsnaam>`.

## Volgende stappen

- Echte agenda-link of boekingslink toevoegen zodra die beschikbaar is.
- Eventueel één screenshot of schets toevoegen aan de cross-docking case.
- Domein `tyneworks.nl` registreren en koppelen.
- Analytics toevoegen, bijvoorbeeld Plausible.
