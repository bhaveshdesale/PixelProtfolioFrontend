export function FallingFeathers() {
  const feathers = [
    { delay: 0, left: "15%", opacity: 0.6, size: 1 },
    { delay: 3, left: "45%", opacity: 0.4, size: 0.8 },
    { delay: 6, left: "75%", opacity: 0.5, size: 1.2 },
    { delay: 1.5, left: "30%", opacity: 0.3, size: 0.9 },
    { delay: 4.5, left: "60%", opacity: 0.5, size: 1.1 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {feathers.map((feather, i) => (
        <div
          key={i}
          className="absolute animate-feather-fall"
          style={{
            left: feather.left,
            opacity: feather.opacity,
            animationDelay: `${feather.delay}s`,
            transform: `scale(${feather.size})`,
          }}
        >
          <div className="h-8 w-2 bg-gradient-to-b from-foreground/40 to-foreground/10 rounded-full" />
        </div>
      ))}
    </div>
  );
}
