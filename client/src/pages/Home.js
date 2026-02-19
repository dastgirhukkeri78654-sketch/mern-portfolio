import React from "react";
import "./Home.css";
import profilePic from "../assets/profile.jpg";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">

        {/* LEFT SIDE IMAGE */}
        <div className="home-image">
          <img src={profilePic} alt="Dastagir" />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="home-content">
          <h1>
            Hi, I'm <span>Dastagir Bashir Hukkeri</span>
          </h1>

          {/* PROFESSIONAL POINTS */}
          <ul className="home-points">
            <li>✔ BCA Graduate</li>
            <li>✔ MERN Stack Developer</li>
            <li>✔ Problem Solver</li>
          </ul>

          <p>
            I am a passionate MERN Stack Developer who loves building modern
            web applications and solving real-world problems with clean,
            scalable, and user-friendly solutions.
          </p>

          {/* BUTTONS */}
          <div className="home-buttons">
            <a href="/projects" className="btn-primary">
              Go to Projects
            </a>

            <a href="/contact" className="btn-secondary">
              Go to Contact
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
