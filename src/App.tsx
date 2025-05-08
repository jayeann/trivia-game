import { Suspense, lazy, useEffect } from "react";
import { useGameStore } from "./store/gameStore";
import { clearAllLocalStorage } from "./utils/localStorage";
import { DotLoader } from "./components/Loader";
import BgMusicControl from "./components/BgMusicControl";
import "./App.css";

const Home = lazy(() => import("./components/Home"));
const CategorySelector = lazy(() => import("./components/CategorySelector"));
const GameScreen = lazy(() => import("./components/GameScreen"));
const ResultScreen = lazy(() => import("./components/ResultScreen"));

function App() {
  const phase = useGameStore((state) => state.phase);

  // Ensures any temporary data is cleared before the user leaves or refreshes the page.
  useEffect(() => {
    const handleBeforeUnload = () => clearAllLocalStorage();
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const renderPhase = () => {
    switch (phase) {
      case "HOME":
        return <Home />;
      case "CATEGORY":
        return <CategorySelector />;
      case "ROUND":
        return <GameScreen />;
      case "RESULTS":
        return <ResultScreen />;
      default:
        return null;
    }
  };

  return (
    <>
      <BgMusicControl />
      <Suspense fallback={<DotLoader />}>{renderPhase()}</Suspense>
    </>
  );
}

export default App;
