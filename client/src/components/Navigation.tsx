// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { useState, useEffect } from "react";

// interface NavigationProps {
//   onNavigate: (section: string) => void;
// }

// export function Navigation({ onNavigate }: NavigationProps) {
//   const [activeSection, setActiveSection] = useState("home");
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       // Detect which section is currently in view
//       const sections = ["home", "about", "skills", "internship", "projects", "interview-prep", "anime-fans", "contact"];
      
//       for (const sectionId of sections) {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           // Check if section is in view (within top 150px of viewport)
//           if (rect.top <= 150 && rect.bottom >= 0) {
//             setActiveSection(sectionId);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "internship", label: "Internship" },
//     { id: "projects", label: "Projects" },
//     // { id: "interview-prep", label: "Interview Prep" },
//     // { id: "anime-fans", label: "Anime" },
//     { id: "contact", label: "Contact" },
//   ];

//   const handleClick = (id: string) => {
//     setActiveSection(id);
//     onNavigate(id);
//     setMobileMenuOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
//       }`}
//       data-testid="navigation-bar"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="font-gothic text-xl md:text-2xl text-foreground">
//             Bhavesh Note
//           </div>
          
//           <div className="hidden md:flex items-center gap-1">
//             {navItems.map((item) => (
//               <Button
//                 key={item.id}
//                 variant="ghost"
//                 onClick={() => handleClick(item.id)}
//                 data-testid={`link-nav-${item.id}`}
//                 className={`relative font-anime hover-elevate active-elevate-2 ${
//                   activeSection === item.id ? "text-primary" : ""
//                 }`}
//               >
//                 {item.label}
//                 {activeSection === item.id && (
//                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary animate-glow-pulse" />
//                 )}
//               </Button>
//             ))}
//           </div>

//           <div className="flex items-center gap-2">
//             <Button
//               size="icon"
//               variant="ghost"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden hover-elevate active-elevate-2"
//               data-testid="button-mobile-menu-toggle"
//             >
//               {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in-up">
//             {navItems.map((item) => (
//               <Button
//                 key={item.id}
//                 variant="ghost"
//                 onClick={() => handleClick(item.id)}
//                 data-testid={`link-mobile-nav-${item.id}`}
//                 className={`w-full justify-start font-anime hover-elevate active-elevate-2 ${
//                   activeSection === item.id ? "text-primary bg-primary/10" : ""
//                 }`}
//               >
//                 {item.label}
//               </Button>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "internship", "projects", "contact"];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 0) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "internship", label: "Internship" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = (id: string) => {
    setActiveSection(id);
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">

          {/* LOGO */}
          <div className="font-gothic text-xl md:text-2xl text-foreground whitespace-nowrap">
           BHAVESH_DEV

          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2 flex-wrap justify-center">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleClick(item.id)}
                className={`relative font-anime ${
                  activeSection === item.id ? "text-primary" : ""
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary" />
                )}
              </Button>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">

            {/* DOWNLOAD RESUME */}
            <a
              href="/resume/Bhavesh_Desale_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="hidden md:flex items-center gap-2 font-pixel text-xs bg-white/20 hover:bg-white/30 border border-white/40"
              >
                <Download className="w-4 h-4" />
                 RESUME
              </Button>
            </a>

            {/* MOBILE MENU */}
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleClick(item.id)}
                className={`w-full justify-start ${
                  activeSection === item.id ? "text-primary bg-primary/10" : ""
                }`}
              >
                {item.label}
              </Button>
            ))}

            {/* MOBILE RESUME BUTTON */}
            <a
              href="/resume/Bhavesh_Desale_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full mt-2 font-pixel text-xs">
                DOWNLOAD RESUME
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
// /resume/Bhavesh_Desale_Resume.pdf

