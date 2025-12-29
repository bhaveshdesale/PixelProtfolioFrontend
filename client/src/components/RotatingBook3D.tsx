import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface RotatingBook3DProps {
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}

export function RotatingBook3D({ isHovered, onHover }: RotatingBook3DProps) {
  const bookRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef<gsap.core.Tween | null>(null);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (!bookRef.current) return;

    // Initial entrance animation
    gsap.fromTo(
      bookRef.current,
      { scale: 0, opacity: 0, rotationY: -90 },
      {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        ease: "back.out",
      }
    );

    // Continuous slow rotation animation (clockwise when not hovered)
    if (!isHovered && isRotating) {
      rotationRef.current = gsap.to(bookRef.current, {
        rotationY: 360,
        duration: 15, // Slower rotation - 15 seconds per full rotation
        repeat: -1,
        ease: "none",
      });
    } else {
      // Stop rotation on hover
      if (rotationRef.current) {
        rotationRef.current.kill();
        rotationRef.current = null;
      }
      setIsRotating(false);
    }

    return () => {
      if (rotationRef.current) {
        rotationRef.current.kill();
      }
    };
  }, [isHovered, isRotating]);

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        perspective: "1200px",
        cursor: "pointer",
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => {
        onHover(false);
        setIsRotating(true);
      }}
      data-testid="rotating-book-3d"
    >
      <div
        ref={bookRef}
        className="relative w-56 h-72"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1200px",
        }}
      >
        {/* Book Cover - Minimalistic Black with Golden Text */}
        <div
          className="absolute inset-0 bg-black rounded-lg shadow-2xl border border-yellow-600/20 flex flex-col items-center justify-center p-8 text-center"
          style={{
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.95), inset 0 0 30px rgba(212, 175, 55, 0.05), 0 0 50px rgba(212, 175, 55, 0.1)",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Subtle spine accent - minimal */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-600/40 to-yellow-700/20 rounded-l-lg opacity-50" />

          {/* Main text - BHAVESH NOTE - clean and minimal */}
          <div className="space-y-8 flex flex-col items-center">
            <div className="text-center">
              <p className="font-gothic text-sm text-yellow-600/60 tracking-widest mb-2 opacity-70">
                THE
              </p>
              <h1 className="font-gothic text-5xl font-bold tracking-widest" style={{ color: "#d4af37" }}>
                BHAVESH
              </h1>
              <h1 className="font-gothic text-5xl font-bold tracking-widest mt-1" style={{ color: "#d4af37" }}>
                NOTE
              </h1>
            </div>
          </div>

          {/* Subtle corner accents */}
          <div className="absolute top-4 left-4 w-3 h-3 border-l border-t border-yellow-600/30" />
          <div className="absolute top-4 right-4 w-3 h-3 border-r border-t border-yellow-600/30" />
          <div className="absolute bottom-4 left-4 w-3 h-3 border-l border-b border-yellow-600/30" />
          <div className="absolute bottom-4 right-4 w-3 h-3 border-r border-b border-yellow-600/30" />

          {/* Subtle glow overlay - very minimal */}
          <div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              boxShadow: "inset 0 0 50px rgba(212, 175, 55, 0.08)",
            }}
          />
        </div>
      </div>

      {/* Hover Text */}
      {isHovered && (
        <div className="absolute bottom-20 text-center animate-fade-in">
          <p className="font-pixel text-sm text-yellow-400/80 drop-shadow-lg tracking-widest">
            CLICK TO ENTER
          </p>
        </div>
      )}
    </div>
  );
}
