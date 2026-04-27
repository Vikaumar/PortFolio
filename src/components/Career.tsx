import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th, Rajasthan Board of Secondary Education</h4>
                <h5>Krishna Vidhya Mandir (KVM) School, Sikar</h5>
              </div>
              <h3>Apr 2022 - Mar 2023</h3>
            </div>
            <p>
              Completed higher secondary education with a percentage of 82.40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>Indian Institute of Information Technology, Kota</h5>
              </div>
              <h3>Aug 2023 - Present</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology with a CGPA of 7.27. Core subjects: Data Structures, Operating Systems, DBMS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>National Champion</h4>
                <h5>HackToCrack 2.0</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Secured 1st place among 6,400+ participating teams. Demonstrated exceptional problem-solving and software development skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech Lead</h4>
                <h5>Paryawan Sakti</h5>
              </div>
              <h3>Aug 2025 - Present</h3>
            </div>
            <p>
              Spearheaded 50+ students, demonstrating strong technical leadership across 10+ full-stack and system design sessions; led 20+ interactive discussions, and fostered a high-engagement, collaborative peer learning culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
