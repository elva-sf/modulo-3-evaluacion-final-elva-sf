import React from "react";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  const { id, image, name, species } = props.character;
  const route = `/character/${id}`;
  return (
    <Link to={route}>
      <div className="CharacterCard">
        <div
          className="card text-white bg-danger mb-3"
          /* style={{
          max_width: `${20}rem`
        }} */
        >
          <div className="card-body">
            <img src={image} alt="" />
            <div className="card-header">{name}</div>
            <p className="card-text">{species}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default CharacterCard;
