interface GameCardProps {
  id: string;
  name: string;
  icon: string;
  onClick: (id: string) => void;
}

export function GameCard({ id, name, icon, onClick }: GameCardProps) {
  return (
    <div
      onClick={() => onClick(id)}
      className="cursor-pointer group h-full"
      data-testid={`card-game-${id}`}
    >
      <div
        className="w-full aspect-square bg-gradient-to-br from-white/18 to-white/4 border-2 border-white/35 hover:border-white/55 transition-all duration-200 flex items-center justify-center rounded-none overflow-hidden group-hover:scale-105 transform"
        style={{
          boxShadow: "4px 4px 0px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.15)",
        }}
      >
        {/* Pixel scanlines */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.3) 0px,
              rgba(0, 0, 0, 0.3) 1px,
              transparent 1px,
              transparent 2px
            )`,
          }}
        />

        {/* Icon */}
        <div className="text-5xl drop-shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.1), 0 0 15px rgba(255, 255, 255, 0.05)",
          }}
        />
      </div>

      {/* Card Title */}
      <h3 className="font-pixel text-xs font-bold text-white/85 mt-3 text-center drop-shadow-md group-hover:text-white/95 transition-colors">
        {name}
      </h3>
    </div>
  );
}
