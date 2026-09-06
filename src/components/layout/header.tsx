"use client";

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

// Reversed lockup for the solid green bar. The full circular seal is never used
// here — at header scale its wordmark and laurel are unreadable, so the bar gets
// the horizontal mark (>=640px) or the CC monogram alone (<640px).
// See components/brand/seal.tsx for where the seal *is* allowed.
function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ooc-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ooc-green-800"
      aria-label="Organisation of Choice, home"
    >
      <Image
        src="/images/brand/mark-white.png"
        alt="Organisation of Choice"
        width={120}
        height={34}
        priority
        className="hidden h-[34px] w-auto sm:block"
      />
      <Image
        src="/images/brand/monogram-cc-white.png"
        alt="Organisation of Choice"
        width={30}
        height={30}
        priority
        className="h-[30px] w-auto sm:hidden"
      />
      <span aria-hidden className="hidden h-[30px] w-px bg-white/28 sm:block" />
      <span className="hidden text-[14px] font-semibold leading-[1.15] tracking-[-0.01em] text-white sm:block">
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

  return (
    <header className="sticky top-0 z-40 bg-ooc-green-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-[76px] sm:px-8 lg:px-10">
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
                  // White on #0A4536 is ~9:1; 0.82 is the floor kept for AA.
                  "rounded-md px-2.5 py-2 text-[14px] font-medium text-white/[0.82] underline-offset-[6px] transition-colors outline-none",
                  "hover:text-white hover:underline hover:decoration-ooc-gold hover:decoration-2",
                  "focus-visible:text-white focus-visible:underline focus-visible:decoration-ooc-gold focus-visible:decoration-2",
                  active && "text-white"
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
            className="group h-auto rounded-full bg-white px-[22px] py-[14px] text-ooc-green-800 shadow-none hover:bg-[#F2F6F4] hover:text-ooc-green-800 hover:shadow-none"
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
              className="text-white hover:bg-white/12 hover:text-white xl:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-l-0 bg-ooc-green-800 text-white [&>button]:text-white [&>button]:opacity-100 sm:max-w-md"
          >
            <SheetHeader className="border-b border-white/15 pb-5">
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
                        "rounded-xl px-4 py-3 text-[18px] font-semibold text-white transition-colors hover:bg-white/10",
                        active && "bg-white/12"
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
                  className="h-auto w-full rounded-full bg-white px-[22px] py-[14px] text-ooc-green-800 shadow-none hover:bg-[#F2F6F4] hover:text-ooc-green-800 hover:shadow-none"
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
