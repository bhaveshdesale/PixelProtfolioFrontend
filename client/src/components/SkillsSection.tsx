import { useState, useRef } from "react";
import { useVideoLoader } from "@/hooks/useVideoLoader";
import { SkillsTiles3D } from "@/components/SkillsTiles3D";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import secondVideo from "@assets/2nd_1764001382371.mp4";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaJava,
  FaAndroid,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiKotlin,
  SiC,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  
} from "react-icons/si";

import { MdDesignServices, MdOutlineSystemUpdate } from "react-icons/md";
import { BsStack } from "react-icons/bs";



export function SkillsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [currentCategory, setCurrentCategory] = useState(0);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  useVideoLoader("skills", videoRef2);


const skillCategories = [
  {
    name: "LANGUAGES",
    skills: [
      { name: "C", icon: <SiC />, level: 92 },
      { name: "Python", icon: <SiJavascript />, level: 88 },
      { name: "Java", icon: <FaJava />, level: 90 },
      { name: "Kotlin", icon: <SiKotlin />, level: 92 },
      { name: "JavaScript", icon: <SiJavascript />, level: 88 },
      { name: "TypeScript", icon: <SiTypescript />, level: 92 },
    ],
  },

  {
    name: "MOBILE",
    skills: [
      { name: "Android", icon: <FaAndroid />, level: 95 },
      { name: "Jetpack Compose", icon: <MdDesignServices />, level: 89 },
      { name: "Firebase", icon: <SiFirebase />, level: 85 },
      { name: "MVVM", icon: <BsStack />, level: 91 },
      { name: "Material Design", icon: <MdDesignServices />, level: 90 },
      { name: "Android Studio", icon: <FaAndroid />, level: 94 },
    ],
  },

  {
    name: "FRONTEND",
    skills: [
      { name: "React", icon: <FaReact />, level: 88 },
      { name: "HTML", icon: <FaHtml5 />, level: 94 },
      { name: "CSS", icon: <FaCss3Alt />, level: 90 },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 90 },
    ],
  },

  {
    name: "BACKEND",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 87 },
      { name: "Express.js", icon: <SiExpress />, level: 89 },
      { name: "MongoDB", icon: <SiMongodb />, level: 86 },
      { name: "REST APIs", icon: <SiJavascript />, level: 92 },
      { name: "Postman", icon: <SiPostman />, level: 90 },
    ],
  },

  {
    name: "TOOLS",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 96 },
      { name: "GitHub", icon: <FaGithub />, level: 96 },
      { name: "VS Code", icon: <VscVscode />, level: 93 },
      { name: "Deployment", icon: <MdOutlineSystemUpdate />, level: 80 },
        { name: "Android Studio", icon: <FaAndroid />, level: 94 }
    ],
  },

  {
    name: "SYSTEM DESIGN",
    skills: [
      { name: "System Design", icon: <BsStack />, level: 70 },
      { name: "Full-Stack Workflow", icon: <BsStack />, level: 75 },
    ],
  },
];


  const currentSkills = skillCategories[currentCategory].skills;

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % skillCategories.length);
  };

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="relative py-32 px-6 overflow-hidden"
      data-testid="section-skills"
    >
      {/* Full-width video background - Optimized for smooth scrolling */}
      <video
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef2}
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
        <source src={secondVideo} type="video/mp4" />
      </video>

      {/* Integrated overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/50" />

      {/* Content - Animated on scroll */}
      {isVisible && (
        <div className="max-w-7xl mx-auto relative z-10 animate-section-load">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up animate-section-load">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-white/70 to-white/30" />
              <h2 className="font-pixel text-sm text-white/70 tracking-widest">EXPERTISE</h2>
              <div className="h-1 w-12 bg-gradient-to-l from-white/70 to-white/30" />
            </div>
            <h1 className="font-pixel text-4xl md:text-5xl font-bold text-white/95 mb-4 drop-shadow-lg pixel-shadow">
              SKILLS
            </h1>
            {/* <p className="text-white/80 max-w-2xl mx-auto font-pixel text-xs drop-shadow-md">
              COMPREHENSIVE TOOLKIT FOR BUILDING MODERN, SCALABLE APPLICATIONS
            </p> */}
            <div className="h-1 w-32 mx-auto mt-6 bg-gradient-to-r from-white/70 to-white/20" />
          </div>

          {/* Category Indicator */}
          <div className="flex justify-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 backdrop-blur-md bg-white/10 border border-white/25 rounded-full px-6 py-3">
              <span className="font-pixel text-sm text-white/70">CATEGORY:</span>
              <span className="font-pixel text-lg font-bold text-white/95">{skillCategories[currentCategory].name}</span>
            </div>
          </div>

          {/* 3D Flipping Tiles */}
          <div className="mb-12 animate-fade-in">
            <SkillsTiles3D skills={currentSkills} />
          </div>

          {/* Skill Changer Navigation */}
          <div className="flex items-center justify-center gap-6 mt-16 animate-fade-in" data-testid="skill-navigation">
            <button
              onClick={prevCategory}
              className="p-3 backdrop-blur-md bg-white/15 border border-white/30 rounded-lg hover-elevate active-elevate-2 transition-all duration-300 text-white/80 hover:text-white/95"
              data-testid="button-prev-skills"
              aria-label="Previous skill category"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Category Dots */}
            <div className="flex gap-3">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCategory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCategory
                      ? "bg-white/90 w-8"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
                  data-testid={`button-skill-category-${index}`}
                  aria-label={`Go to ${category.name} skills`}
                />
              ))}
            </div>

            <button
              onClick={nextCategory}
              className="p-3 backdrop-blur-md bg-white/15 border border-white/30 rounded-lg hover-elevate active-elevate-2 transition-all duration-300 text-white/80 hover:text-white/95"
              data-testid="button-next-skills"
              aria-label="Next skill category"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Category Count */}
          <div className="text-center mt-8 animate-fade-in">
            <p className="font-pixel text-xs text-white/60">
              {currentCategory + 1} / {skillCategories.length} • {currentSkills.length} SKILLS
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
