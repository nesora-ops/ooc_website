"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { mainNav, primaryCta } from "@/lib/site-config";
import { cn } from "@/lib/utils";

// The header never carries the full seal — at 34px its wordmark, laurel, and
// star row stop resolving. It gets the horizontal lockup (>=640px) or the CC
// monogram alone (<640px), both transparent navy.
// See components/brand/seal.tsx for where the seal is allowed.
function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ooc-navy focus-visible:ring-offset-2"
      aria-label="Organisation of Choice, home"
    >
      {/* 577x200 (2.88:1) and 246x179 — declared at their true intrinsic ratio
          so next/image reserves the right box; height is driven by CSS. */}
      <Image
        src="/images/brand/mark-navy.png"
        alt="Organisation of Choice"
        width={577}
        height={200}
        priority
        className="hidden h-[28px] w-auto sm:block md:h-[34px]"
      />
      <Image
        src="/images/brand/monogram-cc-navy.png"
        alt="Organisation of Choice"
        width={246}
        height={179}
        priority
        className="h-[30px] w-auto sm:hidden"
      />
      <span aria-hidden className="hidden h-[30px] w-px bg-ooc-navy-line sm:block" />
      <span className="hidden text-[14px] font-semibold leading-[1.15] tracking-[-0.01em] text-ooc-navy sm:block">
        <span className="block">Organisation</span>
        <span className="block">
          of Choice<sup className="text-[0.6em] font-semibold">™</sup>
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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
            <nav className="flex flex-col gap-1 px-4" aria-label="Mobile navigation">
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
