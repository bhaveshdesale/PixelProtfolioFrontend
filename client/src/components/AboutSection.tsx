import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import thirdVideo from "@assets/3rd_1764001382374.mp4";

import { Zap, Code2, Palette, Gamepad2, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useVideoLoader } from "@/hooks/useVideoLoader";
import portraitImage from "@assets/20251128_1112_Cyber Pixel-Art Portrait_remix_01kb4fn94qezp971z3xas7ct4c_1764309247754.png";

export function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const videoRef1 = useRef<HTMLVideoElement>(null);
  useVideoLoader("about", videoRef1);

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-32 px-6 overflow-hidden"
      data-testid="section-about"
    >
      {/* Full-width video background - Optimized for smooth scrolling */}
      <video
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef1}
        preload="auto"
        controls={false}
        className="absolute inset-0 w-full h-full object-cover pixel-video smooth-video"
        style={{ 
          pointerEvents: "none",
          willChange: "transform",
          WebkitAcceleratedCompositing: "true",
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          contain: "layout style paint",
          backfaceVisibility: "hidden",
        }}
      >
        <source src={thirdVideo} type="video/mp4" />
      </video>

      {/* Integrated overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/45" />

      {/* Animated pixel decorations */}
      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-white/20 opacity-50 animate-pulse" />
      <div className="absolute bottom-32 right-10 w-16 h-16 border-2 border-white/15 opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content - Animated on scroll */}
      {isVisible && (
        <div className="max-w-7xl mx-auto relative z-10 animate-section-load">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Minimal 5 Lines About */}
            <div className="space-y-6 animate-fade-in-up">
              {/* Section Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
                  {/* <h1 className="caption-text text-white/70 font-pixel">ABOUT</h1> */}
                  <h2 className="font-pixel text-3xl md:text-4xl font-bold text-white/95 mb-4 drop-shadow-lg pixel-shadow">
              ABOUT
            </h2>
                </div>
              </div>
              
              {/* 5 Lines Bio - All in Pixel Font */}
              <div className="space-y-3 border-l-4 border-primary/50 pl-6">
                <p className="text-sm text-white/85 drop-shadow-md leading-relaxed font-pixel">
  HI TECHIES, I’M BHAVESH DESALE — A SOFTWARE DEVELOPER WITH A STRONG INTEREST IN BUILDING PRACTICAL, USER-FOCUSED APPLICATIONS.
</p>

<p className="text-sm text-white/80 drop-shadow-md leading-relaxed font-pixel">
  I MAINLY WORK WITH ANDROID AND WEB TECHNOLOGIES, WHERE I TURN IDEAS INTO REAL PRODUCTS THAT PEOPLE CAN ACTUALLY USE.
</p>

<p className="text-sm text-white/80 drop-shadow-md leading-relaxed font-pixel">
  I HAVE EXPERIENCE BUILDING ANDROID APPS USING KOTLIN AND JETPACK COMPOSE, AND FULL-STACK WEB APPS USING REACT, NODE.JS, AND DATABASES.
</p>

<p className="text-sm text-white/75 drop-shadow-md leading-relaxed font-pixel">
  CURRENTLY, I’M IMPROVING MY SKILLS IN FULL-STACK DEVELOPMENT AND SYSTEM DESIGN TO UNDERSTAND HOW SCALABLE AND RELIABLE APPLICATIONS ARE BUILT.
</p>

<p className="text-sm text-white/75 drop-shadow-md leading-relaxed font-pixel">
  I ENJOY LEARNING NEW TECHNOLOGIES, PARTICIPATING IN HACKATHONS, AND BUILDING PROJECTS THAT SOLVE REAL-WORLD PROBLEMS.
</p>

<p className="text-sm text-white/75 drop-shadow-md leading-relaxed font-pixel">
  THIS PORTFOLIO SHOWCASES MY JOURNEY, PROJECTS, AND THE SKILLS I’M CONSTANTLY WORKING TO IMPROVE.
</p>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="p-4 backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 border border-white/25 text-center hover-elevate rounded">
                  <div className="heading-h3 text-primary/90 font-pixel">10+</div>
                  <div className="text-xs text-white/70 font-pixel">PROJECTS</div>
                </div>
                <div className="p-4 backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 border border-white/25 text-center hover-elevate rounded">
                  <div className="heading-h3 text-primary/90 font-pixel">1.5+</div>
                  <div className="text-xs text-white/70 font-pixel">YEARS</div>
                </div>
              </div>
            </div>

            {/* Right Column - Portrait Card Centered */}
            <div className="flex justify-center items-center animate-fade-in h-full">
              <div className="relative">
                {/* Glow background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blur-2xl rounded-lg" />
                
                {/* Main Card with Pixel Border */}
                <Card className="relative overflow-hidden backdrop-blur-md bg-white/5 border-2 border-white/30 hover-elevate transition-all duration-300 shadow-2xl w-80 h-96">
                  {/* Corner Pixel Decorations */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-white/40 bg-black/50 z-10" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-white/40 bg-black/50 z-10" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-2 border-white/40 bg-black/50 z-10" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-2 border-white/40 bg-black/50 z-10" />

                  {/* Portrait Image */}
                  <div className="relative w-full h-full">
                    <img 
                      src={portraitImage} 
                      alt="Portrait" 
                      className="w-full h-full object-cover drop-shadow-lg"
                      data-testid="img-bhavesh-portrait"
                    />
                    
                    {/* Gradient overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent h-32" />
                    
                    {/* Text overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-center z-10">
                      <h3 className="text-lg font-bold text-white/95 font-pixel pixel-shadow">BUILDING</h3>
                      <h3 className="text-xl font-bold text-white/95 font-pixel pixel-shadow">IDEAS</h3>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
