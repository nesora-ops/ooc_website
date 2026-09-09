import Image from "next/image";

import { cn } from "@/lib/utils";

// Approved image slots. Mirrors the `data-content-key` convention in
// placeholder.tsx: the key names the slot so a generated file can be dropped in
// without hunting through JSX. Empty slots render as labelled dashed blocks.
//
// See uiux.md — imagery must explain a concept, show a real person or product
// context, or reduce cognitive load. Real team, client, certification, and
// office photography should only be supplied when verified source assets exist.

type Aspect = "square" | "video" | "portrait" | "wide" | "4/3" | "4/5" | "5/4" | "tall" | "fill";

const ASPECT_CLASS: Record<Aspect, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
  "4/3": "aspect-[4/3]",
  "4/5": "aspect-[4/5]",
  "5/4": "aspect-[5/4]",
  tall: "aspect-[3/4] lg:aspect-[4/5]",
  fill: "h-full min-h-[380px]",
};

const TINTS = ["bg-mint", "bg-sky", "bg-butter/65", "bg-coral/25"] as const;

/** Stable tint per slot, so a grid of empty slots isn't one flat colour. */
function tintFor(key: string) {
  let sum = 0;
  for (let i = 0; i < key.length; i += 1) sum += key.charCodeAt(i);
  return TINTS[sum % TINTS.length];
}

type ImageSlotProps = {
  /** Names the slot, e.g. "blog thumbnail — why great culture claims no longer work". */
  contentKey: string;
  /** Required: describes the image for assistive tech once one is supplied. */
  alt: string;
  src?: string;
  aspect?: Aspect;
  /** Opts the slot into the scrub animation in layout/site-motion.tsx. */
  motion?: boolean;
  /** `sizes` for next/image. Defaults to a three-up grid. */
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function ImageSlot({
  contentKey,
  alt,
  src,
  aspect = "video",
  motion = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
  className,
}: ImageSlotProps) {
  const shared = cn(
    "relative w-full overflow-hidden rounded-[1.5rem] border border-navy/8",
    ASPECT_CLASS[aspect],
    className
  );

  if (src) {
    return (
      <div
        data-content-key={contentKey}
        {...(motion ? { "data-motion-media": "" } : {})}
        className={shared}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      data-content-key={contentKey}
      {...(motion ? { "data-motion-media": "" } : {})}
      title={`Image slot — drop a file into public/images and set its src: ${contentKey}`}
      role="presentation"
      className={cn(shared, "border-dashed border-navy/20", tintFor(contentKey))}
    >
      <span className="absolute inset-0 flex items-center justify-center p-4 text-center text-[0.7rem] font-semibold uppercase tracking-widest text-navy/45">
        {contentKey}
      </span>
    </div>
  );
}
