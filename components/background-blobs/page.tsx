export default function BackgroundBlobs() {
  return (
    <>
      {/* Blob 1 - Top Left */}
      <div
        className="fixed top-20 left-10 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[120px] animate-pulse pointer-events-none z-0"
        style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        aria-hidden="true"
      />

      {/* Blob 2 - Bottom Right */}
      <div
        className="fixed bottom-20 right-10 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none z-0"
        style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        aria-hidden="true"
      />
    </>
  );
}
