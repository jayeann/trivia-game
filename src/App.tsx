import "./App.css";
import { useGameStore } from "./store/gameStore";
import Home from "./components/Home";
import CategorySelector from "./components/CategorySelector";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  const phase = useGameStore((state) => state.phase);

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
}

export default App;
