"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number] & {
  githubUrl?: string;
  liveUrl?: string;
  alt?: string;
  index?: number;
};

// Gradient color schemes for different cards
const gradientSchemes = [
  { bg: "from-purple-900 via-blue-900 to-indigo-900", border: "from-purple-400/60 via-blue-400/60 to-indigo-400/60", accent: "purple" },
  { bg: "from-cyan-900 via-teal-900 to-emerald-900", border: "from-cyan-400/60 via-teal-400/60 to-emerald-400/60", accent: "cyan" },
  { bg: "from-pink-900 via-rose-900 to-orange-900", border: "from-pink-400/60 via-rose-400/60 to-orange-400/60", accent: "pink" },
  { bg: "from-indigo-900 via-purple-900 to-fuchsia-900", border: "from-indigo-400/60 via-purple-400/60 to-fuchsia-400/60", accent: "indigo" },
  { bg: "from-blue-900 via-cyan-900 to-teal-900", border: "from-blue-400/60 via-cyan-400/60 to-teal-400/60", accent: "blue" },
  { bg: "from-emerald-900 via-teal-900 to-cyan-900", border: "from-emerald-400/60 via-teal-400/60 to-cyan-400/60", accent: "emerald" },
];

export default function Project({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  index = 0,
}: ProjectProps) {
  // Use index to cycle through gradient schemes
  const scheme = gradientSchemes[index % gradientSchemes.length];
  // Scroll reveal
  const revealRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: revealRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  // Parallax tilt
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 18,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mx.set(x);
    my.set(y);
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  function handleMouseLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  const hasActions = Boolean(githubUrl || liveUrl);

  return (
    <motion.div
      ref={revealRef}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group relative h-full flex"
    >
      {/* GitHub Button - Outside transform context, always visible in top-right */}
      <Link
        href={githubUrl || "#"}
        target={githubUrl ? "_blank" : undefined}
        rel={githubUrl ? "noopener noreferrer" : undefined}
        onClick={(e) => {
          e.stopPropagation();
          if (!githubUrl) {
            e.preventDefault();
          }
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
        onMouseUp={(e) => {
          e.stopPropagation();
        }}
        onMouseMove={(e) => {
          e.stopPropagation();
        }}
        className={`absolute right-3 top-3 z-[200] inline-flex items-center justify-center
                   rounded-lg border border-white/20 bg-white/10 p-2.5 text-white
                   backdrop-blur-md shadow-lg
                   transition-all duration-200
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
                   ${githubUrl 
                     ? "hover:bg-white/20 hover:scale-110 cursor-pointer" 
                     : "opacity-60 cursor-not-allowed"
                   }`}
        aria-label={githubUrl ? "View on GitHub" : "GitHub link (add URL in lib/data.ts)"}
        title={githubUrl ? "View on GitHub" : "Add GitHub URL in lib/data.ts"}
      >
        <FiGithub className="text-lg" />
      </Link>
      
      {/* Glow border wrapper */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" as any }}
        className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${scheme.border} w-full h-full flex
                   transition-shadow duration-300 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.7)] shadow-[0_8px_30px_-10px_rgba(99,102,241,0.4)]`}
      >
        {/* Card */}
        <section
          className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${scheme.bg} w-full
                     cursor-default
                     transition-all duration-300
                     focus-within:ring-2 focus-within:ring-indigo-500
                     flex flex-col`}
          tabIndex={0}
          aria-label={title}
        >
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent z-0 pointer-events-none" />
          
          {/* Animated gradient on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${scheme.border} opacity-0 
                       group-hover:opacity-20 transition-opacity duration-500 z-0 pointer-events-none`}
          />

          {/* Live URL Button - Shows on hover if exists */}
          {liveUrl && (
            <div
              className="absolute right-3 top-3 z-20 flex items-center gap-2
                         opacity-0 -translate-y-1 transition-all duration-300
                         group-hover:opacity-100 group-hover:translate-y-0
                         group-focus-within:opacity-100 group-focus-within:translate-y-0"
              style={githubUrl ? { top: '3.5rem' } : {}}
            >
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium
                           bg-blue-600 text-white hover:bg-blue-500
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <FiExternalLink className="text-base" />
                <span>Live</span>
              </Link>
            </div>
          )}

          {/* Content */}
          <div
            className="relative z-10 pt-4 pb-4 px-4 flex flex-col h-full"
            style={{ transform: "translateZ(24px)" }}
          >
            <h3 className="text-base sm:text-lg font-bold break-words mb-2 text-white">
              {title}
            </h3>
            <p className="mt-1 leading-relaxed text-gray-200 break-words text-sm sm:text-base flex-grow">
              {description}
            </p>

            {tags && tags.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {tags.map((tag, tagIndex) => {
                  const tagColors = [
                    "bg-purple-500/20 text-purple-200 border-purple-400/30",
                    "bg-blue-500/20 text-blue-200 border-blue-400/30",
                    "bg-cyan-500/20 text-cyan-200 border-cyan-400/30",
                    "bg-pink-500/20 text-pink-200 border-pink-400/30",
                    "bg-emerald-500/20 text-emerald-200 border-emerald-400/30",
                    "bg-orange-500/20 text-orange-200 border-orange-400/30",
                  ];
                  const tagColor = tagColors[tagIndex % tagColors.length];
                  return (
                    <li
                      key={tag}
                      className={`rounded-full px-2.5 py-1 text-xs border backdrop-blur-sm
                                 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 ${tagColor}`}
                      style={{ transform: "translateZ(24px)" }}
                    >
                      {tag}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
