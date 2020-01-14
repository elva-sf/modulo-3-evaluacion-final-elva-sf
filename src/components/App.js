import React from "react";
import getDataFromApi from "../services/getDataFromApi";
import "../stylesheet/App.css";
import "../stylesheet/bootstrap.min.css";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      species: "All",
      characters: []
    };
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    getDataFromApi().then(characters => {
      this.setState({
        characters: characters
      });
    });
  }

  // event
  handleSearch(data) {
    this.setState(data);
  }

  // helper
  filterCharactersBySearch() {
    return this.state.characters
      .filter(character => {
        return character.name
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      })
      .filter(character => {
        return (
          character.species === this.state.species ||
          "All" === this.state.species
        );
      });
  }

  // render
  renderCharacterDetail(props) {
    const routeId = parseInt(props.match.params.id);
    const character = this.state.characters.find(item => item.id === routeId);
    if (character === undefined) {
      return <p>Personaje no encontrado</p>;
    } else {
      return <CharacterDetail character={character} />;
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Filters
              handleSearch={this.handleSearch}
              search={this.state.search}
              species={this.state.species}
            />
            <CharacterList characters={this.filterCharactersBySearch()} />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;

CharacterDetail.propTypes = {
  "match.params.id": PropTypes.number
};
