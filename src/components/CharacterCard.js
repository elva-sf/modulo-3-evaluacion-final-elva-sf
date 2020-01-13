import React from "react";

function CharacterCard(props) {
  console.log(props.character);
  return (
    <div className="CharacterCard">
      <div
        className="card text-white bg-danger mb-3"
        /* style={{
          max_width: `${20}rem`
        }} */
      >
        <div className="card-body">
          <img src={props.character.image} alt="" />
          <div className="card-header">{props.character.name}</div>
          <p className="card-text">{props.character.species}</p>
        </div>
      </div>
    </div>
  );
}
export default CharacterCard;
