import logo from "../assets/icon-left-font-monochrome-white.png";
import avatar from "../assets/icon.jpg";

function Navbar() {
  return (
    <header>
      <div className="header-background"></div>
      <div className="header-container">
        <div className="header-top">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="header-bottom"></div>
        <div className="header-floating">
        <img src={avatar} alt="Profile" className="profile-image" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
