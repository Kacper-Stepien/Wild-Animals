import React, { useEffect } from "react";

const SoundPlayer: React.FC = () => {
  useEffect(() => {
    const audio = new Audio("nature-sound.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch((error) => {
      console.error("Failed to play audio:", error);
    });

    return () => {
      audio.pause();
    };
  }, []);

  return null;
};

export default SoundPlayer;
