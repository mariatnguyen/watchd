import React, { Component } from "react";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-container">
          <img
            className="header__logo"
            src="./images/Watchd.svg"
            alt="Watchd"
            width="250"
            height="auto"
          /></div>
      </header>
    )
  };
}