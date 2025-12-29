import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

export function FloatingThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isGlowing, setIsGlowing] = useState(false);

  const handleClick = () => {
    setIsGlowing(true);
    toggleTheme();
    setTimeout(() => setIsGlowing(false), 600);
  };

  return (
    <button
      onClick={handleClick}
      data-testid="button-floating-theme-toggle"
      className={`fixed top-8 right-8 z-40 p-4 rounded-full transition-all duration-300 ${
        isGlowing ? "animate-theme-glow" : ""
      } ${
        theme === "dark"
          ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-black shadow-lg"
          : "bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg"
      } hover:scale-110 active:scale-95`}
      aria-label="Toggle theme"
    >
      <div className="relative">
        {theme === "dark" ? (
          <Moon className="h-6 w-6" />
        ) : (
          <Sun className="h-6 w-6" />
        )}
      </div>
    </button>
  );
}
