import React, { PureComponent } from "react";
import "./SearchBar.css";

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.props.setSearchTerm(this.searchInput.current.value)
    }
  }

  emptySearch(e) { 
    console.log("empty")
  }

  render() {
    return (
      <div className="search-bar">
        <form className="search-bar__field">
          <input ref={this.searchInput} id="search-bar__input" className="search-bar__input" type="text" placeholder="Search" onKeyDown={this.handleEnter} />
          <button className="search-bar__button" onClick={(e) => {e.preventDefault();this.props.setSearchTerm(this.searchInput.current.value)}}>
            <img src="./images/search.svg"
              alt="search"
              width="20"
              height="20"
            />
          </button>
        </form>
      </div>
    );
  }
}