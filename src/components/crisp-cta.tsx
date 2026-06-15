"use client";

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { openCrispChat } from "@/lib/crisp";

type CrispCtaProps = {
  /** Message shown in the chat as if sent by the operator (instructions for the visitor). */
  operatorMessage?: string;
  /** Text pre-filled in the visitor's own compose box. */
  visitorMessage?: string;
  className?: string;
  children: ReactNode;
};

export function CrispCta({ operatorMessage, visitorMessage, className, children }: CrispCtaProps) {
  return (
    <button type="button" className={className} onClick={() => openCrispChat({ operatorMessage, visitorMessage })}>
      {children} <ArrowRight className="h-4 w-4" />
    </button>
  );
}
