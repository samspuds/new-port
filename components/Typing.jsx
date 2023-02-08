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
          This is a speed typing game wrtitten in react. This game was made to test my skills writing clean code in React. Code was updated in Github using front end developer best practices. Steps were taken to ensure that the code was DRY.
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
