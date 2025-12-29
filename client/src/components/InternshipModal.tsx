import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InternshipDetails {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
  icon?: string;
}

interface InternshipModalProps {
  isOpen: boolean;
  internship: InternshipDetails | null;
  onClose: () => void;
}

export function InternshipModal({ isOpen, internship, onClose }: InternshipModalProps) {
  if (!isOpen || !internship) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      data-testid="internship-modal-overlay"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-black border border-yellow-600/20 shadow-2xl animate-scale-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors z-10"
          data-testid="button-close-modal"
        >
          <X className="w-6 h-6 text-white/80" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 animate-slide-in-top">
            <h2 className="font-pixel text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              {internship.company}
            </h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="font-pixel text-yellow-500">{internship.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-pixel text-sm text-white/60">{internship.duration}</span>
              </div>
            </div>
            <div className="h-0.5 w-20 bg-gradient-to-r from-yellow-600 to-yellow-700" />
          </div>

          {/* Description */}
          <div className="mb-8 animate-slide-in-left">
            <h3 className="font-pixel text-lg text-white/90 mb-3">About this role</h3>
            <p className="font-pixel text-sm text-white/70 leading-relaxed">
              {internship.description}
            </p>
          </div>

          {/* Achievements */}
          <div className="mb-8 animate-slide-in-right">
            <h3 className="font-pixel text-lg text-white/90 mb-4">Key achievements</h3>
            <ul className="space-y-3">
              {internship.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex gap-3 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-yellow-500 font-bold mt-1">•</span>
                  <span className="font-pixel text-sm text-white/70">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="mb-8 animate-slide-in-bottom">
            <h3 className="font-pixel text-lg text-white/90 mb-4">Technical skills</h3>
            <div className="flex flex-wrap gap-3">
              {internship.skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-yellow-600/15 border border-yellow-600/40 rounded-lg font-pixel text-xs text-yellow-400/90 hover-elevate transition-all"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Close button */}
          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-white/10">
            <Button
              onClick={onClose}
              variant="outline"
              className="font-pixel"
              data-testid="button-close-internship-modal"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
