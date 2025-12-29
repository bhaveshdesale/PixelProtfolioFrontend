import { X, ExternalLink, Github } from "lucide-react";

interface ProjectDetailModalProps {
  isOpen: boolean;
  project: {
    title: string;
    description: string;
    tags: string[];
    liveLink: string;
    sourceCode: string;
    icon?: string;
  } | null;
  onClose: () => void;
}

export function ProjectDetailModal({ isOpen, project, onClose }: ProjectDetailModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="project-detail-modal"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

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
            {project.icon && <span className="text-4xl">{project.icon}</span>}
            <div>
              <h2 className="font-pixel text-2xl font-bold text-white/95 drop-shadow-md">
                {project.title}
              </h2>
              <p className="text-white/60 font-pixel text-xs mt-1">PROJECT DETAILS</p>
            </div>
          </div>
          <button
            onClick={onClose}
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
              {project.description}
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
              {project.tags.map((tag, i) => (
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
            <a
              href={project.liveLink}
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
            <a
              href={project.sourceCode}
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
          </div>
        </div>
      </div>
    </div>
  );
}
