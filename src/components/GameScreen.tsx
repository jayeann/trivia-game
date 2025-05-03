import "../styles/music_player.css";
const GameScreen = () => {
  return (
    <div className="h-screen">
      <div className="p-15 space-y-10">
        <h1 className="uppercase text-xl lg:text-2xl xl:text-3xl text-gray-300 font-black">
          Round
        </h1>
        <h2 className="uppercase text-3xl lg:text-5xl xl:text-6xl text-white font-black">
          Name that song
        </h2>
      </div>
      <div className="h-1/2 flex items-center justify-center">
        <div className="flex p-8 w-full min-h-1/2 space-x-10 bg-[#004357] rounded-2xl">
          <div className="flex-1 rounded-2xl bg-white"></div>
          <div className="flex-1 rounded-2xl ">
            <div className="music-player">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
