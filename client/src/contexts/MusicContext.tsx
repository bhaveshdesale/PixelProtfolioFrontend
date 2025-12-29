// import { createContext, useContext, useRef, useState, useCallback } from "react";

// interface MusicContextType {
//   isPlaying: boolean;
//   toggleMusic: () => void;
//   playMusic: () => void;
//   pauseMusic: () => void;
//   initAudio: () => void;
// }

// const MusicContext = createContext<MusicContextType | undefined>(undefined);

// export function MusicProvider({ children }: { children: React.ReactNode }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [audioInitialized, setAudioInitialized] = useState(false);

//   // Initialize audio element - Call this after user interaction
//   const initAudio = useCallback(() => {
//     if (audioInitialized) return;

//     if (!audioRef.current) {
//       audioRef.current = new Audio();
//       audioRef.current.loop = true;
//       audioRef.current.volume = 0.35;
//       // Anime-style work music - upbeat and motivating lofi beats
//       audioRef.current.src = "https://cdn.pixabay.com/download/audio/2024/02/23/audio_7b7d52d3c5.mp3";
      
//       // Add error handling
//       audioRef.current.onerror = () => {
//         console.log("Failed to load audio, trying fallback...");
//       };

//       audioRef.current.onended = () => {
//         console.log("Audio finished");
//       };
//     }

//     setAudioInitialized(true);
//   }, [audioInitialized]);

//   const playMusic = useCallback(() => {
//     if (!audioInitialized) {
//       initAudio();
//     }

//     if (audioRef.current) {
//       audioRef.current.currentTime = 0;
//       const playPromise = audioRef.current.play();
      
//       if (playPromise !== undefined) {
//         playPromise
//           .then(() => {
//             console.log("🎵 Music started playing");
//             setIsPlaying(true);
//           })
//           .catch((error) => {
//             console.log("Audio play failed:", error.message);
//             setIsPlaying(false);
//           });
//       }
//     }
//   }, [audioInitialized, initAudio]);

//   const pauseMusic = useCallback(() => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       console.log("⏸️ Music paused");
//       setIsPlaying(false);
//     }
//   }, []);

//   const toggleMusic = () => {
//     if (!audioInitialized) {
//       playMusic();
//     } else if (isPlaying) {
//       pauseMusic();
//     } else {
//       playMusic();
//     }
//   };

//   return (
//     <MusicContext.Provider value={{ isPlaying, toggleMusic, playMusic, pauseMusic, initAudio }}>
//       {children}
//     </MusicContext.Provider>
//   );
// }

// export function useMusic() {
//   const context = useContext(MusicContext);
//   if (!context) {
//     throw new Error("useMusic must be used within MusicProvider");
//   }
//   return context;
// }


//music save in the folder 
// src/contexts/MusicContext.tsx
import { createContext, useContext, useEffect, useRef, useState } from "react";

interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
}

const MusicContext = createContext<MusicContextType | null>(null);

const playlist = [
  "/assets/music/anime-1.mp3",
  "/assets/music/anime-2.mp3",
  "/assets/music/anime-3.mp3",
];

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(playlist[currentTrack]);
    audioRef.current.volume = 0.3;
    audioRef.current.loop = false;

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false)); // autoplay restriction

    audioRef.current.onended = () => {
      setCurrentTrack((prev) => (prev + 1) % playlist.length);
    };

    return () => {
      audioRef.current?.pause();
    };
  }, [currentTrack]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying((prev) => !prev);
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within MusicProvider");
  }
  return context;
}


// //automatically downloaded risky
// import {
//   createContext,
//   useContext,
//   useRef,
//   useState,
//   useCallback,
//   useEffect,
// } from "react";

// interface MusicContextType {
//   isPlaying: boolean;
//   toggleMusic: () => void;
//   playMusic: () => void;
//   pauseMusic: () => void;
// }

// const MusicContext = createContext<MusicContextType | undefined>(undefined);

// /**
//  * 🎧 Playlist (soft anime / lofi vibes)
//  * You can replace URLs later with:
//  * - Local files (/audio/*.mp3)
//  * - Your own CDN
//  */
// const PLAYLIST = [
//   "https://cdn.pixabay.com/download/audio/2024/02/23/audio_7b7d52d3c5.mp3",
//   "https://cdn.pixabay.com/download/audio/2023/10/30/audio_2f1f4c38cc.mp3",
//   "https://cdn.pixabay.com/download/audio/2023/08/01/audio_1a6db9b69f.mp3",
// ];

// export function MusicProvider({ children }: { children: React.ReactNode }) {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const trackIndexRef = useRef(0);

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audioInitialized, setAudioInitialized] = useState(false);

//   /** 🔹 Initialize Audio (only once) */
//   const initAudio = useCallback(() => {
//     if (audioInitialized) return;

//     const audio = new Audio();
//     audio.volume = 0.35;
//     audio.src = PLAYLIST[0];

//     // 🎵 When one song ends → play next
//     audio.onended = () => {
//       trackIndexRef.current =
//         (trackIndexRef.current + 1) % PLAYLIST.length;
//       audio.src = PLAYLIST[trackIndexRef.current];
//       audio.play().catch(() => {});
//     };

//     audio.onerror = () => {
//       console.warn("⚠️ Audio failed to load, skipping track");
//       audio.onended?.(new Event("ended"));
//     };

//     audioRef.current = audio;
//     setAudioInitialized(true);
//   }, [audioInitialized]);

//   /** ▶️ Play Music */
//   const playMusic = useCallback(() => {
//     if (!audioInitialized) {
//       initAudio();
//     }

//     const audio = audioRef.current;
//     if (!audio) return;

//     audio
//       .play()
//       .then(() => {
//         setIsPlaying(true);
//       })
//       .catch((err) => {
//         console.log("Autoplay blocked:", err.message);
//       });
//   }, [audioInitialized, initAudio]);

//   /** ⏸ Pause Music */
//   const pauseMusic = useCallback(() => {
//     audioRef.current?.pause();
//     setIsPlaying(false);
//   }, []);

//   /** 🔁 Toggle */
//   const toggleMusic = () => {
//     if (isPlaying) {
//       pauseMusic();
//     } else {
//       playMusic();
//     }
//   };

//   /**
//    * 🧠 Optional: Auto-init on first user interaction
//    * (scroll / click / keydown)
//    */
//   useEffect(() => {
//     const unlockAudio = () => {
//       initAudio();
//       playMusic();
//       window.removeEventListener("click", unlockAudio);
//       window.removeEventListener("keydown", unlockAudio);
//     };

//     window.addEventListener("click", unlockAudio);
//     window.addEventListener("keydown", unlockAudio);

//     return () => {
//       window.removeEventListener("click", unlockAudio);
//       window.removeEventListener("keydown", unlockAudio);
//     };
//   }, [initAudio, playMusic]);

//   return (
//     <MusicContext.Provider
//       value={{
//         isPlaying,
//         toggleMusic,
//         playMusic,
//         pauseMusic,
//       }}
//     >
//       {children}
//     </MusicContext.Provider>
//   );
// }

// export function useMusic() {
//   const context = useContext(MusicContext);
//   if (!context) {
//     throw new Error("useMusic must be used within MusicProvider");
//   }
//   return context;
// }
