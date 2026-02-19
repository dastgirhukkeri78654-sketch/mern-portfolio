import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <h2 className="about-title">About Me</h2>

        {/* Career Objective */}
        <div className="objective-card">
          <h3>Career Objective</h3>
          <p>
            Motivated and passionate BCA student with strong interest in MERN Stack Development.
            Seeking an opportunity to apply my technical skills in a professional environment
            where I can contribute to real-world projects and continuously enhance my knowledge
            as a full-stack developer.
          </p>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h3>Education</h3>

          <table className="education-table">
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Institution</th>
                <th>Year</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BCA (Pursuing)</td>
                <td>KLE Society's RLS Institute, Belagavi</td>
                <td>2024 – 2027</td>
                <td>-</td>
              </tr>
              <tr>
                <td>PUC (Computer Science)</td>
                <td>A.B.M. Gogte Junior College, Shiroda</td>
                <td>2024</td>
                <td>69%</td>
              </tr>
              <tr>
                <td>SSLC</td>
                <td>St. Francis Xavier's English Medium School</td>
                <td>2022</td>
                <td>73%</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </section>
  );
}

export default About;
