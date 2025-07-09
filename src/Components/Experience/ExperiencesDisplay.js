import "./ExperiencesDisplay.css";
import ExperienceBody from "./ExperienceBody";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const ExperiencesDisplay = (props) => {
  let experiencePathRef = useRef();

  // useEffect(() => {
  //   // Handle animations
  //   // Register GSAP Pluggins
  //   gsap.registerPlugin(ScrollTrigger);

  //   const experienceDisplayTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: experienceContainerRef,
  //       start: "center bottom",
  //     },
  //   });

  //   // ScrollTrigger.matchMedia({

  //   // })
  // });

  return (
    <div className="experiences_display_container">
      <div className="job_container_boundary">
        <div
          className="job_path_bar"
          ref={(el) => (experiencePathRef = el)}
        ></div>
        <div className="job_container">
          {props.experiences.map((job) => (
            <ExperienceBody job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesDisplay;
