import { useEffect, useState } from "react";

interface SignatureAnimationProps {
  onComplete: () => void;
}

export function SignatureAnimation({ onComplete }: SignatureAnimationProps) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const fullName = "BHAVESH DESALE";

  useEffect(() => {
    let charIndex = 0;
    
    // Reveal characters one by one - SMOOTHER animation
    const charInterval = setInterval(() => {
      if (charIndex < fullName.length) {
        setDisplayedChars(charIndex + 1);
        charIndex++;
      } else {
        clearInterval(charInterval);
        setIsComplete(true);
        
        // Hold animation for 1.5 seconds then fade out
        const completeTimeout = setTimeout(() => {
          setFadeOut(true);
          // Wait for fade out animation to complete
          const fadeTimeout = setTimeout(() => {
            onComplete();
          }, 600);
          return () => clearTimeout(fadeTimeout);
        }, 1500);
        
        return () => clearTimeout(completeTimeout);
      }
    }, 180); // Slower reveal - 180ms per character for smooth effect
    
    return () => clearInterval(charInterval);
  }, [fullName, onComplete]);

  return (
    <div
      className="fixed inset-0 w-full h-screen flex items-center justify-center bg-black z-50 overflow-hidden transition-opacity duration-600"
      style={{
        opacity: fadeOut ? 0 : 1,
      }}
      data-testid="pixel-name-animation"
    >
      {/* Subtle pixel grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Main content - Centered and adjustable */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        {/* Pixel name with character-by-character reveal - SMALLER FONT */}
        <div className="text-center animate-fade-in">
          <h1 
            className="font-pixel text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-white/95 drop-shadow-xl"
            style={{
              textShadow: "2px 2px 0px rgba(0, 0, 0, 0.5), 4px 4px 0px rgba(0, 0, 0, 0.2)",
              letterSpacing: "0.12em",
              fontFamily: "'Press Start 2P', cursive",
              lineHeight: "1.4",
              minHeight: "80px",
            }}
          >
            {/* Show revealed characters with smooth fade-in effect */}
            {fullName.slice(0, displayedChars).split("").map((char, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  opacity: displayedChars > idx ? 1 : 0,
                  transition: "opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)", // Smooth easing
                  color: char === " " ? "transparent" : "white",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            {!isComplete && <span className="animate-pulse text-white/40">_</span>}
          </h1>
        </div>

        {/* Pixel decoration lines - Smooth reveal */}
        {isComplete && (
          <div className="mt-8 space-y-3 animate-fade-in">
            <div className="h-px w-56 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>
        )}

        {/* Subtle corner pixel decorations */}
        <div className="absolute top-20 left-12 w-6 h-6 border-2 border-white/15 opacity-40" />
        <div className="absolute bottom-24 right-12 w-4 h-4 border-2 border-white/10 opacity-25" />
      </div>

      {/* Fade out background glow on completion */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isComplete
            ? "radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%)"
            : "none",
          transition: "background 1s ease-out",
        }}
      />
    </div>
  );
}
