"use client";

import React, { useState, useRef, useEffect } from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Gradient color schemes for experience boxes
const gradientSchemes = [
  { bg: "from-purple-900 via-blue-900 to-indigo-900", border: "from-purple-400/60 via-blue-400/60 to-indigo-400/60", dot: "from-purple-400 to-indigo-500", accent: "purple" },
  { bg: "from-cyan-900 via-teal-900 to-emerald-900", border: "from-cyan-400/60 via-teal-400/60 to-emerald-400/60", dot: "from-cyan-400 to-emerald-500", accent: "cyan" },
  { bg: "from-pink-900 via-rose-900 to-orange-900", border: "from-pink-400/60 via-rose-400/60 to-orange-400/60", dot: "from-pink-400 to-orange-500", accent: "pink" },
  { bg: "from-indigo-900 via-purple-900 to-fuchsia-900", border: "from-indigo-400/60 via-purple-400/60 to-fuchsia-400/60", dot: "from-indigo-400 to-fuchsia-500", accent: "indigo" },
  { bg: "from-blue-900 via-cyan-900 to-teal-900", border: "from-blue-400/60 via-cyan-400/60 to-teal-400/60", dot: "from-blue-400 to-teal-500", accent: "blue" },
  { bg: "from-emerald-900 via-teal-900 to-cyan-900", border: "from-emerald-400/60 via-teal-400/60 to-cyan-400/60", dot: "from-emerald-400 to-cyan-500", accent: "emerald" },
];

// Component that handles card expansion with proper height animation
function ExpandingCard({ 
  isExpanded, 
  scheme, 
  onClick, 
  children 
}: { 
  isExpanded: boolean; 
  scheme: typeof gradientSchemes[number]; 
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer group rounded-xl p-[1.5px] bg-gradient-to-br ${scheme.border} transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.7)] shadow-[0_8px_30px_-10px_rgba(99,102,241,0.4)] w-full`}
      style={{ position: 'relative', display: 'block' }}
    >
      {/* Inner card with gradient background */}
      <div className={`rounded-xl bg-gradient-to-br ${scheme.bg} w-full`} style={{ position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line - centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/40 via-purple-500/40 to-transparent hidden sm:block" />
          
          <div>
            {experiencesData.map((item, index) => {
              const introSentence = item.description[0];
              const bulletPoints = item.description.slice(1);
              const isExpanded = expandedIndex === index;
              const isLeft = index % 2 === 0; // Alternate left and right
              const scheme = gradientSchemes[index % gradientSchemes.length];
              
              return (
                <div
                  key={index}
                  className={`block mb-8 sm:mb-20 last:mb-0`}
                  style={{ position: 'relative', width: '100%' }}
                >
                  <div className={`flex items-start flex-col sm:flex-row ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Content - Full width on mobile, Left or Right on desktop */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isLeft ? 'sm:pr-8' : 'sm:pl-8'} ${isLeft ? 'sm:mr-auto' : 'sm:ml-auto'}`} style={{ position: 'relative', zIndex: 1 }}>
                    {/* Expandable Box/Card with colorful gradient */}
                    <ExpandingCard
                      isExpanded={isExpanded}
                      scheme={scheme}
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    >
                      <div className="p-6 sm:p-8">
                          {/* Gradient overlay for depth */}
                          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent z-0" />
                          
                          {/* Animated gradient on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${scheme.border} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0`} />
                          
                          {/* Content */}
                          <div className="relative z-10">
                          {/* Primary view - always visible */}
                          <div className={`${isLeft ? 'sm:text-right' : 'sm:text-left'}`}>
                            {/* Role title - dominant */}
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                              {item.title}
                            </h3>
                            
                            {/* Company + Date - secondary */}
                            <div className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-4 ${isLeft ? 'sm:justify-end' : 'sm:justify-start'}`}>
                              <p className="text-base sm:text-lg font-medium text-gray-200">
                                {item.location}
                              </p>
                              <span className="hidden sm:inline text-gray-400/60">·</span>
                              <p className="text-sm sm:text-base text-gray-300">
                                {item.date}
                              </p>
                            </div>

                            {/* Intro sentence - preview */}
                            <p className="text-sm sm:text-base leading-relaxed text-gray-200 mb-4">
                              {introSentence}
                            </p>

                            {/* Expand indicator */}
                            <div className={`flex items-center gap-2 text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors ${isLeft ? 'sm:justify-end' : 'sm:justify-start'}`}>
                              <span>{isExpanded ? "Show less" : "Show details"}</span>
                              <ChevronDown 
                                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
                              />
                            </div>
                          </div>

                          {/* Secondary view - expandable details */}
                          {isExpanded && (
                            <div className="pt-6 mt-6 border-t border-white/20">
                              {/* Bullet points - grouped and scannable */}
                              <ul className="space-y-3 list-none">
                                {bulletPoints.map((point, idx) => (
                                  <li 
                                    key={idx}
                                    className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-gray-200"
                                  >
                                    <span className="mt-2.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/70"></span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          </div>
                        </div>
                    </ExpandingCard>
                  </div>

                    {/* Timeline dot - centered, positioned on the box, matching gradient */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 top-6 sm:top-8 w-4 h-4 rounded-full bg-gradient-to-br ${scheme.dot} border-2 border-gray-900 z-20 shadow-lg hidden sm:block`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
