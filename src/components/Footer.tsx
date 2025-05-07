import { useEffect } from "react";
import musicOn from "../assets/music-on.svg";
import musicOff from "../assets/music-off.svg";
import { useMediaStore } from "../store/mediaStore";

function Footer() {
  const isBgPlaying = useMediaStore((state) => state.isBgPlaying);
  const setIsBgPlaying = useMediaStore((state) => state.setIsBgPlaying);
  const isPlaying = useMediaStore((state) => state.isPlaying);

  useEffect(() => {
    setIsBgPlaying(!isPlaying);
  }, [isPlaying, setIsBgPlaying]);

  const handleMusic = () => {
    setIsBgPlaying(!isBgPlaying);
  };

  const source = isBgPlaying ? musicOn : musicOff;
  return (
    <>
      <button
        className="fixed right-10 bottom-10 transform  transition duration-300 hover:scale-110 active:scale-95 rounded-full "
        onClick={handleMusic}
      >
        <img className="size-24" src={source} alt="music on button" />
      </button>
    </>
  );
}

export default Footer;
