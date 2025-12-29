import { useEffect, useState } from "react";

interface AnimeFlashEffectProps {
  isActive: boolean;
  onComplete: () => void;
}

export function AnimeFlashEffect({ isActive, onComplete }: AnimeFlashEffectProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setPhase(0);
      return;
    }

    const totalFrames = 12;
    let currentFrame = 0;

    const interval = setInterval(() => {
      currentFrame++;
      setPhase(currentFrame);

      if (currentFrame >= totalFrames) {
        clearInterval(interval);
        setTimeout(onComplete, 50);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isActive, onComplete]);

  if (!isActive) return null;

  // Flash in (0-6), then flash out (6-12)
  const flashIn = phase <= 6 ? (phase / 6) : 0;
  const flashOut = phase > 6 ? ((phase - 6) / 6) : 0;
  const opacity = Math.max(flashIn, flashOut);

  return (
    <>
      {/* White flash overlay */}
      <div
        className="fixed inset-0 z-[999] pointer-events-none"
        style={{
          background: `rgba(255, 255, 255, ${opacity * 0.9})`,
          transition: "background 0.025s linear",
        }}
      />

      {/* Pixel distortion effect */}
      <div
        className="fixed inset-0 z-[998] pointer-events-none"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, ${opacity * 0.3}) 0px,
              rgba(255, 255, 255, ${opacity * 0.3}) 2px,
              transparent 2px,
              transparent 4px
            )
          `,
          opacity: opacity * 0.6,
        }}
      />
    </>
  );
}
