// import { useState, useRef } from "react";
// import { useVideoLoader } from "@/hooks/useVideoLoader";
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
// import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
// import { ProjectDetailModal } from "@/components/ProjectDetailModal";
// import fifthVideo from "@assets/5th_1764001382378.mp4";

// interface Project {
//   title: string;
//   description: string;
//   tags: string[];
//   liveLink: string;
//   sourceCode: string;
//   icon?: string;
// }

// export function ProjectsSection() {
//   const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [canScrollPrev, setCanScrollPrev] = useState(false);
//   const [canScrollNext, setCanScrollNext] = useState(true);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const videoRef4 = useRef<HTMLVideoElement>(null);
//   useVideoLoader("projects", videoRef4);

//   const projects: Project[] = [
//     {
//       title: "Task Management Pro",
//       description: "A comprehensive Android task management application with cloud sync, notifications, and collaborative features for productivity.",
//       tags: ["Kotlin", "Jetpack Compose", "Room", "Firebase"],
//       liveLink: "https://play.google.com/store",
//       sourceCode: "https://github.com",
//       icon: "",
//     },
//     {
//       title: "Weather Insights",
//       description: "Beautiful weather app with detailed forecasts, interactive maps, and personalized weather alerts for real-time updates.",
//       tags: ["Android", "Retrofit", "Material Design", "APIs"],
//       liveLink: "https://play.google.com/store",
//       sourceCode: "https://github.com",
//       icon: "🌤️",
//     },
//     {
//       title: "Portfolio Generator",
//       description: "Full-stack web application for creating stunning portfolios with customizable templates and live preview functionality.",
//       tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
//       liveLink: "https://portfolio-gen.demo",
//       sourceCode: "https://github.com",
//       icon: "🎨",
//     },
//     {
//       title: "Fitness Tracker",
//       description: "Track workouts, set goals, and monitor progress with detailed analytics and achievement system for fitness enthusiasts.",
//       tags: ["Kotlin", "MVVM", "Room", "Charts"],
//       liveLink: "https://play.google.com/store",
//       sourceCode: "https://github.com",
//       icon: "💪",
//     },
//     {
//       title: "Chat Application",
//       description: "Real-time messaging platform with end-to-end encryption, user authentication, and seamless cross-device synchronization.",
//       tags: ["React", "Firebase", "WebSocket", "Tailwind"],
//       liveLink: "https://chat-app.demo",
//       sourceCode: "https://github.com",
//       icon: "💬",
//     },
//     {
//       title: "E-Commerce Platform",
//       description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard for sellers.",
//       tags: ["Next.js", "Stripe", "MongoDB", "Redux"],
//       liveLink: "https://ecommerce.demo",
//       sourceCode: "https://github.com",
//       icon: "🛒",
//     },
//   ];

//   const handleScroll = (direction: "left" | "right") => {
//     if (!carouselRef.current) return;
    
//     const scrollAmount = 400;
//     const currentScroll = carouselRef.current.scrollLeft;
//     const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    
//     let newScroll = direction === "left" 
//       ? currentScroll - scrollAmount 
//       : currentScroll + scrollAmount;
    
//     newScroll = Math.max(0, Math.min(newScroll, maxScroll));
//     carouselRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    
//     setCanScrollPrev(newScroll > 0);
//     setCanScrollNext(newScroll < maxScroll);
//   };

//   const handleCarouselScroll = () => {
//     if (!carouselRef.current) return;
//     const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
//     setCanScrollPrev(scrollLeft > 0);
//     setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 10);
//   };

//   return (
//     <section
//       ref={ref}
//       id="projects"
//       className="relative py-32 px-6 overflow-hidden"
//       data-testid="section-projects"
//     >
//       {/* Full-width video background */}
//       <video
//         ref={videoRef4}
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         controls={false}
//         className="absolute inset-0 w-full h-full object-cover pixel-video smooth-video"
//         style={{ 
//           pointerEvents: "none",
//           willChange: "auto",
//           WebkitAcceleratedCompositing: "true"
//         }}
//       >
//         <source src={fifthVideo} type="video/mp4" />
//       </video>

