import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <div href="/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">Sanyam Jain</span>
            <span className="grey-color">/&gt;</span>
          </div>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/achievement">Achievements</Link>
      </div>
    </header>
  );
};

export default Navbar;
