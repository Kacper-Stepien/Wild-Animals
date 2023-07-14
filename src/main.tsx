import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";

const audio = new Audio("nature-sound.mp3");
audio.loop = true;
audio.volume = 0.3;
audio.play().catch((error) => {
  console.error("Failed to play audio:", error);
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
