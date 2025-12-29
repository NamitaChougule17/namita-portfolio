import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import factchecker from "@/public/factchecker.png";
import f1 from "@/public/f1.png";
import dock from "@/public/dock.png";
import uni from "@/public/uni.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Certifications", hash: "#certifications" },
  { name: "Contact", hash: "#contact" },
] as const;


import { LuBriefcase } from "react-icons/lu";
import { table } from "console";

export const experiencesData = [
  {
    title: "Applied AI & Data Developer",
    location: "onAir Tech Networks",
    date: "Jul 2025 – Present",
    description: [
      "I work on building AI-powered data pipelines that ingest, transform, and distribute content at scale, supporting live production systems.",
      "Designed scalable Python-based ingestion pipelines integrating Hugging Face LLMs for summarization and classification.",
      "Built automated workflows to ingest RSS feeds and store structured data in MongoDB.",
      "Integrated AI outputs into production systems via REST APIs, enabling seamless WordPress content publishing.",
      "Reduced manual content operations by 80% through automation.",
      "Provisioned and optimized AWS infrastructure (EC2, S3, IAM, CloudWatch) to scale AI pipelines and improve reliability.",
      "Exploring Airflow-based orchestration to modularize and scale AI-driven data workflows.",
    ],
    icon: React.createElement(LuBriefcase),
  },
  {
    title: "Graduate Teaching Assistant – Database Systems",
    location: "George Mason University",
    date: "Jan 2025 – May 2025",
    description: [
      "Assisted with graduate-level instruction on database systems.",
      "Supported topics including schema design, normalization, indexing, SQL, NoSQL, and transactions.",
      "Helped students apply database concepts to real-world systems.",
    ],
    icon: React.createElement(LuBriefcase),
  },
  {
    title: "Data Engineer (ETL Developer)",
    location: "NTT DATA Services — Client: Tokio Marine Kiln (Insurance & Finance)",
    date: "Jan 2021 – Dec 2023",
    description: [
      "I worked on large-scale enterprise data platforms, modernizing legacy systems and enabling faster, more reliable analytics.",
      "Built and optimized ETL/ELT pipelines using Talend, Spark, and Snowflake.",
      "Led migration of 60+ TB of on-premise data from MS SQL Server to Snowflake.",
      "Designed pipelines processing 1M+ records per day from AWS S3 and relational databases.",
      "Built event-driven streaming pipelines using Kafka (MSK) and Spark Streaming to process 15K+ events/min.",
      "Implemented dbt models for transformations, testing, and data quality checks.",
      "Integrated Talend with AWS IAM, S3, and Snowflake for secure, auditable data flows.",
      "Collaborated with analysts and stakeholders in an Agile environment.",
      "Mentored junior engineers and conducted code reviews.",
    ],
    icon: React.createElement(LuBriefcase),
  },
  {
    title: "Full-Stack Development Intern",
    location: "Zeel Code Labs",
    date: "Dec 2019 – Jan 2020",
    description: [
      "I worked on building and enhancing web applications with a focus on backend logic, database consistency, and user-facing interfaces.",
      "Designed and developed core modules for a shopping cart application using Java, JSP, and PHP, with responsive UI built using HTML and CSS.",
      "Implemented backend logic and handled database queries, ensuring data consistency and reliable interactions across application modules.",
      "Built a multi-page hotel reservation system enabling users to browse room types and complete bookings through a streamlined workflow.",
      "Used MySQL to design and manage relational data models supporting booking and user data.",
      "Improved overall usability and system reliability through structured backend integration and UI enhancements.",
    ],
    icon: React.createElement(LuBriefcase),
  },
] as const;


