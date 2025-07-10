import ProjectBody from "./ProjectBody";
import "./ProjectsDisplay.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectsDisplay = (props) => {
  let projectHeaderRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const projectHeaderTl = gsap.timeline({
      scrollTrigger: {
        trigger: projectHeaderRef,
        start: "center bottom",
      },
    });

    projectHeaderTl.fromTo(
      projectHeaderRef,
      {
        y: 50,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.3,
        delay: 0.5,
        ease: "power1-out",
      }
    );
  });

  return (
    <div className="project_display_container">
      <div className="project_display">
        <h1
          className="project_display_header"
          ref={(el) => (projectHeaderRef = el)}
        >
          .Projects()
        </h1>
        {props.projectArr.map((entry, index) => (
          <ProjectBody
            projectNum={"0" + (index + 1) + ". "}
            projectHeader={entry.projectName}
            projectBody={entry.projectBody}
            projectRole={entry.projectRole}
            projectStack={entry.projectStack}
            projectLinks={entry.projectLinks}
            projectGithub={entry.projectGithub}
            projectDemo={entry.projectDemo}
            projectMockup={entry.mockup}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsDisplay;
