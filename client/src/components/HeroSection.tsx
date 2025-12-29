// import { Button } from "@/components/ui/button";
// import { ArrowDown } from "lucide-react";
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
// import { useTheme } from "@/contexts/ThemeContext";
// import { useState, useRef } from "react";
// import heroVideo from "@assets/7th_1764252140673.mp4";
// // import { CustomMoon } from "@/components/CustomMoon";
// import { useVideoLoader } from "@/hooks/useVideoLoader";

// interface HeroSectionProps {
//   onExplore: () => void;
// }

// export function HeroSection({ onExplore }: HeroSectionProps) {
//   const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
//   const [isGlowing, setIsGlowing] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   useVideoLoader("hero", videoRef);

//   return (
//     <section
//       ref={ref}
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       data-testid="section-hero"
//     >
//       {/* Full-width video background - Optimized for smooth scrolling */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         controls={false}
//         className="absolute inset-0 w-full h-full object-cover pixel-video smooth-video"
//         style={{
//           pointerEvents: "none",
//           willChange: "transform",
//           WebkitAcceleratedCompositing: "true",
//           WebkitTransform: "translateZ(0)",
//           transform: "translateZ(0)",
//           contain: "layout style paint",
//           backfaceVisibility: "hidden",
//         }}
//       >
//         <source src={heroVideo} type="video/mp4" />
//       </video>

//       {/* Integrated gradient overlay for text readability */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/55" />

//       {/* Custom Moon Component - Decorative background element
//       <CustomMoon /> */}

//       {/* Text content - Animated on scroll */}
//       {isVisible && (
//         <div className="relative z-10 max-w-7xl mx-auto px-6 text-center animate-section-load">
//           <div className="space-y-8 animate-fade-in-up">
//             <div>
//               <h1 className="heading-h1 text-white/95 drop-shadow-lg pixel-shadow">
//                 BHAVESH DESALE
//               </h1>
//               <div className="h-1 w-32 mx-auto mt-6 bg-gradient-to-r from-white/70 to-white/40 rounded-full" />
//             </div>

//             <p className="caption-text text-white/85 max-w-3xl mx-auto drop-shadow-md">
//               ANDROID DEV | FULL-STACK DEVELOPER | ANDROID DEVELOPER
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
//               <Button
//                 size="lg"
//                 onClick={onExplore}
//                 data-testid="button-explore-portfolio"
//                 className="font-pixel text-xs hover-elevate active-elevate-2 backdrop-blur-md bg-white/20 hover:bg-white/30 text-white border border-white/40"
//               >
//                 EXPLORE
//                 <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


//update approved
// import { Button } from "@/components/ui/button";
// import { ArrowDown, Github, Linkedin, MessageCircle, Code2 } from "lucide-react";
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
// import { useState, useRef } from "react";
// import heroVideo from "@assets/7th_1764252140673.mp4";
// import { useVideoLoader } from "@/hooks/useVideoLoader";

// interface HeroSectionProps {
//   onExplore: () => void;
// }

// export function HeroSection({ onExplore }: HeroSectionProps) {
//   const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
//   const [isGlowing, setIsGlowing] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   useVideoLoader("hero", videoRef);

//   return (
//     <section
//       ref={ref}
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       data-testid="section-hero"
//     >
//       {/* Background video */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         controls={false}
//         className="absolute inset-0 w-full h-full object-cover pixel-video smooth-video"
//         style={{
//           pointerEvents: "none",
//           transform: "translateZ(0)",
//         }}
//       >
//         <source src={heroVideo} type="video/mp4" />
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/55" />

//       {/* Content */}
//       {isVisible && (
//         <div className="relative z-10 max-w-7xl mx-auto px-6 text-center animate-section-load">
//           <div className="space-y-8 animate-fade-in-up">

//             {/* Name */}
//             <div>
//               <h1 className="heading-h1 text-white/95 drop-shadow-lg pixel-shadow">
//                 BHAVESH DESALE
//               </h1>
//               <div className="h-1 w-32 mx-auto mt-6 bg-gradient-to-r from-white/70 to-white/40 rounded-full" />
//             </div>

//             {/* Tagline */}
//             <p className="caption-text text-white/85 max-w-3xl mx-auto drop-shadow-md">
//               ANDROID DEV | FULL-STACK DEVELOPER | ANDROID DEVELOPER
//             </p>

//             {/* ⭐ SOCIAL ICONS BLOCK */}
//             <div className="flex items-center justify-center gap-6 mt-4 mb-6">
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 className="text-white/80 hover:text-white hover:scale-110 transition-all duration-200"
//               >
//                 <Github className="w-7 h-7" />
//               </a>

