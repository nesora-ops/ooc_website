export function SectionHeaderBar({ label }: { label: string }) {
  return (
    <div className="border-y border-navy/8 bg-sky/45">
      <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold text-navy-ink">OOC / {label}</p>
        <div className="hidden items-center gap-4 text-[0.68rem] font-medium text-muted-foreground sm:flex" aria-label="Programme qualities">
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
