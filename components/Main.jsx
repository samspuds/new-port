import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="mainBody">
      <section className="intro">
        <div className="intro-words">
          <h1>Hi, I am Daniel</h1>
          <p>Front-End Developer</p>
        </div>
        <img src="/images/viet.jpg" alt="" />
      </section>
      <section className="service" id="about-me">
        <h2>What I do</h2>
        <div className="service-1">
          <div className="service-2">
            <h3>Design</h3>
            <p>
              I strive to create beautiful and intuitive web apps, meaning I
              design with both aesthetics and usability in mind. You will get
              your designs delivered as Figma files, as websites or both.
            </p>
          </div>
          <div className="service-2">
            <h3>Development</h3>
            <p>
              I am a versatile frontend developer with a speciality in React JS
              and CSS. I also have a solid grip of the fundamentals of web
              development using HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>

        <Link to="/Typing" className="btn">
          Projects
        </Link>
      </section>
      <section className="about-me">
        <div className="about-me-main">
          <div className="about-me-main1">
            <h2>Who I am</h2>
            <p>
              Front-End Developer based in <span> Ireland and the UK</span>
            </p>
            <div>
              <p>
                I am a web developer and designer primarily based out of Galway,
                Ireland and Manchester, UK. I am willing to relocate with
                immediate effect if the right role comes along. I love building
                apps that solve real-world problems, with strong UX/UI in mind.
                My specialities include{" "}
                <strong>HTML5, JavaScript, React JS, CSS</strong>, and{" "}
                <strong>Styled Components.</strong> I have strong experience
                using <strong>Github, Netlify, Figma</strong> and{" "}
                <strong>VS Code.</strong>
              </p>
              <p>
                I have an extemely versatile background, I love challenges and
                problem solving. My academic background is in business, teaching
                and occupational therapy. I have a bachelors degree in business
                where I specialised in business management, and I have a masters
                degree in occupational therapy. I have many interests spanning
                from sports to economics and I am also a former snowboard
                instructor.
              </p>
            </div>
          </div>
          <img src="/images/profilepic.png" alt="" />
        </div>
      </section>
      <section className="my-projects" id="section1">
        <h2>My projects</h2>
        <p>A selection of my range of work</p>
        <div className="my-projects1">
        <Link to="/Typing">
            <img className="portfolio-item" src="../images/speed.png" alt="" />
          </Link>
          <Link to="/Meme">
            <img className="portfolio-item" src="/images/meme.png" alt="" />
          </Link>
          <Link to="/Unit">
            <img className="portfolio-item" src="/images/unit.png" alt="" />
          </Link>
          <Link to="/Travel">
            <img className="portfolio-item" src="/images/travel.png" alt="" />
          </Link>
        </div>
      </section>
    </main>
  );
}
