import "./ExperiencesDisplay.css";
import ExperienceBody from "./ExperienceBody";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ExperiencesDisplay = (props) => {
  const { isMobile } = props;
  let experiencePathRef = useRef();

  useEffect(() => {
    // Handles animations
    gsap.registerPlugin(ScrollTrigger);

    const experienceDisplayTl = gsap.timeline({
      scrollTrigger: {
        trigger: experiencePathRef,
        start: "center bottom",
      },
    });

    ScrollTrigger.matchMedia({
      "(min-width: 901px)": () => {
        experienceDisplayTl.fromTo(
          experiencePathRef,
          {
            "--job-bar-path": "0%",
          },
          {
            "--job-bar-path": "100%",
            duration: 1,
            delay: 0.8,
            ease: "power1-out",
          }
        );
      },
    });
  });

  return (
    <div className="experiences_display_container">
      <div className="job_container_boundary">
        <div
          className="job_path_bar"
          ref={(el) => (experiencePathRef = el)}
        ></div>
        <div className="job_container">
          {props.experiences.map((job) => (
            <ExperienceBody isMobile={isMobile} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesDisplay;
