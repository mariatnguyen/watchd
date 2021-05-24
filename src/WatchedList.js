import React, { PureComponent } from "react";
import Empty from "./Empty.js"
import ClearWatched from "./ClearWatched.js"
import Moment from 'react-moment';
import Genres from './Genres.json';
import "./WatchedList.css";

export default class Watched extends PureComponent {
  listMovies = (movie, index) => {
    let allGenres = [];
    Object.entries(Genres).map(
      function ([id, genre]) {
        movie.genre_ids.map(
          function (genre_id) {
            if (id === genre_id.toString()) {
              allGenres.push(<span className="watched-list__movie-genre" key={`${movie.id}-${genre}`}>{genre}</span>);
            } 
            return null
          });
        return allGenres;
      });

    if (movie.poster_path !== null && movie.vote_average !== 0) {
      return <div className="watched-list__movie" key={movie.id}>
        <div className="watched-list__movie-image-wrapper">
          <img className="watched-list__movie-image" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} width="100%" height="auto" />
        </div>
        <div className="watched-list__movie-description">
          <div className="watched-list__movie-title">{movie.title}</div>
          <div className="watched-list__movie-rating">
            <span className="watched-list__movie-stars">{Math.round(movie.vote_average) + "/10, "}</span>
            <span className="watched-list__movie-vote-vount">{movie.vote_average !== 1 ? this.numberWithCommas(movie.vote_count) + " votes" : movie.vote_count + " vote"}</span>
          </div>
          <div className="watched-list__movie-release-date"><Moment format="MMM Do, YYYY">{movie.release_date}</Moment></div>
          <div className="watched-list__movie-genres">{allGenres}</div>
          <div className="watched-list__movie-overview">{movie.overview}</div>
          <div className="watched-list__movie-remove" onClick={(e) => this.props.removeWatched(e,movie)}>
          </div>
        </div>
      </div>
    }
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <div className="watched-list">
        {this.props.watched.length !== 0 ? this.props.watched.map(this.listMovies) : <Empty setNavigation={this.props.setNavigation}/>}
        {this.props.watched.length !== 0 && <ClearWatched clearWatched={this.props.clearWatched}/>}
      </div>
    );
  }
}