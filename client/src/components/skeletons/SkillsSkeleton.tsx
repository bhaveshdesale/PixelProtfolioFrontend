import { Skeleton } from "@/components/ui/skeleton";

export function SkillsSkeleton() {
  return (
    <div className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading skeleton */}
        <Skeleton className="h-12 w-48 mx-auto mb-16 rounded-lg" />

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4 p-6 border border-border/20 rounded-lg">
              {/* Icon skeleton */}
              <Skeleton className="w-12 h-12 rounded" />

              {/* Title skeleton */}
              <Skeleton className="h-5 w-3/4" />

              {/* Description skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
              </div>

              {/* Tags skeleton */}
              <div className="flex gap-2 flex-wrap">
                {Array.from({ length: 3 }).map((_, j) => (
                  <Skeleton key={j} className="h-6 w-16 rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
