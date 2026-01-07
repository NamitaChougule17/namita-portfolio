"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionDividerProps = {
  compact?: boolean;
};

export default function SectionDivider({ compact = false }: SectionDividerProps) {
  return (
    <motion.div
      className={`bg-[#E8E8EA]/20 ${compact ? 'my-12' : 'my-24'} h-16 w-1 rounded-full hidden sm:block`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}