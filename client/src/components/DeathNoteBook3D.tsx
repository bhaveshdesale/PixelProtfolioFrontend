import { useEffect, useRef } from "react";
import gsap from "gsap";

export function DeathNoteBook3D() {
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bookRef.current) return;

    // Animate book
    gsap.fromTo(
      bookRef.current,
      { rotationY: -180, opacity: 0 },
      {
        rotationY: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      }
    );

    gsap.to(bookRef.current, {
      y: Math.sin(Date.now() * 0.0005) * 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Subtle rotation
    gsap.to(bookRef.current, {
      rotationX: Math.sin(Date.now() * 0.0005) * 8,
      rotationZ: Math.cos(Date.now() * 0.0005) * 5,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center perspective">
      <div
        ref={bookRef}
        className="relative w-48 h-64 md:w-64 md:h-80"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1200px",
        }}
      >
        {/* Book Cover */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg shadow-2xl border-2 border-yellow-600/40 flex flex-col items-center justify-center p-6 text-center"
          style={{
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 20px rgba(212,175,55,0.2)",
          }}
        >
          {/* Spine accent */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-l-lg" />

          {/* Title */}
          <div className="space-y-4">
            <div className="font-gothic text-2xl md:text-4xl font-bold tracking-widest" style={{ color: "#d4af37" }}>
              DEATH
            </div>
            <div className="font-gothic text-2xl md:text-4xl font-bold tracking-widest" style={{ color: "#d4af37" }}>
              NOTE
            </div>

            {/* Decorative lines */}
            <div className="flex gap-2 justify-center mt-6">
              <div className="w-8 h-0.5 bg-yellow-600/60" />
              <div className="w-2 h-2 bg-yellow-600/60 rounded-full" />
              <div className="w-8 h-0.5 bg-yellow-600/60" />
            </div>

            {/* Owner name */}
            <div className="font-anime text-xs md:text-sm mt-8 text-yellow-300/80">Bhavesh</div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-yellow-600/50" />
          <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-yellow-600/50" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-yellow-600/50" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-yellow-600/50" />

          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              boxShadow: "inset 0 0 30px rgba(212,175,55,0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
