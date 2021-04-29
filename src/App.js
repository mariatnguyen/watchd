import React, { Component } from "react";
import Header from "./Header.js";
import SearchBar from "./SearchBar.js";
import SearchResults from "./SearchResults.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchPage: "1",
      searchResults: [],
      watched: []
    }
    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  setSearchTerm(event) {
    this.setState(
      {
        searchTerm: event
      }, () => {this.startSearch(this.state.searchTerm)}
    );
  }

  startSearch(searchTerm) {
    const apiKey = process.env.REACT_APP_API_KEY;
    let searchPage = this.state.searchPage;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&&page=${searchPage}&include_adult=false&query=${searchTerm}`)
      .then((url) => url.json())
      .then(res => {
        this.setState({
          searchResults: res.results
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar setSearchTerm={this.setSearchTerm} />
        <SearchResults searchTerm={this.state.searchTerm} searchResults={this.state.searchResults} />
      </div>
    )
  };
}

export default App;
