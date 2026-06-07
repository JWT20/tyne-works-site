"use client";

import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { capturePageView, initPostHog } from "@/lib/posthog";

const consentStorageKey = "tyne-works-cookie-consent";

type CookieConsentChoice = "analytics" | "necessary";

function readConsent() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(consentStorageKey) as CookieConsentChoice | null;
}

function writeConsent(choice: CookieConsentChoice) {
  window.localStorage.setItem(consentStorageKey, choice);
}

export function CookieConsent() {
  const pathname = usePathname();
  const [choice, setChoice] = useState<CookieConsentChoice | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedChoice = readConsent();
    setChoice(storedChoice);
    setIsLoaded(true);

    if (storedChoice === "analytics") {
      initPostHog();
    }
  }, []);

  useEffect(() => {
    if (choice !== "analytics") {
      return;
    }

    capturePageView(window.location.href);
  }, [choice, pathname]);

  function acceptAnalytics() {
    writeConsent("analytics");
    setChoice("analytics");
    initPostHog();
  }

  function acceptNecessaryOnly() {
    writeConsent("necessary");
    setChoice("necessary");
  }

  if (!isLoaded || choice) {
    return null;
  }

  return (
    <section
      aria-label="Cookievoorkeuren"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/15 bg-paper/95 backdrop-blur"
    >
      <div className="container-tight py-5">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <p className="label mb-3 text-accent">Cookievoorkeuren</p>
            <div className="grid gap-3 text-sm leading-relaxed text-muted">
              <p>
                Wij gebruiken cookies en vergelijkbare technieken. Functionele cookies gebruiken
                we om de website goed en veilig te laten werken. Deze cookies gebruiken we altijd.
              </p>
              <p>
                Accepteer je analytische cookies? Dan geef je toestemming voor het gebruik van
                PostHog om te meten hoe bezoekers onze website gebruiken. Hiermee verzamelen we
                gebruiksgegevens zoals paginaweergaven, klikgedrag, browser- en apparaatinformatie
                en een bezoekers-ID. We gebruiken deze gegevens om onze website te verbeteren,
                technische problemen te onderzoeken en de gebruikservaring te analyseren. Als
                onderdeel hiervan kunnen we sessies opnemen. Invoervelden worden standaard
                gemaskeerd om gevoelige gegevens te beschermen. We gebruiken PostHog via de
                EU-regio.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button type="button" className="btn-primary justify-center" onClick={acceptAnalytics}>
              <Check className="h-4 w-4" />
              <span className="min-w-0 text-center leading-snug">
                Analytische cookies accepteren
              </span>
            </button>
            <button type="button" className="btn-ghost justify-center" onClick={acceptNecessaryOnly}>
              <X className="h-4 w-4" />
              <span className="min-w-0 text-center leading-snug">Alleen noodzakelijke cookies</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
