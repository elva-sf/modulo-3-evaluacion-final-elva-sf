import React from "react";

function CharacterDetail(props) {
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
          <div className="card-header">Name: {props.character.name}</div>
          <p className="card-text">Species: {props.character.species}</p>
          <p className="card-text">Planet: {props.character.origin.name}</p>
          <p className="card-text">
            Episodes: {props.character.episode.length}
          </p>
          <p className="card-text">Status: {props.character.status}</p>
        </div>
      </div>
    </div>
  );
}
export default CharacterDetail;
