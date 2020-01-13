import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList() {
  return (
    <div className="CharacterList">
      <ul>
        <li>
          <CharacterCard />
        </li>
      </ul>
    </div>
  );
}

export default CharacterList;
