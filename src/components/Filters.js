import React from "react";

function Filters(props) {
  function handleSearch(ev) {
    props.handleSearch(ev.target.value);
  }
  return (
    <form>
      <label className="col-form-label">¿A quién buscas?</label>
      <input
        type="text"
        className="form-control"
        placeholder="ej. rick"
        onChange={handleSearch}
      />
    </form>
  );
}
export default Filters;
/*   console.log(props);
  const newCharacters = props.filteredCharacters;
  newCharacters.filter(character =>
    character.name.toLowerCase().includes(props.search.toLowerCase())
  ); */
