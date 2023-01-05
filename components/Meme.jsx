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
        <p>HTML, JS, React & CSS</p>
        <img src="/images/meme.png" alt="" />
      </section>
      <div className="projects-info">
        <div>
          <a href="https://github.com/samspuds/meme-generator" target="_blank">
            <img className="footer-img" src="/images/github-ico.png" alt="" />
            GitHub Repo
          </a>
          <a href="https://calm-caramel-eb8ed9.netlify.app" target="_blank">
            👁 Live version
          </a>
        </div>
        <p>
          This is the main layout of a Meme Generator. It is built using React
          JS, and is utilizing Flexbox for the design. I am a member of a small Bitcoin community and I build this so the member in the community can easily make memes in a few keystrokes without have to sign up to a service or download images. It is able to be used on any device.
        </p>
        <p>
          This web app allows the user to create personalised memes. The images are randomised on each click of the 'Get New Image' button which utilises an API to fetch the images. The text is fixed to the top and bottom areas of the image and remains in place on different sized devices. 
        </p>
        <p>
          Please try it out for yourself, with the live version provided in the link. It was deployed using Netlify and Vite.
        </p>
      </div>
      <div>
        <Link to="/Unit">Next</Link>
      </div>
    </body>
  );
}

export default Meme;
