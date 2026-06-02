export const profile = {
  name: "Murali Sai",
  fullName: "Murali Sai Buddakkagari Venkata",
  title: "AI Engineer",
  tagline: "LLM & RAG Systems · Multi-Agent Orchestration · LLMOps",
  org: "M.S. Applied AI, Stevens Institute of Technology",
  location: "New York City Metro Area",
  email: "murali140824@gmail.com",
  phone: "+1 (201) 275-6592",
  resume: "/Murali_Sai_Resume.pdf",
  socials: {
    github: "https://github.com/Murali-Sai",
    linkedin: "https://www.linkedin.com/in/muralisaibk",
  },
};

export const about = {
  summary:
    "AI Engineer specializing in production-grade AI agents, LLMs, retrieval-augmented generation, and multimodal multi-agent systems. I build systems that actually ship — from RAG pipelines and multi-agent orchestration with LangChain, LangGraph, and CrewAI, to LLMOps observability and full-stack deployment. I care about the full arc: data, modeling, deployment, and observability.",
  secondary:
    "Currently completing my M.S. in Applied AI at Stevens (May 2026) and seeking new-grad AI/ML Engineer or Generative AI Engineer roles where I can build systems that scale and matter.",
  interests: [
    "Generative AI & LLMs",
    "Retrieval-Augmented Generation",
    "Multi-Agent Orchestration",
    "LLMOps & Observability",
    "Computer Vision",
  ],
  education: [
    {
      degree: "M.S. Applied Artificial Intelligence",
      school: "Stevens Institute of Technology",
      location: "Hoboken, NJ",
      period: "Jul 2024 – May 2026",
    },
    {
      degree: "B.Tech, Computer Science (Specialization in ML)",
      school: "PES University",
      location: "Bengaluru, India",
      period: "Dec 2020 – Nov 2024",
    },
  ],
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "SQL", "C++", "PySpark", "TypeScript", "C#"],
  },
  {
    group: "AI & Machine Learning",
    items: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "CrewAI",
      "RAG",
      "RAGAS",
      "Multi-Agent Systems",
      "Model Context Protocol (MCP)",
      "HuggingFace",
      "Transformers",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "ChromaDB",
      "FastAPI",
      "Prompt Engineering",
    ],
  },
  {
    group: "Cloud, DevOps & Infrastructure",
    items: [
      "AWS (ECS Fargate, S3, Lambda)",
      "Google Cloud Platform",
      "BigQuery",
      "Azure",
      "Docker",
      "Terraform",
      "PostgreSQL",
      "Redis",
      "MLflow",
      "GitHub Actions",
      "CI/CD",
      "ReactJS",
    ],
  },
  {
    group: "LLM APIs & Tooling",
    items: ["OpenAI API", "Claude API", "Gemini API", "Groq", "LangSmith", "Streamlit", "Superset"],
  },
];

export const experience = [
  {
    role: "Data Science Intern",
    company: "QuerKey Inc.",
    location: "Hayward, CA",
    period: "Jun 2025 – Aug 2025",
    highlights: [
      "Built end-to-end ML data ingestion pipelines with Python, PySpark, GCP, BigQuery, and scikit-learn — automating processing of 200+ MP4 files daily and reducing validation latency by 40%.",
      "Deployed a Streamlit + Superset real-time observability stack over 100K+ records with Dockerized MLflow tracking, HuggingFace integration, ChromaDB embeddings, and FastAPI endpoints — improving ML workflow reliability by 60%.",
      "Designed video analytics pipelines with the Gemini API and Google Cloud Storage, plus a Windows background app for automated video processing with structured JSON logging.",
    ],
    stack: ["Python", "PySpark", "GCP", "BigQuery", "MLflow", "ChromaDB", "FastAPI", "Streamlit", "Gemini API"],
  },
  {
    role: "AI & Automation Intern",
    company: "VIEW Synergy",
    location: "Bengaluru, India",
    period: "Jan 2024 – Apr 2024",
    highlights: [
      "Architected generative-AI workflow automation pipelines integrating ReactJS, TypeScript, RESTful APIs, Azure, LangChain, and LlamaIndex — reducing manual process overhead for 100+ employees.",
      "Developed a full-stack Time Tracking & Project Management web app with .NET 8, C#, and ReactJS, plus RAG microservices using the OpenAI API for production-grade, low-latency API serving in an Agile/Scrum model.",
    ],
    stack: [".NET 8", "C#", "ReactJS", "TypeScript", "Azure", "LangChain", "LlamaIndex", "OpenAI API", "Docker"],
  },
  {
    role: "RPA Summer Intern",
    company: "VIEW Synergy",
    location: "Bengaluru, India",
    period: "May 2023 – Aug 2023",
    highlights: [
      "Automated 7+ repetitive accounting workflows (invoice processing, reconciliation) with UiPath Studio and VB.Net — saving an estimated 15 hours per week of manual effort.",
      "Designed reusable bot components that cut future RPA development time by 30%, with documented edge-case handling for non-technical maintainers.",
    ],
    stack: ["UiPath", "VB.Net", "RPA", "Automation"],
  },
];

