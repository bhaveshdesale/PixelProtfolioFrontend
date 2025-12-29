import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { fetchAndIncrementVisitors } from "@/lib/api";

export function VisitorCounter() {
  const { toast } = useToast();

  const {
    data: visitorCount,
    isLoading,
    error,
  } = useQuery<number>({
    queryKey: ["visitor-count"],
    queryFn: fetchAndIncrementVisitors,
    staleTime: Infinity, // do not refetch again
    retry: 1,
  });

  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading visitor count",
        description: "Unable to fetch visitor statistics",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  useEffect(() => {
    if (!visitorCount) return;

    let current = 0;
    const increment = Math.max(1, Math.ceil(visitorCount / 50));

    const timer = setInterval(() => {
      current += increment;
      if (current >= visitorCount) {
        setDisplayCount(visitorCount);
        clearInterval(timer);
      } else {
        setDisplayCount(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [visitorCount]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-4 w-32" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="font-pixel text-xs text-muted-foreground">
        Stats unavailable
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 animate-fade-in-up">
      <div className="font-pixel text-xs md:text-sm text-muted-foreground">
        VISITED BY
      </div>

      <div className="font-pixel text-2xl md:text-3xl text-primary">
        {displayCount.toLocaleString()}
      </div>

      <div className="font-pixel text-xs md:text-sm text-muted-foreground">
        TECHIES
      </div>
    </div>
  );
}
