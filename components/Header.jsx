import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function openHam() {
    setNavbarOpen((prevState) => !prevState);
  }

  return (
    <header>
      <nav className="navbar" role="navigation">
        <div className="profile__container">
          <div id="profile-image">
            <Link to="/Main">
              <img id="profile" src="../images/bw.png" alt="" />
            </Link>
          </div>
          <span>devdan</span>
        </div>
        <ul className="ulnav">
          <li class="nav__item">
            <Link to="/Main">Main</Link>
          </li>
          <li class="nav__item">
            <Link to="/Meme">Projects</Link>
          </li>
          <li class="nav__item">
            <a href="#about-me">About</a>
          </li>
          <li class="nav__item">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div class="btn">
          <button onClick={openHam}>{navbarOpen ? "X" : "☰"}</button>
        </div>
      </nav>

      <div className="side-navbar">
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li>
            <Link to="/Main">Main</Link>
          </li>
          <li>
            <Link to="/Meme">Projects</Link>
          </li>
          <li>
            <a href="#about-me">ABOUT</a>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
