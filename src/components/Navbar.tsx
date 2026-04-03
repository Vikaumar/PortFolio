import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

// Lenis instance exposed for initialFX
export let lenis: Lenis | null = null;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Remove the smooth-wrapper/smooth-content height locking (was needed for ScrollSmoother)
    const wrapper = document.getElementById("smooth-wrapper");
    const content = document.getElementById("smooth-content");
    if (wrapper) wrapper.style.cssText = "";
    if (content) content.style.cssText = "";

    // Create Lenis instance
    lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    // Pause at start (same behaviour as before — initialFX resumes it)
    lenis.stop();

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis!.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Nav link click → smooth scroll to section
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let el = e.currentTarget as HTMLAnchorElement;
          let section = el.getAttribute("data-href");
          if (section) {
            const target = document.querySelector(section);
            if (target) lenis!.scrollTo(target as HTMLElement, { offset: 0 });
          }
        }
      });
    });

    return () => {
      lenis?.destroy();
      lenis = null;
      gsap.ticker.remove((time) => {
        lenis?.raf(time * 1000);
      });
    };
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          VK
        </a>
        <a
          href="mailto:vikas11ku22@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          vikas11ku22@gmail.com
        </a>

        {/* Desktop nav links */}
        <ul className="nav-desktop">
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className={`hamburger ${menuOpen ? "hamburger-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-cursor="disable"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile fullscreen overlay menu */}
      <div className={`mobile-nav-overlay ${menuOpen ? "mobile-nav-open" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <a href="#about" onClick={handleNavClick}>ABOUT</a>
          </li>
          <li>
            <a href="#work" onClick={handleNavClick}>WORK</a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick}>CONTACT</a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
