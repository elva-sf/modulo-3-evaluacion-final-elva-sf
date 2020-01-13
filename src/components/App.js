import React from "react";
import getDataFromApi from "../services/getDataFromApi";
import "../stylesheet/App.css";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import "../stylesheet/bootstrap.min.css";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    getDataFromApi().then(characters => {
      this.setState({
        characters: characters
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Filters />
        <CharacterList characters={this.state.characters} />
        {/* <ul>
          {this.state.characters.map(character => {
            return (
              <li key={character.id}>
                <CharacterDetail key={character.id} character={character} />
              </li>
            );
          })}
        </ul> */}
      </div>
    );
  }
}

export default App;
