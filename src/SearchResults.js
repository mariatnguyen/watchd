import React, { PureComponent } from "react";
import "./SearchResults.css";

export default class SearchResults extends PureComponent {
  render() {
    return (
      <div className="search-results">
        {console.log(this.props.searchResults)}
      </div>
    );
  }
}