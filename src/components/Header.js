import React from "react";
import logo from "../images/Rick_and_Morty_-_logo_(English).png";

function Header() {
  return (
    <header className="Header">
      <div>
        <img src={logo} alt="Imagen del titulo" />
      </div>
      <div className="form-group">
        <label className="col-form-label">¿A quién buscas?</label>
        <input type="text" className="form-control" placeholder="ej. rick" />
      </div>
    </header>
  );
}
export default Header;
