import { useEffect, useRef } from "react";
import { useVideoPreload } from "@/contexts/VideoPreloadContext";

export function useVideoLoader(videoId: string, videoRef: React.RefObject<HTMLVideoElement>) {
  const { registerVideo, markVideoLoaded } = useVideoPreload();
  const isRegisteredRef = useRef(false);

  useEffect(() => {
    if (!isRegisteredRef.current) {
      registerVideo(videoId);
      isRegisteredRef.current = true;
    }
  }, [videoId, registerVideo]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleCanPlayThrough = () => {
      markVideoLoaded(videoId);
    };

    const handleLoadedMetadata = () => {
      // Try to mark as loaded on metadata
      markVideoLoaded(videoId);
    };

    videoElement.addEventListener("canplaythrough", handleCanPlayThrough);
    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    // If video is already cached/loaded
    if (videoElement.readyState >= 3) {
      markVideoLoaded(videoId);
    }

    return () => {
      videoElement.removeEventListener("canplaythrough", handleCanPlayThrough);
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [videoId, markVideoLoaded]);
}
