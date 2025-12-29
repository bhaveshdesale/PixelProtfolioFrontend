export function VideoLoadingScreen() {
  return (
    <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-black z-50 overflow-hidden animate-fade-out" style={{ animationDelay: "5s" }}>
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

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        {/* Animated loading dots */}
        <div className="flex gap-3">
          <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse" />
          <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>

        {/* Loading text */}
        <p className="font-pixel text-xs text-white/70 drop-shadow-md tracking-widest">
          LOADING PORTFOLIO...
        </p>

        {/* Timer - shows time remaining */}
        <p className="font-pixel text-xs text-white/50 mt-4">Wait a Second</p>

        {/* Pixel border decoration */}
        <div className="mt-8 space-y-2">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}
export const playlist = [
  "/assets/music/Kimi no Na wa - Sparkle_default.mp3",
  "/assets/music/anime-2.mp3",
  "/assets/music/anime-3.mp3",
];
