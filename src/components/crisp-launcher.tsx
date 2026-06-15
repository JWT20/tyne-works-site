"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { openCrispChat } from "@/lib/crisp";

export function CrispLauncher() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasOpenedChat, setHasOpenedChat] = useState(false);

  useEffect(() => {
    window.$crisp = window.$crisp ?? [];
    window.$crisp.push(["on", "chat:opened", () => setHasOpenedChat(true)]);
  }, []);

  function openChat() {
    setIsLoading(true);
    openCrispChat({});
    window.setTimeout(() => setIsLoading(false), 1200);
  }

  if (hasOpenedChat) {
    return null;
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
