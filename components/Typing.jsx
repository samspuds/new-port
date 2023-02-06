import React from "react";
import { Link } from "react-router-dom";

function Typing() {
  return (
    <body className="projects-body">
      <section className="projects-section">
        <h1>
          Speed Typing <strong>web app</strong>
        </h1>
        <p>HTML, CSS, JS & React</p>
        <img src="/images/speed.png" alt="" />
      </section>
      <div className="projects-info">
        <div>
          <a href="https://github.com/samspuds/Spped-Typing-Game" target="_blank">
            <img className="footer-img" src="/images/github-ico.png" alt="" />
            GitHub Repo
          </a>
          <a
            href="https://creative-scone-7317fc.netlify.app/"
            target="_blank"
          >
            👁 Live version
          </a>
        </div>
        <p>
          This is a simple unit converter made using JavaScript, CSS flexbox and HTML, this converts both ways using the number inputted in the box provided at the top. Coversions are provided below after the convert button is clicked.
        </p>
        <p>
          This was made early on in Scrimba's Frontend Developer Career Path course. This was also deployed using Netlify.
        </p>
        <p>
          Please try it out for yourself in the link provided
        </p>
      </div>
      <div>
        <Link to="/Meme">Next</Link>
      </div>
    </body>
  );
}

export default Typing;
