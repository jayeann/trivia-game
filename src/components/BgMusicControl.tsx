import { useEffect, useCallback } from "react";
import musicOn from "../assets/music-on.svg";
import musicOff from "../assets/music-off.svg";
import { useMediaStore } from "../store/mediaStore";
import { Audio } from "./MediaPlayer";

function BgMusicControl() {
  const isBgPlaying = useMediaStore((state) => state.isBgPlaying);
  const setIsBgPlaying = useMediaStore((state) => state.setIsBgPlaying);
  const isPlaying = useMediaStore((state) => state.isPlaying);

  const handleToggleBgMusic = () => {
    setIsBgPlaying(!isBgPlaying);
  };

  const handleBgMusic = useCallback(() => {
    setIsBgPlaying(true);
  }, [setIsBgPlaying]);

  // Ensures background music only plays when no other audio is playing
  useEffect(() => {
    setIsBgPlaying(!isPlaying);
  }, [isPlaying, setIsBgPlaying]);

  // Ensure background music plays on mount
  useEffect(() => {
    handleBgMusic();
  }, [handleBgMusic]);

  const source = isBgPlaying ? musicOn : musicOff;
  return (
    <>
      <button
        className="fixed right-10 bottom-10 transform  transition duration-300 hover:scale-110 active:scale-95 rounded-full "
        onClick={handleToggleBgMusic}
      >
        <img
          className="w-16 md:w-20 lg:w-24"
          src={source}
          alt="music on button"
        />
      </button>
      <Audio
        onEnded={() => {}}
        volume={0.15}
        playing={isBgPlaying}
        url="https://raw.githubusercontent.com/jayeann/media-player-test/refs/heads/main/song/bg.mp3"
      />
    </>
  );
}

export default BgMusicControl;
