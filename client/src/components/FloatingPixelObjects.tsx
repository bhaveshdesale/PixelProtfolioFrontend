export function FloatingPixelObjects() {
  const objects = [
    { delay: 0, duration: 6, size: 16, left: "10%", top: "20%", opacity: 0.3, rotate: 0 },
    { delay: 1, duration: 8, size: 12, left: "80%", top: "15%", opacity: 0.2, rotate: 45 },
    { delay: 2, duration: 7, size: 20, left: "25%", top: "60%", opacity: 0.25, rotate: 90 },
    { delay: 0.5, duration: 9, size: 14, left: "70%", top: "70%", opacity: 0.15, rotate: 180 },
    { delay: 1.5, duration: 6.5, size: 18, left: "50%", top: "40%", opacity: 0.3, rotate: 270 },
    { delay: 0.8, duration: 7.5, size: 10, left: "15%", top: "80%", opacity: 0.2, rotate: 135 },
    { delay: 2.2, duration: 8.5, size: 22, left: "90%", top: "50%", opacity: 0.25, rotate: 225 },
    { delay: 1.2, duration: 6.8, size: 15, left: "40%", top: "10%", opacity: 0.18, rotate: 315 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {objects.map((obj, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: obj.left,
            top: obj.top,
            opacity: obj.opacity,
            animationDelay: `${obj.delay}s`,
            animationDuration: `${obj.duration}s`,
            transform: `rotate(${obj.rotate}deg)`,
          }}
        >
          <div
            className="bg-primary"
            style={{
              width: obj.size,
              height: obj.size,
              imageRendering: "pixelated",
              boxShadow: `0 0 ${obj.size * 1.5}px rgba(139, 92, 246, ${obj.opacity})`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
