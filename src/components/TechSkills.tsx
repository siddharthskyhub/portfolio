import { FaBrain, FaCode, FaServer, FaDatabase } from "react-icons/fa";
import "./styles/TechSkills.css";

const categories = [
  {
    name: "AI, LLM & RAG Systems",
    icon: <FaBrain />,
    skills: [
      { name: "Generative AI", featured: true },
      { name: "Retrieval-Augmented Generation (RAG)", featured: true },
      { name: "Hybrid Search (BM25 + Dense)", featured: true },
      { name: "Reciprocal Rank Fusion", featured: true },
      { name: "Llama 3.2", featured: true },
      { name: "Mistral / Qwen / DeepSeek" },
      { name: "nomic-embed-text" },
      { name: "FAISS & ChromaDB", featured: true },
      { name: "LangChain & LangGraph", featured: true },
      { name: "Ollama (Local LLMs)", featured: true },
      { name: "Anti-Hallucination Guardrails", featured: true },
      { name: "Citation Grounding" },
      { name: "AI Agents & Agentic Workflows" },
      { name: "Prompt Engineering" },
      { name: "Hugging Face" },
    ],
  },
  {
    name: "Programming Languages",
    icon: <FaCode />,
    skills: [
      { name: "Python", featured: true },
      { name: "TypeScript", featured: true },
      { name: "JavaScript (ES6+)", featured: true },
      { name: "SQL", featured: true },
      { name: "C / C++" },
      { name: "Bash / Shell" },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    name: "Machine Learning & Data",
    icon: <FaBrain />,
    skills: [
      { name: "PyTorch", featured: true },
      { name: "Scikit-learn", featured: true },
      { name: "NumPy & Pandas", featured: true },
      { name: "Matplotlib" },
      { name: "Supervised Learning" },
      { name: "Unsupervised Learning" },
      { name: "Model Evaluation & Faithfulness" },
      { name: "Document Chunking Strategies" },
    ],
  },
  {
    name: "Backend & Systems",
    icon: <FaServer />,
    skills: [
      { name: "FastAPI", featured: true },
      { name: "RESTful APIs", featured: true },
      { name: "Node.js & Express", featured: true },
      { name: "Async I/O" },
      { name: "Microservices Basics" },
      { name: "Modular Architecture" },
      { name: "File Parsing (PDF, DOCX)", featured: true },
    ],
  },
  {
    name: "Frontend & Full-Stack",
    icon: <FaCode />,
    skills: [
      { name: "Streamlit", featured: true },
      { name: "React", featured: true },
      { name: "Next.js", featured: true },
      { name: "Tailwind CSS", featured: true },
      { name: "Responsive UI/UX" },
      { name: "Session State Management" },
    ],
  },
  {
    name: "Databases, DevOps & Tools",
    icon: <FaDatabase />,
    skills: [
      { name: "PostgreSQL", featured: true },
      { name: "MongoDB" },
      { name: "SQLite", featured: true },
      { name: "Docker", featured: true },
      { name: "Git & GitHub", featured: true },
      { name: "Linux / Unix" },
      { name: "Pytest (Unit Testing)", featured: true },
      { name: "VS Code & Jupyter" },
      { name: "Vercel & Streamlit Cloud" },
    ],
  },
];

const TechSkills = () => {
  return (
    <div className="techskills-section" id="skills">
      <div className="techskills-container">
        <h2>
          Technical <span>Expertise</span>
        </h2>
        <div className="skills-grid">
          {categories.map((cat, idx) => (
            <div className="skill-category-card" key={idx}>
              <div className="skill-cat-header">
                <div className="skill-cat-icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
              </div>
              <div className="skill-tags-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`skill-pill ${skill.featured ? "featured" : ""}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
