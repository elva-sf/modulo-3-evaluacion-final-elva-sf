import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterDetail(props) {
  const { image, name, species, origin, episode, status } = props.character;

  return (
    <React.Fragment>
      <div className="CharacterDetail">
        <div className="card text-white bg-danger mb-3">
          <div className="card-body">
            <img src={image} alt="" />
            <h3 className="card-title">{name}</h3>
            {status === "Alive" ? (
              <i className="fas fa-heartbeat"></i>
            ) : status === "Dead" ? (
              <i className="fas fa-skull"></i>
            ) : status === "unknown" ? (
              <i className="fas fa-question-circle"></i>
            ) : (
              false
            )}
            <span> / </span>
            {species === "Human" ? (
              <i className="fas fa-male"></i>
            ) : (
              <i className="fab fa-reddit-alien"></i>
            )}
          </div>
          <p className="card-text">Species: {species}</p>
          <p className="card-text">Planet: {origin.name}</p>
          <p className="card-text">Episodes: {episode.length}</p>
          <p className="card-text">Status: {status}</p>
        </div>
      </div>
      <Link to="/">
        <button type="button" className="btn btn-outline-info">
          <i className="far fa-hand-point-left"></i> Volver al listado
        </button>
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
