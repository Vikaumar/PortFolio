import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Edura",
    category: "Gamified Learning Platform",
    tools: "Spring Boot, HTML/CSS/JS, Gemini API",
    image: "/images/projects/edura.png",
    link: "https://github.com/Vikaumar/Edura.LearningApp",
  },
  {
    title: "Delicia",
    category: "Food Delivery Platform",
    tools: "JavaScript, React, Node.js/Express, MongoDB",
    image: "/images/projects/delicia.png?v=2",
    link: "https://github.com/Vikaumar/Delicia",
  },
  {
    title: "Prescripto",
    category: "Full-Stack Web App",
    tools: "JavaScript, Node.js, React",
    image: "/images/projects/prescripto.png?v=2",
    link: "https://github.com/Vikaumar/Prescripto",
  },
  {
    title: "VidhyaSetu",
    category: "Smart Education Platform",
    tools: "MERN, OpenAI, Python, JWT",
    image: "/images/projects/vidhyasetu.png",
    link: "https://github.com/Vikaumar/VidhyaSetu",
  },
  {
    title: "GTA VI Landing",
    category: "Frontend Clone",
    tools: "JavaScript, HTML, CSS, GSAP",
    image: "/images/projects/gtavi.png",
    link: "https://github.com/Vikaumar/GTA-VI",
  },
  {
    title: "AuthX",
    category: "Authentication System",
    tools: "JavaScript, Node.js, JWT, PostgreSQL, Redis",
    image: "/images/projects/authx.png",
    link: "https://github.com/Vikaumar/AuthX",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            className="carousel-github-link"
                            data-cursor="disable"
                          >
                            View on GitHub →
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      {project.image ? (
                        <WorkImage image={project.image} alt={project.title} />
                      ) : (
                        <div className="carousel-image-placeholder">
                          <span>{project.title}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
