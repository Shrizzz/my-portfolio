import React from "react";
import { NavLink } from "react-router-dom";
import dp from "../img/avatar.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="profile">
          <img src={dp} alt="profilepic" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/experience" exact activeClassName="active">
              Skills & Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact ME
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>@2021 Shrinidhi</p>
        </footer>
      </nav>
    </div>
  );
};

export default Navbar;
