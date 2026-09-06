// Sits directly under the green header bar. The white ground is deliberate: it
// separates the solid --ooc-green-800 header from the hero gradient below.
// Keep the root a <div> — globals.css hangs the hero treatment off
// `main > div:first-child + section`.
export function SectionHeaderBar({ label }: { label: string }) {
  return (
    <div className="border-b border-navy/8 bg-white">
      <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold text-ooc-ink">OOC / {label}</p>
        <div className="hidden items-center gap-4 text-[0.68rem] font-medium text-ooc-ink/70 sm:flex" aria-label="Programme qualities">
          <span>Independent</span>
          <span aria-hidden className="size-1 rounded-full bg-coral" />
          <span>Evidence-led</span>
          <span aria-hidden className="size-1 rounded-full bg-teal" />
          <span>Verified annually</span>
        </div>
      </div>
    </div>
  );
}
