import triviaLogo from "/trivia.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex items-center justify-center">
        <a href="#" target="_blank">
          <img className="size-96" src={triviaLogo} alt="Vite logo" />
        </a>
      </div>
      <h1 className="uppercase text-9xl text-white font-black double-shadow">
        Name that
      </h1>

      <button className="px-8 py-4 bg-gradient-to-br from-green-400 to-green-700 text-white text-2xl font-extrabold rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
        ▶ Play
      </button>
    </>
  );
}

export default App;
