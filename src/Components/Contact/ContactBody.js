import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ContactBody.css";

import MountainFront from "../../svg/mountain1.svg";
import MountainMiddle from "../../svg/mountain2.svg";
import MountainBack from "../../svg/mountain3.svg";

const ContactBody = () => {
  let contactSection = useRef();
  let mountainFrontRef = useRef();
  let mountainMiddleRef = useRef();
  let mountainBackRef = useRef();
  let contactFormRef = useRef();
  let footerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let contactTl = gsap.timeline();

    ScrollTrigger.matchMedia({
      "(min-width: 901px)": () => {
        contactTl.to(contactSection, {
          scrollTrigger: {
            trigger: ".contact",
            start: "top top",
            pin: true,
          },
        });

        let mountainTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".contact",
            start: "middle top",
            //end: "bottom 100%",
            scrub: 2,
          },
        });

        mountainTl
          .fromTo(
            contactFormRef,
            {
              y: 1000,
            },
            {
              y: -80,
            }
          )
          .fromTo(
            mountainFrontRef,
            {
              y: 700,
            },
            {
              y: -50,
              delay: 0.2,
            },
            "<"
          )
          .fromTo(
            footerRef,
            {
              y: 700,
            },
            {
              y: 0,
            },
            "<"
          )
          .fromTo(
            mountainMiddleRef,
            {
              y: 500,
            },
            {
              y: 0,
              delay: 0.2,
            },
            "<"
          )
          .fromTo(
            mountainBackRef,
            {
              y: 500,
            },
            {
              y: 0,
              delay: 0.1,
            },
            "<"
          );
      },
    });
  }, []);

  return (
    <React.Fragment>
      <section className="contact" ref={(el) => (contactSection = el)}>
        <div className="mountains_container">
          <div className="contact_card_container">
            <div className="contact_card" ref={(el) => (contactFormRef = el)}>
              <h2 className="contact_card_header">.Contact()</h2>
              <div className="contact_card_body">
                <div className="contact_card_body-labels">
                  <h1>
                    Have projects in mind? Let's work<span> together</span>
                  </h1>
                  <div className="contact_card-links">
                    {/* <h2>jaydan.zabar@gmail.com</h2> */}
                    <a
                      href="mailto: jaydan.zabar@gmail.com"
                      className="contact_card-links-email"
                    >
                      jaydan.zabar@gmail.com
                    </a>
                    <div className="contact_card-icon-container">
                      <a
                        href="https://www.linkedin.com/in/jaydanzabar/"
                        className="intro_icons_link"
                      >
                        <i className="devicon-linkedin-plain contact_card-links-icons"></i>
                      </a>
                      <a
                        href="https://github.com/JaydanZ"
                        className="intro_icons_link"
                      >
                        <i className="devicon-github-original contact_card-links-icons"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <form
                  name="contact form"
                  method="POST"
                  className="contact_card_body-form"
                >
                  <input type="hidden" name="contact" value="contact form" />
                  <input type="text" placeholder="Name" name="name" />
                  <input type="email" placeholder="Email" name="email" />
                  <textarea placeholder="Message" name="message" />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <img
            className="mountain_front"
            src={MountainFront}
            ref={(el) => (mountainFrontRef = el)}
            alt=""
          ></img>
          <img
            className="mountain_middle"
            src={MountainMiddle}
            ref={(el) => (mountainMiddleRef = el)}
            alt=""
          ></img>
          <img
            className="mountain_back"
            src={MountainBack}
            ref={(el) => (mountainBackRef = el)}
            alt=""
          ></img>
          <div className="portfolio_footer" ref={(el) => (footerRef = el)}>
            <h1 className="portfolio_footer_text">
              Designed and developed by Jaydan Zabar
            </h1>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactBody;
