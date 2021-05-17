import React, { PureComponent } from "react";
import Pagination from './Pagination.js';
import NothingFound from './NothingFound.js';
import Moment from 'react-moment';
import Genres from './Genres.json';
import "./SearchResults.css";

export default class SearchResults extends PureComponent {
  listMovies = (movie, index) => {
    let allGenres = [];
    Object.entries(Genres).map(
      function ([id, genre]) {
        movie.genre_ids.map(
          function (genre_id) {
            if (id === genre_id.toString()) {
              allGenres.push(<span className="search-results__movie-genre" key={`${genre}-${id}`}>{genre}</span>);
            } 
            return null
          });
        return allGenres;
      });

    if (movie.poster_path !== null && movie.vote_average !== 0) {
      return <div className="search-results__movie" key={`${movie.title}-${index}`}>
        <div className="search-results__movie-image-wrapper">
          <img className="search-results__movie-image" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} width="100%" height="auto" />
        </div>
        <div className="search-results__movie-description">
          <div className="search-results__movie-title">{movie.title}</div>
          <div className="search-results__movie-rating">
            <span className="search-results__movie-stars">{Math.round(movie.vote_average) + "/10, "}</span>
            <span className="search-results__movie-vote-vount">{movie.vote_average !== 1 ? movie.vote_count + " votes" : movie.vote_count + " vote"}</span>
          </div>
          <div className="search-results__movie-release-date"><Moment format="MMM Do, YYYY">{movie.release_date}</Moment></div>
          <div className="search-results__movie-genres">{allGenres}</div>
          <div className="search-results__movie-add">
          </div>
        </div>
      </div>
    }
  }

  render() {
    let pages = [];
    for (let i = 1; i <= this.props.searchResults.total_pages; i++) {
      pages.push(<span key={i}>{i}</span>);
    }

    return (
      <div className="search-results">
        <div className="search-results__movies">
          {this.props.searchResults.length !== 0 ? this.props.searchResults.results.map(this.listMovies) : null}
        </div>
        {this.props.searchResults.length !== 0 && this.props.searchResults.results.length !== 0 ? <Pagination setPage={this.props.setPage} searchPage={this.props.searchPage} prevPage={this.props.prevPage} nextPage={this.props.nextPage} searchResults={this.props.searchResults} /> : null}
        {this.props.searchResults.length !== 0 && this.props.searchResults.results.length === 0 ? <NothingFound/> : null}
      </div>
    );
  }
}