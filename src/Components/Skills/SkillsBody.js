import React, { useEffect, useRef } from "react";
import "./SkillsBody.css";
import SkillsCard from "./SkillsCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SkillsBody = (props) => {
  let skillsDisplayRef = useRef();

  useEffect(() => {
    // Register gsap pluggin
    gsap.registerPlugin(ScrollTrigger);

    const skillsDisplayTl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsDisplayRef,
      },
    });

    skillsDisplayTl.fromTo(
      skillsDisplayRef,
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        delay: 0.4,
        ease: "power1-out",
      }
    );
  }, []);

  return (
    <div className="skills_body-container">
      <h1>My Skills</h1>
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
