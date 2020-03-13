import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-start">
          <NavLink
            exact
            to="/"
            className="navbar-item logo"
            activeClassName={"has-text-primary"}
          >
            Kochanie... co na obiad?
          </NavLink>
          <NavLink
            exact
            to="/dodaj"
            className="navbar-item"
            activeClassName={"has-text-primary"}
          >
            Dodaj przepis
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Navigation;
