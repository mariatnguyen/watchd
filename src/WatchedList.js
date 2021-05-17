import React, { PureComponent } from "react";
import Empty from "./Empty.js"
import Genres from './Genres.json';
import "./WatchedList.css";

export default class Watched extends PureComponent {
  /*listMovies = (movie, index) => {
    let allGenres = [];
    Object.entries(Genres).map(
      function ([id, genre]) {
        movie.genre_ids.map(
          function (genre_id) {
            if (id === genre_id.toString()) {
              allGenres.push(<span className="watched-list__movie-genre" key={`${genre}-${id}`}>{genre}</span>);
            } 
            return null
          });
        return allGenres;
      });

    if (movie.poster_path !== null && movie.vote_average !== 0) {
      return <div className="watched-list__movie" key={`${movie.title}-${index}`}>
        <div className="watched-list__movie-image-wrapper">
          <img className="watched-list__movie-image" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} width="100%" height="auto" />
        </div>
        <div className="watched-list__movie-description">
          <div className="watched-list__movie-title">{movie.title}</div>
          <div className="watched-list__movie-rating">
            <span className="watched-list__movie-stars">{Math.round(movie.vote_average) + "/10, "}</span>
            <span className="watched-list__movie-vote-vount">{movie.vote_average !== 1 ? movie.vote_count + " votes" : movie.vote_count + " vote"}</span>
          </div>
          <div className="watched-list__movie-release-date"><Moment format="MMM Do, YYYY">{movie.release_date}</Moment></div>
          <div className="watched-list__movie-genres">{allGenres}</div>
        </div>
      </div>
    }
  }*/

  render() {
    /*let pages = [];
    for (let i = 1; i <= this.props.searchResults.total_pages; i++) {
      pages.push(<span key={i}>{i}</span>);
    }*/

    return (
      <div className="watched-list">
        {this.props.watched.length === 0 && <Empty setNavigation={this.props.setNavigation}/>}
      </div>
    );
  }
}