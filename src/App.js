import React, { Component } from "react";
import SearchBar from "./SearchBar.js";
import SearchResults from "./SearchResults.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      watched: []
    }
    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  async setSearchTerm(event) {
    await this.setState(
      {
        searchTerm: "test"
      });
    this.startSearch(this.state.searchTerm);
  }

  startSearch(searchTerm) {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&include_adult=false&query=${searchTerm}`)
      .then((url) => url.json())
      .then(results => {
        console.log(results)
      })
  }

  render() {
    return (
      <div className="App">
        <SearchBar setSearchTerm={this.setSearchTerm} />
        {console.log(this.state.searchTerm)}
        <SearchResults />
      </div>
    )
  };
}

export default App;
