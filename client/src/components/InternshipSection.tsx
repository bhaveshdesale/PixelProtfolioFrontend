// import { useState, useRef } from "react";
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
// import { InternshipModal } from "./InternshipModal";
// import experienceVideo from "@assets/8th_1764056069166.mp4";
// import { useVideoLoader } from "@/hooks/useVideoLoader";
// import AkLogo from "@/assets/icons/AkLogoBlack.png";
// // import CelebalLogo from "@/assets/icons/Celebal.png";
// // import JournalLogo from "@/assets/icons/Journal.png";


// interface InternshipDetails {
//   id: string;
//   company: string;
//   role: string;
//   duration: string;
//   description: string;
//   achievements: string[];
//   skills: string[];
//   icon: string;
// }

// const internships: InternshipDetails[] = [
//   {
//     id: "akatsuki",
//     company: "Akatsuki Coding Club",
//     role: "Co-Head",
//     duration: "Oct 2023 - Present",
//     description:
//       "Contributing as a Co-Head and core technical member of the Akatsuki Coding Club. Mentoring junior developers, conducting workshops, and building internal tools to improve the learning experience for students.",
//     achievements: [
//       "Mentored 50+ junior developers in web development and programming",
//       "Organized hands-on workshops on JavaScript, Node.js, and MongoDB",
//       "Helped design the technical curriculum for student learning tracks",
//       "Supported the development of internal club tools and portals"
//     ],
//     skills: [
//       "Development",
//       "Public Speaking",
//       "Leadership",
//       "Mentoring",
//       "Problem Solving",
//       "Team Collaboration"
//     ],
//     icon: AkLogo,  // <-- FIXED
//   },

//   {
//     id: "celebal",
//     company: "Celebal Technologies",
//     role: "App Modernization Intern",
//     duration: "April 2025 - July 2025",
//     description:
//       "Worked on app modernization by upgrading outdated legacy Android applications into modern, efficient, and scalable versions using cutting-edge technologies and best practices.",
//     achievements: [
//       "Converted old and buggy Android codebases into modern Jetpack Compose applications",
//       "Refactored legacy UI and architecture into MVVM + Compose structure",
//       "Improved app stability, performance, and code readability",
//       "Collaborated with senior developers on modernization strategies"
//     ],
//     skills: [
//       "Android",
//       "Kotlin",
//       "Jetpack Compose",
//       "MVVM Architecture",
//       "Clean Code Practices",
//       "App Modernization",
//       "Material Design"
//     ],
//     icon: AkLogo,  // <-- FIXED
//   },

//   {
//     id: "journalportal",
//     company: "College Journal Portal",
//     role: "Software Developer Intern",
//     duration: "Sept 2025 - Nov 2025",
//     description:
//       "Developed and maintained a research paper publication portal for college students and professors. Improved user experience and added features for smoother submission and review workflows.",
//     achievements: [
//       "Built and enhanced features for research paper submission and reviewing",
//       "Improved UI/UX flow for students and faculty members",
//       "Integrated backend APIs and optimized data handling",
//       "Collaborated with the team to deploy and maintain the portal"
//     ],
//     skills: [
//       "React",
//       "JavaScript",
//       "Node.js",
//       "MongoDB",
//       "REST APIs",
//       "UI Development",
//       "Full-Stack Development"
//     ],
//     icon: AkLogo,  // <-- FIXED
//   }
// ];


// export function InternshipSection() {
//   const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
//   const [selectedInternship, setSelectedInternship] = useState<InternshipDetails | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const videoRef3 = useRef<HTMLVideoElement>(null);
//   useVideoLoader("internship", videoRef3);

//   const handleCardClick = (internship: InternshipDetails) => {
//     setSelectedInternship(internship);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => setSelectedInternship(null), 300);
//   };

