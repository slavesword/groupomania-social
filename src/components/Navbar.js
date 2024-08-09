import logo from "../assets/icon-left-font-monochrome-white.png";
import avatar from "../assets/icon.jpg";

function Navbar() {
  return (
    <header>
      <div class="header-background"></div>
      <div class="header-container">
        <div class="header-top">
          <img src={logo} alt="logo" class="logo" />
        </div>
        <div class="header-bottom"></div>
        <div class="header-floating">
        <img src={avatar} alt="Profile" class="profile-image" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
