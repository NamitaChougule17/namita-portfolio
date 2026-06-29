import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import factchecker from "@/public/factchecker.png";


export const links = [
  { name: "Home", hash: "#home" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Certifications", hash: "#certifications" },
  { name: "Contact", hash: "#contact" },
] as const;


import { LuBriefcase } from "react-icons/lu";


export const experiencesData = [
  {
    title: "Data Engineer",
    location: "Quantum Integrators",
    date: "Jul 2025 – Present",
    description: [
      "Developed reusable feature pipelines and supported feature store initiatives using Python and Databricks, improving data availability for downstream ML workloads by 25%.",
      "Improved analytical query performance by 35% for customer and operational dashboards by optimizing SQL transformations and implementing multi-layer Snowflake data models.",
      "Built batch and streaming ELT pipelines using StreamSets and Apache Kafka to ingest and consolidate over 1.5 million records daily from disparate on-premise systems into a centralized lakehouse environment.",
      "Enhanced production reliability for critical client data pipelines by implementing automated testing, monitoring, and GitOps-based deployment practices that supported 99.95% SLA objectives.",

    ],
    icon: React.createElement(LuBriefcase),
  },
  {
    title: "Graduate Teaching Assistant – Database Systems",
    location: "George Mason University",
    date: "Jan 2025 – May 2025",
    description: [
      "Assisted with graduate-level instruction and grading on database systems.",
      "Supported topics including schema design, dimensional modeling, normalization, indexing, SQL, NoSQL, and transactions.",
      "Helped students apply database concepts to real-world systems.",
    ],
    icon: React.createElement(LuBriefcase),
  },
  {
    title: "Data Engineer",
    location: "NTT DATA Services",
    date: "Jan 2021 – Dec 2023",
    description: [
      "Developed real-time ingestion pipelines using Apache Kafka and PySpark Structured Streaming on AWS EMR, enabling the platform to process peak volumes of 15,000 events per second and reducing data delivery latency from 6 hours to under 15 seconds.",
      "Contributed to the migration of legacy data pipelines to a Delta Lake architecture by implementing file optimization strategies and partitioning improvements, reducing storage utilization by 42% and improving query efficiency.",
      "Enhanced batch orchestration workflows using Apache Airflow by developing dynamic DAGs, custom sensors, and retry mechanisms that improved pipeline reliability and supported 99.9% SLA targets for critical reporting workloads.",
      "Designed dimensional data models and optimized Snowflake workloads through warehouse tuning and clustering strategies, reducing average query execution times by 68% and lowering compute consumption by 31%.",
      "Integrated Great Expectations into production pipelines to automate data validation checks and Slack-based alerting, improving the detection of data quality issues before downstream consumption.",
      "Developed Terraform modules to standardize provisioning of data platform resources across development, staging, and production environments, reducing deployment effort from days to under 20 minutes.",
      "Optimized multi-terabyte Spark workloads by replacing inefficient joins with broadcast strategies, tuning executor configurations, and mitigating data skew, reducing nightly processing times by 4.5 hours and eliminating recurring OOM failures.",
    ],
    icon: React.createElement(LuBriefcase),
  },
] as const;


export const projectsData = [
  {
    title: "Customer Support Call Analytics & Insight Platform",
    description: "Built an end-to-end analytics platform for customer support calls, aggregating KPIs such as resolution rates, sentiment, call duration, and customer frustration. Implemented a FastAPI backend with PostgreSQL (Supabase) to serve analytics via REST APIs, powering an interactive dashboard with drill-down to individual call details. Designed a rule-based, AI-ready insight engine to enable future LLM-powered summaries and recommendations in a cost-safe manner.",
    tags: [
      "Python",
      "FastAPI",
      "Supabase",
      "React",
      "TypeScript",
      "Analytics",
      "Dashboard",
      "AI-Ready",
    ],
    imageUrl: factchecker,
    githubUrl: "https://github.com/NamitaChougule17/customer_support_analytics",
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
    githubUrl: "https://github.com/NamitaChougule17/Smart-City-Analytics",
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
    title: "Movie Recommender System",
    description: "Built a personalized recommendation engine using matrix factorization on the MovieLens dataset. Learned latent user and item embeddings and optimized model performance through tuning and regularization. Generated top-N recommendations based on predicted user preferences.",
    tags: [
      "Python",
      "NumPy",
      "Pandas",
      "Machine Learning",
    ],
    imageUrl: factchecker,
    githubUrl: "https://github.com/NamitaChougule17/movie-recommender-system",
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
  {
    title: "Pokémon Combat Points Predictor",
    description: "Built predictive models from scratch to estimate Pokémon Combat Points using linear regression and a multi-layer perceptron. Implemented gradient descent, forward and backward propagation, and custom loss functions without relying on ML frameworks. Evaluated model performance on training and test data and compared classical regression with a neural network approach to understand trade-offs in accuracy and convergence.",
    tags: [
      "Python",
      "NumPy",
      "Pandas",
      "Machine Learning",
      "Neural Networks",
    ],
    imageUrl: factchecker,
    githubUrl: "https://github.com/NamitaChougule17/pokemon-combat-points-predictor",
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
    credentialUrl: "https://www.credly.com/badges/b35ba266-3350-498e-a61d-48b0e4006583/linked_in_profile",
    credentialId: "9eabc19bc50f46bf9371b3f1c542e097",
  },
  {
    name: "Snowflake - Build & Architect Data pipelines using AWS",
    issuer: "Udemy",
    date: "",
    credentialUrl: "https://www.udemy.com/certificate/UC-407e2fb0-8b77-419e-b4bf-7ff9dbb107d1/",
    credentialId: "UC-407e2fb0-8b77-419e-b4bf-7ff9dbb107d1",
  },
  {
    name: "Agile and Scrum Certification",
    issuer: "NTT DATA Learning Certification Institute (NLCI)",
    date: "",
    credentialUrl: "https://drive.google.com/file/d/1EqepYUGQnpPfHU9MVgQTHLXEIdlGOYJs/view?usp=sharing",
    credentialId: "",
  },
  {
    name: "Data Engineer - Oracle Certification",
    issuer: "NTT DATA Learning Certification Institute (NLCI)",
    date: "",
    credentialUrl: "https://drive.google.com/file/d/1AANv9LASE7B0d7MHNKthPiN4DZ6PHg6L/view?usp=drive_link",
    credentialId: "",
  },
  {
    name: "DevOps Certification Level 1",
    issuer: "NTT DATA Learning Certification Institute (NLCI)",
    date: "",
    credentialUrl: "https://drive.google.com/file/d/1Kyj0SSTLi9O0cTDQ07M-xim2xV4D4OXs/view?usp=drive_link",
    credentialId: "",
  },
  {
    name: "Data Warehousing Concepts Level 1",
    issuer: "NTT DATA Learning Certification Institute (NLCI)",
    date: "",
    credentialUrl: "https://drive.google.com/file/d/1quabH7rTQFjuHYvMHw2Y4b8ZtJ8_t2FM/view?usp=drive_link",
    credentialId: "",
  },
  {
    name: "Programming Data Structures and Algorithms using Python",
    issuer: "NPTEL Elite Certificate by IIT Madras",
    date: "",
    credentialUrl: "https://drive.google.com/file/d/11JxGAg2Xw-riuNgQWOhSiZA8loec7C32/view?usp=drive_link",
    credentialId: "NPTEL19CS08S11110323",
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