//       {/* Integrated overlay for text readability and card visibility */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/70" />

//       {/* Content */}
//       {isVisible && (
//         <div className="relative z-10 max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-16 animate-fade-in-up">
//             <h2 className="font-pixel text-3xl md:text-4xl font-bold text-white/95 mb-4 drop-shadow-lg pixel-shadow">
//               PROJECTS
//             </h2>
//             <p className="text-white/80 max-w-2xl mx-auto font-pixel text-xs drop-shadow-md">
//               INNOVATIVE SOLUTIONS & CREATIVE IMPLEMENTATIONS SHOWCASING FULL-STACK EXPERTISE
//             </p>
//             <div className="h-1 w-24 mx-auto mt-6 bg-gradient-to-r from-white/70 to-white/20 rounded-full" />
//           </div>

//           {/* Carousel Container */}
//           <div className="relative group">
//             {/* Project Carousel */}
//             <div
//               ref={carouselRef}
//               onScroll={handleCarouselScroll}
//               className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
//               style={{ scrollBehavior: "smooth", msOverflowStyle: "none", scrollbarWidth: "none" }}
//             >
//               {projects.map((project, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-80 animate-fade-in-up cursor-pointer"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                   data-testid={`card-project-${index}`}
//                   onClick={() => {
//                     setSelectedProject(project);
//                     setIsModalOpen(true);
//                   }}
//                 >
//                   {/* Project Card */}
//                   <div className="relative h-full group/card">
//                     {/* Pixel border background - Enhanced visibility */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-white/10 border-2 border-white/50 rounded-none"
//                       style={{
//                         boxShadow: "5px 5px 0px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.3)",
//                       }}
//                     />

//                     {/* Hover glow effect */}
//                     <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
//                       style={{
//                         boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.15)",
//                       }}
//                     />

//                     {/* Content */}
//                     <div className="relative p-6 h-full flex flex-col transform group-hover/card:scale-105 transition-transform duration-300 ease-out">
//                       {/* Icon & Title */}
//                       <div className="mb-4">
//                         {project.icon && <span className="text-3xl block mb-2">{project.icon}</span>}
//                         <h3 className="font-pixel text-sm font-bold text-white/95 drop-shadow-md mb-2 leading-tight">
//                           {project.title}
//                         </h3>
//                       </div>

//                       {/* Divider */}
//                       <div className="h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent mb-3" />

//                       {/* Description */}
//                       <p className="text-white/75 text-xs leading-relaxed mb-4 flex-1 drop-shadow-sm">
//                         {project.description}
//                       </p>

