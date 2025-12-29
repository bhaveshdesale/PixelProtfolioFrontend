import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Brain, Zap, Users, Target, Gauge, Award } from "lucide-react";
import { useRef } from "react";
import { useVideoLoader } from "@/hooks/useVideoLoader";
import interviewVideo from "@assets/1st_1764264899129.mp4";

export function ClubsAppSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const videoRef5 = useRef<HTMLVideoElement>(null);
  useVideoLoader("clubs", videoRef5);

  const features = [
    { icon: Brain, text: "AI-Powered Interview Coach" },
    { icon: Zap, text: "Real-time Feedback" },
    { icon: Target, text: "Custom Question Sets" },
    { icon: Users, text: "Peer Practice Sessions" },
    { icon: Gauge, text: "Performance Analytics" },
    { icon: Award, text: "Success Rate Tracking" },
  ];

  return (
    <section
      ref={ref}
      id="interview-prep"
      className="relative py-32 px-6 overflow-hidden"
      data-testid="section-interview-prep"
    >
      {/* Full-width video background */}
      <video
        ref={videoRef5}
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
          WebkitAcceleratedCompositing: "true"
        }}
      >
        <source src={interviewVideo} type="video/mp4" />
      </video>

      {/* Integrated overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />

      {/* Content - Animated on scroll */}
      {isVisible && (
        <div className="max-w-7xl mx-auto relative z-10 animate-section-load">
          <div className="text-center mb-16 animate-fade-in-up animate-section-load">
            <Badge className="mb-4 font-pixel text-xs backdrop-blur-md bg-white/20 border-white/30 text-white/90">
              FEATURED PROJECT
            </Badge>
            <h2 className="font-pixel text-3xl md:text-4xl font-bold text-white/95 mb-4 drop-shadow-lg pixel-shadow">
              ONLINE INTERVIEW PREP WITH AI
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto font-pixel text-xs drop-shadow-md">
              AN INTELLIGENT PLATFORM POWERED BY AI TO HELP CANDIDATES PREPARE FOR TECHNICAL AND BEHAVIORAL INTERVIEWS WITH PERSONALIZED COACHING AND REAL-TIME FEEDBACK
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 hover-elevate transition-all duration-300 backdrop-blur-md bg-white/15 border-white/30 animate-section-load"
              style={{
                boxShadow: "4px 4px 0px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-none flex items-center justify-center mb-6"
                style={{
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.05)",
                }}
              >
                <div className="font-pixel text-6xl text-white/60">AI</div>
              </div>
              <div className="space-y-4">
                <h3 className="font-pixel text-xs text-white/95 drop-shadow-md">CRACK YOUR DREAM INTERVIEW</h3>
                <p className="text-white/80 leading-relaxed drop-shadow-md font-pixel text-xs">
                  BUILT A COMPREHENSIVE PLATFORM THAT LEVERAGES ARTIFICIAL INTELLIGENCE TO SIMULATE REAL INTERVIEW SCENARIOS, PROVIDE PERSONALIZED COACHING, AND TRACK CANDIDATE PROGRESS. FEATURES ADVANCED NLP FOR ANSWER ANALYSIS AND TAILORED RECOMMENDATIONS.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="backdrop-blur-md bg-white/20 border-white/35 text-white/95 font-pixel text-xs"
                    style={{
                      boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  >React</Badge>
                  <Badge className="backdrop-blur-md bg-white/20 border-white/35 text-white/95 font-pixel text-xs"
                    style={{
                      boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  >Node.js</Badge>
                  <Badge className="backdrop-blur-md bg-white/20 border-white/35 text-white/95 font-pixel text-xs"
                    style={{
                      boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  >OpenAI API</Badge>
                  <Badge className="backdrop-blur-md bg-white/20 border-white/35 text-white/95 font-pixel text-xs"
                    style={{
                      boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  >MongoDB</Badge>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <h3 className="font-pixel text-xs text-white/95 drop-shadow-lg animate-section-load">KEY FEATURES</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="p-4 hover-elevate active-elevate-2 transition-all duration-300 backdrop-blur-md bg-white/15 border-white/30 animate-section-load"
                    data-testid={`card-interview-feature-${index}`}
                    style={{
                      boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-none flex items-center justify-center border border-white/30">
                        <feature.icon className="w-5 h-5 text-white/80" />
                      </div>
                      <span className="text-xs font-pixel font-medium text-white/90 drop-shadow-md">
                        {feature.text}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
              <a
                href="https://interview-prep.demo"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  size="lg"
                  className="w-full mt-6 hover-elevate active-elevate-2 backdrop-blur-md bg-white/25 hover:bg-white/35 text-white border-2 border-white/40 font-pixel text-xs animate-section-load"
                  data-testid="button-view-interview-prep"
                  style={{
                    boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  VISIT PLATFORM →
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