export const projects = [
  {
    name: "RAG Enterprise — SEC EDGAR Filing Analyzer",
    blurb:
      "Production RAG system for investment banking over real SEC 10-K filings (AAPL, JPM, TSLA, MSFT, GS) with enterprise security, compliance guardrails, and a regulatory audit trail.",
    highlights: [
      "Custom EDGAR HTML parser extracting 5 critical 10-K sections; RAGAS evaluation improved Faithfulness 0.57→0.65, Answer Relevancy 0.58→0.68, Context Recall 0.57→0.70.",
      "Enforced investment-banking-grade RBAC (Chinese Wall) at the vector-store layer, MNPI guardrails, and an SEC 17a-4 / FINRA 4511 append-only audit trail.",
      "Deployed via Docker, Terraform-provisioned AWS ECS Fargate, and GitHub Actions CI/CD; scalable to OpenSearch.",
    ],
    stack: ["FastAPI", "Groq (Llama 3.3 70B)", "ChromaDB", "LangChain", "JWT RBAC", "Docker", "Terraform", "AWS ECS Fargate"],
    github: "https://github.com/Murali-Sai/Rag-enterprise",
    demo: "https://web-production-337e5.up.railway.app",
    featured: true,
  },
  {
    name: "Agent Orchestration System",
    blurb:
      "Production-grade multi-agent platform with tool use, persistent memory, and human-in-the-loop escalation — built on a 3-tier agent hierarchy (Supervisor → Specialists → Reviewer).",
    highlights: [
      "LangGraph state machine with parallel task execution and a two-tier memory system (Redis + ChromaDB) that improves planning accuracy across sessions.",
      "Human-in-the-loop escalation with 5 automated triggers, a real-time approval queue with chat-based clarification, and 4 granular approval levels — autonomously completing ~85% of tasks while routing 15% to reviewers with a full audit trail.",
      "Deployed via Docker Compose with Celery workers, a FastAPI backend, and a Streamlit observability UI with cost tracking, step-through replay, and full execution tracing.",
    ],
    stack: ["LangGraph", "GPT-4o", "Claude Haiku", "Redis", "ChromaDB", "Celery", "FastAPI", "Streamlit", "Supabase"],
    github: "https://github.com/Murali-Sai/Agent-Orchestration-System-with-Tool-Use-Memory-and-Human-in-the-Loop",
    demo: null,
    featured: true,
  },
  {
    name: "LegalLens-AI",
    blurb:
      "AI-powered legal document analyst that makes contract understanding accessible — a 5-step LangGraph pipeline that extracts, classifies, benchmarks, risk-scores, and explains contract clauses in plain English.",
    highlights: [
      "Classifies 9 clause types (liability, termination, IP, indemnification, auto-renewal, and more) and scores low/medium/high risk with reasoning.",
      "RAG benchmarking against standard vs. risky clause collections in ChromaDB; MLflow tracks clause-detection F1, retrieval MRR@5, and risk-scoring accuracy.",
      "Full-stack: FastAPI backend + React 18 / Vite / Tailwind frontend, containerized with CI/CD to GCP Cloud Run.",
    ],
    stack: ["LangGraph", "Claude API", "ChromaDB", "Unstructured.io", "FastAPI", "React 18", "MLflow", "GCP Cloud Run"],
    github: "https://github.com/Murali-Sai/LegalLens-AI",
    demo: null,
    featured: true,
  },
  {
    name: "WorkFit",
    blurb:
      "Real-time multimodal posture-monitoring system fusing CNN-based computer vision with flex-sensor data — recognized with the Best Research Paper Award at ICICC 2024.",
    highlights: [
      "Achieved 40% discomfort reduction and 85% user adoption in real-world testing.",
      "Designed a deep-learning inference pipeline for simultaneous eye-strain and postural-deviation detection, optimized for low-latency predictions on resource-constrained embedded hardware.",
    ],
    stack: ["PyTorch", "CNN", "Computer Vision", "Sensor Fusion", "Embedded ML"],
    github: null,
    demo: null,
    featured: false,
  },
];

export const publications = [
  {
    title:
      "A Size-Conditioned Weighted Box Fusion Ensemble of Faster R-CNN, Mask R-CNN, and YOLO for Cell Nucleus Detection",
    venue: "International Conference on Innovative Computing and Communication (ICICC 2024)",
    publisher: "Springer",
    year: "2024",
    award: "Best Paper Award",
    description:
      "A size-conditioned Weighted Box Fusion ensemble combining Faster R-CNN, Mask R-CNN, and YOLO for robust cell-nucleus detection in biomedical imaging.",
  },
];

export const certifications = [
  "AWS Educate — Introduction to Cloud 101",
  "ICICC 2024 — Best Paper Award (Springer Publication)",
  "Linux Kernel Development — A Beginner's Guide (LFD103)",
  "What is Data Science?",
];
