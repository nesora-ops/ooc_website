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

      gsap.utils.toArray<HTMLElement>("main > section, main > div > section").forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              section,
              { opacity: 0.45, y: 28 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
            );
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-motion-media]").forEach((media) => {
        gsap.fromTo(
          media,
          { scale: 0.88, autoAlpha: 0.55 },
          {
            scale: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: media,
              start: "top 92%",
              end: "bottom 32%",
              scrub: 0.7,
            },
          }
        );
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
