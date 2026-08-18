"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "The assessment gave us a clear, practical view of where our employee experience was strong and where to act next.",
    name: "Naina Rao",
    role: "People Director · Northstar Works",
    initials: "NR",
  },
  {
    quote: "The report helped our leadership team turn employee feedback into a focused plan for managers and teams.",
    name: "Emily Fernandes",
    role: "HR Director · Meridian Studio",
    initials: "EF",
  },
  {
    quote: "The process was structured, thoughtful, and clear from evidence gathering through to the final recommendations.",
    name: "Sophia Malik",
    role: "Head of People · Fieldwork Labs",
    initials: "SM",
  },
  {
    quote: "Certification gave candidates and employees an independent way to understand the workplace we are building.",
    name: "Michael Thomas",
    role: "Talent Lead · Common Ground",
    initials: "MT",
  },
];

export function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function slide(direction: -1 | 1) {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("figure");
    if (!track || !card) return;

    const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  }

  return (
    <div className="relative mt-14">
      <div
        id="testimonials-track"
        ref={trackRef}
        className="flex snap-x snap-mandatory items-start gap-3 overflow-x-auto px-2 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            tabIndex={0}
            className="group relative flex min-h-[22rem] basis-full shrink-0 snap-start flex-col justify-between rounded-[1.35rem] border border-navy/10 bg-white/80 p-6 text-navy-ink transition-[transform,background-color,color,box-shadow] duration-200 hover:-translate-y-1.5 hover:scale-[1.025] hover:bg-navy-ink hover:text-white hover:shadow-[0_24px_50px_rgba(16,42,67,0.22)] focus-visible:-translate-y-1.5 focus-visible:scale-[1.025] focus-visible:bg-navy-ink focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-4 sm:basis-[calc(50%-0.375rem)] lg:basis-[calc(33.333%-0.5rem)]"
          >
            <div>
              <blockquote className="text-xl font-medium leading-[1.25] tracking-[-0.025em]">
                “{testimonial.quote}”
              </blockquote>
            </div>
            <figcaption className="mt-12 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-mint text-xs font-bold text-teal group-hover:bg-white/12 group-hover:text-white group-focus-visible:bg-white/12 group-focus-visible:text-white"
              >
                {testimonial.initials}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{testimonial.name}</span>
                <span className="mt-0.5 block text-xs leading-4 text-muted-foreground group-hover:text-white/65 group-focus-visible:text-white/65">
                  {testimonial.role}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous testimonial"
        aria-controls="testimonials-track"
        onClick={() => slide(-1)}
        className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-navy/10 bg-white text-navy-ink shadow-[0_12px_30px_rgba(17,47,70,0.14)] hover:bg-navy-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 sm:-left-5"
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        aria-controls="testimonials-track"
        onClick={() => slide(1)}
        className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-navy/10 bg-white text-navy-ink shadow-[0_12px_30px_rgba(17,47,70,0.14)] hover:bg-navy-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 sm:-right-5"
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
