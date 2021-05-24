import React, { PureComponent } from "react";
import SearchBar from "./SearchBar.js";
import Moment from 'react-moment';
import "./Intro.css";

export default class Intro extends PureComponent {
  render() {
    return (
      <div className="intro">
        <SearchBar setSearchTerm={this.props.setSearchTerm} />
        <div className="intro__background">
          <div className="intro__gradient"></div>
          {this.props.suggestedMovie.backdrop_path ? <div className="intro__movie-image">
            <img src={"https://image.tmdb.org/t/p/w500" + this.props.suggestedMovie.backdrop_path} alt={this.props.suggestedMovie.title} width="100%" height="auto" />
          </div> : null}
        </div>
        <div className="intro__movie-details">
          <p className="intro__movie-title">{this.props.suggestedMovie.title}</p>
          <p className="intro__movie-date"><Moment format="MMM Do, YYYY">{this.props.suggestedMovie.release_date}</Moment></p>
          <div className={this.props.watched.includes(this.props.suggestedMovie) ? "intro__movie-add--active" : "intro__movie-add--inactive"} onClick={!this.props.watched.includes(this.props.suggestedMovie) ? (e) => this.props.setWatched(e, this.props.suggestedMovie) : undefined}>
          </div>
        </div>
      </div>
    );
  }
}