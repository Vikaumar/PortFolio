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
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>Indian Institute of Information Technology, Kota</h5>
              </div>
              <h3>Aug 2023 - present</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology with a CGPA of 7.23. Core subjects: Data Structures, Operating Systems, DBMS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Competitive Programming</h4>
                <h5>Codeforces & CodeChef</h5>
              </div>
              <h3>2022-present</h3>
            </div>
            <p>
              Attained Pupil on Codeforces (200+ problems). Earned 3★ on CodeChef (120+ problems). Solved 400+ LeetCode problems (Max Rating: 1567).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
