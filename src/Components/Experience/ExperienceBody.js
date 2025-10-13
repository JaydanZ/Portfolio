import "./ExperienceBody.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ExperienceBody = (props) => {
  const { job, isMobile } = props;

  let experienceBodyRef = useRef();

  const jobAcomplishments =
    isMobile && job.mobileAcomplishments
      ? job.mobileAcomplishments
      : job.acomplishments;

  useEffect(() => {
    // Handles animations
    gsap.registerPlugin(ScrollTrigger);

    const experienceBodyTl = gsap.timeline({
      scrollTrigger: {
        trigger: experienceBodyRef,
        start: "top bottom",
      },
    });

    experienceBodyTl.fromTo(
      experienceBodyRef,
      {
        y: 50,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.5,
        ease: "power1-out",
      }
    );
  });

  return (
    <div
      className="experience_body_container"
      ref={(el) => (experienceBodyRef = el)}
    >
      <div className="experience_body_header">
        <div className="experience_title">{job.jobTitle}</div>
        <div className="experience_dates_container">
          <div className="job_dates">
            {job.startDate} - {job.endDate}
          </div>
        </div>
      </div>
      <div className="experience_body">
        <div className="experience_role">{job.jobRole}</div>
        <div className="experience_tech_container">
          {job.technologies.map((tech) => (
            <h2>{tech}</h2>
          ))}
        </div>
        <hr className="body-divider" />
        <div className="experience_acomplishments_container">
          {jobAcomplishments.map((acomplishment) => (
            <h2>
              <span>- </span>
              {acomplishment}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceBody;
