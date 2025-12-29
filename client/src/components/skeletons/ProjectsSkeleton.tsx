import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsSkeleton() {
  return (
    <div className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading skeleton */}
        <Skeleton className="h-12 w-48 mx-auto mb-16 rounded-lg" />

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-4">
              {/* Image skeleton */}
              <Skeleton className="w-full h-64 rounded-lg" />

              {/* Content skeleton */}
              <div className="space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />

                {/* Tech stack skeleton */}
                <div className="flex gap-2 flex-wrap pt-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <Skeleton key={j} className="h-6 w-20 rounded-full" />
                  ))}
                </div>

                {/* Buttons skeleton */}
                <div className="flex gap-2 pt-4">
                  <Skeleton className="h-10 flex-1 rounded" />
                  <Skeleton className="h-10 flex-1 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
