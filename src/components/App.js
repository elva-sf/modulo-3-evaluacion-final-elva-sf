import React from "react";
import "../stylesheet/App.css";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import "../stylesheet/bootstrap.min.css";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Filters />
        <CharacterList />
        <CharacterDetail />
      </div>
    );
  }
}

export default App;
