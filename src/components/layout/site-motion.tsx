"use client";

import { useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SiteMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      // Images must paint at full opacity. A fade/scale on [data-motion-media]
      // made 2MB photos look like they were still loading. Motion is a short
      // translate on below-fold sections only — never opacity on media.
      gsap.utils.toArray<HTMLElement>("main > section, main > div > section").forEach((section, index) => {
        if (index === 0) return
        ScrollTrigger.create({
          trigger: section,
          start: "top 92%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              section,
              { y: 16 },
              { y: 0, duration: 0.35, ease: "power2.out" }
            );
          },
        });
      });

    },
    { scope, dependencies: [pathname], revertOnUpdate: true }
  );

  return (
    <div ref={scope} className="contents">
      {children}
    </div>
  );
}
