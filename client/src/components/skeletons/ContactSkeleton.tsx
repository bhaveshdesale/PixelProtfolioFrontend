import { Skeleton } from "@/components/ui/skeleton";

export function ContactSkeleton() {
  return (
    <div className="py-32 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Heading skeleton */}
        <Skeleton className="h-12 w-48 mx-auto mb-4 rounded-lg" />
        <Skeleton className="h-4 w-3/4 mx-auto mb-16" />

        {/* Form skeleton */}
        <div className="space-y-6">
          {/* Name field */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>

          {/* Email field */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>

          {/* Message field */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>

          {/* Submit button */}
          <Skeleton className="h-12 w-32 rounded-lg" />
        </div>

        {/* Contact info skeleton */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="text-center space-y-3">
              <Skeleton className="w-8 h-8 rounded-full mx-auto" />
              <Skeleton className="h-4 w-24 mx-auto" />
              <Skeleton className="h-4 w-32 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
