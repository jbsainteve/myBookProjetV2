import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/legacy"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Legacy</li>
          </NavLink>
          <NavLink
            to="/datascience"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Data</li>
          </NavLink>
          <NavLink
            to="/webproject"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Web</li>
          </NavLink>
          <NavLink
            to="/publications"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Publications</li>
          </NavLink>
          <NavLink
            to="/certifications"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Certifications</li>
          </NavLink>
          <NavLink
            to="/autresprojets"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Archives</li>
          </NavLink>
          {/* <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>About</li>
          </NavLink> */}
        </ul>
      </nav>
      {/* <h1>Book projets</h1> */}
    </div>
  );
};

export default Navigation;
