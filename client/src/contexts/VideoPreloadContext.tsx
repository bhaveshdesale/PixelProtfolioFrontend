import { createContext, useContext, useState, useCallback, useEffect } from "react";

interface VideoPreloadContextType {
  registerVideo: (id: string) => void;
  markVideoLoaded: (id: string) => void;
  allVideosLoaded: boolean;
  loadedVideos: Set<string>;
}

const VideoPreloadContext = createContext<VideoPreloadContextType | undefined>(undefined);

export function VideoPreloadProvider({ children }: { children: React.ReactNode }) {
  const [registeredVideos, setRegisteredVideos] = useState<Set<string>>(new Set());
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());
  const [forceReady, setForceReady] = useState(false);

  const registerVideo = useCallback((id: string) => {
    setRegisteredVideos((prev) => new Set([...prev, id]));
  }, []);

  const markVideoLoaded = useCallback((id: string) => {
    setLoadedVideos((prev) => new Set([...prev, id]));
  }, []);

  // 5-second timeout: proceed with homepage after 5 seconds regardless of loading status
  useEffect(() => {
    const timeout = setTimeout(() => {
      setForceReady(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const allVideosLoaded =
    forceReady || (registeredVideos.size > 0 && loadedVideos.size === registeredVideos.size);

  return (
    <VideoPreloadContext.Provider
      value={{ registerVideo, markVideoLoaded, allVideosLoaded, loadedVideos }}
    >
      {children}
    </VideoPreloadContext.Provider>
  );
}

export function useVideoPreload() {
  const context = useContext(VideoPreloadContext);
  if (!context) {
    throw new Error("useVideoPreload must be used within VideoPreloadProvider");
  }
  return context;
}