//   return (
//     <section
//       ref={ref}
//       id="internship"
//       className="relative py-32 px-6 overflow-hidden"
//       data-testid="section-internship"
//     >
//       {/* Video background */}
//       <div className="absolute inset-0 w-full h-full">
//         <video
//           ref={videoRef3}
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           controls={false}
//           className="absolute inset-0 w-full h-full object-cover pixel-video smooth-video opacity-50"
//           style={{ 
//             pointerEvents: "none",
//             willChange: "auto",
//             WebkitAcceleratedCompositing: "true"
//           }}
//         >
//           <source src={experienceVideo} type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/65" />
//       </div>

//       {/* Content */}
//       {isVisible && (
//         <div className="max-w-7xl mx-auto relative z-10">
//           {/* Section header */}
//           <div className="text-center mb-20 animate-section-load">
//             <div className="flex items-center justify-center gap-4 mb-4">
//               <div className="h-1 w-12 bg-gradient-to-r from-white/70 to-white/30" />
//               <h2 className="font-pixel text-sm text-white/70 tracking-widest">JOURNEY</h2>
//               <div className="h-1 w-12 bg-gradient-to-l from-white/70 to-white/30" />
//             </div>
//             <h1 className="font-pixel text-4xl md:text-5xl font-bold text-white/95 mb-4 drop-shadow-lg pixel-shadow">
//               MY EXPERIENCE
//             </h1>
//             <p className="text-white/80 max-w-2xl mx-auto font-pixel text-xs drop-shadow-md">
//               HERE'S A TIMELINE OF MY PROFESSIONAL JOURNEY AND KEY ACHIEVEMENTS.
//             </p>
//             <div className="h-1 w-32 mx-auto mt-6 bg-gradient-to-r from-white/70 to-white/20" />
//           </div>

//           {/* Vertical Timeline Journey */}
//           <div className="relative">
//             {/* Central Timeline Line */}
//             <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-white/40 via-white/20 to-white/40 hidden md:block" />

//             <div className="space-y-12">
//               {internships.map((internship, index) => (
//                 <div
//                   key={internship.id}
//                   className="animate-fade-in-up group cursor-pointer"
//                   style={{ animationDelay: `${index * 0.15}s` }}
//                   onClick={() => handleCardClick(internship)}
//                   data-testid={`card-internship-${index}`}
//                 >
//                   {/* Desktop alternating layout */}
//                   <div className="md:flex hidden">
//                     {index % 2 === 0 ? (
//                       <>
//                         {/* Left side card */}
//                         <div className="w-1/2 pr-16">
//                           <div className="relative">
//                             {/* Card glow */}
//                             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blur-2xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
//                             {/* Card */}
//                             <div className="relative p-7 backdrop-blur-md bg-white/15 border-2 border-white/30 rounded-lg hover-elevate transition-all duration-300">
//                               <div className="flex items-start gap-4 mb-5">
//                                 <div className="text-4xl p-3 backdrop-blur-sm bg-white/10 rounded-md border border-white/20 flex-shrink-0">
//                                   {internship.icon}
//                                 </div>
//                                 <div className="flex-1 min-w-0">
//                                   <h3 className="font-pixel text-sm font-bold text-white/95 drop-shadow-md mb-1">
//                                     {internship.company}
//                                   </h3>
//                                   <p className="font-pixel text-xs text-white/75 mb-1">
//                                     {internship.role}
//                                   </p>
//                                   <p className="font-pixel text-xs text-white/60">
//                                     {internship.duration}
//                                   </p>
//                                 </div>
//                               </div>

//                               <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent mb-4" />

//                               <p className="text-white/80 text-sm leading-relaxed mb-4 drop-shadow-sm">
//                                 {internship.description}
//                               </p>

