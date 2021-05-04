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
<<<<<<< HEAD
=======
            src="./images/watchd.svg"
>>>>>>> 13812b8b7a793aaf76c3970af329c4dc4edea0b6
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
