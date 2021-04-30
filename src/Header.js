import React, { Component } from "react";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-container">
          <a href="/watchd/"><img
            className="header__logo"
            src="./images/watchd.svg"
            alt="Watchd"
            width="250"
            height="auto"
          />
          </a>
          </div>
      </header>
    )
  };
}
