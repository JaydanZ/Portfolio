import React, { useEffect, useRef } from "react";
import "./SkillsBody.css";
import SkillsCard from "./SkillsCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SkillsBody = (props) => {
  let skillsDisplayRef = useRef();
  let skillsHeader = useRef();

  useEffect(() => {
    // Register gsap pluggin
    gsap.registerPlugin(ScrollTrigger);

    const skillsDisplayTl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsDisplayRef,
      },
    });

    skillsDisplayTl.fromTo(
      skillsHeader,
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

    skillsDisplayTl.fromTo(
      skillsDisplayRef,
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.4,
        ease: "power1-out",
      }
    );
  }, []);

  return (
    <div className="skills_body-container">
      <h1 ref={(el) => (skillsHeader = el)}>My Skills</h1>
      <div
        className="skills_display-container"
        ref={(el) => (skillsDisplayRef = el)}
      >
        {props.skillsData.map((entry) => (
          <SkillsCard data={entry} />
        ))}
      </div>
    </div>
  );
};

export default SkillsBody;
