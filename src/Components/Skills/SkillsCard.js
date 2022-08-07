import React, { useEffect, useRef } from "react";
import "./SkillsCard.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SkillsCard = (props) => {
  let skillItemRef = useRef();

  useEffect(() => {
    // Register gsap pluggin
    gsap.registerPlugin(ScrollTrigger);

    const skillItemTl = gsap.timeline({
      scrollTrigger: {
        trigger: skillItemRef,
      },
    });

    skillItemTl.fromTo(
      skillItemRef,
      {
        y: 40,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.8,
        ease: "power1-out",
      }
    );
  }, []);
  return (
    <div className="skills_card" ref={(el) => (skillCardRef = el)}>
      <h2>{props.data.category}</h2>
      <div className="skills_container" ref={(el) => (skillItemRef = el)}>
        {props.data.skills.map((entry) => (
          <div className="skill_item">
            <div className="skill_img">
              <i className={entry.icon} />
            </div>
            <h3>{entry.tech}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
