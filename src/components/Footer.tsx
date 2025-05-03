import React from "react";
import musicBtn from "../assets/music-on-button.svg";
import settingBtn from "../assets/setting-button.svg";

function Footer() {
  return (
    <>
      <button className="fixed left-10 bottom-10 transform transition duration-300 hover:scale-110 active:scale-95 rounded-full ">
        <img className="size-24" src={settingBtn} alt="settings button" />
      </button>
      <button className="fixed right-10 bottom-10 transform  transition duration-300 hover:scale-110 active:scale-95 rounded-full ">
        <img className="size-24" src={musicBtn} alt="music on button" />
      </button>
    </>
  );
}

export default Footer;