//                               <div className="flex flex-wrap gap-2">
//                                 {internship.skills.slice(0, 3).map((skill, i) => (
//                                   <span
//                                     key={i}
//                                     className="px-3 py-1 backdrop-blur-sm bg-white/10 border border-white/25 rounded-full font-pixel text-xs text-white/85"
//                                   >
//                                     {skill}
//                                   </span>
//                                 ))}
//                                 {internship.skills.length > 3 && (
//                                   <span className="px-3 py-1 backdrop-blur-sm bg-white/15 border border-white/30 rounded-full font-pixel text-xs text-white/90 font-bold">
//                                     +{internship.skills.length - 3}
//                                   </span>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Timeline dot */}
//                         <div className="w-8 flex justify-center pt-7">
//                           <div className="relative w-5 h-5">
//                             <div className="absolute inset-0 bg-white/80 rounded-full border-2 border-white/40 group-hover:scale-125 transition-transform duration-300" />
//                           </div>
//                         </div>

//                         {/* Right spacer */}
//                         <div className="w-1/2" />
//                       </>
//                     ) : (
//                       <>
//                         {/* Left spacer */}
//                         <div className="w-1/2" />

//                         {/* Timeline dot */}
//                         <div className="w-8 flex justify-center pt-7">
//                           <div className="relative w-5 h-5">
//                             <div className="absolute inset-0 bg-white/80 rounded-full border-2 border-white/40 group-hover:scale-125 transition-transform duration-300" />
//                           </div>
//                         </div>

//                         {/* Right side card */}
//                         <div className="w-1/2 pl-16">
//                           <div className="relative">
//                             {/* Card glow */}
//                             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blur-2xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
//                             {/* Card */}
//                             <div className="relative p-7 backdrop-blur-md bg-white/15 border-2 border-white/30 rounded-lg hover-elevate transition-all duration-300">
//                               <div className="flex items-start gap-4 mb-5">
//                                 <div className="text-4xl p-3 backdrop-blur-sm bg-white/10 rounded-md border border-white/20 flex-shrink-0">
//                                   {internship.icon}
//                                 </div>
//                                 <div className="flex-1 min-w-0">
//                                   <h3 className="font-pixel text-sm font-bold text-white/95 drop-shadow-md mb-1">
//                                     {internship.company}
//                                   </h3>
//                                   <p className="font-pixel text-xs text-white/75 mb-1">
//                                     {internship.role}
//                                   </p>
//                                   <p className="font-pixel text-xs text-white/60">
//                                     {internship.duration}
//                                   </p>
//                                 </div>
//                               </div>

//                               <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent mb-4" />

//                               <p className="text-white/80 text-sm leading-relaxed mb-4 drop-shadow-sm">
//                                 {internship.description}
//                               </p>

//                               <div className="flex flex-wrap gap-2">
//                                 {internship.skills.slice(0, 3).map((skill, i) => (
//                                   <span
//                                     key={i}
//                                     className="px-3 py-1 backdrop-blur-sm bg-white/10 border border-white/25 rounded-full font-pixel text-xs text-white/85"
//                                   >
//                                     {skill}
//                                   </span>
//                                 ))}
//                                 {internship.skills.length > 3 && (
//                                   <span className="px-3 py-1 backdrop-blur-sm bg-white/15 border border-white/30 rounded-full font-pixel text-xs text-white/90 font-bold">
//                                     +{internship.skills.length - 3}
//                                   </span>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </>
//                     )}
//                   </div>

//                   {/* Mobile single column */}
//                   <div className="md:hidden">
//                     <div className="relative">
//                       {/* Card glow */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blur-2xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
//                       {/* Card */}
//                       <div className="relative p-6 backdrop-blur-md bg-white/15 border-2 border-white/30 rounded-lg hover-elevate transition-all duration-300">
//                         <div className="flex items-start gap-3 mb-4">
//                           <div className="text-3xl p-2 backdrop-blur-sm bg-white/10 rounded-md border border-white/20 flex-shrink-0">
//                             {internship.icon}
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <h3 className="font-pixel text-sm font-bold text-white/95 drop-shadow-md mb-1">
//                               {internship.company}
//                             </h3>
//                             <p className="font-pixel text-xs text-white/75 mb-1">
//                               {internship.role}
//                             </p>
//                             <p className="font-pixel text-xs text-white/60">
//                               {internship.duration}
//                             </p>
//                           </div>
//                         </div>

//                         <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent mb-4" />

