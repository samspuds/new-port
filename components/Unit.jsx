import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Unit() {
  return (
    <body className="projects-body">
      <section className="projects-section">
        <h1>
          Unit Converter <strong>web app</strong>
        </h1>
        <p>HTML, CSS & JS</p>
        <img src="../images/unit.png" alt="" />
      </section>
      <div className="projects-info">
        <div>
          <a href="https://github.com/samspuds/unit-converter" target="_blank">
            <img className="footer-img" src="../images/github-ico.png" alt="" />
            GitHub Repo
          </a>
          <a
            href="https://stellar-starlight-3f073a.netlify.app"
            target="_blank"
          >
            👁 Live version
          </a>
        </div>
        <p>
          This is the main layout of an Instagram clone. It is built using
          vanilla CSS, and is utilizing Flexbox, CSS Grid, and CSS Variables. It
          was built as a part of Scrimba's Frontend Developer Career Path.
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
        <Link to="/Travel">Next</Link>
      </div>
    </body>
  );
}

export default Unit;
