import React, { PureComponent } from "react";
import "./SearchBar.css";

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput() {
    return this.searchInput.current.value
  }

  render() {
    return (
      <form className="search-bar">
        <div className="search-bar__field">
          <input ref={this.searchInput} id="search-bar__input" className="search-bar__input" type="text" />
          <div className="search-bar__button">
            <img src="./images/search.svg"
              alt="search"
              width="20"
              height="20" />
          </div>
        </div>
        <div className="search-bar__btn" onClick={(e) => { this.props.setSearchTerm() }}>Search</div>
      </form>
    );
  }
}