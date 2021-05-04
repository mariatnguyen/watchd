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
      searchPage: 1,
      searchResults: [],
      watched: []
    }
    this.setSearchTerm = this.setSearchTerm.bind(this);
    this.setPage = this.setPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  //fetch
  setSearchTerm(input) {
    if (input.length !== 0) {
      this.setState(
        {
          searchTerm: input,
          searchPage: 1
        }, () => { this.startSearch(this.state.searchTerm, this.state.searchPage) }
      );
    } 
  }

  setPage(page) {
    this.setState(
      {
        searchPage: page
      }, () => { this.startSearch(this.state.searchTerm, this.state.searchPage) }
    )
  }

  startSearch(searchTerm, searchPage) {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&include_adult=false&query=${searchTerm}&page=${searchPage}`)
      .then((url) => url.json())
      .then(res => {
        this.setState({
          searchResults: res
        })
      })
      .catch(error => console.log(error));
  }

  //pagination

  prevPage() {
    if (this.state.searchPage > 1) {
      this.setState(
        prevState => ({ searchPage: prevState.searchPage - 1 }), () => { this.startSearch(this.state.searchTerm, this.state.searchPage) }
      )
    }
  }

  nextPage() {
    if (this.state.searchPage < this.state.searchResults.total_pages) {
      this.setState(
        prevState => ({ searchPage: prevState.searchPage + 1 }), () => { this.startSearch(this.state.searchTerm, this.state.searchPage) }
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar setSearchTerm={this.setSearchTerm} />
        <SearchResults setPage={this.setPage} prevPage={this.prevPage} nextPage={this.nextPage} searchTerm={this.state.searchTerm} searchResults={this.state.searchResults} searchPage={this.state.searchPage} />
        <Footer />
      </div>
    )
  };
}

export default App;
