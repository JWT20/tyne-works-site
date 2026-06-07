"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

const crispWebsiteId = "238bce1d-4435-4035-9661-9619be1426d4";

declare global {
  interface Window {
    $crisp?: unknown[];
    CRISP_WEBSITE_ID?: string;
  }
}

function loadCrisp() {
  if (document.getElementById("crisp-chat")) {
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

export function CrispLauncher() {
  const [isLoading, setIsLoading] = useState(false);

  function openChat() {
    setIsLoading(true);
    loadCrisp();
    window.$crisp?.push(["do", "chat:open"]);
    window.setTimeout(() => setIsLoading(false), 1200);
  }

  return (
    <button
      type="button"
      className="crisp-launcher"
      onClick={openChat}
      aria-label="Open chat"
    >
      <MessageCircle className="h-4 w-4" />
      <span>{isLoading ? "Chat opent" : "Stel je vraag"}</span>
    </button>
  );
}
