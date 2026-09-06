import Image from "next/image";

import { cn } from "@/lib/utils";

// MINIMUM SIZE: 96px. Do not render the full seal any smaller.
//
// seal.png carries the inner wordmark, the laurel, and the star row. Below 96px
// those three collapse into an unreadable smudge, which is exactly the problem
// this component was added to fix. Every seal in the site goes through here so
// the floor stays in one file — `size` is clamped, not merely documented.
//
// seal.png's disc is transparent and its wordmark is navy, so it needs a light
// ground behind it. The footer's #edf5f2 already serves as that plate; on a dark
// surface it would need an explicit white/#EDF5F2 circular plate instead.
//
// Need a mark under 96px? Use mark-navy.png / mark-white.png instead. The
// directory cards do this at 28px (components/directory/employer-directory.tsx).
const MIN_SEAL_PX = 96;

type SealProps = {
  /** Rendered edge length in px. Clamped up to MIN_SEAL_PX. */
  size?: number;
  /** Override only where the seal is decorative beside its own visible label. */
  alt?: string;
  className?: string;
  priority?: boolean;
};

export function Seal({
  size = MIN_SEAL_PX,
  alt = "Organisation of Choice certification seal",
  className,
  priority = false,
}: SealProps) {
  const px = Math.max(size, MIN_SEAL_PX);

  return (
    <Image
      src="/images/brand/seal.png"
      alt={alt}
      width={px}
      height={px}
      priority={priority}
      className={cn("shrink-0", className)}
      style={{ width: px, height: px }}
    />
  );
}
