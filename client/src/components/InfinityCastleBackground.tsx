import { useEffect, useRef } from "react";
import gsap from "gsap";

export function InfinityCastleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let offset = 0;

    const animate = () => {
      // Dark background with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(15, 15, 35, 0.9)");
      gradient.addColorStop(0.5, "rgba(30, 20, 60, 0.7)");
      gradient.addColorStop(1, "rgba(15, 15, 35, 0.9)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw vertical light beams (Infinity Castle effect)
      ctx.strokeStyle = "rgba(200, 150, 255, 0.15)";
      ctx.lineWidth = 2;

      for (let i = 0; i < 20; i++) {
        const x = (i * canvas.width) / 10;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + Math.sin(offset * 0.01 + i) * 20, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines (perspective illusion)
      ctx.strokeStyle = "rgba(150, 100, 200, 0.08)";
      ctx.lineWidth = 1;

      for (let i = 0; i < 30; i++) {
        const y = (i * canvas.height) / 15 + offset * 0.5;
        if (y % canvas.height < 50 || y % canvas.height > canvas.height - 50) continue;

        ctx.beginPath();
        ctx.moveTo(0, y % canvas.height);
        ctx.lineTo(canvas.width, y % canvas.height);
        ctx.stroke();
      }

      // Draw floating particles (lanterns)
      ctx.fillStyle = "rgba(255, 200, 100, 0.3)";
      for (let i = 0; i < 15; i++) {
        const x = (Math.sin(offset * 0.002 + i * 0.5) + 1) * (canvas.width / 2);
        const y = (Math.cos(offset * 0.001 + i * 0.3) + 1) * (canvas.height / 2);
        const size = 3 + Math.sin(offset * 0.003 + i) * 2;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Glow effect
      ctx.fillStyle = "rgba(200, 150, 255, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      offset += 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 mix-blend-screen"
    />
  );
}
