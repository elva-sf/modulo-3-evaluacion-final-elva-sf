import React from "react";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

function CharacterList(props) {
  return (
    <div className="CharacterList">
      <ul className="CharacterList-ul">
        {props.characters.map(character => {
          return (
            <li key={character.id} className="liElement">
              <CharacterCard key={character.id} character={character} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CharacterList;

CharacterCard.propTypes = {
  characters: PropTypes.array
};
