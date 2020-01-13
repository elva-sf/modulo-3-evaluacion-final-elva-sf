import React from "react";
import getDataFromApi from "../services/getDataFromApi";
import "../stylesheet/App.css";
import "../stylesheet/bootstrap.min.css";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
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
  renderCharacterDetail(props) {
    const routeId = parseInt(props.match.params.id);
    const character = this.state.characters.find(item => item.id === routeId);
    if (character === undefined) {
      return <p>Personaje no encontrado</p>;
    } else {
      return <CharacterDetail character={character} />;
    }
  }

  // event
  handleSearch(data) {
    console.log(data);
    this.setState({
      search: data
    });
  }

  //helper

  render() {
    console.log(this.state.search);
    const filteredCharacters = this.state.characters.filter(character => {
      return character.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Filters handleSearch={this.handleSearch} />
            <CharacterList characters={filteredCharacters} />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
