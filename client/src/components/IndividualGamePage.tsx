import { X } from "lucide-react";

interface IndividualGamePageProps {
  isOpen: boolean;
  gameId: string | null;
  onClose: () => void;
}

const gameContent: Record<string, { name: string; icon: string; description: string }> = {
  "pixel-maze": {
    name: "PIXEL MAZE EXPLORER",
    icon: "🗺️",
    description: "Navigate through an intricate pixel-art maze. Use arrow keys or WASD to move. Find the exit hidden at the end of the labyrinth. Challenge yourself with multiple difficulty levels!",
  },
  "memory-game": {
    name: "MEMORY MATCH",
    icon: "🧠",
    description: "Test your memory by matching pairs of identical pixel tiles. Click to reveal, remember the pattern, and complete the challenge before time runs out. Perfect for training your mind!",
  },
  "pattern-match": {
    name: "PATTERN MASTER",
    icon: "🎯",
    description: "Complete increasingly complex pixel pattern sequences. Logic meets creativity! Observe, analyze, and predict the next pattern. How far can you go before it gets too challenging?",
  },
  "pixel-art": {
    name: "PIXEL ART CREATOR",
    icon: "🎨",
    description: "Unleash your creativity on a pixel canvas. Create your own pixel art masterpiece using a color palette. Share your creations with the anime fan community and become an artist!",
  },
};

export function IndividualGamePage({ isOpen, gameId, onClose }: IndividualGamePageProps) {
  if (!isOpen || !gameId) return null;

  const game = gameContent[gameId];
  if (!game) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="individual-game-page"
    >
      {/* Pixel backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.02) 0px,
              rgba(255, 255, 255, 0.02) 1px,
              transparent 1px,
              transparent 2px
            )
          `,
        }}
      />

      {/* Game page container */}
      <div
        className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          border: "3px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 0 50px rgba(255, 255, 255, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.25)",
        }}
      >
        <div className="bg-gradient-to-b from-black/95 to-black/90 p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/15 transition-colors rounded-none"
            data-testid="button-close-game"
          >
            <X className="w-6 h-6 text-white/70 hover:text-white/90" />
          </button>

          {/* Game Header */}
          <div className="text-center mb-8 animate-fade-in-up">
            <div className="text-6xl mb-4 drop-shadow-lg">{game.icon}</div>
            <h2 className="font-pixel text-3xl font-bold text-white/95 drop-shadow-lg pixel-shadow mb-2">
              {game.name}
            </h2>
            <div className="w-12 h-1 bg-white/20 mx-auto" />
          </div>

          {/* Game Preview Area */}
          <div
            className="bg-gradient-to-br from-white/12 to-white/3 border-2 border-white/25 p-8 min-h-64 flex flex-col items-center justify-center mb-8 rounded-none"
            style={{
              boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.05), 3px 3px 0px rgba(0, 0, 0, 0.3)",
              backgroundImage: `repeating-linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.01) 0px,
                rgba(255, 255, 255, 0.01) 1px,
                transparent 1px,
                transparent 2px
              )`,
            }}
          >
            <div className="text-5xl mb-4 opacity-50">{game.icon}</div>
            <p className="font-pixel text-sm text-white/70 text-center leading-relaxed drop-shadow-md">
              {game.description}
            </p>
          </div>

          {/* Play Button */}
          <div className="flex gap-4 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <button
              className="flex-1 px-6 py-3 bg-white/22 border-2 border-white/38 text-white/95 font-pixel text-xs font-bold hover:bg-white/32 transition-all duration-200 rounded-none"
              style={{
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.15)",
              }}
              data-testid="button-play-game"
            >
              ▶ PLAY NOW
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-white/12 border-2 border-white/25 text-white/75 font-pixel text-xs font-bold hover:bg-white/20 transition-all duration-200 rounded-none"
              style={{
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
              }}
            >
              BACK
            </button>
          </div>

          {/* Info */}
          <div className="text-center pt-6 border-t border-white/10">
            <p className="font-pixel text-xs text-white/60 drop-shadow-md">
              PREPARE FOR AN EPIC ADVENTURE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
