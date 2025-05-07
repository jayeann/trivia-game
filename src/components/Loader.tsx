import triviaLogo from "/trivia.svg";
import "../styles/loader.css";

export const LogoLoader = () => (
  <div className="h-screen flex items-center justify-center">
    <img
      className="size-96 logo-animate --d:100ms"
      src={triviaLogo}
      alt="trivia logo"
    />
  </div>
);

export const DotLoader = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="three-body">
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
    </div>
  </div>
);
