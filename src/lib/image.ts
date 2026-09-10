/** Tiny mint/navy LQIP so photos paint a colour immediately. */
export const PHOTO_BLUR =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10"><rect width="16" height="10" fill="#dceee6"/></svg>`
  )

/**
 * Local PNGs have a pre-generated WebP sibling (scripts/optimize-images.mjs).
 * Pointing at that file skips shipping 2MB originals on every page.
 * Remote CMS URLs and favicons stay as-is.
 */
export function mediaSrc(src: string): string {
  if (!src.startsWith("/images/")) return src
  if (src.endsWith(".png") && !/favicon-\d+\.png$|apple-touch-icon\.png$|icon-\d+\.png$/.test(src)) {
    return src.replace(/\.png$/i, ".webp")
  }
  return src
}