//                         <p className="text-white/80 text-sm leading-relaxed mb-4 drop-shadow-sm">
//                           {internship.description}
//                         </p>

//                         <div className="flex flex-wrap gap-2">
//                           {internship.skills.slice(0, 3).map((skill, i) => (
//                             <span
//                               key={i}
//                               className="px-3 py-1 backdrop-blur-sm bg-white/10 border border-white/25 rounded-full font-pixel text-xs text-white/85"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                           {internship.skills.length > 3 && (
//                             <span className="px-3 py-1 backdrop-blur-sm bg-white/15 border border-white/30 rounded-full font-pixel text-xs text-white/90 font-bold">
//                               +{internship.skills.length - 3}
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal */}
//       <InternshipModal
//         isOpen={isModalOpen}
//         internship={selectedInternship}
//         onClose={handleCloseModal}
//       />
//     </section>
//   );
// }
import { useState, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { InternshipModal } from "./InternshipModal";
import experienceVideo from "@assets/8th_1764056069166.mp4";
import { useVideoLoader } from "@/hooks/useVideoLoader";

interface InternshipDetails {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
  icon: string; // image path from public folder
}

const internships: InternshipDetails[] = [
  {
    id: "akatsuki",
    company: "Akatsuki Coding Club",
    role: "Co-Head",
    duration: "Oct 2023 - Present",
    description:
      "Leading as a Co-Head and core technical member of Akatsuki Coding Club. Managing technical events, mentoring students, and building internal tools that improve learning.",
    achievements: [
      "Mentored 50+ junior developers in development and programming",
      "Organized workshops on JavaScript, Node.js, React and Android",
      "Helped create and structure the club's technical curriculum",
      "Contributed to internal tool development and automation"
    ],
    skills: [
      "Development",
      "Leadership",
      "Public Speaking",
      "Mentoring",
      "Problem Solving",
      "Team Collaboration"
    ],
    icon: "/icons/akatsuki6.png",  // MUST be inside public/icons/
  },

  {
    id: "celebal",
    company: "Celebal Technologies",
    role: "App Modernization Intern",
    duration: "Apr 2025 - July 2025",
    description:
      "Worked on modernizing outdated Android applications by converting legacy UI and buggy codebases into modern Jetpack Compose architecture. Improved performance, readability, and long-term maintainability.",
    achievements: [
      "Migrated legacy XML-based UI to Jetpack Compose",
      "Refactored the entire MVVM architecture for cleaner structure",
      "Optimized performance and fixed major stability issues",
      "Collaborated with senior developers for modernization strategies"
    ],
    skills: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "MVVM Architecture",
      "Material Design",
      "Clean Code",
      "App Modernization"
    ],
    icon: "/icons/celebaltechnologies_logo.png",
  },

  {
    id: "journalportal",
    company: "College Journal Portal",
    role: "Software Developer Intern",
    duration: "Sept 2025 - Nov 2025",
    description:
      "Developed and improved a research publication portal used by students and faculty. Worked on UI/UX improvements, backend API integrations, and overall platform performance.",
    achievements: [
      "Developed new submission and review workflow screens",
      "Improved UI/UX for student and faculty interactions",
      "Integrated backend APIs and optimized data fetching",
      "Assisted with deployment and bug fixes"
    ],
    skills: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "UI Development",
      "Full-Stack Development"
    ],
    icon: "/icons/ijfes_logo.png",
  }
];


