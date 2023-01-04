import { useState } from "react";
import React from "react";

function Footer() {
  return (
    <footer>
      <a href="mailto:ding.3wtc@simplelogin.co">ding.3wtc@simplelogin.co</a>
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
              src="../images/linkedin-ico.png"
              alt=""
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
