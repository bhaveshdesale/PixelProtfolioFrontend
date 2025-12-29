import { useEffect, useRef, useState } from "react";

export function GlowingCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${mousePosition.x}px`;
      cursorRef.current.style.top = `${mousePosition.y}px`;
    }
  }, [mousePosition]);

  return (
    <>
      {/* Glow cursor */}
      <div
        ref={cursorRef}
        className={`glowing-cursor ${isVisible ? "visible" : ""}`}
        data-testid="cursor-glow"
      >
        {/* Inner ball */}
        <div className="cursor-ball" />
        {/* Outer glow rings */}
        <div className="cursor-ring" />
        <div className="cursor-ring-2" />
      </div>
    </>
  );
}
