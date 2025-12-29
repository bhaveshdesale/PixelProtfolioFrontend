// import { useRef, useEffect } from "react";
// import gsap from "gsap";

// interface ProjectCard3DProps {
//   title: string;
//   description: string;
//   image?: string;
//   tags: string[];
//   link?: string;
//   index: number;
// }

// export function ProjectCard3D({
//   title,
//   description,
//   image,
//   tags,
//   link,
//   index,
// }: ProjectCard3DProps) {
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const card = cardRef.current;
//     if (!card) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       const rect = card.getBoundingClientRect();
//       const x = e.clientX - rect.left - rect.width / 2;
//       const y = e.clientY - rect.top - rect.height / 2;

//       const rotateX = (y / rect.height) * 5;
//       const rotateY = (x / rect.width) * -5;

//       gsap.to(card, {
//         rotationX: rotateX,
//         rotationY: rotateY,
//         duration: 0.3,
//         ease: "power2.out",
//         overwrite: "auto",
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(card, {
//         rotationX: 0,
//         rotationY: 0,
//         duration: 0.6,
//         ease: "elastic.out(1, 0.3)",
//         overwrite: "auto",
//       });
//     };

//     card.addEventListener("mousemove", handleMouseMove);
//     card.addEventListener("mouseleave", handleMouseLeave);

//     // Fade-in animation on load
//     gsap.fromTo(
//       card,
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         delay: index * 0.15,
//         ease: "power2.out",
//       }
//     );

//     return () => {
//       card.removeEventListener("mousemove", handleMouseMove);
//       card.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, [index]);

//   return (
//     <div
//       ref={cardRef}
//       className="relative h-96 rounded-lg overflow-hidden group cursor-pointer"
//       style={{
//         transformStyle: "preserve-3d",
//       }}
//     >
//       {/* Pixel corner decorations */}
//       <div className="absolute top-2 left-2 w-4 h-4 border-2 border-purple-500/50 rounded-sm z-10" />
//       <div className="absolute top-2 right-2 w-4 h-4 border-2 border-purple-500/50 rounded-sm z-10" />
//       <div className="absolute bottom-2 left-2 w-4 h-4 border-2 border-purple-500/50 rounded-sm z-10" />
//       <div className="absolute bottom-2 right-2 w-4 h-4 border-2 border-purple-500/50 rounded-sm z-10" />

//       {/* Background with gradient */}
//       <div
//         className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-blue-900/40 border border-purple-500/30"
//         style={{
//           transformStyle: "preserve-3d",
//           transform: "translateZ(20px)",
//         }}
//       />

//       {/* Image */}
//       {image && (
//         <img
//           src={image}
//           alt={title}
//           className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
//         />
//       )}

//       {/* Content */}
//       <div className="relative h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
//         <h3 className="text-xl font-bold text-white mb-2 font-pixel">{title}</h3>
//         <p className="text-sm text-purple-200 mb-4 line-clamp-2">{description}</p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {tags.map((tag, i) => (
//             <span
//               key={i}
//               className="text-xs px-2 py-1 bg-purple-500/40 text-purple-100 rounded border border-purple-500/50 backdrop-blur-sm"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Link */}
//         {link && (
//           <a
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-purple-300 hover:text-purple-100 text-sm font-semibold transition-colors"
//             data-testid="link-project"
//           >
//             View Project →
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }

// import { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import { ExternalLink, Github, X } from "lucide-react";

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   image?: string;
//   tags: string[];
//   liveLink?: string;
//   sourceCode?: string;
//   index: number;
// }

// export function ProjectCard({
//   title,
//   description,
//   image,
//   tags,
//   liveLink,
//   sourceCode,
//   index,
// }: ProjectCardProps) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Square dimensions
//   const SQUARE_SIZE_PX = 350; // 350px x 350px square

//   useEffect(() => {
//     const card = cardRef.current;
//     if (!card) return;

//     // Only apply 3D effect when not expanded
//     if (!isExpanded) {
//       const handleMouseMove = (e: MouseEvent) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left - rect.width / 2;
//         const y = e.clientY - rect.top - rect.height / 2;

//         const rotateX = (y / rect.height) * 5;
//         const rotateY = (x / rect.width) * -5;

//         gsap.to(card, {
//           rotationX: rotateX,
//           rotationY: rotateY,
//           duration: 0.3,
//           ease: "power2.out",
//           overwrite: "auto",
//         });
//       };

//       const handleMouseLeave = () => {
//         gsap.to(card, {
//           rotationX: 0,
//           rotationY: 0,
//           duration: 0.6,
//           ease: "elastic.out(1, 0.3)",
//           overwrite: "auto",
//         });
//       };

//       card.addEventListener("mousemove", handleMouseMove);
//       card.addEventListener("mouseleave", handleMouseLeave);

//       return () => {
//         card.removeEventListener("mousemove", handleMouseMove);
//         card.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     }
//   }, [isExpanded]);

//   useEffect(() => {
//     const card = cardRef.current;
//     if (!card) return;

//     // Fade-in animation on load
//     gsap.fromTo(
//       card,
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         delay: index * 0.15,
//         ease: "power2.out",
//       }
//     );
//   }, [index]);

//   const handleCardClick = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleCloseDetails = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setIsExpanded(false);
//   };

//   const handleExternalClick = (e: React.MouseEvent, url: string) => {
//     e.stopPropagation();
//     window.open(url, '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <div
//       ref={cardRef}
//       className="relative cursor-pointer"
//       onClick={handleCardClick}
//       style={{
//         transformStyle: "preserve-3d",
//         perspective: "1000px",
//         width: `${SQUARE_SIZE_PX}px`,
//         height: `${SQUARE_SIZE_PX}px`,
//         aspectRatio: "1/1",
//       }}
//     >
//       {/* Main Card Container - Square */}
//       <div 
//         className="relative h-full w-full rounded-xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-gray-900/90 to-gray-800/90"
//         style={{
//           boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
//         }}
//       >
//         {/* Default View (Collapsed) - Square Layout */}
//         {!isExpanded && (
//           <div className="h-full flex flex-col">
//             {/* Top 75% - Image Container (Fills 75% of square) */}
//             <div 
//               className="relative overflow-hidden bg-black/90"
//               style={{ height: "75%" }}
//             >
//               {image ? (
//                 <div className="w-full h-full p-3">
//                   <img
//                     src={image}
//                     alt={title}
//                     className="w-full h-full object-cover object-center rounded-lg"
//                   />
//                 </div>
//               ) : (
//                 <div className="w-full h-full bg-gradient-to-br from-purple-900/80 to-blue-900/80 flex items-center justify-center">
//                   <div className="text-white text-5xl">📁</div>
//                 </div>
//               )}
              
//               {/* Gradient overlay at bottom of image */}
//               <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/40 to-transparent" />
//             </div>

//             {/* Bottom 25% - Project Name (25% of square) */}
//             <div 
//               className="flex flex-col items-center justify-center bg-gradient-to-t from-black/50 to-black/30 border-t-2 border-white/20"
//               style={{ height: "25%" }}
//             >
//               <div className="text-center px-4">
//                 <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
//                   {title}
//                 </h3>
//                 <p className="text-xs text-white/70 font-medium">
//                   Click to view details
//                 </p>
//               </div>
//             </div>

//             {/* Corner accents */}
//             <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/40 rounded-tl" />
//             <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/40 rounded-tr" />
//             <div className="absolute bottom-1/4 left-3 w-3 h-3 border-b-2 border-l-2 border-white/40 rounded-bl" />
//             <div className="absolute bottom-1/4 right-3 w-3 h-3 border-b-2 border-r-2 border-white/40 rounded-br" />
//           </div>
//         )}

//         {/* Expanded View (Details) - Full Square Modal */}
//         {isExpanded && (
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-5 overflow-y-auto">
//             {/* Header with Close button */}
//             <div className="flex items-start justify-between mb-5">
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-1">
//                   {title}
//                 </h3>
//                 <p className="text-xs text-white/60">PROJECT DETAILS</p>
//               </div>
              
//               {/* Close button */}
//               <button
//                 onClick={handleCloseDetails}
//                 className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
//                 aria-label="Close details"
//               >
//                 <X className="w-5 h-5 text-white" />
//               </button>
//             </div>

//             {/* Project Image in Expanded View */}
//             {image && (
//               <div className="mb-5 rounded-lg overflow-hidden border-2 border-white/20">
//                 <img
//                   src={image}
//                   alt={title}
//                   className="w-full h-40 object-cover object-center"
//                 />
//               </div>
//             )}

//             {/* Content Area */}
//             <div className="space-y-5">
//               {/* Divider */}
//               <div className="h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent" />

//               {/* Description */}
//               <div>
//                 <h4 className="text-sm font-semibold text-white/90 mb-2">
//                   DESCRIPTION
//                 </h4>
//                 <p className="text-sm text-white/80 leading-relaxed">
//                   {description}
//                 </p>
//               </div>

//               {/* Divider */}
//               <div className="h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent" />

//               {/* Tech Stack */}
//               <div>
//                 <h4 className="text-sm font-semibold text-white/90 mb-3">
//                   TECH STACK
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1.5 text-xs font-medium bg-white/20 border border-white/30 text-white/90 rounded-md"
//                       style={{
//                         boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.3)",
//                       }}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Divider */}
//               <div className="h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent" />

//               {/* Action Buttons */}
//               <div className="pt-2">
//                 <div className="flex flex-col sm:flex-row gap-3">
//                   {liveLink && (
//                     <button
//                       onClick={(e) => handleExternalClick(e, liveLink)}
//                       className="flex-1 px-4 py-3 bg-white/20 hover:bg-white/30 border-2 border-white/40 text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 rounded-lg"
//                       style={{
//                         boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.4)",
//                       }}
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                       <span>VIEW LIVE DEMO</span>
//                     </button>
//                   )}
                  
//                   {sourceCode && (
//                     <button
//                       onClick={(e) => handleExternalClick(e, sourceCode)}
//                       className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 border-2 border-white/25 text-white/80 font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 rounded-lg"
//                       style={{
//                         boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.4)",
//                       }}
//                     >
//                       <Github className="w-4 h-4" />
//                       <span>VIEW SOURCE CODE</span>
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { X, ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveLink?: string;
  sourceCode?: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveLink,
  sourceCode,
  index,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Square dimensions
  const SQUARE_SIZE_PX = 350; // 350px x 350px square

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Only apply 3D effect when not expanded
    if (!isExpanded) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (y / rect.height) * 5;
        const rotateY = (x / rect.width) * -5;

        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)",
          overwrite: "auto",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [isExpanded]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Fade-in animation on load
    gsap.fromTo(
      card,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power2.out",
      }
    );
  }, [index]);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCloseDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  const handleExternalClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  return (
    <>
      {/* Square Card (Collapsed View) */}
      <div
        ref={cardRef}
        className="relative cursor-pointer"
        onClick={handleCardClick}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          width: `${SQUARE_SIZE_PX}px`,
          height: `${SQUARE_SIZE_PX}px`,
          aspectRatio: "1/1",
        }}
      >
        {/* Main Card Container - Square */}
        <div 
          className="relative h-full w-full rounded-xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-gray-900/90 to-gray-800/90"
          style={{
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Top 75% - Image Container (Fills 75% of square) */}
          <div 
            className="relative overflow-hidden bg-black/90"
            style={{ height: "75%" }}
          >
            {image ? (
              <div className="w-full h-full p-3">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-900/80 to-blue-900/80 flex items-center justify-center">
                <div className="text-white text-5xl">📁</div>
              </div>
            )}
            
            {/* Gradient overlay at bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Bottom 25% - Project Name (25% of square) */}
          <div 
            className="flex flex-col items-center justify-center bg-gradient-to-t from-black/50 to-black/30 border-t-2 border-white/20"
            style={{ height: "25%" }}
          >
            <div className="text-center px-4">
              <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
                {title}
              </h3>
              <p className="text-xs text-white/70 font-medium">
                Click to view details
              </p>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/40 rounded-tl" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/40 rounded-tr" />
          <div className="absolute bottom-1/4 left-3 w-3 h-3 border-b-2 border-l-2 border-white/40 rounded-bl" />
          <div className="absolute bottom-1/4 right-3 w-3 h-3 border-b-2 border-r-2 border-white/40 rounded-br" />
        </div>
      </div>

      {/* Project Detail Modal (Your Style) */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleCloseDetails}
          data-testid="project-detail-modal"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleCloseDetails} />

          {/* Modal Content */}
          <div
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in"
            onClick={(e) => e.stopPropagation()}
            style={{
              border: "2px solid rgba(255, 255, 255, 0.4)",
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.2), 6px 6px 0px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-b from-black/90 to-black/70 p-6 border-b-2 border-white/20 flex items-start justify-between">
              <div className="flex items-start gap-4">
                {image && (
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/30">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h2 className="font-pixel text-2xl font-bold text-white/95 drop-shadow-md">
                    {title}
                  </h2>
                  <p className="text-white/60 font-pixel text-xs mt-1">PROJECT DETAILS</p>
                </div>
              </div>
              <button
                onClick={handleCloseDetails}
                className="p-2 hover:bg-white/10 transition-colors rounded-none"
                aria-label="Close modal"
                data-testid="button-close-modal"
              >
                <X className="w-6 h-6 text-white/70" />
              </button>
            </div>

            {/* Content */}
            <div className="bg-black/80 p-6 space-y-6">
              {/* Full Description */}
              <div>
                <h3 className="font-pixel text-sm font-bold text-white/90 mb-3 drop-shadow-md">
                  DESCRIPTION
                </h3>
                <p className="text-white/75 leading-relaxed text-sm">
                  {description}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent" />

              {/* Tech Stack */}
              <div>
                <h3 className="font-pixel text-sm font-bold text-white/90 mb-3 drop-shadow-md">
                  TECH STACK
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-white/15 border border-white/30 text-white/85 font-pixel text-xs font-bold rounded-none"
                      style={{
                        boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent" />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-modal-live"
                    className="flex-1 px-4 py-3 bg-white/20 border-2 border-white/40 text-white/95 font-pixel text-sm font-bold hover:bg-white/30 transition-all duration-200 flex items-center justify-center gap-2 rounded-none"
                    style={{
                      boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>VIEW LIVE DEMO</span>
                  </a>
                )}
                {sourceCode && (
                  <a
                    href={sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-modal-source"
                    className="flex-1 px-4 py-3 bg-white/10 border-2 border-white/25 text-white/80 font-pixel text-sm font-bold hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2 rounded-none"
                    style={{
                      boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW SOURCE CODE</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}