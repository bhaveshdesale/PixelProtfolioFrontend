// import { useState } from "react";
// import gsap from "gsap";

// interface Skill {
//   name: string;
//   icon: string;
//   level: number;
// }

// interface SkillsTiles3DProps {
//   skills: Skill[];
// }

// export function SkillsTiles3D({ skills }: SkillsTiles3DProps) {
//   const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});

//   const handleTileHover = (index: number, isHover: boolean) => {
//     const element = document.getElementById(`skill-tile-${index}`);
//     if (element) {
//       gsap.to(element, {
//         rotationY: isHover ? 180 : 0,
//         duration: 0.6,
//         ease: "back.out",
//       });
//     }
//   };

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 perspective">
//       {skills.map((skill, index) => (
//         <div
//           key={index}
//           id={`skill-tile-${index}`}
//           className="h-40 relative [transform-style:preserve-3d] transition-transform duration-300 group"
//           onMouseEnter={() => handleTileHover(index, true)}
//           onMouseLeave={() => handleTileHover(index, false)}
//           style={{
//             transformStyle: "preserve-3d",
//           }}
//         >
//           {/* Front */}
//           <div
//             className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/40 rounded-lg flex flex-col items-center justify-center p-4 backdrop-blur-md [backface-visibility:hidden] group-hover:shadow-2xl transition-all duration-300"
//             style={{ backfaceVisibility: "hidden" }}
//           >
//             <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
//             <h3 className="text-sm font-pixel text-white/95 text-center truncate font-bold drop-shadow-md">
//               {skill.name}
//             </h3>
//           </div>

//           {/* Back */}
//           <div
//             className="absolute inset-0 bg-gradient-to-br from-white/25 to-white/15 border-2 border-white/40 rounded-lg flex items-center justify-center p-4 backdrop-blur-md [backface-visibility:hidden] [transform:rotateY(180deg)]"
//             style={{
//               backfaceVisibility: "hidden",
//               transform: "rotateY(180deg)",
//             }}
//           >
//             <div className="text-center w-full">
//               <div className="mb-3">
//                 <p className="text-xs text-white/80 font-pixel mb-2">PROFICIENCY</p>
//                 <div className="w-full bg-white/20 rounded-full h-2 border border-white/30">
//                   <div
//                     className="h-full bg-gradient-to-r from-white/60 to-white/90 rounded-full transition-all duration-500"
//                     style={{ width: `${skill.level}%` }}
//                   />
//                 </div>
//               </div>
//               <p className="text-sm font-pixel text-white/95 font-bold drop-shadow-md">{skill.level}%</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import { useState } from "react";
import gsap from "gsap";

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface SkillsTiles3DProps {
  skills: Skill[];
}

export function SkillsTiles3D({ skills }: SkillsTiles3DProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleHover = (index: number) => {
    setActiveIndex(index);

    gsap.fromTo(
      `#progress-${index}`,
      { strokeDashoffset: 282 },
      {
        strokeDashoffset: 282 - (282 * skills[index].level) / 100,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      `#percent-${index}`,
      { innerText: 0 },
      {
        innerText: skills[index].level,
        duration: 0.8,
        snap: { innerText: 1 },
        ease: "power2.out",
      }
    );
  };

  const handleLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleLeave}
          className="relative h-40 rounded-lg border-2 border-white/30 
          bg-gradient-to-br from-white/15 to-white/5 
          backdrop-blur-md flex items-center justify-center 
          overflow-hidden cursor-pointer group hover-elevate"
        >
          {/* ICON + NAME (DISABLED ON HOVER) */}
          <div
            className={`flex flex-col items-center justify-center transition-all duration-300 ${
              activeIndex === index
                ? "opacity-0 scale-75"
                : "opacity-100 scale-100"
            }`}
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-sm font-pixel text-white/95 font-bold text-center">
              {skill.name}
            </p>
          </div>

          {/* PROGRESS OVERLAY */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-24 h-24">
              {/* Background Circle */}
              <svg
                className="absolute inset-0"
                width="96"
                height="96"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  id={`progress-${index}`}
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="white"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="282"
                  strokeDashoffset="282"
                  strokeLinecap="round"
                />
              </svg>

              {/* Percentage */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  id={`percent-${index}`}
                  className="text-xl font-pixel font-bold text-white drop-shadow-lg"
                >
                  {skill.level}
                </span>
                <span className="text-xs text-white/70 font-pixel">PROF</span>
              </div>
            </div>
          </div>

          {/* PIXEL GLOW */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 border border-white/40 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
