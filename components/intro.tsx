"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const titles = ["Data Engineer", "ETL Developer", "AI Data Engineer", "Analytics Engineer", "BI Developer"];
  const titleColors = ["text-teal-600 dark:text-teal-400", "text-blue-600 dark:text-blue-400", "text-purple-600 dark:text-purple-400", "text-emerald-600 dark:text-emerald-400", "text-indigo-600 dark:text-indigo-400"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titles.length]);

  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[70rem] mx-auto px-4 sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Photo on the left */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-xl">
            <Image
              src="/images/NamitaProfile.png"
              alt="Namita Chougule"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text content on the right */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="mb-2 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hello 👋
          </motion.h1>

          <motion.h1
            className="mb-3 text-3xl font-bold !leading-[1.2] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            I am Namita Chougule
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.h2
              key={titles[currentTitleIndex]}
              className={`mb-4 text-2xl font-semibold !leading-[1.5] sm:text-3xl ${
                titleColors[currentTitleIndex % titleColors.length]
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {titles[currentTitleIndex]}
            </motion.h2>
          </AnimatePresence>

          <motion.p
            className="text-lg font-medium !leading-[1.7] sm:text-xl text-gray-700 dark:text-white/90 mb-10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I'm a Data Engineer with 3+ years of experience building scalable data pipelines, cloud data platforms, and real-time processing systems. I work across SQL, Python, Spark, and AWS to turn raw data into reliable, analytics-ready systems, and I also build AI-enabled data pipelines that support intelligent applications and automation. I enjoy solving complex data problems with clean, production-ready solutions.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium mt-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black dark:bg-white/10 dark:text-white/90"
          href="/images/NamitaChougule_Resume25.pdf"
          download="NamitaChougule_Resume25.pdf"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/namitachougule"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/NamitaChougule17"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
