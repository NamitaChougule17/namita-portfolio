// components/education.tsx
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Education() {
  const { theme } = useTheme();
  const ref = useRef<HTMLElement>(null);

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Education</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 text-white p-8 rounded-lg shadow-lg flex flex-col justify-between min-w-[300px] w-full"
          >
            <div>
              <h3 className="text-xl font-semibold">{item.date}</h3>
              <h4 className="text-lg font-medium mt-1">{item.institution}</h4>
              <p className="text-base text-gray-300 mt-1">{item.title}</p>
              <p className="text-sm text-gray-400 mt-1">{item.location}</p>
            </div>
            <p className="text-sm text-gray-400 mt-2">Grade: {item.grade}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}