//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 className="text-white/80 hover:text-white hover:scale-110 transition-all duration-200"
//               >
//                 <Linkedin className="w-7 h-7" />
//               </a>

//               <a
//                 href="https://discord.com"
//                 target="_blank"
//                 className="text-white/80 hover:text-white hover:scale-110 transition-all duration-200"
//               >
//                 <MessageCircle className="w-7 h-7" />
//               </a>

//               <a
//                 href="https://leetcode.com"
//                 target="_blank"
//                 className="text-white/80 hover:text-white hover:scale-110 transition-all duration-200"
//               >
//                 <Code2 className="w-7 h-7" />
//               </a>
//             </div>

//             {/* EXPLORE Button */}
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
//               <Button
//                 size="lg"
//                 onClick={onExplore}
//                 data-testid="button-explore-portfolio"
//                 className="font-pixel text-xs hover-elevate active-elevate-2 
//                 backdrop-blur-md bg-white/20 hover:bg-white/30 text-white 
//                 border border-white/40"
//               >
//                 EXPLORE
//                 <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
//               </Button>
//             </div>

//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  MessageCircle,
  Code2,
  Instagram,
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState, useRef } from "react";
import heroVideo from "@assets/7th_1764252140673.mp4";
import { useVideoLoader } from "@/hooks/useVideoLoader";

interface HeroSectionProps {
  onExplore: () => void;
}

export function HeroSection({ onExplore }: HeroSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoLoader("hero", videoRef);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          className="absolute inset-0 w-full h-full object-cover pixel-video smooth-video opacity-0 transition-opacity duration-700"
          style={{ pointerEvents: "none", transform: "translateZ(0)" }}
          onCanPlayThrough={(e) => {
            (e.target as HTMLVideoElement).classList.remove('opacity-0');
            (e.target as HTMLVideoElement).classList.add('opacity-100');
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/55" />

      {/* Content */}
      {isVisible && (
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center animate-section-load">
          <div className="space-y-8 animate-fade-in-up">

            {/* Name */}
            <div>
              <h1 className="heading-h1 text-white/95 drop-shadow-lg pixel-shadow">
                BHAVESH DESALE
              </h1>
              <div className="h-1 w-32 mx-auto mt-6 bg-gradient-to-r from-white/70 to-white/40 rounded-full" />
            </div>

            {/* Tagline */}
            <p className="caption-text text-white/85 max-w-3xl mx-auto drop-shadow-md">
              APP DEVELOPER | FULL-STACK DEVELOPER | SYSTEM DESIGN ENTHUSIAST
            </p>

            {/* 🌐 SOCIAL ICONS WITH HOVER LABEL */}
            <div className="flex items-center justify-center gap-8 mt-6 mb-8">

              {/* Social Item */}
              {[
                {
                  label: "GitHub",
                  icon: Github,
                  link: "https://github.com/bhaveshdesale",
                },
                {
                  label: "LinkedIn",
                  icon: Linkedin,
                  link: "https://www.linkedin.com/in/bhavesh-desale-5823b7257/",
                },
                {
                  label: "Discord",
                  icon: MessageCircle,
                  link: "https://discord.com",
                },
                {
                  label: "LeetCode",
                  icon: Code2,
                  link: "https://leetcode.com/u/bhaveshdesale/",
                },
                {
                  label: "Instagram",
                  icon: Instagram,
                  link: "https://www.instagram.com/bhavesh_desale_17/?hl=en",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex flex-col items-center"
                  >
                    {/* Icon */}
                    <Icon className="w-7 h-7 text-white/80 group-hover:text-white transition-all duration-200 group-hover:scale-110" />

                    {/* Tooltip */}
                    <span
                      className="
                        absolute -bottom-8
                        px-2 py-1
                        text-[10px] font-pixel tracking-wide
                        bg-black/80 text-white
                        border border-white/30
                        rounded-none
                        opacity-0
                        group-hover:opacity-100
                        group-hover:translate-y-1
                        transition-all duration-200
                        pointer-events-none
                      "
                    >
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* EXPLORE Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                size="lg"
                onClick={onExplore}
                data-testid="button-explore-portfolio"
                className="
                  font-pixel text-xs
                  hover-elevate active-elevate-2
                  backdrop-blur-md bg-white/20
                  hover:bg-white/30
                  text-white
                  border border-white/40
                "
              >
                EXPLORE
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