export const projectsData = [
  {
    title: "Customer Support Call Analytics & Insight Platform",
    description: "Designed a full-stack analytics platform to transform customer support call data into actionable insights such as sentiment trends, resolution rates, and call performance. Built a scalable FastAPI backend with Supabase and an interactive React + TypeScript dashboard for drill-down analytics. Developed a modular, AI-ready insight engine that balances rule-based logic with future LLM integration.",
    tags: [
      "FastAPI",
      "Supabase",
      "React",
      "TypeScript",
      "Python",
      "Rule-Based & AI-Ready Insights",
    ],
    imageUrl: factchecker,
    githubUrl: "https://github.com/NamitaChougule17/customer_support_analytics",
    liveUrl: "",
  },
  {
    title: "Real-Time Data Pipeline for Smart City Analytics",
    description: "Built a real-time streaming platform to process high-velocity IoT sensor data for smart city analytics. Implemented event-driven ingestion with Kafka and real-time processing using Spark, storing curated data in AWS S3 and Redshift. Enabled near real-time dashboards and operational insights using cloud-native analytics.",
    tags: [
      "Kafka",
      "Spark",
      "AWS S3",
      "Glue",
      "Athena",
      "Redshift",
      "Power BI",
    ],
    imageUrl: factchecker,
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "AI-Powered Hybrid Chatbot (RAG + Web Fallback)",
    description: "Built a context-aware chatbot using Retrieval-Augmented Generation (RAG) with vector-based semantic search. Integrated LLM-generated responses with intelligent web search fallback to improve answer accuracy. Delivered a responsive frontend for dynamic, conversational interactions.",
    tags: [
      "Python",
      "OpenAI GPT",
      "Pinecone",
      "RAG",
      "Serper.dev",
      "React",
    ],
    imageUrl: factchecker,
    githubUrl: "https://github.com/NamitaChougule17/rag-web-fallback-chatbot",
    liveUrl: "",
  },
  {
    title: "Cloud-Native Survey Application with CI/CD",
    description: "Developed and deployed a cloud-native survey application with automated CI/CD pipelines. Containerized services using Docker and orchestrated deployments with Kubernetes on AWS. Integrated managed databases to support reliable, production-ready workloads.",
    tags: [
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "AWS",
      "MySQL (RDS)",
    ],
    imageUrl: factchecker,
    githubUrl: "https://github.com/NamitaChougule17/Cloud-Native-Survey-Application",
    liveUrl: "",
  },
  {
    title: "MovieLens Recommender System",
    description: "Built a personalized recommendation engine using matrix factorization on the MovieLens dataset. Learned latent user and item embeddings and optimized model performance through tuning and regularization. Generated top-N recommendations based on predicted user preferences.",
    tags: [
      "Python",
      "NumPy",
      "Pandas",
      "Machine Learning",
    ],
    imageUrl: factchecker,
    githubUrl: "https://github.com/NamitaChougule17/movielens-recommender-system",
    liveUrl: "",
  },
  {
    title: "Digit Clustering with K-Means & PCA",
    description: "Implemented K-Means and K-Means++ clustering from scratch to group handwritten digit data. Applied PCA to reduce dimensionality and improve clustering efficiency. Evaluated cluster quality using standard unsupervised learning metrics.",
    tags: [
      "Python",
      "NumPy",
      "Unsupervised Machine Learning",
    ],
    imageUrl: factchecker,
    githubUrl: "https://github.com/NamitaChougule17/Digit-Clustering",
    liveUrl: "",
  },
] as const;

export const educationData = [
  {
    title: "Master of Science in Computer Science",
    institution: "George Mason University",
    location: "Fairfax, VA",
    grade: "3.87/4.00 GPA",
    date: "Jan 2024 - May 2025",
  },
  {
    title: "Bachelor of Engineering in Computer Science & Engineering",
    institution: "Visvesvaraya Technological University",
    location: "India",
    grade: "8.18/10.00 GPA",
    date: "Aug 2016 - Aug 2020",
  },
] as const;

export const certificationsData = [
  {
    name: "AWS Certified Data Engineer – Associate",
    issuer: "Amazon Web Services",
    date: "",
    credentialUrl: "",
    credentialId: "",
  },
  {
    name: "Build & Architect Data pipelines using AWS",
    issuer: "Snowflake",
    date: "",
    credentialUrl: "",
    credentialId: "",
  },
  {
    name: "Agile and Scrum Certification",
    issuer: "NTT DATA Learning Certification Institute (NLCI)",
    date: "",
    credentialUrl: "",
    credentialId: "",
  },
  {
    name: "Data Engineer - Oracle Certification",
    issuer: "NTT DATA Learning Certification Institute (NLCI)",
    date: "",
    credentialUrl: "",
    credentialId: "",
  },
  {
    name: "DevOps Certification Level 1",
    issuer: "NTT DATA Learning Certification Institute (NLCI)",
    date: "",
    credentialUrl: "",
    credentialId: "",
  },
  {
    name: "Data Warehousing Concepts Level 1",
    issuer: "NTT DATA Learning Certification Institute (NLCI)",
    date: "",
    credentialUrl: "",
    credentialId: "",
  },
  {
    name: "Programming Data Structures and Algorithms using Python",
    issuer: "NPTEL Elite Certificate by IIT Madras",
    date: "",
    credentialUrl: "",
    credentialId: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
