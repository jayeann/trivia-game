import { useState } from "react";
import reactLogo from "./assets/react.svg";
import triviaLogo from "/trivia.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={triviaLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Name that</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
