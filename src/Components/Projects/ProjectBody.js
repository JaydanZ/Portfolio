import React, { useState, useEffect, useRef } from "react";
import "./ProjectBody.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SnapnmixHome from "../../static/snapnmix/snapnmix-home.png";
import SnapnmixAccount from "../../static/snapnmix/snapnmix-account.png";
import SnapnmixScan from "../../static/snapnmix/snapnmix-scan.png";

import BlackjackGame from "../../static/blackjack/blackjack-game.png";
import BlackjackBet from "../../static/blackjack/blackjack-bet.png";

import LiveLiftHome from "../../static/livelift/livelift-home.png";
import LiveLiftProgram from "../../static/livelift/livelift-program.png";

import FDMSData from "../../static/fdms/fdms-data.png";
import FDMSHome from "../../static/fdms/fdms-home.png";

import SnapnmixMockup from "../../static/snapnmix/snapnmix-mockup.png";
import LiveLiftMockup from "../../static/livelift/livelift-mockup.png";
import FDMSMockup from "../../static/fdms/fdms-mockup.png";
import BlackjackMockup from "../../static/blackjack/blackjack-mockup.png";

const ProjectBody = (props) => {
  const [buttonCount, setButtonCount] = useState();

  let projectBodyRef = useRef();
  let descContainerRef = useRef();
  let descHeaderRef = useRef();
  let descBodyRef = useRef();
  let descRoleRef = useRef();
  let stackHeaderRef = useRef();
  let descStackRef = useRef();
  let btnContainerRef = useRef();
  let mockupRef = useRef();
  let mockupImg = [];
  let mockupClass;

  const handleGithubClick = () => {
    window.open("" + props.projectGithub + "", "_blank");
  };

  const handleDemoClick = () => {
    window.open("" + props.projectDemo + "", "_blank");
  };

  const checkMockup = () => {
    if (props.projectMockup === "snapnmix") {
      // mockupImg.push(SnapnmixHome);
      // mockupImg.push(SnapnmixAccount);
      // mockupImg.push(SnapnmixScan);
      mockupImg.push(SnapnmixMockup);
      mockupClass = "app_mockup";
      return;
    }

    if (props.projectMockup === "blackjack") {
      // mockupImg.push(BlackjackGame);
      // mockupImg.push(BlackjackBet);
      mockupImg.push(BlackjackMockup);
      mockupClass = "app_mockup";
      return;
    }

    if (props.projectMockup === "livelift") {
      // mockupImg.push(LiveLiftHome);
      // mockupImg.push(LiveLiftProgram);
      mockupImg.push(LiveLiftMockup);
      mockupClass = "app_mockup";
      return;
    }

    if (props.projectMockup === "fdms") {
      // mockupImg.push(FDMSHome);
      // mockupImg.push(FDMSData);
      mockupImg.push(FDMSMockup);
      mockupClass = "app_mockup";
      return;
    }
  };

  checkMockup();

  useEffect(() => {
    const checkButtonCount = () => {
      if (props.projectLinks > 1) {
        setButtonCount(2);
      } else {
        setButtonCount(1);
      }
    };

    checkButtonCount();
  }, [props.projectLinks]);

  useEffect(() => {
    // Handle animations

    // Register GSAP Pluggins
    gsap.registerPlugin(ScrollTrigger);

    const projectBodyTl = gsap.timeline({
      scrollTrigger: {
        trigger: projectBodyRef,
        start: "center bottom",
      },
    });

    projectBodyTl
      .fromTo(
        descHeaderRef,
        {
          x: -100,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power1-out",
        }
      )
      .fromTo(
        descBodyRef,
        {
          x: -100,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "power1-out",
        },
        "<"
      )
      .fromTo(
        descRoleRef,
        {
          x: -100,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "power1-out",
        },
        "<"
      )
      .fromTo(
        descContainerRef,
        {
          "--height-max": "0%",
        },
        {
          "--height-max": "90%",
          duration: 0.8,
          ease: "power1-out",
        },
        "<"
      )
      .fromTo(
        stackHeaderRef,
        {
          x: -100,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power1-out",
        },
        "<"
      )
      .fromTo(
        descStackRef,
        {
          x: -100,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power1-out",
        },
        "<"
      )
      .fromTo(
        mockupRef,
        {
          x: -50,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power1-out",
        },
        "<"
      )
      .fromTo(
        btnContainerRef,
        {
          y: 40,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          delay: 0.5,
          ease: "power1-out",
        },
        "<"
      );
  }, []);
  return (
    <div ref={(el) => (projectBodyRef = el)} className="project_body_container">
      <div
        ref={(el) => (descContainerRef = el)}
        className="project_desc_container"
      >
        <h1 ref={(el) => (descHeaderRef = el)}>
          <span>{props.projectNum}</span>
          {props.projectHeader}
        </h1>
        <h2 ref={(el) => (descBodyRef = el)}>{props.projectBody}</h2>
        <h3 ref={(el) => (descRoleRef = el)}>
          <span>ROLE: </span>
          {props.projectRole}
        </h3>
        <h4 ref={(el) => (stackHeaderRef = el)}>Built Using:</h4>
        <div
          ref={(el) => (descStackRef = el)}
          className="project_stack_container"
        >
          {props.projectStack.map((entry) => (
            <div>{entry}</div>
          ))}
        </div>
        <div
          ref={(el) => (btnContainerRef = el)}
          className="project_button_container"
        >
          {buttonCount > 1 && (
            <button className="project_demo_btn" onClick={handleDemoClick}>
              View Demo
            </button>
          )}
          <button className="project_github_btn" onClick={handleGithubClick}>
            View Github
          </button>
        </div>
        {mockupImg.map((entry) => (
          <div className="app_mockup-container" ref={(el) => (mockupRef = el)}>
            <div className="app_mockup-overlay">
              <img className={mockupClass} src={entry} alt=""></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectBody;
