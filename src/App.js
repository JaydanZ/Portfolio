import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import * as THREE from "three";
import planetImg from "./static/planet.png";
import MoonPic from "./static/moon/moon.png";
import ProjectsDisplay from "./Components/Projects/ProjectsDisplay";
import AboutBody from "./Components/About/AboutBody";
import ContactBody from "./Components/Contact/ContactBody";
import projectData from "./data/projectData";
import { Divide as Hamburger } from "hamburger-react";

const App = () => {
  const [projectArrState, setProjectArr] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [mobileNavState, setMobileNav] = useState("");

  let introSec = useRef();
  let introHeader = useRef();
  let introName = useRef();
  let introFooter = useRef();
  let moonRef = useRef();
  let introCTAbtn = useRef();

  let experienceSec = useRef();
  let experienceHeader = useRef();

  let projectsSec = useRef();

  let aboutSec = useRef();
  let contactSec = useRef();

  const toggleMobileNav = (toggled) => {
    if (toggled) {
      // open nav menu
      setMobileNav("active");
    } else {
      // close nav menu
      setMobileNav("");
    }
  };

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const scrollToIntro = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: introSec,
      autoKill: true,
      ease: "power2",
    });
    setMobileNav("");
    setOpen(false);
  };

  const scrollToExperience = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: experienceSec,
      autoKill: true,
      ease: "power2",
    });
    setMobileNav("");
    setOpen(false);
  };

  const scrollToProjects = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: projectsSec,
      autoKill: true,
      ease: "power2",
    });
    setMobileNav("");
    setOpen(false);
  };

  const scrollToAbout = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: aboutSec,
      autoKill: true,
      ease: "power2",
    });
    setMobileNav("");
    setOpen(false);
  };

  const scrollToContact = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: contactSec,
      autoKill: true,
      ease: "power2",
    });
    setMobileNav("");
    setOpen(false);
  };

  const updateProjectArray = () => {
    if (projectArrState.length === 0) {
      setProjectArr(projectData);
    }
  };

  updateProjectArray();

  useEffect(() => {
    // Debug
    //const gui = new dat.GUI();

    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    // Scene
    const scene = new THREE.Scene();

    // Objects
    let particlesGeometry = new THREE.BufferGeometry();
    let yellowStarsGeometry = new THREE.BufferGeometry();
    let blueStarsGeometry = new THREE.BufferGeometry();

    const particlesCount = 1000;

    const posArr = new Float32Array(particlesCount * 3);
    const yellowStarArr = new Float32Array(particlesCount * 3);
    const blueStarArr = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      //posArr[i] = Math.random();
      //posArr[i] = Math.random() - 0.5;
      blueStarArr[i] = (Math.random() - 0.6) * (Math.random() * 6);
      yellowStarArr[i] = (Math.random() - 0.4) * (Math.random() * 7);
      posArr[i] = (Math.random() - 0.5) * (Math.random() * 8);
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArr, 3)
    );

    blueStarsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(blueStarArr, 3)
    );

    yellowStarsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(yellowStarArr, 3)
    );

    // Texture Loader
    const loader = new THREE.TextureLoader();
    const cross = loader.load(planetImg);

    // Materials
    const blueStarMaterial = new THREE.PointsMaterial({
      color: 0xabc8ff,
      size: 0.004,
      map: cross,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const yellowStarMaterial = new THREE.PointsMaterial({
      color: 0xffe9ab,
      size: 0.004,
      map: cross,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.004,
      map: cross,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    // Mesh

    // const shape = new THREE.LineSegments(geometry, material);
    // shape.computeLineDistances();
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );

    const yellowStarMesh = new THREE.Points(
      yellowStarsGeometry,
      yellowStarMaterial
    );

    const blueStarMesh = new THREE.Points(blueStarsGeometry, blueStarMaterial);
    scene.add(particlesMesh, yellowStarMesh, blueStarMesh);

    // Lights

    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    scene.add(camera);

    // Controls
    // const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    //renderer.setClearColor(new THREE.Color("#0f0f0f"), 1);
    renderer.setClearColor(0x000000, 0.0);

    // Mouse

    let mouseX = 0;
    let mouseY = 0;

    const animateParticles = (event) => {
      mouseY = event.clientY;
      mouseX = event.clientX;
    };

    document.addEventListener("mousemove", animateParticles);

    /**
     * Animate
     */

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getDelta();

      // Update objects
      //shape.rotation.x += 0.25 * elapsedTime;
      //shape.rotation.y += 0.25 * elapsedTime;

      particlesMesh.rotation.y -= -0.1 * elapsedTime * 0.4;
      particlesMesh.rotation.x -= -0.1 * elapsedTime * 0.3;

      yellowStarMesh.rotation.y -= -0.1 * elapsedTime * 0.4;
      yellowStarMesh.rotation.x -= -0.1 * elapsedTime * 0.3;

      blueStarMesh.rotation.y -= -0.1 * elapsedTime * 0.4;
      blueStarMesh.rotation.x -= -0.1 * elapsedTime * 0.3;

      if (mouseX > 0) {
        particlesMesh.rotation.x += -mouseY * (elapsedTime * 0.00006);
        particlesMesh.rotation.y += -mouseX * (elapsedTime * 0.00006);

        yellowStarMesh.rotation.x += -mouseY * (elapsedTime * 0.00006);
        yellowStarMesh.rotation.y += -mouseX * (elapsedTime * 0.00006);

        blueStarMesh.rotation.x += -mouseY * (elapsedTime * 0.00006);
        blueStarMesh.rotation.y += -mouseX * (elapsedTime * 0.00006);
      }

      // Update Orbital Controls
      // controls.update()

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    // HTML ANIMATIONS
    //const introAfter = CSSRulePlugin.getRule("intro_name::after");

    const introTl = gsap.timeline();
    const starFieldTl = gsap.timeline();
    const projectHeaderTl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsSec,
        start: "top 80%",
      },
    });

    introTl
      .fromTo(
        camera.position,
        {
          y: 0.8,
        },
        {
          y: 0,
          duration: 2,
        }
      )
      .fromTo(
        moonRef,
        {
          y: 400,
        },
        {
          y: 0,
          duration: 2,
        },
        "<"
      )
      .fromTo(
        introHeader,
        {
          x: -100,
          autoAlpha: 0,
        },
        {
          x: 0,
          delay: 0.5,
          autoAlpha: 1,
          duration: 1,
          ease: "power1.out",
        }
      )
      .fromTo(
        introSec,
        {
          clipPath: "circle(100% at 50% 50%)",
        },
        {
          delay: 0.5,
          clipPath: "none",
        },
        "<"
      )
      .fromTo(
        introName,
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power1.out",
        }
      )
      .fromTo(
        introFooter,
        {
          y: -40,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power1.out",
        }
      )
      .fromTo(
        introCTAbtn,
        {
          x: -100,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power1.out",
        },
        "<"
      );

    // Text and moon animation scrolling down
    introTl
      .fromTo(
        introFooter,
        {
          y: 0,
        },
        {
          y: -700,
          scrollTrigger: {
            start: "top top",
            scrub: 1,
          },
        }
      )
      .fromTo(
        introName,
        {
          y: 0,
        },
        {
          y: -500,
          scrollTrigger: {
            start: "top top",
            scrub: 1,
          },
        }
      )
      .fromTo(
        introHeader,
        {
          y: 0,
        },
        {
          y: -50,
          scrollTrigger: {
            start: "top top",
            scrub: 1,
          },
        }
      )
      .fromTo(
        moonRef,
        {
          y: 0,
        },
        {
          y: 700,
          scrollTrigger: {
            start: "top top",
            scrub: 1,
          },
        }
      )
      .fromTo(
        introCTAbtn,
        {
          y: 0,
        },
        {
          y: -900,
          scrollTrigger: {
            start: "top top",
            scrub: 1,
          },
        }
      );

    starFieldTl.fromTo(
      camera.position,
      {
        y: 0,
      },
      {
        y: -3,
        scrollTrigger: {
          trigger: ".experience",
          endTrigger: ".contact",
          scrub: 1,
        },
      }
    );

    projectHeaderTl.fromTo(
      experienceHeader,
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

    tick();
  }, []);
  return (
    <div className="App">
      <nav className={"navbar " + mobileNavState}>
        <button className="navbar_main" onClick={scrollToIntro}>
          Jaydan
        </button>
        <div className={"navbar_sections " + mobileNavState}>
          <button className="navbar_sections-text" onClick={scrollToExperience}>
            .Experience()
          </button>
          <button className="navbar_sections-text" onClick={scrollToProjects}>
            .Projects()
          </button>
          <button className="navbar_sections-text" onClick={scrollToAbout}>
            .About()
          </button>
          <button className="navbar_sections-text" onClick={scrollToContact}>
            .Contact()
          </button>
          <a
            href="https://drive.google.com/uc?export=download&id=1H8Ygnkodr2OyRNlOAoDlovXxU5tEwrYO"
            className="navbar_cv-download"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
        <div className="navbar_mobile">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={toggleMobileNav}
            size={30}
            color={"white"}
          />
        </div>
      </nav>
      <section className="intro" ref={(el) => (introSec = el)}>
        <div className="intro_container">
          <div className="intro_text_container">
            <div className="intro_text_layout">
              <h2 className="intro_header" ref={(el) => (introHeader = el)}>
                Hello there! I am
              </h2>
              <h1 className="intro_name" ref={(el) => (introName = el)}>
                <span className="intro_name_span">Jaydan Zabar</span>
              </h1>
              <div
                className="intro_footer_container"
                ref={(el) => (introFooter = el)}
              >
                <h2 className="intro_footer_text">Fullstack Developer</h2>
                <a
                  href="https://www.linkedin.com/in/jaydanzabar/"
                  className="intro_icons_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="devicon-linkedin-plain intro_icons"></i>
                </a>
                <a
                  href="https://github.com/JaydanZ"
                  className="intro_icons_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="devicon-github-original intro_icons"></i>
                </a>
              </div>
              <div
                className="intro_btn-container"
                ref={(el) => (introCTAbtn = el)}
              >
                <button className="intro_cta_btn" onClick={scrollToExperience}>
                  See My Work
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          className="moon"
          src={MoonPic}
          ref={(el) => (moonRef = el)}
          alt=""
        ></img>
        <canvas className="webgl"></canvas>
      </section>
      <section className="experience" ref={(el) => (experienceSec = el)}>
        <div className="experience_header">
          <h1 ref={(el) => (experienceHeader = el)}>.Experience()</h1>
        </div>
      </section>
      <section className="projects" ref={(el) => (projectsSec = el)}>
        <ProjectsDisplay projectArr={projectData} />
      </section>
      <section className="about" ref={(el) => (aboutSec = el)}>
        <AboutBody />
      </section>
      <ContactBody />
      <footer ref={(el) => (contactSec = el)}></footer>
    </div>
  );
};

export default App;
