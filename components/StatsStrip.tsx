"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

type Stat = { label: string; value: number; suffix?: string };

const stats: Stat[] = [
  { label: "Lines of Code", value: 1600000 },
  { label: "Projects", value: 26 },
  { label: "Cups of Coffee", value: 619 },
];

export default function StatsStrip() {
  return (
    <section className="relative z-10 mx-auto -mb-8 mt-8 w-full max-w-6xl px-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-6
                       shadow-lg backdrop-blur-md dark:bg-gray-900/40"
          >
            <div className="text-center">
              <div className="text-4xl font-extrabold tracking-tight text-amber-300">
                <CountUp end={s.value} duration={2.2} separator="," />
                {s.suffix ?? ""}
              </div>
              <div className="mt-1 text-sm uppercase tracking-widest text-gray-300">
                {s.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
