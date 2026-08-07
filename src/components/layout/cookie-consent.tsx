"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const STORAGE_KEY = "ooc-cookie-consent";

type Consent = { necessary: true; analytics: boolean; functional: boolean };

// localStorage is external state — read via useSyncExternalStore rather than
// an effect + setState, so hydration stays correct and same-tab updates
// (dispatched manually below, since the native "storage" event only fires
// in *other* tabs) are picked up immediately.
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) ?? "";
}

function getServerSnapshot() {
  return "";
}

function parseConsent(raw: string): Consent | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const consent = parseConsent(raw);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [draft, setDraft] = useState({ analytics: false, functional: false });

  if (consent) {
    return null;
  }

  function save(next: Consent) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new StorageEvent("storage"));
  }

  function acceptAll() {
    save({ necessary: true, analytics: true, functional: true });
  }

  function openPreferences() {
    setDraft({ analytics: false, functional: false });
    setDialogOpen(true);
  }

  function savePreferences() {
    save({ necessary: true, ...draft });
    setDialogOpen(false);
  }

  return (
    <>
      <div
        role="region"
        aria-label="Cookie consent"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-navy text-white"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-white/80">
            We use cookies to run this site and, with your permission, to understand how the site
            is used. See our{" "}
            <Link href="/cookies" className="underline hover:text-white">
              Cookie Policy
            </Link>
            .
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy" onClick={openPreferences}>
              Manage preferences
            </Button>
            <Button onClick={acceptAll}>Accept all</Button>
          </div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cookie preferences</DialogTitle>
            <DialogDescription>
              Choose which categories of cookies we can use. You can change this at any time.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-navy-ink">Strictly necessary</p>
                <p className="text-sm text-muted-foreground">
                  Required for the site to function. Always on.
                </p>
              </div>
              <Switch checked disabled aria-label="Strictly necessary cookies (always on)" />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-navy-ink">Analytics</p>
                <p className="text-sm text-muted-foreground">
                  Helps us understand how visitors use the site.
                </p>
              </div>
              <Switch
                checked={draft.analytics}
                onCheckedChange={(checked) => setDraft((d) => ({ ...d, analytics: checked }))}
                aria-label="Analytics cookies"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-navy-ink">Functional</p>
                <p className="text-sm text-muted-foreground">
                  Remembers choices you make to improve your experience.
                </p>
              </div>
              <Switch
                checked={draft.functional}
                onCheckedChange={(checked) => setDraft((d) => ({ ...d, functional: checked }))}
                aria-label="Functional cookies"
              />
            </div>
          </div>

          <DialogFooter>
            <Button onClick={savePreferences}>Save preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
