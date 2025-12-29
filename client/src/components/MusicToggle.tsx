import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMusic } from "@/contexts/MusicContext";

export function MusicToggle() {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <div
      className="fixed bottom-6 right-6 z-50 group"
      data-testid="music-toggle-container"
    >
      {/* Label - Shows on hover */}
      <div className="absolute bottom-16 right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        <p className="font-pixel text-xs text-white/70 bg-black/60 px-3 py-1 rounded-sm drop-shadow-lg">
          {isPlaying ? "MUSIC ON" : "MUSIC OFF"}
        </p>
      </div>

      {/* Toggle Button */}
      <Button
        size="icon"
        variant="ghost"
        onClick={toggleMusic}
        data-testid="button-music-toggle"
        className="hover-elevate active-elevate-2 font-pixel text-xs backdrop-blur-md bg-white/10 border border-white/20 text-white/80 hover:text-white/95 transition-all duration-300"
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5 animate-pulse" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