//                       {/* Tech Stack Tags */}
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {project.tags.slice(0, 3).map((tag, i) => (
//                           <span
//                             key={i}
//                             className="px-2.5 py-1 bg-white/20 border border-white/40 text-white/95 font-pixel text-xs rounded-none"
//                             style={{
//                               boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.3)",
//                             }}
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                         {project.tags.length > 3 && (
//                           <span className="px-2.5 py-1 bg-white/25 border border-white/40 text-white font-pixel text-xs rounded-none font-bold">
//                             +{project.tags.length - 3}
//                           </span>
//                         )}
//                       </div>

//                       {/* Click indicator */}
//                       <div className="text-center mt-auto pt-3 border-t border-white/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
//                         <p className="font-pixel text-xs text-white/70">CLICK FOR DETAILS →</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Carousel Controls */}
//             <div className="flex items-center justify-center gap-4 mt-8">
//               <button
//                 onClick={() => handleScroll("left")}
//                 disabled={!canScrollPrev}
//                 data-testid="button-carousel-prev"
//                 className="p-2 bg-white/15 border-2 border-white/30 text-white/80 hover:bg-white/25 hover:text-white/95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 rounded-none"
//                 style={{
//                   boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.3)",
//                 }}
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>

//               {/* Indicator dots */}
//               <div className="flex gap-2">
//                 {[...Array(Math.ceil(projects.length / 2))].map((_, i) => (
//                   <div
//                     key={i}
//                     className="w-2 h-2 bg-white/40 border border-white/60 rounded-full"
//                   />
//                 ))}
//               </div>

//               <button
//                 onClick={() => handleScroll("right")}
//                 disabled={!canScrollNext}
//                 data-testid="button-carousel-next"
//                 className="p-2 bg-white/15 border-2 border-white/30 text-white/80 hover:bg-white/25 hover:text-white/95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 rounded-none"
//                 style={{
//                   boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.3)",
//                 }}
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Mobile info text */}
//             <p className="text-center text-white/50 font-pixel text-xs mt-6 md:hidden">
//               SWIPE OR USE ARROWS TO NAVIGATE
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Project Detail Modal */}
//       <ProjectDetailModal
//         isOpen={isModalOpen}
//         project={selectedProject}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </section>
//   );
// }
import { useState, useRef } from "react";
import { useVideoLoader } from "@/hooks/useVideoLoader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard3D";
import fifthVideo from "@assets/5th_1764001382378.mp4";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  sourceCode?: string;
  image?: string;
  achievement?: string;
}

export function ProjectsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const videoRef4 = useRef<HTMLVideoElement>(null);
  useVideoLoader("projects", videoRef4);

const projects: Project[] = [
  {
    title: "Pixel Anime Portfolio",
    description:
      "A fully animated pixel-themed developer portfolio with GSAP 3D interactions, custom UI, and dynamic sections. Built to reflect personality, creativity, and engineering craftsmanship.",
    tags: ["React", "TypeScript", "GSAP", "Tailwind CSS"],
    liveLink: "https://your-portfolio-demo.com",
    // sourceCode: "https://github.com/bhaveshdesale/PixelProtfolio.git",
    image: "/projects/Portfolio.png",
  },
 {
    title: "IJFS Journal Portal",
    description:
      "A full-stack research paper submission portal for students and professors. Features submission workflows, reviewer dashboards, and seamless API integrations.",
    tags: ["React", "Node.js", "MongoDB", "REST APIs"],
    liveLink: "https://journal-of-interdisciplinary-resear.vercel.app/",
    // sourceCode: "https://github.com/ijfs-portal",
    image:  "/projects/ijfs.png",
  },
  {
    title: "PriorityPro – Task Manager APP",
    description:
      "A smart Android productivity app that prioritizes tasks using custom logic and organizes daily workflow efficiently. Supports reminders, clean UI, Jetpack Compose, and local storage.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Room"],
    liveLink: "https://www.indusappstore.com/apps/productivity/priority-pro/com.plcoding.cleanarchitecturenoteapp/?page=details&id=com.plcoding.cleanarchitecturenoteapp",
    sourceCode: "https://github.com/bhaveshdesale/NotesApp-.git",
    image: "/projects/PriorityPro.png",
  },

 

  {
    title: "EcoChat – Chat App",
    description:
      "Award-winning hackathon project built in 2 days using CometChat APIs. Designed to promote environmental awareness through interactive messaging experiences.",
    tags: ["React", "CometChat", "JavaScript"],
    liveLink: "https://appetize.io/app/b_zxrefzissces2i4vk5i7zt2fue",
    sourceCode: "https://github.com/bhaveshdesale/EcoChatApp.git",
    image: "/projects/ecochat.png",
  },

  {
    title: "SignX – App for Deaf & Visually Impaired Users",
    description:
      "An accessibility-focused communication app that converts sign language gestures into readable or spoken text. Designed to help deaf and visually impaired individuals communicate effortlessly.",
    tags: ["Android", "Machine Learning", "Kotlin", "TensorFlow Lite"],
    liveLink: "https://appetize.io/app/b_n3bfxspfon2vrft7m7j6uz7dzq",
    sourceCode: "https://github.com/bhaveshdesale/SignX.git",
    image: "/projects/Sign.png",
    achievement: "Built for inclusive communication using ML gesture recognition.",
  },
 {
  title: "Blood Donation & Booking App",
  description:
    "A smart blood booking and donation platform that helps users find and request blood in nearby locations instantly. Designed with a mission-driven approach to connect donors, hospitals, and patients efficiently.",
  tags: ["Android", "Kotlin", "Jetpack Compose", "Firebase", "Location Services"],
  liveLink: "https://appetize.io/app/b_4e2ohwkkgxtvn3solrmmx72pwi",
  sourceCode: "https://github.com/bhaveshdesale/Blood-App.git",
  image: "/projects/blood.png",
  achievement: "🏆 Winner at IIT Guwahati Hackathon — Awarded ₹65,000 for innovation"
},
{
    title: "Secure Chat App",
    description:
      "A real-time chat application with end-to-end encryption and device-sync messaging. Built with a strong focus on privacy and modern UX interactions.",
    tags: ["React", "Firebase", "WebSocket", "Tailwind CSS"],
    sourceCode: "https://github.com/bhaveshdesale/ChatApp.git",
    image: "/projects/SecureChatApp.png",
  }

];


  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    
    const scrollAmount = 400;
    const currentScroll = carouselRef.current.scrollLeft;
    const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    
    let newScroll = direction === "left" 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;
    
    newScroll = Math.max(0, Math.min(newScroll, maxScroll));
    carouselRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    
    setCanScrollPrev(newScroll > 0);
    setCanScrollNext(newScroll < maxScroll);
  };

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollPrev(scrollLeft > 0);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 10);
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-32 px-6 overflow-hidden"
      data-testid="section-projects"
    >
      {/* Full-width video background */}
      <video
        ref={videoRef4}
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
          // WebkitAcceleratedCompositing: "true"
        }}
      >
        <source src={fifthVideo} type="video/mp4" />
      </video>

      {/* Integrated overlay for text readability and card visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/70" />

      {/* Content */}
      {isVisible && (
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-pixel text-3xl md:text-4xl font-bold text-white/95 mb-4 drop-shadow-lg pixel-shadow">
              PROJECTS
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto font-pixel text-xs drop-shadow-md">
              INNOVATIVE SOLUTIONS & CREATIVE IMPLEMENTATIONS SHOWCASING FULL-STACK EXPERTISE
            </p>
            <div className="h-1 w-24 mx-auto mt-6 bg-gradient-to-r from-white/70 to-white/20 rounded-full" />
          </div>

          {/* Carousel Container */}
          <div className="relative group">
            {/* Project Carousel - A4 sized cards */}
            <div
              ref={carouselRef}
              onScroll={handleCarouselScroll}
              className="flex gap-8 overflow-x-auto scroll-smooth pb-8 px-6 items-center"
              style={{ 
                scrollBehavior: "smooth", 
                msOverflowStyle: "none", 
                scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch"
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 animate-fade-in-up"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                  }}
                  data-testid={`card-project-${index}`}
                >
                  {/* A4 Sized Project Card */}
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    liveLink={project.liveLink}
                    sourceCode={project.sourceCode}
                    image={project.image}
                    index={index}
                  />
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => handleScroll("left")}
                disabled={!canScrollPrev}
                data-testid="button-carousel-prev"
                className="p-2 bg-white/15 border-2 border-white/30 text-white/80 hover:bg-white/25 hover:text-white/95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 rounded-none"
                style={{
                  boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.3)",
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicator dots */}
              <div className="flex gap-2">
                {[...Array(Math.ceil(projects.length / 2))].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-white/40 border border-white/60 rounded-full"
                  />
                ))}
              </div>

              <button
                onClick={() => handleScroll("right")}
                disabled={!canScrollNext}
                data-testid="button-carousel-next"
                className="p-2 bg-white/15 border-2 border-white/30 text-white/80 hover:bg-white/25 hover:text-white/95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 rounded-none"
                style={{
                  boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.3)",
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile info text */}
            <p className="text-center text-white/50 font-pixel text-xs mt-6 md:hidden">
              SWIPE OR USE ARROWS TO NAVIGATE
            </p>
          </div>
        </div>
      )}
    </section>
  );
}