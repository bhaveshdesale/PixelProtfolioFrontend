import { useState, useEffect } from "react";

interface NameLoadingScreenProps {
  onComplete: () => void;
}

export function NameLoadingScreen({ onComplete }: NameLoadingScreenProps) {
  const fullName = "BHAVESH DESALE";
  const [displayedName, setDisplayedName] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedName(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
        // Wait 1 second after completion before transitioning
        const timeout = setTimeout(() => {
          onComplete();
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }, 100); // 100ms per character

    return () => clearInterval(interval);
  }, [fullName, onComplete]);

  return (
    <div
      className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center bg-black z-50 overflow-hidden"
      data-testid="name-loading-screen"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full animate-moveGrid"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated corner pixels */}
      <div className="absolute top-10 left-10 w-12 h-12 border-2 border-white/30 opacity-60 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-8 h-8 border-2 border-white/20 opacity-40 animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-1/4 right-20 w-6 h-6 border-2 border-white/25 opacity-50 animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-16">
        {/* Main name with character reveal animation */}
        <div className="text-center">
          <h1 className="font-pixel text-5xl md:text-7xl font-bold text-white/95 drop-shadow-2xl pixel-shadow min-h-20 tracking-wider">
            {displayedName}
            {!isComplete && <span className="animate-pulse text-white/50">_</span>}
          </h1>
        </div>

        {/* Subtitle that appears after name is complete */}
        {isComplete && (
          <div className="animate-fade-in text-center space-y-4">
            <p className="font-pixel text-xs md:text-sm text-white/70 tracking-widest">
              ANDROID DEV | FULL-STACK LEARNER | CREATIVE ENGINEER
            </p>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-white/70 to-white/20 rounded-full" />
          </div>
        )}

        {/* Loading indicator dots */}
        {!isComplete && (
          <div className="flex justify-center gap-3">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
          </div>
        )}
      </div>

      {/* Subtle glow effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
