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

type OpenCrispOptions = {
  /** Text pre-filled in the visitor's own compose box. */
  visitorMessage?: string;
};

export function openCrispChat({ visitorMessage }: OpenCrispOptions = {}) {
  loadCrisp();
  if (visitorMessage) {
    window.$crisp?.push(["set", "message:text", [visitorMessage]]);
  }
  window.$crisp?.push(["do", "chat:open"]);
}
