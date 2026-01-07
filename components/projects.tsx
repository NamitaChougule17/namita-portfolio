"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-14 sm:mb-20 w-full max-w-7xl mx-auto"
    >
      <SectionHeading>My Projects</SectionHeading>

      <div
        className="
          grid grid-cols-1 
          md:grid-cols-2 
          gap-6 lg:gap-8
          px-4 sm:px-6 lg:px-8
          items-stretch
          max-w-6xl mx-auto
        "
      >
        {projectsData.map((project, index) => (
          <Project key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
