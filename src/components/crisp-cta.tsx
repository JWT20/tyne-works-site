"use client";

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { openCrispChat } from "@/lib/crisp";

type CrispCtaProps = {
  /** Text pre-filled in the visitor's own compose box. */
  visitorMessage?: string;
  className?: string;
  children: ReactNode;
};

export function CrispCta({ visitorMessage, className, children }: CrispCtaProps) {
  return (
    <button type="button" className={className} onClick={() => openCrispChat({ visitorMessage })}>
      {children} <ArrowRight className="h-4 w-4" />
    </button>
  );
}
