import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import SoundPlayer from "./components/SoundPlayer/SoundPlayer.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <SoundPlayer />
    <App />
  </>
);
