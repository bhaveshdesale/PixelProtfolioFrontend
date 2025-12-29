import { useRef, useState } from "react";
import { useVideoLoader } from "@/hooks/useVideoLoader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import animeVideo from "@assets/9th_1764266020732.mp4";
import { TVInteraction } from "@/components/TVInteraction";
import { TVOverlay } from "@/components/TVOverlay";

export function AnimeFansSection() {
  const videoRef6 = useRef<HTMLVideoElement>(null);
  useVideoLoader("anime", videoRef6);

  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  // 🔥 New: control opening the game interaction
  const [startTV, setStartTV] = useState(false);

  return (
    <section
      ref={ref}
      id="anime-fans"
      className="relative py-32 px-6 overflow-hidden h-screen flex flex-col items-center justify-center"
      data-testid="section-anime-fans"
    >
      {/* Background Video */}
      <video
        ref={videoRef6}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        className="absolute inset-0 w-full h-full object-cover pixel-video smooth-video"
        style={{
          pointerEvents: "none",
          willChange: "auto",
          WebkitTransform: "translateZ(0)",
        }}
      >
        <source src={animeVideo} type="video/mp4" />
      </video>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/35 to-black/45" />

      <div className="relative z-10 w-full h-full flex flex-col">

        {/* Heading */}
        {isVisible && (
          <div className="pt-8 pb-12 animate-fade-in-up">
            <h2 className="heading-h3 text-white/95 drop-shadow-lg pixel-shadow">
              FOR ANIME FANS
            </h2>
          </div>
        )}

        {/* TV Overlay (Click text on TV) */}
        {!startTV && (
          <TVOverlay onClick={() => setStartTV(true)} />
        )}

        {/* When clicked → TVInteraction opens */}
        {startTV && <TVInteraction />}
      </div>
    </section>
  );
}
