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
              Hey! I'm a Full-Stack software developer with 2.5 years of
              hands-on experience building and maintaining web applications
              across both frontend and backend systems.
            </h2>
            <h2>
              I graduated from Conestoga College's Software Engineering
              Technology program in 2022, and I'm currently applying practical
              development skills to deliver reliable, user-focused solutions.
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
