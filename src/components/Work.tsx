import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    num: "01",
    name: "ResuMate AI",
    category: "Privacy-First ATS Resume Optimizer",
    tools: "Python, Streamlit, Ollama (Llama 3.2), nomic-embed-text, BM25, SQLite, Pytest",
    image: "/images/resumate.svg",
    link: "https://github.com/siddharthskyhub",
  },
  {
    num: "02",
    name: "DocuMind",
    category: "Hybrid Search RAG Engine for Technical Docs",
    tools: "FastAPI, Python, Ollama (Llama 3.2), nomic-embed-text, BM25, Pytest",
    image: "/images/documind.svg",
    link: "https://github.com/siddharthskyhub",
  },
  {
    num: "03",
    name: "DRDO Airworthiness QA",
    category: "Military Document RAG Prototype",
    tools: "Python, Dense Embeddings, BM25, Chunk IDs, Citation Grounding, Prompt Engineering",
    image: "/images/drdo_rag.svg",
    link: "https://github.com/siddharthskyhub",
  },
  {
    num: "04",
    name: "Citation Guardrails",
    category: "Anti-Hallucination & Verification Framework",
    tools: "Python, Pytest, LangChain, Sentence Faithfulness, Source Claim Grounding",
    image: "/images/guardrails.svg",
    link: "https://github.com/siddharthskyhub",
  },
  {
    num: "05",
    name: "Vector Ingestion Pipeline",
    category: "High-Throughput Chunking & Embedding Engine",
    tools: "PDF/DOCX/MD Parsing, Sliding-Window Chunking, FAISS, ChromaDB, nomic-embed-text",
    image: "/images/ingestion.svg",
    link: "https://github.com/siddharthskyhub",
  },
  {
    num: "06",
    name: "Full-Stack Web Systems",
    category: "Responsive AI Dashboards & APIs",
    tools: "React, Next.js, TypeScript, Streamlit, Tailwind CSS, REST APIs, Git Reviews",
    image: "/images/fullstack.svg",
    link: "https://github.com/siddharthskyhub",
  },
];

const Work = () => {
  useGSAP(() => {
    function getScrollAmount() {
      const boxes = document.querySelectorAll(".work-box");
      const workFlex = document.querySelector(".work-flex") as HTMLElement;
      const workContainer = document.querySelector(".work-container") as HTMLElement;
      if (!boxes || boxes.length === 0 || !workFlex || !workContainer) return 0;

      const lastBox = boxes[boxes.length - 1] as HTMLElement;
      const containerWidth = workContainer.offsetWidth;
      const containerLeft = (window.innerWidth - containerWidth) / 2;
      const flexMarginLeft = parseFloat(getComputedStyle(workFlex).marginLeft) || -80;
      const targetCenter = (window.innerWidth - lastBox.offsetWidth) / 2;
      const lastBoxInitialLeft = containerLeft + flexMarginLeft + lastBox.offsetLeft;
      const distanceToCenter = lastBoxInitialLeft - targetCenter;

      return Math.max(distanceToCenter, 100);
    }

    if (window.innerWidth > 1024) {
      // 1. Kill any existing work trigger with revert=true so it never leaves dead pin-spacers
      ScrollTrigger.getById("work")?.kill(true);

      // 2. Safety unwrap of any orphaned pin-spacers wrapping .work-section
      const workEl = document.querySelector(".work-section");
      while (
        workEl &&
        workEl.parentElement &&
        workEl.parentElement.classList.contains("pin-spacer")
      ) {
        const spacer = workEl.parentElement;
        spacer.parentNode?.insertBefore(workEl, spacer);
        spacer.parentNode?.removeChild(spacer);
      }

      const holdDistance = 500;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => `+=${getScrollAmount() + holdDistance}`,
          scrub: 1,
          pin: true,
          pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "work",
        },
      });

      // Smoothly slide across all projects until Card 06 is fully centered
      timeline.to(".work-flex", {
        x: () => -getScrollAmount(),
        ease: "none",
        duration: 4,
      });

      // Buffer hold: keep Card 06 cleanly in view before unpinning to next section
      timeline.to(
        {},
        {
          duration: 1,
          ease: "none",
        }
      );

      const handleImgLoad = () => {
        ScrollTrigger.refresh();
      };

      const images = document.querySelectorAll(".work-section img");
      images.forEach((img) => {
        if ((img as HTMLImageElement).complete) return;
        img.addEventListener("load", handleImgLoad);
      });

      return () => {
        if (timeline.scrollTrigger) {
          timeline.scrollTrigger.kill(true);
        }
        timeline.kill();
        const st = ScrollTrigger.getById("work");
        if (st) {
          st.kill(true);
        }
        const el = document.querySelector(".work-section");
        while (
          el &&
          el.parentElement &&
          el.parentElement.classList.contains("pin-spacer")
        ) {
          const parent = el.parentElement;
          parent.parentNode?.insertBefore(el, parent);
          parent.parentNode?.removeChild(parent);
        }
        images.forEach((img) => img.removeEventListener("load", handleImgLoad));
      };
    }
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools &amp; Features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
