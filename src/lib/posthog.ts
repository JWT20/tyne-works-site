import posthog from "posthog-js";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";

let isPostHogReady = false;

export function initPostHog() {
  if (isPostHogReady || !posthogKey || typeof window === "undefined") {
    return isPostHogReady;
  }

  posthog.init(posthogKey, {
    api_host: posthogHost,
    capture_pageview: false,
    autocapture: true,
    persistence: "localStorage+cookie",
    person_profiles: "identified_only",
    defaults: "2025-05-24",
    session_recording: {
      maskAllInputs: true,
    },
  });

  isPostHogReady = true;
  return true;
}

export function capturePageView(url: string) {
  if (!isPostHogReady) {
    return;
  }

  posthog.capture("$pageview", { $current_url: url });
}

