import React, { Component } from "react";
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer__credit">
          <span className="footer__powered-by">Powered by </span>
        <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">
          <img src="./images/themoviedatabase.svg" alt="The Movie Database" width="150" height="auto" />
        </a></p>
        <p className="footer__github"><a href="https://github.com/mariatnguyen" target="_blank" rel="noreferrer">mariatnguyen @ Github</a></p>
      </footer>
    )
  };
}