import React, {Component} from "react"
class Header extends React.Component {
    render() {
      return (
        <div>
          <header id="header" style={{ fontSize: "16px" }}>
            <div className="container-fluid">
              <div className="pull-left" id="logo">
                <h1>
                  <a href="index.html">
                    <span style={{ color: "red" }}>Go</span>|Research
                  </a>
                </h1>
              </div>
              <nav id="nav-menu-container" style={{ fontSize: "16px" }}>
                <ul className="nav-menu">
                  <li className="menu-active">
                    <a href="#">Home</a>|
                  </li>
                  <li>
                    <a href="/about">project</a>|
                  </li>
                  <li className="nav-menu">
                    <a href="#">Content Writing</a>|
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      );
    }
  }

  export default Header;
  