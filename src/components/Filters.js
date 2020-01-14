import React from "react";
import PropTypes from "prop-types";

function Filters(props) {
  // handle functions
  function handleSearch(ev) {
    props.handleSearch({ search: ev.target.value });
  }
  function handleCheck(ev) {
    props.handleSearch({ species: ev.target.value });
  }
  function handlePrevent(ev) {
    ev.preventDefault();
  }
  // form
  return (
    <React.Fragment>
      <form onSubmit={handlePrevent}>
        <div className="filterForm">
          <label className="col-form-label">¿A quién buscas?</label>
          <input
            type="text"
            className="form-control"
            placeholder="ej. rick"
            value={props.search}
            onChange={handleSearch}
          />
        </div>
        <label>¿Mejor filtrar por especie?</label>
        <div>
          <input
            type="radio"
            name="species"
            id=""
            value="Human"
            onChange={handleCheck}
            checked={props.species === "Human" ? true : false}
          />
          <i className="fas fa-male"></i>
        </div>
        <div>
          <input
            type="radio"
            name="species"
            id=""
            value="Alien"
            onChange={handleCheck}
            checked={props.species === "Alien" ? true : false}
          />
          <i className="fab fa-reddit-alien"></i>
        </div>
        <div>
          <input
            type="radio"
            name="species"
            id=""
            value="All"
            onChange={handleCheck}
            checked={props.species === "All" ? true : false}
          />
          <label>Todas las especies</label>
        </div>
      </form>
    </React.Fragment>
  );
}
export default Filters;

Filters.propTypes = {
  handleSearch: PropTypes.func,
  species: PropTypes.string
};
