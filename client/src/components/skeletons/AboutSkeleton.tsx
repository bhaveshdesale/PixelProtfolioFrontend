import { Skeleton } from "@/components/ui/skeleton";

export function AboutSkeleton() {
  return (
    <div className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading skeleton */}
        <Skeleton className="h-12 w-48 mx-auto mb-16 rounded-lg" />

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image skeleton */}
          <div className="space-y-4">
            <Skeleton className="w-full aspect-square rounded-lg" />
          </div>

          {/* Right side - Text skeleton */}
          <div className="space-y-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton
                key={i}
                className={`h-4 rounded ${
                  i === 4 ? "w-3/4" : "w-full"
                }`}
              />
            ))}

            {/* Pixel decorations */}
            <div className="flex gap-2 mt-8 opacity-30">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="w-6 h-6 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
