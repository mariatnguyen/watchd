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
        <div className="navigation__search">Search</div>
        <div className="navigation__watched">Watched</div>
      </nav>
      </header>
    )
  };
}
