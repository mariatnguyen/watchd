import React, { PureComponent } from "react";
import "./SearchResults.css";

export default class NothingFound extends PureComponent {
  render() {
    return (
      <div className="search-results__nothing-found">
        <h1>Nothing found. 👀</h1>
        <h3>Try searching again.</h3>
      </div>
    );
  }
}