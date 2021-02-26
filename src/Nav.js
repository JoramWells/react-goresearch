import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <h3>Logo</h3>
        <ul>
          <Link to="/about">
            <li className="nav-links">About</li>
          </Link>
          <Link to="/dashboard">
            <li className="nav-links">Dashboard</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
