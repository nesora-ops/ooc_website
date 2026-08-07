export function SectionHeaderBar({ label }: { label: string }) {
  return (
    <div className="bg-navy py-3">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-white">{label}</p>
      </div>
    </div>
  );
}
