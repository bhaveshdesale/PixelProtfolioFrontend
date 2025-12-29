import { useState } from "react";
import { RotatingBook3D } from "@/components/RotatingBook3D";
import { Loader } from "@/components/Loader";

type LandingState = "book" | "loading";

interface LandingProps {
  onComplete?: () => void;
}

export default function Landing({ onComplete }: LandingProps) {
  const [state, setState] = useState<LandingState>("book");
  const [isHovered, setIsHovered] = useState(false);

  const handleBookClick = () => {
    if (isHovered) {
      setState("loading");
    }
  };

  const handleLoaderComplete = () => {
    // Call the onComplete callback if provided
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div
      className="fixed inset-0 w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-black z-50"
      data-testid="landing-page"
    >
      {/* Animated stars background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100,200,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(100,200,255,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            animation: "moveGrid 20s linear infinite",
          }}
        />
      </div>

      {/* Book Section */}
      {state === "book" && (
        <div
          className="relative z-10 w-full h-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
          onClick={handleBookClick}
          data-testid="book-section"
        >
          {/* Book container */}
          <div className="flex-1 flex items-center justify-center w-full">
            <RotatingBook3D isHovered={isHovered} onHover={setIsHovered} />
          </div>

          {/* Info text below book */}
          <div className="mb-20 text-center space-y-4 animate-fade-in">
            <p className="font-pixel text-xs md:text-sm text-white/50 drop-shadow-md tracking-widest">
              HOVER AND CLICK TO ENTER
            </p>
            <div className="flex justify-center gap-2">
              <div
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.3s" }}
              />
              <div
                className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.6s" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Loader Section */}
      {state === "loading" && <Loader onComplete={handleLoaderComplete} />}
    </div>
  );
}
