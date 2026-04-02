import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a Full-Stack Developer and B.Tech (CSE) student at IIIT Kota, driven by a love for building products that solve real problems. From winning HackToCrack 2.0 (1st among 6,400+ teams) to grinding 400+ LeetCode problems, I thrive at the intersection of clean architecture and competitive problem-solving. I build with the MERN stack, Spring Boot, and Next.js — and I'm always shipping.
        </p>
        <div className="about-stats">
          <div className="stat-item">
            <h4>8+</h4>
            <p>Projects Built</p>
          </div>
          <div className="stat-item">
            <h4>400+</h4>
            <p>LeetCode Problems</p>
          </div>
          <div className="stat-item">
            <h4>#1</h4>
            <p>HackToCrack 2.0</p>
          </div>
          <div className="stat-item">
            <h4>3★</h4>
            <p>CodeChef</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
