"use client";

import { useEffect, useRef, useState } from "react";

interface HighlightItem {
  n: string;
  body: string;
  detail: string;
}

interface ScrollHighlightsProps {
  items: HighlightItem[];
}

export function ScrollHighlights({ items }: ScrollHighlightsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    function updateActiveIndex() {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance = Math.max(rect.height - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 0.999);

      setActiveIndex(Math.floor(progress * items.length));
    }

    function onScroll() {
      if (!desktopQuery.matches) return;

      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveIndex);
    }

    if (desktopQuery.matches) {
      updateActiveIndex();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length]);

  return (
    <section id="voor-wie" ref={sectionRef} className="scroll-highlight-section scroll-mt-20">
      <div className="scroll-highlight-sticky container-tight">
        <p className="section-marker">Voor wie</p>
        <div className="scroll-highlight-layout">
          <h2 className="display-2 max-w-3xl">
            Voor bedrijven waar groei vastloopt tussen{" "}
            <span className="text-accent">handwerk en systemen</span>.
          </h2>
          <div>
            {items.map((item, index) => (
              <div
                key={item.n}
                className={`numbered-row ${index === activeIndex ? "is-active" : ""}`}
              >
                <div className="num">{item.n}</div>
                <div>
                  <div className="body">{item.body}</div>
                  <p className="hover-detail">
                    <span>{item.detail}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
