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
                <h4>SSLC</h4>
                <h5>Lions English Medium School Haveri</h5>
              </div>
              <h3>2015 - 2020</h3>
            </div>
            <p>
              Completed secondary schooling with a solid academic foundation. Score: 69.59%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science Engineering</h4>
                <h5>K.L.E Society's C. B. Kolli Polytechnic</h5>
              </div>
              <h3>2020 - 2023</h3>
            </div>
            <p>
              Gained foundational knowledge in software engineering, database management, and programming concepts. Graduated with a CGPA of 8.12 / 10.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering in Computer Science</h4>
                <h5>Cambridge Institute of Technology, North Campus</h5>
              </div>
              <h3>2023 - 2026</h3>
            </div>
            <p>
              Pursuing comprehensive training in high-level computer science disciplines. Core coursework covers Data Structures, Algorithms, DBMS, Artificial Intelligence, and Software Engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>Samsung (PRISM / AI-ML Internship)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed a Student Performance Prediction system using machine learning. Performed data preprocessing, feature selection, and model training (Linear Regression, Decision Trees, Random Forest). Evaluated performance with MAE, RMSE metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
