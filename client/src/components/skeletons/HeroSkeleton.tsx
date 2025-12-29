import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
        {/* Main title skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-20 w-96 mx-auto bg-muted/80 rounded-lg" />
          <Skeleton className="h-2 w-40 mx-auto" />
        </div>

        {/* Subtitle skeleton */}
        <Skeleton className="h-6 w-full max-w-2xl mx-auto" />

        {/* Button skeleton */}
        <Skeleton className="h-12 w-48 mx-auto rounded-lg" />

        {/* Decorative pixel elements */}
        <div className="flex justify-center gap-16 mt-12 opacity-50">
          <div className="w-12 h-12 border-2 border-primary/30 animate-pulse" />
          <div className="w-8 h-8 border border-primary/20 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
