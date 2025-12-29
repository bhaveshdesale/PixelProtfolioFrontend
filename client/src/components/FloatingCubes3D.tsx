import { useEffect, useRef } from "react";

interface FloatingCubes3DProps {
  containerClass?: string;
}

export function FloatingCubes3D({ containerClass = "" }: FloatingCubes3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create 5 floating cubes with CSS animations
    const colors = ["#8b5cf6", "#6366f1", "#0ea5e9", "#10b981", "#f59e0b"];

    colors.forEach((color, index) => {
      const cube = document.createElement("div");
      const angle = (index / 5) * Math.PI * 2;
      const radius = 150;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      cube.style.cssText = `
        position: absolute;
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, ${color}80, ${color}40);
        border: 2px solid ${color};
        border-radius: 8px;
        left: 50%;
        top: 50%;
        transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px));
        box-shadow: 0 0 20px ${color}60, inset 0 0 10px ${color}30;
        animation: float-cube-${index} ${4 + Math.random() * 2}s infinite ease-in-out;
        opacity: 0.7;
      `;

      // Add animation keyframes
      const style = document.createElement("style");
      style.textContent = `
        @keyframes float-cube-${index} {
          0%, 100% {
            transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          25% {
            transform: translate(calc(-50% + ${x + 30}px), calc(-50% + ${y + 30}px)) rotateX(90deg) rotateY(90deg) rotateZ(45deg);
          }
          50% {
            transform: translate(calc(-50% + ${x}px), calc(-50% + ${y - 30}px)) rotateX(180deg) rotateY(180deg) rotateZ(90deg);
          }
          75% {
            transform: translate(calc(-50% + ${x - 30}px), calc(-50% + ${y + 30}px)) rotateX(270deg) rotateY(90deg) rotateZ(270deg);
          }
        }
      `;

      if (containerRef.current) {
        containerRef.current.appendChild(cube);
        if (index === 0) {
          document.head.appendChild(style);
        }
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none ${containerClass}`}
      style={{ perspective: "1200px" }}
    />
  );
}
