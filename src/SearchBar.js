import React, { PureComponent } from "react";
import "./SearchBar.css";

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

  render() {
    return (
      <div className="search-bar">
        <div className="search-bar__field">
          <input ref={this.searchInput} id="search-bar__input" className="search-bar__input" type="text" placeholder="Search" />
          <div className="search-bar__button" onClick={(e) => { this.props.setSearchTerm(this.searchInput.current.value) }}>
            <img src="./images/search.svg"
              alt="search"
              width="20"
              height="20"
              />
          </div>
        </div>
      </div>
    );
  }
}