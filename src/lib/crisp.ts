const crispWebsiteId = "238bce1d-4435-4035-9661-9619be1426d4";

declare global {
  interface Window {
    $crisp?: unknown[];
    CRISP_WEBSITE_ID?: string;
  }
}

export function loadCrisp() {
  if (typeof document === "undefined" || document.getElementById("crisp-chat")) {
    return;
  }

  window.$crisp = window.$crisp ?? [];
  window.CRISP_WEBSITE_ID = crispWebsiteId;

  const script = document.createElement("script");
  script.id = "crisp-chat";
  script.src = "https://client.crisp.chat/l.js";
  script.async = true;
  document.head.appendChild(script);
}

/**
 * Loads Crisp (if needed) and opens the chat. An optional message is
 * pre-filled in the visitor's compose box so the chat carries context
 * about which CTA they clicked.
 */
export function openCrispChat(prefilledMessage?: string) {
  loadCrisp();
  if (prefilledMessage) {
    window.$crisp?.push(["set", "message:text", [prefilledMessage]]);
  }
  window.$crisp?.push(["do", "chat:open"]);
}
