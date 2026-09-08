import Image from "next/image";

import { cn } from "@/lib/utils";

// MINIMUM SIZE: 72px. Do not render the full seal any smaller.
//
// ooc-seal-full.png carries the inner wordmark, the laurel, and the star row.
// Below 72px those three collapse into an unreadable smudge, which is exactly
// the problem this component was added to fix. Every seal in the site goes
// through here so the floor stays in one file - `size` is clamped, not merely
// documented. 72px is the artwork's own documented floor (see
// public/images/brand/README.txt).
//
// The seal has a WHITE circular face and is transparent outside its ring, so it
// belongs on white or near-white only - never on the deep navy or the green.
// The footer's light ground already serves as that surface.
//
// Need a mark under 72px? Use ooc-mark-navy.png / ooc-mark-white.png instead.
// The directory cards do this at 28px (components/directory/employer-directory.tsx).
const MIN_SEAL_PX = 72;

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
      src="/images/brand/ooc-seal-full.png"
      alt={alt}
      width={px}
      height={px}
      priority={priority}
      className={cn("shrink-0", className)}
      style={{ width: px, height: px }}
    />
  );
}
