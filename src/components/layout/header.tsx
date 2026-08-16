"use client";

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

function Logo() {
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-2.5 text-navy" aria-label="Organisation of Choice home">
      <span className="grid size-10 place-items-center rounded-xl bg-mint text-xs font-bold tracking-[-0.08em] text-teal ring-1 ring-teal/15 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
        OOC
      </span>
      <span className="hidden leading-[0.92] tracking-[-0.04em] sm:block xl:hidden 2xl:block">
        <span className="block text-sm font-semibold">Organisation</span>
        <span className="block text-sm font-semibold text-teal">of Choice™</span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 px-3 py-3 sm:px-5">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between rounded-2xl border border-white/75 bg-white/82 px-3 shadow-[0_14px_50px_rgba(23,50,77,0.09)] backdrop-blur-xl sm:px-4 lg:px-5">
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
                  "rounded-lg px-2.5 py-2 text-[0.78rem] font-semibold text-foreground/75 transition-colors hover:bg-mint/70 hover:text-teal",
                  active && "bg-mint text-teal"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Button asChild className="group">
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full border-l-0 bg-background sm:max-w-md">
            <SheetHeader className="border-b border-border pb-5">
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
                        "rounded-xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-mint",
                        active && "bg-mint text-teal"
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
                <Button asChild className="w-full">
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
