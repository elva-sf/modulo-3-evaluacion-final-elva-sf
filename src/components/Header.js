import React from "react";
import logo from "../images/Rick_and_Morty_-_logo_(English).png";

function Header() {
  return (
    <header className="Header">
      <img src={logo} alt="Titulo de la serie" className="HeaderImg" />
    </header>
  );
}
export default Header;
