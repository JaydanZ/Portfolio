import React from "react";
import "./AboutBody.css";
import SkillsBody from "../Skills/SkillsBody";
import skillsData from "../../data/skillsData";

const AboutBody = () => {
  return (
    <div className="about_body-container">
      <h1>.About()</h1>
      <div className="about_content-container">
        <div className="about_text-container">
          <h1>Who am I?</h1>
          <div className="about_card">
            <h2>
              I'm a fullstack developer with a passion for code that builds both
              web and desktop applications.
            </h2>
            <h2>
              My passion for web development started when I was developing my
              capstone project for my final year of college which we later
              named, “Snapnmix”. It gave me full exposure to working on a
              fullstack application from designing and implementing the UI,
              learning the little nuances of React and State management, source
              control with Git and getting some exposure into our Node.js and
              Express.js backend.
            </h2>
            <h2>
              After finally completing the project at the end of my semester, I
              decided that this is what I wanted to pursue as a career.
            </h2>
            <h3>
              <span>Education:</span> Conestoga College - Software Engineering
              Technology
            </h3>
            <h4>
              <span>Key Courses:</span> Web Design and Development, Mobile
              Application Development, Embedded Systems, Data Structures,
              Business Intelligence, System Analysis and Design, Advanced
              Software Quality
            </h4>
          </div>
        </div>
        <SkillsBody skillsData={skillsData} />
      </div>
    </div>
  );
};

export default AboutBody;
