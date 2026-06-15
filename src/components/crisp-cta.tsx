"use client";

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { openCrispChat } from "@/lib/crisp";

type CrispCtaProps = {
  /** Pre-filled message added to the visitor's compose box. */
  message?: string;
  className?: string;
  children: ReactNode;
};

export function CrispCta({ message, className, children }: CrispCtaProps) {
  return (
    <button type="button" className={className} onClick={() => openCrispChat(message)}>
      {children} <ArrowRight className="h-4 w-4" />
    </button>
  );
}
