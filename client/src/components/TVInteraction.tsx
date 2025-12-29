import { useState, useRef, useEffect } from "react";
import { AnimeFlashEffect } from "@/components/AnimeFlashEffect";
import { MiniGameHub } from "@/components/MiniGameHub";
import { IndividualGamePage } from "@/components/IndividualGamePage";

export function TVInteraction() {
  const [showFlash, setShowFlash] = useState(false);
  const [showGameHub, setShowGameHub] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [showGamePage, setShowGamePage] = useState(false);
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tvDimensions, setTvDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Calculate responsive TV dimensions
    const updateDimensions = () => {
      if (containerRef.current) {
        const vw = window.innerWidth;
        // TV screen typically 30-35% of viewport width on desktop, responsive on mobile
        const width = Math.min(Math.max(vw * 0.28, 200), 450);
        const height = (width * 9) / 16;
        setTvDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleTVClick = () => {
    setShowFlash(true);
  };

  const handleFlashComplete = () => {
    setShowFlash(false);
    setShowGameHub(true);
  };

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId);
    setShowGamePage(true);
  };

  const handleCloseGameHub = () => {
    setShowGameHub(false);
  };

  const handleCloseGamePage = () => {
    setShowGamePage(false);
    setSelectedGame(null);
  };

  return (
    <>
      {/* TV Container Reference */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* TV Screen - Large and Prominent with Play Button */}
      <div
        onClick={handleTVClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative z-20 cursor-pointer transition-all duration-300 group"
        style={{
          width: "clamp(300px, 60vw, 700px)",
          aspectRatio: "16 / 9",
          pointerEvents: "auto",
        }}
        data-testid="interactive-tv"
      >
        {/* TV Frame Border */}
        <div
          className="absolute inset-0 rounded-none transition-all duration-200 border-4"
          style={{
            borderColor: hovered ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.3)",
            background: "linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(40, 40, 40, 0.8) 100%)",
            boxShadow: hovered 
              ? "0 0 40px rgba(255, 255, 255, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.1)"
              : "0 0 20px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.05)",
          }}
        />

        {/* TV Screen Content */}
        <div
          className="absolute inset-4 rounded-none flex items-center justify-center"
          style={{
            background: hovered 
              ? "linear-gradient(135deg, rgba(60, 60, 60, 0.8) 0%, rgba(40, 40, 40, 0.9) 100%)"
              : "linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(20, 20, 20, 0.95) 100%)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Pixel scanlines */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.4) 0px,
                rgba(0, 0, 0, 0.4) 1px,
                transparent 1px,
                transparent 2px
              )`,
            }}
          />

          {/* Play Button - Center */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div
              className="flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
              style={{
                width: "clamp(60px, 15vw, 120px)",
                aspectRatio: "1",
                background: hovered 
                  ? "rgba(255, 255, 255, 0.3)" 
                  : "rgba(255, 255, 255, 0.2)",
                border: "3px solid rgba(255, 255, 255, 0.5)",
                boxShadow: hovered 
                  ? "0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.2)"
                  : "0 0 10px rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="text-white drop-shadow-lg transition-all duration-300"
                style={{ fontSize: "clamp(24px, 8vw, 48px)" }}
              >
                ▶
              </div>
            </div>
            
            <p className="font-pixel text-xs md:text-sm text-white/80 drop-shadow-lg text-center">
              CLICK TO PLAY
            </p>
          </div>
        </div>
      </div>

      {/* Flash Effect - Quick anime-style transition */}
      <AnimeFlashEffect isActive={showFlash} onComplete={handleFlashComplete} />

      {/* Mini Game Hub - Mini-website overlay */}
      <MiniGameHub isOpen={showGameHub} onClose={handleCloseGameHub} onGameSelect={handleGameSelect} />

      {/* Individual Game Page - Game detail modal */}
      <IndividualGamePage isOpen={showGamePage} gameId={selectedGame} onClose={handleCloseGamePage} />
    </>
  );
}
