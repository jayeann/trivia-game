import { useEffect } from "react";
import "./App.css";
import { useGameStore } from "./store/gameStore";
import { useMediaStore } from "./store/mediaStore";
import Home from "./components/Home";
import CategorySelector from "./components/CategorySelector";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";
import { Audio } from "./components/MediaPlayer";

function App() {
  const phase = useGameStore((state) => state.phase);
  const setIsBgPlaying = useMediaStore((state) => state.setIsBgPlaying);
  const isBgPlaying = useMediaStore((state) => state.isBgPlaying);

  useEffect(() => {
    // Ensure background music plays on mount
    setIsBgPlaying(true);
  }, [setIsBgPlaying]);

  let content;
  switch (phase) {
    case "HOME":
      content = <Home />;
      break;
    case "CATEGORY":
      content = <CategorySelector />;
      break;
    case "ROUND":
      content = <GameScreen />;
      break;
    case "RESULTS":
      content = <ResultScreen />;
      break;
    default:
      content = null;
  }

  return (
    <>
      <Audio
        onEnded={() => {}}
        volume={0.15}
        playing={isBgPlaying}
        url="https://raw.githubusercontent.com/jayeann/media-player-test/refs/heads/main/song/bg.mp3"
      />
      {content}
    </>
  );
}

export default App;
