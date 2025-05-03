import "./App.css";
import { useGameStore } from "./store/gameStore";
import Home from "./components/Home";
import CategorySelector from "./components/CategorySelector";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";
import Footer from "./components/Footer";

function App() {
  const phase = useGameStore((state) => state.phase);
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
      {content}
      <Footer />
    </>
  );
}

export default App;
