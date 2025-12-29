"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import {
  FaCode,
  FaCloud,
  FaUserFriends,
  FaBrain,
  FaMobileAlt,
  FaNetworkWired,
  FaUsersCog,

} from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const skillCategories = [
  {
    icon: <FaCode />,
    title: "Software Engineering",
    description:
      "Core programming languages, frameworks, and architectures I use to design scalable systems.",
    color: "bg-gradient-to-r from-cyan-700 to-blue-700",
    skills: [
      "Golang • Python • Java • SwiftUI",
      "React.js • Angular • Spring Boot • FastAPI",
      "PostgreSQL • MySQL • DynamoDB • MongoDB",
      "Microservices • REST/gRPC APIs • System Design",
      "Object-Oriented Programming • Clean Architecture",
    ],
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    description:
      "Infrastructure, automation, and deployment stack powering high-availability environments.",
    color: "bg-gradient-to-r from-indigo-600 to-purple-700",
    skills: [
      "AWS (EC2, Lambda, RDS, S3, CloudWatch, DynamoDB, Bedrock)",
      "Docker • Kubernetes • Terraform",
      "CI/CD (Jenkins, GitHub Actions, GitLab)",
      "Serverless Architectures • Blue/Green Deployments",
      "Monitoring & Observability (Prometheus, CloudWatch)",
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: "iOS Development",
    description:
      "Building responsive and data-driven mobile apps with Apple’s modern frameworks.",
    color: "bg-gradient-to-r from-sky-600 to-indigo-600",
    skills: [
      "SwiftUI • UIKit • Combine",
      "Core Data • REST API Integration",
      "UI/UX Design • State Management",
      "TestFlight Deployment • Diagnostics Tools",
    ],
  },
  {
    icon: <FaBrain />,
    title: "AI & Machine Learning",
    description:
      "AI frameworks and workflows integrated into real-world products and backend pipelines.",
    color: "bg-gradient-to-r from-pink-600 to-red-600",
    skills: [
      "PyTorch • scikit-learn • OpenCV",
      "LLMs (OpenAI, LangChain, RAG Pipelines)",
      "NLP • Image Processing • Predictive Modeling",
      "Data Analysis (Pandas, NumPy, Matplotlib)",
    ],
  },
  {
    icon: <FaNetworkWired />,
    title: "Architecture & Systems",
    description:
      "Designing resilient distributed systems focused on scalability, reliability, and performance.",
    color: "bg-gradient-to-r from-yellow-600 to-orange-600",
    skills: [
      "Distributed Systems • Fault Tolerance • Event Streaming (Kafka, SNS/SQS)",
      "API Versioning • Contract Testing • Multi-Tenant Design",
      "Performance Optimization • Load Balancing • Caching Strategies",
    ],
  },
  {
    icon: <FaUsersCog />,
    title: "Leadership & Collaboration",
    description:
      "Interpersonal and operational skills driving engineering productivity and delivery.",
    color: "bg-gradient-to-r from-green-600 to-emerald-700",
    skills: [
      "Technical Mentorship • Cross-Team Collaboration",
      "Agile & Scrum • Problem Solving • Documentation",
      "Git • Linux CLI • Jira • Notion • Confluence",
      "Code Reviews • RFC Authoring • Continuous Improvement",
    ],
  },
];


  return (
    <section id="skills" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Skills</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className={`p-6 rounded-xl shadow-lg text-white ${cat.color} hover:scale-[1.02] transition-transform duration-300`}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
              {cat.icon} {cat.title}
            </h3>
            <p className="text-sm text-white/80 mb-4 italic">{cat.description}</p>
            <ul className="space-y-2 list-disc list-inside text-white/90 text-[0.95rem]">
              {cat.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
