import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterDetail(props) {
  const { image, name, species, origin, episode, status } = props.character;

  return (
    <React.Fragment>
      <div className="CharacterCard">
        <div className="card text-white bg-danger mb-3">
          <div className="card-body">
            <img src={image} alt="" />
            <h3 className="card-title">{name}</h3>
            {status === "Alive" ? (
              <span role="img">💟</span>
            ) : status === "Dead" ? (
              <span role="img">☠</span>
            ) : (
              status === <span role="img">❔</span>
            )}
            {species === "Human" ? (
              <span role="img">👫</span>
            ) : (
              <span role="img">👾</span>
            )}
          </div>
          <p className="card-text">Species: {species}</p>
          <p className="card-text">Planet: {origin.name}</p>
          <p className="card-text">Episodes: {episode.length}</p>
          <p className="card-text">Status: {status}</p>
        </div>
      </div>
      <Link to="/">
        <aside>*Volver al listado</aside>
      </Link>
    </React.Fragment>
  );
}
export default CharacterDetail;

CharacterDetail.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  "origin.name": PropTypes.string,
  "episode.length": PropTypes.number
};
