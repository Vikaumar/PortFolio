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
              Pursuing Bachelor of Technology with a CGPA of 7.36 (Till 5th Sem). Core subjects: Data Structures, Operating Systems, DBMS.
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
        </div>

        {/* Certifications */}
        <h2 className="career-sub-heading">
          Certifications
        </h2>
        <div className="certifications-grid">
          <a
            href="https://drive.google.com/file/d/1LTUdngu-Ur495BqwBkNxQVDCwM1n5vzy/view?usp=sharing"
            target="_blank"
            className="cert-card"
            data-cursor="disable"
          >
            <div className="cert-icon">🤖</div>
            <div className="cert-info">
              <h4>Artificial Intelligence</h4>
              <p>Simplilearn SkillUp</p>
              <span className="cert-id">ID: 9093379</span>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1QINoc9cUtDm2jm0blXRHPjV821lhkOP0/view?usp=sharing"
            target="_blank"
            className="cert-card"
            data-cursor="disable"
          >
            <div className="cert-icon">📊</div>
            <div className="cert-info">
              <h4>Power BI: Dynamics of Data Analytics</h4>
              <p>RCAT & IIIT Kota</p>
              <span className="cert-id">ID: 9263a2a3</span>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1JmvijuQgjw9TesbLDoTDgGubJIUm1e6X/view?usp=sharing"
            target="_blank"
            className="cert-card"
            data-cursor="disable"
          >
            <div className="cert-icon">🧠</div>
            <div className="cert-info">
              <h4>OpenAI Academy × NxtWave Buildathon</h4>
              <p>Regional Buildathon — Rajasthan</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Career;
