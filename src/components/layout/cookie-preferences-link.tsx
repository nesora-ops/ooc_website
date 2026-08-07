"use client";

import { OPEN_COOKIE_PREFERENCES_EVENT } from "@/components/layout/cookie-consent";

/**
 * Footer entry point to the cookie preference centre. Required by the Cookie
 * Policy, which states preferences can be changed "at any time through the
 * cookie preference centre linked in the website footer" — without this the
 * dialog is unreachable once the banner has been dismissed.
 */
export function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT))}
      className="text-xs text-white/60 underline transition-colors hover:text-white"
    >
      Cookie preferences
    </button>
  );
}
