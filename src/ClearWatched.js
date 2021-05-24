import React, { PureComponent } from "react";
import "./WatchedList.css";

export default class ClearWatched extends PureComponent {
  render() {
    return (
      <div className="watched-list__clear" onClick={(e) => this.props.clearWatched()}>
        Remove all watched movies
      </div>
    );
  }
}