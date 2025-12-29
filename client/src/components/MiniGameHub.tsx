import { GameCard } from "@/components/GameCard";
import { X } from "lucide-react";

interface MiniGameHubProps {
  isOpen: boolean;
  onClose: () => void;
  onGameSelect: (gameId: string) => void;
}

const games = [
  { id: "pixel-maze", name: "PIXEL MAZE", icon: "🗺️" },
  { id: "memory-game", name: "MEMORY", icon: "🧠" },
  { id: "pattern-match", name: "PATTERN", icon: "🎯" },
  { id: "pixel-art", name: "CREATOR", icon: "🎨" },
];

export function MiniGameHub({ isOpen, onClose, onGameSelect }: MiniGameHubProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="mini-game-hub"
    >
      {/* Pixel-styled backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
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

      {/* Mini-website container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          border: "3px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 0 50px rgba(255, 255, 255, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.25)",
        }}
      >
        <div className="bg-gradient-to-b from-black/95 to-black/90 p-8 h-full overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/15 transition-colors z-10 rounded-none"
            data-testid="button-close-game-hub"
          >
            <X className="w-5 h-5 text-white/70 hover:text-white/90" />
          </button>

          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-pixel text-4xl md:text-5xl font-bold text-white/95 drop-shadow-lg pixel-shadow mb-2">
              GAME VAULT
            </h2>
            <p className="font-pixel text-xs text-white/70 drop-shadow-md">
              SELECT A PUZZLE · 4 CHALLENGES AWAIT
            </p>
            <div className="w-16 h-1 bg-white/20 mx-auto mt-4" />
          </div>

          {/* Games Grid - Responsive */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {games.map((game, index) => (
              <div
                key={game.id}
                style={{ animationDelay: `${0.15 + index * 0.08}s` }}
                className="animate-fade-in-up"
              >
                <GameCard
                  id={game.id}
                  name={game.name}
                  icon={game.icon}
                  onClick={() => onGameSelect(game.id)}
                />
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center pt-8 border-t border-white/10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="font-pixel text-xs text-white/60 drop-shadow-md">
              CLICK A CARD TO START · [ESC] TO EXIT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
