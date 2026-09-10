export default function Loading() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5 overflow-hidden bg-transparent"
    >
      <div className="h-full w-1/3 animate-pulse bg-[#0E7A62]" />
    </div>
  );
}
