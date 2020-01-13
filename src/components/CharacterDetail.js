import React from "react";
import { Link } from "react-router-dom";

function CharacterDetail(props) {
  console.log(props.character);
  const { image, name, species, origin, episode, status } = props.character;

  return (
    <React.Fragment>
      <div className="CharacterCard">
        <div
          className="card text-white bg-danger mb-3"
          /* style={{
      max_width: `${20}rem`
    }} */
        >
          <div className="card-body">
            <img src={image} alt="" />
            <div>
              <h3 className="card-title">{name}</h3>
            </div>
            <p className="card-text">Species: {species}</p>
            <p className="card-text">Planet: {origin.name}</p>
            <p className="card-text">Episodes: {episode.length}</p>
            <p className="card-text">Status: {status}</p>
          </div>
        </div>
      </div>
      <Link to="/">
        <aside>*Volver al listado</aside>
      </Link>
    </React.Fragment>
  );
}
export default CharacterDetail;
