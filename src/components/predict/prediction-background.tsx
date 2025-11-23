export default function PredictionBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full relative overflow-hidden py-12">
      {/* Grid background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <GridPattern />
      </div>
      {/* Animated Blobs above grid */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-40 animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-30 animate-pulse z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full blur-2xl opacity-20 animate-pulse z-0" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function GridPattern() {
  const columns = 80;
  const rows = 24;
  return (
    <div className="flex bg-[#FFF9FB] shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex shrink-0 rounded-[2px] opacity-10 ${
                index % 2 === 0
                  ? "bg-[#fde4ec]" // light pink
                  : "bg-[#fffde4] shadow-[0px_0px_1px_3px_rgba(252,228,236,0.5)_inset]" // light cream with pink shadow
              }`}
            />
          );
        })
      )}
    </div>
  );
}
