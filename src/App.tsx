import triviaLogo from "/trivia.svg";
import playBtn from "../src/assets/play-button.svg";
import musicBtn from "../src/assets/music-on-button.svg";
import settingBtn from "../src/assets/setting-button.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex items-center justify-center">
        <a href="#" target="_blank">
          <img className="size-96" src={triviaLogo} alt="trivia logo" />
        </a>
      </div>
      <h1 className="uppercase text-6xl lg:text-7xl xl:text-8xl text-white font-black double-shadow">
        Name that
      </h1>

      <button className="fixed bottom-50 left-1/2 transform -translate-x-1/2 transition duration-300 hover:scale-120 active:scale-95 rounded-full ">
        <img className="size-40" src={playBtn} alt="play button" />
      </button>
      <button className="fixed left-10 bottom-10 transform transition duration-300 hover:scale-110 active:scale-95 rounded-full ">
        <img className="size-24" src={settingBtn} alt="settings button" />
      </button>
      <button className="fixed right-10 bottom-10 transform  transition duration-300 hover:scale-110 active:scale-95 rounded-full ">
        <img className="size-24" src={musicBtn} alt="music on button" />
      </button>
    </>
  );
}

export default App;
