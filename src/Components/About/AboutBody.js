import React, { useRef, useEffect } from "react";
import "./AboutBody.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillsBody from "../Skills/SkillsBody";
import skillsData from "../../data/skillsData";

const AboutBody = () => {
  let aboutContainer = useRef();
  let aboutHeader = useRef();
  let aboutBioHeader = useRef();
  let aboutCard = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutContainer,
        start: "top center",
      },
    });

    ScrollTrigger.matchMedia({
      // Mobile
      all: () => {
        aboutTl.fromTo(
          aboutHeader,
          {
            y: 50,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            delay: 0.3,
            ease: "power1-out",
          }
        );

        aboutTl.fromTo(
          aboutBioHeader,
          {
            y: 50,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            delay: 0.3,
            ease: "power1-out",
          }
        );

        aboutTl.fromTo(
          aboutCard,
          {
            y: 50,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            delay: 0.3,
            ease: "power1-out",
          }
        );
      },
    });
  }, []);
  return (
    <div className="about_body-container" ref={(el) => (aboutContainer = el)}>
      <h1 ref={(el) => (aboutHeader = el)}>.About()</h1>
      <div className="about_content-container">
        <div className="about_text-container">
          <h1 ref={(el) => (aboutBioHeader = el)}>Who am I?</h1>
          <div className="about_card" ref={(el) => (aboutCard = el)}>
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
