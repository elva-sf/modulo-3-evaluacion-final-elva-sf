import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  return (
    <div
      className="CharacterList"
      style={{
        width: `${50}rem`,
        display: "flex"
      }}
    >
      <ul>
        {props.characters.map(character => {
          return (
            <li key={character.id}>
              <CharacterCard key={character.id} character={character} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CharacterList;