export function InternshipSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [selectedInternship, setSelectedInternship] = useState<InternshipDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  useVideoLoader("internship", videoRef3);

  const handleCardClick = (internship: InternshipDetails) => {
    setSelectedInternship(internship);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedInternship(null), 300);
  };

  return (
    <section
      ref={ref}
      id="internship"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef3}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          className="absolute inset-0 w-full h-full object-cover pixel-video smooth-video opacity-50"
          style={{ pointerEvents: "none" }}
        >
          <source src={experienceVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/65" />
      </div>

      {/* Main Content */}
      {isVisible && (
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-20 animate-section-load">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-white/70 to-white/30" />
              <h2 className="font-pixel text-sm text-white/70 tracking-widest">
                JOURNEY
              </h2>
              <div className="h-1 w-12 bg-gradient-to-l from-white/70 to-white/30" />
            </div>

            <h1 className="font-pixel text-4xl md:text-5xl font-bold text-white/95 mb-4 pixel-shadow">
              MY EXPERIENCE
            </h1>

            <p className="text-white/80 max-w-2xl mx-auto font-pixel text-xs drop-shadow-md">
              HERE'S A TIMELINE OF MY PROFESSIONAL JOURNEY AND KEY ACHIEVEMENTS.
            </p>

            <div className="h-1 w-32 mx-auto mt-6 bg-gradient-to-r from-white/70 to-white/20" />
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-white/40 via-white/20 to-white/40 hidden md:block" />

            <div className="space-y-12">
              {internships.map((internship, index) => (
                <div
                  key={internship.id}
                  className="animate-fade-in-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onClick={() => handleCardClick(internship)}
                >

                  {/* DESKTOP layout - alternating */}
                  <div className="md:flex hidden">
                    {index % 2 === 0 ? (
                      <>
                        {/* LEFT card */}
                        <div className="w-1/2 pr-16">
                          <InternshipCard internship={internship} />
                        </div>

                        {/* timeline dot */}
                        <TimelineDot />

                        {/* spacer */}
                        <div className="w-1/2" />
                      </>
                    ) : (
                      <>
                        {/* spacer */}
                        <div className="w-1/2" />

                        {/* timeline dot */}
                        <TimelineDot />

                        {/* RIGHT card */}
                        <div className="w-1/2 pl-16">
                          <InternshipCard internship={internship} />
                        </div>
                      </>
                    )}
                  </div>

                  {/* MOBILE layout */}
                  <div className="md:hidden">
                    <InternshipCard internship={internship} />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      <InternshipModal
        isOpen={isModalOpen}
        internship={selectedInternship}
        onClose={handleCloseModal}
      />
    </section>
  );
}


/* ------------------------- CARD COMPONENT ---------------------------- */

function InternshipCard({ internship }: { internship: InternshipDetails }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blur-2xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-7 backdrop-blur-md bg-white/15 border-2 border-white/30 rounded-lg hover-elevate transition-all duration-300">

        <div className="flex items-start gap-4 mb-5">

          {/* FIXED ICON IMAGE */}
          <img
            src={internship.icon}
            alt="company icon"
            className="w-14 h-14 object-contain p-2 rounded-md backdrop-blur-sm bg-white/10 border border-white/20"
          />

          <div className="flex-1 min-w-0">
            <h3 className="font-pixel text-sm font-bold text-white/95 mb-1 drop-shadow-md">
              {internship.company}
            </h3>
            <p className="font-pixel text-xs text-white/75 mb-1">{internship.role}</p>
            <p className="font-pixel text-xs text-white/60">{internship.duration}</p>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent mb-4" />

        <p className="text-white/80 text-sm leading-relaxed mb-4 drop-shadow-sm">
          {internship.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {internship.skills.slice(0, 3).map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 backdrop-blur-sm bg-white/10 border border-white/25 rounded-full font-pixel text-xs text-white/85"
            >
              {skill}
            </span>
          ))}
          {internship.skills.length > 3 && (
            <span className="px-3 py-1 backdrop-blur-sm bg-white/15 border border-white/30 rounded-full font-pixel text-xs text-white/90 font-bold">
              +{internship.skills.length - 3}
            </span>
          )}
        </div>

      </div>
    </div>
  );
}


/* ------------------------- TIMELINE DOT ---------------------------- */

function TimelineDot() {
  return (
    <div className="w-8 flex justify-center pt-7">
      <div className="relative w-5 h-5">
        <div className="absolute inset-0 bg-white/80 rounded-full border-2 border-white/40 group-hover:scale-125 transition-transform duration-300" />
      </div>
    </div>
  );
}
