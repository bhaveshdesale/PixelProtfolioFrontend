import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MusicProvider } from "@/contexts/MusicContext";
import { VideoPreloadProvider, useVideoPreload } from "@/contexts/VideoPreloadContext";
import { GlowingCursor } from "@/components/GlowingCursor";
import { SignatureAnimation } from "@/components/SignatureAnimation";
import { VideoLoadingScreen } from "@/components/VideoLoadingScreen";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  const [showSignature, setShowSignature] = useState(true);
  const { allVideosLoaded } = useVideoPreload();

  useEffect(() => {
    // Check if user has already seen the signature animation in this session
    const hasSeenSignature = sessionStorage.getItem("hasSeenSignatureAnimation");
    if (hasSeenSignature) {
      setShowSignature(false);
    }
  }, []);

  const handleSignatureComplete = () => {
    sessionStorage.setItem("hasSeenSignatureAnimation", "true");
    setShowSignature(false);
  };

  // Show loading screen while videos are loading
  if (!allVideosLoaded) {
    return <VideoLoadingScreen />;
  }

  if (showSignature) {
    return <SignatureAnimation onComplete={handleSignatureComplete} />;
  }

  return (
    <>
      <GlowingCursor />
      <Toaster />
      <Router />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <VideoPreloadProvider>
        <ThemeProvider>
          <MusicProvider>
            <TooltipProvider>
              <AppContent />
            </TooltipProvider>
          </MusicProvider>
        </ThemeProvider>
      </VideoPreloadProvider>
    </QueryClientProvider>
  );
}

export default App;
