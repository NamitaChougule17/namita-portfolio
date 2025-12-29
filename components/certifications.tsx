"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { 
  SiSnowflake, 
  SiOracle
} from "react-icons/si";
import { 
  FaDatabase, 
  FaTools, 
  FaGraduationCap,
  FaBriefcase,
  FaCloud,
  FaAws
} from "react-icons/fa";

// Gradient color schemes for different certifications
const certGradientSchemes = [
  { bg: "from-purple-900 via-blue-900 to-indigo-900", border: "from-purple-400/60 via-blue-400/60 to-indigo-400/60" },
  { bg: "from-cyan-900 via-teal-900 to-emerald-900", border: "from-cyan-400/60 via-teal-400/60 to-emerald-400/60" },
  { bg: "from-pink-900 via-rose-900 to-orange-900", border: "from-pink-400/60 via-rose-400/60 to-orange-400/60" },
  { bg: "from-indigo-900 via-purple-900 to-fuchsia-900", border: "from-indigo-400/60 via-purple-400/60 to-fuchsia-400/60" },
  { bg: "from-blue-900 via-cyan-900 to-teal-900", border: "from-blue-400/60 via-cyan-400/60 to-teal-400/60" },
  { bg: "from-emerald-900 via-teal-900 to-cyan-900", border: "from-emerald-400/60 via-teal-400/60 to-cyan-400/60" },
  { bg: "from-amber-900 via-orange-900 to-red-900", border: "from-amber-400/60 via-orange-400/60 to-red-400/60" },
];

// Function to get icon for each certification
const getCertIcon = (certName: string, issuer: string) => {
  const nameLower = certName.toLowerCase();
  const issuerLower = issuer.toLowerCase();
  
  try {
    if (issuerLower.includes("amazon web services") || issuerLower.includes("aws") || nameLower.includes("aws")) {
      return <FaAws className="w-8 h-8" />;
    }
    if (issuerLower.includes("snowflake") || nameLower.includes("snowflake")) {
      return <SiSnowflake className="w-8 h-8" />;
    }
    if (nameLower.includes("oracle") || issuerLower.includes("oracle")) {
      return <SiOracle className="w-8 h-8" />;
    }
    if (nameLower.includes("devops")) {
      return <FaTools className="w-8 h-8" />;
    }
    if (nameLower.includes("data warehousing") || nameLower.includes("data pipeline")) {
      return <FaDatabase className="w-8 h-8" />;
    }
    if (issuerLower.includes("nptel") || issuerLower.includes("iit") || nameLower.includes("python") || nameLower.includes("algorithms")) {
      return <FaGraduationCap className="w-8 h-8" />;
    }
    if (issuerLower.includes("ntt data") || issuerLower.includes("nlci")) {
      return <FaBriefcase className="w-8 h-8" />;
    }
  } catch (error) {
    // Fallback if any icon fails
    return <FaCloud className="w-8 h-8" />;
  }
  // Default icon
  return <FaCloud className="w-8 h-8" />;
};

export default function Certifications() {
  const { ref } = useSectionInView("Certifications");

  return (
    <section id="certifications" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Certifications</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 items-stretch">
        {certificationsData.map((cert, index) => {
          const scheme = certGradientSchemes[index % certGradientSchemes.length];
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative h-full flex"
            >
              {/* Glow border wrapper */}
              <div className={`rounded-xl p-[1.5px] bg-gradient-to-br ${scheme.border} w-full h-full flex
                             transition-shadow duration-300 hover:shadow-[0_15px_40px_-10px_rgba(99,102,241,0.6)] shadow-[0_6px_25px_-8px_rgba(99,102,241,0.4)]`}>
                {/* Card */}
                <div className={`rounded-xl overflow-hidden bg-gradient-to-br ${scheme.bg} w-full h-full flex flex-col
                               transition-all duration-300`}>
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent z-0" />
                  
                  {/* Animated gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${scheme.border} opacity-0 
                                 group-hover:opacity-20 transition-opacity duration-500 z-0`} />
                  
                  {/* Content */}
                  <div className="relative z-10 p-5 h-full flex flex-col">
                    {/* Logo/Icon */}
                    <div className="mb-4 text-white/90">
                      {getCertIcon(cert.name, cert.issuer)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight break-words">
                      {cert.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 flex-grow break-words">{cert.issuer}</p>
                    {cert.date && (
                      <p className="text-xs text-gray-400 mb-3">{cert.date}</p>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-300 hover:text-blue-200 hover:underline text-xs font-medium transition-colors"
                      >
                        View Credential {cert.credentialId && `(${cert.credentialId})`}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

