import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import Portfolio from "./portfolio";

export default function Home() {
  const incrementVisitorMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/visitors/increment", {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/visitors"] });
    },
  });

  useEffect(() => {
    // Increment visitor count only once per session
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      incrementVisitorMutation.mutate();
      sessionStorage.setItem("hasVisited", "true");
    }
  }, [incrementVisitorMutation]);

  return <Portfolio />;
}
