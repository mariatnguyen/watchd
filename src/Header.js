import React, { Component } from "react";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-container">
          <a href="/watchd/">
            <img
            src="./images/watchd.svg"
            className="header__logo"
            alt="Watchd"
            width="250"
            height="auto"
          />
          </a>
          </div>
      <nav className="navigation">
        <div className={this.props.navigation === "Search" ? "navigation__link navigation__link--active" : "navigation__link"} onClick={(e) => this.props.setNavigation(e)}>Search</div>
        <div className={this.props.navigation === "Watched" ? "navigation__link navigation__link--active" : "navigation__link"} onClick={(e) => this.props.setNavigation(e)}>Watched</div>
      </nav>
      </header>
    )
  };
}
