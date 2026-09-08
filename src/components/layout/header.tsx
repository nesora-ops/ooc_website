"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { mainNav, policiesNav, primaryCta } from "@/lib/site-config";
import { cn } from "@/lib/utils";

// The header never carries the full seal — at 40px its wordmark, laurel, and
// star row stop resolving. It gets the emblem alone, contained inside a white
// circle, beside the wordmark set as text.
// See components/brand/seal.tsx for where the seal is allowed.
function Logo() {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center gap-2.5 rounded-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-ooc-navy focus-visible:ring-offset-2"
      aria-label="Organisation of Choice, home"
    >
      <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-white ring-1 ring-teal/15 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
        {/* The mark is a 2.43:1 landscape PNG on an opaque white ground, so the
            badge is white too and the image is contained rather than cropped —
            the rule lines run to its edges and a cover crop would cut them. */}
        <Image
          src="/images/brand/logo_only_ooc.png"
          alt=""
          width={577}
          height={237}
          className="w-[85%] object-contain"
          priority
        />
      </span>
      <span className="hidden leading-[0.92] tracking-[-0.04em] sm:block">
        <span className="block text-sm font-semibold">Organisation</span>
        <span className="block text-sm font-semibold text-teal">
          of Choice<sup className="text-[0.6em] font-semibold">™</sup>
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const policiesActive = policiesNav.some((item) => pathname === item.href);

  // The bar is white on a light hero, so the seam needs help. A hairline holds
  // it at rest and the shadow fades in only once content is actually behind it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-ooc-navy-line bg-white transition-shadow duration-[180ms] ease-out",
        scrolled ? "shadow-[0_8px_24px_rgba(31,42,90,0.06)]" : "shadow-none"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 md:h-[76px] lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {mainNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  // --ooc-navy-mute is ~6.4:1 on white; never dim navy with opacity.
                  "rounded-md px-2.5 py-2 text-[14px] font-medium text-ooc-navy-mute underline-offset-[6px] transition-colors outline-none",
                  "hover:text-ooc-navy hover:underline hover:decoration-ooc-gold hover:decoration-2",
                  "focus-visible:text-ooc-navy focus-visible:underline focus-visible:decoration-ooc-gold focus-visible:decoration-2",
                  "focus-visible:ring-2 focus-visible:ring-ooc-navy focus-visible:ring-offset-2",
                  active && "font-semibold text-ooc-navy no-underline hover:no-underline"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Popover>
            <PopoverTrigger
              className={cn(
                "flex items-center gap-1 rounded-md px-2.5 py-2 text-[14px] font-medium text-ooc-navy-mute underline-offset-[6px] transition-colors outline-none",
                "hover:text-ooc-navy hover:underline hover:decoration-ooc-gold hover:decoration-2",
                "focus-visible:text-ooc-navy focus-visible:ring-2 focus-visible:ring-ooc-navy focus-visible:ring-offset-2",
                policiesActive && "font-semibold text-ooc-navy no-underline hover:no-underline"
              )}
            >
              Policies
              <ChevronDown aria-hidden className="size-4" />
            </PopoverTrigger>
            <PopoverContent align="end" className="w-56 p-1.5">
              {policiesNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="block rounded-md px-3 py-2 text-[14px] font-medium text-ooc-navy-mute transition-colors hover:bg-ooc-navy-line/60 hover:text-ooc-navy"
                >
                  {item.label}
                </Link>
              ))}
            </PopoverContent>
          </Popover>
        </nav>

        <div className="hidden xl:block">
          <Button
            asChild
            className="group h-auto rounded-full bg-ooc-navy px-[22px] py-[10px] font-semibold text-white shadow-none hover:bg-ooc-navy-ink hover:text-white hover:shadow-none"
          >
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-ooc-navy hover:bg-ooc-navy-line/60 hover:text-ooc-navy xl:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-full flex-col border-l border-ooc-navy-line bg-white sm:max-w-md"
          >
            <SheetHeader className="border-b border-ooc-navy-line pb-5">
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription className="sr-only">Site navigation menu</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-1 overflow-y-auto px-4" aria-label="Mobile navigation">
              {mainNav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-xl px-4 py-3 text-[18px] text-ooc-navy transition-colors hover:bg-ooc-navy-line/60",
                        active ? "font-semibold" : "font-medium"
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                );
              })}

              <p className="mt-4 px-4 pb-1 text-xs font-semibold uppercase tracking-widest text-ooc-navy-mute">
                Policies
              </p>
              {policiesNav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn(
                      "rounded-xl px-4 py-3 text-[18px] text-ooc-navy transition-colors hover:bg-ooc-navy-line/60",
                      pathname === item.href ? "font-semibold" : "font-medium"
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto px-4 pb-4">
              <SheetClose asChild>
                <Button
                  asChild
                  className="h-auto w-full rounded-full bg-ooc-navy px-[22px] py-[10px] font-semibold text-white shadow-none hover:bg-ooc-navy-ink hover:text-white hover:shadow-none"
                >
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
