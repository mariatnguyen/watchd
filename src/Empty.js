import React, { PureComponent } from "react";
import "./WatchedList.css";

export default class Watched extends PureComponent {
  render() {
    return (
      <div className="watched-list__empty">
        <h3>Your watched list is empty.</h3>
        <h4><button className="watched-list__empty-search" onClick={(e) => this.props.setNavigation(e)}>Search</button> for movies to add to get started.</h4>
      </div>
    );
  }
}