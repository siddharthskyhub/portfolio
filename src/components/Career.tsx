import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&amp;</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Generative AI Intern</h4>
                <h5>DRDO (CEMILAC) – Ministry of Defence</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Researched and developed Generative AI and Retrieval-Augmented Generation (RAG) prototypes for military airworthiness documentation at the Centre for Military Airworthiness &amp; Certification. Built grounded question-answering systems over technical standards using dense retrieval, BM25, and prompt engineering.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Technofly Solutions</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed and maintained responsive front-end pages using HTML5, CSS3, and JavaScript (ES6+). Collaborated with engineers to implement interactive features, resolve cross-browser UI issues, and maintained Git-based review practices.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>InternPe &amp; Teachnook</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Engineered reusable web modules and modern application components adhering to responsive UI/UX principles. Delivered projects within structured internship timelines and integrated RESTful APIs with clean version control.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Dayananda Sagar University, Bengaluru</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Computer Science &amp; Technology undergraduate focusing on AI/ML, LLM Architectures, and System Design. Finalist in DSU Code Red 24-hr hackathon, regional round presenter at Hackfest 2024, and CST Department Newsletter coordinator.
            </p>
          </div>
        </div>

        <div className="career-achievements">
          <h3>Achievements <span>&amp;</span> Certifications</h3>
          <div className="achievements-grid">
            <div className="achievement-card">
              <span className="achievement-tag">Hackathon Finalist</span>
              <h4>DSU Code Red (24-Hour Hackathon)</h4>
              <p>Qualified for final round; organized by DSU ACM Student Chapter (May 2024).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-tag">National Hackathon</span>
              <h4>Hackfest 2024 (SAP-Sponsored)</h4>
              <p>Presented innovative tech solution at regional round, New Horizon College of Engineering (May 2024).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-tag">Leadership</span>
              <h4>Student Coordinator — Department Newsletter</h4>
              <p>Led content curation for CST Department newsletter, Dayananda Sagar University (Dec 2023 – Dec 2025).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-tag">Project Showcase</span>
              <h4>Technova Project Expo 2026</h4>
              <p>Selected participant demonstrating advanced engineering prototypes at university expo (Apr 2026).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-tag">AI / ML Certification</span>
              <h4>Mastering Machine Learning Bootcamp</h4>
              <p>Comprehensive hands-on training with CubeAISolutions Tech Pvt Ltd &amp; DSU (Dec 2024).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-tag">Industry Simulations</span>
              <h4>Tata &amp; Deloitte Tech Simulations</h4>
              <p>Completed Tata GenAI Powered Data Analytics and Deloitte Australia Technology Job Simulations (Forage).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
