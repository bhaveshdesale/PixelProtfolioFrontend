import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const TAGLINES = [
  "Loading the portfolio...",
  "Initializing pixel world...",
  "Preparing your showcase...",
  "Connecting to the matrix...",
  "Rendering your journey...",
  "Unlocking the creative space...",
];

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      // Change tagline every 1 second
      setTaglineIndex(Math.floor((elapsed / 1000) % TAGLINES.length));

      if (elapsed >= duration) {
        clearInterval(progressInterval);
        onComplete();
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center bg-black z-50 overflow-hidden"
      data-testid="loader-screen"
    >
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12">
        {/* Main title */}
        <h1 className="font-pixel text-3xl md:text-4xl font-bold text-center text-yellow-600 drop-shadow-xl">
          BHAVESH PORTFOLIO
        </h1>

        {/* Animated rotating circle with golden glow */}
        <div className="relative w-28 h-28">
          {/* Outer rotating circle */}
          <div
            className="absolute inset-0 rounded-full border-3 border-transparent border-t-yellow-600 border-r-yellow-500/50 animate-rotate-ring"
            style={{
              boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)",
            }}
          />
          {/* Inner pulsing circle */}
          <div
            className="absolute inset-6 rounded-full border-2 border-yellow-600/40 animate-pulse"
            style={{
              boxShadow: "inset 0 0 20px rgba(212, 175, 55, 0.15)",
            }}
          />
          {/* Center dot */}
          <div
            className="absolute inset-10 rounded-full bg-yellow-600/20"
            style={{
              boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)",
            }}
          />
        </div>

        {/* Progress bar - minimalistic */}
        <div className="w-64 h-1.5 bg-gray-900 rounded-full border border-yellow-600/20 overflow-hidden shadow-lg">
          <div
            className="h-full bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 15px rgba(212, 175, 55, 0.4)",
            }}
          />
        </div>

        {/* Percentage display */}
        <div className="font-pixel text-2xl font-bold text-yellow-600">
          {Math.round(progress)}%
        </div>

        {/* Animated tagline */}
        <div className="text-center h-12 flex items-center justify-center">
          <p className="font-pixel text-xs md:text-sm text-yellow-500/70 drop-shadow-lg animate-fade-in-out text-center">
            {TAGLINES[taglineIndex]}
          </p>
        </div>

        {/* Bottom loading indicator */}
        <div className="text-center space-y-3">
          <p className="font-pixel text-xs text-yellow-600/50 drop-shadow-md tracking-widest">
            Initializing...
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full animate-bounce" />
            <div
              className="w-1.5 h-1.5 bg-yellow-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-1.5 h-1.5 bg-yellow-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </div>

      {/* Subtle ambient glow - centered */}
      <div
        className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
