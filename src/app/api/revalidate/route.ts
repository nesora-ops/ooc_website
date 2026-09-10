import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

/**
 * Called by CertifyDB (lib/website-revalidate.ts) when a superadmin saves
 * website content, so an edit appears here in seconds instead of waiting out the
 * 5-minute cache in src/lib/content.ts.
 *
 * The shared secret is the whole authorisation: anyone who can call this can
 * only make the site refetch its own content, but making that free would hand
 * out a trivial way to defeat the cache.
 */
export async function POST(request: Request) {
  const secret = process.env.WEBSITE_REVALIDATE_SECRET;

  // Unset secret means the hook is not configured. Refuse rather than allowing
  // every caller through, which is what a missing check would do.
  if (!secret || request.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json({ revalidated: false }, { status: 401 });
  }

  // Next 16 requires a second argument. { expire: 0 } rather than the
  // recommended "max" on purpose: "max" is stale-while-revalidate, so the admin
  // who just hit Save would still be served the old copy on their next reload
  // while the fresh one loads behind it. { expire: 0 } makes that next request
  // block on fresh content instead — a moment slower for one visitor, which is
  // the right trade on a marketing site and the whole point of this hook.
  // updateTag() would be more direct but is Server Actions only.
  revalidateTag("website-content", { expire: 0 });
  return NextResponse.json({ revalidated: true, at: Date.now() });
}
