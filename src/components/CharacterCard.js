import React from "react";

function CharacterCard() {
  return (
    <div className="CharacterCard">
      <div
        className="card text-white bg-danger mb-3"
        /* style={{
          max_width: `${20}rem`
        }} */
      >
        <div className="card-body">
          <img src="" alt="" />
          <div className="card-header">Personaje</div>
          <p className="card-text">Some quick example text.</p>
        </div>
      </div>
    </div>
  );
}
export default CharacterCard;
