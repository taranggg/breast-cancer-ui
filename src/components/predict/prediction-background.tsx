export default function PredictionBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-[#00ffff] relative overflow-hidden py-12">
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full blur-2xl opacity-20 animate-pulse" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
