import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Meme() {
  return (
    <body className="projects-body">
      <section className="projects-section">
        <h1>
          Meme Generator <strong>web app</strong>
        </h1>
        <p>HTML & CSS</p>
        <img src="../images/meme.png" alt="" />
      </section>
      <div className="projects-info">
        <div>
          <a href="https://github.com/samspuds/meme-generator" target="_blank">
            <img className="footer-img" src="../images/github-ico.png" alt="" />
            GitHub Repo
          </a>
          <a href="https://calm-caramel-eb8ed9.netlify.app" target="_blank">
            👁 Live version
          </a>
        </div>
        <p>
          This is the main layout of an Instagram clone. It is built using React
          JS, and is utilizing Flexbox, CSS Grid, and CSS Variables. It was
          built as a part of Scrimba's Frontend Developer Career Path.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et
          amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur
          incidunt?
        </p>
        <p>
          Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo
          molestiae eligendi sint culpa nobis voluptas sapiente voluptate,
          magnam ipsum eius earum?
        </p>
      </div>
      <div>
        <Link to="/Unit">Next</Link>
      </div>
    </body>
  );
}

export default Meme;
