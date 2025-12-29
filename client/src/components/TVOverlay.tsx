interface TVOverlayProps {
  onClick: () => void;
}

export function TVOverlay({ onClick }: TVOverlayProps) {
  return (
    <div
      onClick={onClick}
      className="absolute cursor-pointer flex items-center justify-center text-white font-pixel text-xl"
      style={{
        /* 🔥 Pixel-perfect coordinates for the TV area */
        left: "1180px",   // Move right/left
        top: "330px",     // Move up/down
        width: "480px",   // Match TV width
        height: "290px",  // Match TV height

        /* Center text */
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        /* Subtle glow */
        textShadow: "0px 0px 8px rgba(255,255,255,0.6)",
      }}
    >
      CLICK TO PLAY
    </div>
  );
}
