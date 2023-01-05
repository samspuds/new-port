import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Travel() {
  return (
    <body className="projects-body">
      <section className="projects-section">
        <h1>
          My Travel Journal <strong>web app</strong>
        </h1>
        <p>HTML, CSS, JS & React</p>
        <img src="/images/travel.png" alt="" />
      </section>
      <div className="projects-info">
        <div>
          <a
            href="https://github.com/samspuds/my-travel-journal"
            target="_blank"
          >
            <img className="footer-img" src="/images/github-ico.png" alt="" />
            GitHub Repo
          </a>
          <a
            href="https://deft-bienenstitch-52e2eb.netlify.app/"
            target="_blank"
          >
            👁 Live version
          </a>
        </div>
        <p>
          This is the main layout of a Travel journal website. It is built using
          React, and is utilizing Flexbox for the design layout. It
          was also built as a part of Scrimba's Frontend Developer Career Path.
        </p>
        <p>
          New post's can be easily added to the data folder which renders the objects onto the page using React.js
        </p>
        <p>
          
        </p>
      </div>
      <div>
        <Link to="/Meme">Next</Link>
      </div>
    </body>
  );
}

export default Travel;
