import React, { Component } from "react";
import Header from "./Header.js";
import SearchBar from "./SearchBar.js";
import SearchResults from "./SearchResults.js";
import Footer from "./Footer.js";
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
    this.setPage = this.setPage.bind(this);
  }

  setSearchTerm(input) {
    this.setState(
      {
        searchTerm: input
      }, () => {this.startSearch(this.state.searchTerm, this.state.searchPage)}
    );
  }

  setPage(event) {
    this.setState(
      {
        searchPage: event
      }, () => {this.startSearch(this.state.searchTerm, this.state.searchPage)}
    )
  }

  startSearch(searchTerm, searchPage) {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&&page=${searchPage}&include_adult=false&query=${searchTerm}`)
      .then((url) => url.json())
      .then(res => {
        this.setState({
          searchResults: res
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar setSearchTerm={this.setSearchTerm} />
        <SearchResults setPage={this.setPage} searchTerm={this.state.searchTerm} searchResults={this.state.searchResults} searchPage={this.state.searchPage} />
        <Footer/>
      </div>
    )
  };
}

export default App;
