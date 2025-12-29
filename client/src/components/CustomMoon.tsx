// import { useTheme } from "@/contexts/ThemeContext";

// interface CustomMoonProps {
//   onClick: () => void;
// }

// export function CustomMoon({ onClick }: CustomMoonProps) {
//   const { theme } = useTheme();

//   return (
//     <button
//       onClick={onClick}
//       data-testid="button-hero-custom-moon"
//       className="absolute z-30 transition-opacity duration-300 hover:opacity-100 opacity-90 cursor-pointer"
//       style={{
//         top: "22%",
//         right: "12%",
//         width: "60px",
//         height: "60px",
//         background: "none",
//         border: "none",
//         padding: "0",
//         pointerEvents: "auto",
//       }}
//       aria-label="Toggle theme"
//     >
//       {/* Pixel-art moon SVG - subtle and muted to blend seamlessly with the background */}
//       <svg
//         viewBox="0 0 64 64"
//         width="60"
//         height="60"
//         style={{
//           filter: "none",
//         }}
//       >
//         {/* Pixel-art crescent moon - muted colors that blend into the scene */}
//         {theme === "dark" ? (
//           // Dark mode - subtle brownish moon that blends into the night sky
//           <>
//             {/* Main moon circle */}
//             <circle cx="32" cy="32" r="22" fill="#6B5A47" />
//             {/* Crescent cutout - blends with background */}
//             <circle cx="36" cy="28" r="22" fill="#0a0e27" />
//             {/* Subtle edge details for pixel-art effect */}
//             <rect x="30" y="26" width="2" height="12" fill="#5A4A39" opacity="0.6" />
//             <rect x="32" y="24" width="2" height="16" fill="#7A6A57" opacity="0.4" />
//           </>
//         ) : (
//           // Light mode - muted pale yellow crescent
//           <>
//             {/* Main moon circle */}
//             <circle cx="32" cy="32" r="22" fill="#B8956A" />
//             {/* Crescent cutout - blends with light background */}
//             <circle cx="36" cy="28" r="22" fill="#87CEEB" />
//             {/* Subtle edge details for pixel-art effect */}
//             <rect x="30" y="26" width="2" height="12" fill="#A88660" opacity="0.6" />
//             <rect x="32" y="24" width="2" height="16" fill="#C9A876" opacity="0.4" />
//           </>
//         )}
//       </svg>
//     </button>
//   );
// }
