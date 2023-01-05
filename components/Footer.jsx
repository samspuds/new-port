import { useState } from "react";
import React from "react";

function Footer() {
  return (
    <footer>
      <h4>email: <a href="mailto:ding.3wtc@simplelogin.co" target="_blank">danieldonnellan@hotmail.com</a></h4>
      <ul>
        <li className="footer-list">
          <a href="https://github.com/samspuds" target="_blank">
            <img className="footer-img" src="../images/github-ico.png" alt="" />
          </a>
        </li>
        <li className="footer-list">
          <a
            href="https://www.linkedin.com/in/daniel-donnellan-30a2671b6/"
            target="_blank"
          >
            <img
              className="footer-img"
              src="/images/linkedin-ico.png"
              alt=""
            />
          </a>
        </li>
      </ul>
      <p><strong>devdan.dev ©2023</strong></p>
      
    </footer>
  );
}

export default Footer;
