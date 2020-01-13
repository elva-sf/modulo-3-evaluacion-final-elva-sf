import React from "react";
import PropTypes from "prop-types";

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

Filters.propTypes = {
  handleSearch: PropTypes.func
};
