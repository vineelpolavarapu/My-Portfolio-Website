"use client";

import { motion, Variants } from "framer-motion";

interface SkillCategory {
  category: string;
  skills: string[];
}

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

// Category accent colors for visual variety
const categoryAccents = [
  { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-300", glow: "group-hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]", pillBorder: "border-cyan-500/20", pillBg: "bg-cyan-500/10", pillText: "text-cyan-300" },
  { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-300", glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]", pillBorder: "border-purple-500/20", pillBg: "bg-purple-500/10", pillText: "text-purple-300" },
  { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-300", glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]", pillBorder: "border-blue-500/20", pillBg: "bg-blue-500/10", pillText: "text-blue-300" },
  { border: "border-pink-500/30", bg: "bg-pink-500/10", text: "text-pink-300", glow: "group-hover:shadow-[0_0_30px_rgba(244,114,182,0.1)]", pillBorder: "border-pink-500/20", pillBg: "bg-pink-500/10", pillText: "text-pink-300" },
  { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-300", glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]", pillBorder: "border-emerald-500/20", pillBg: "bg-emerald-500/10", pillText: "text-emerald-300" },
  { border: "border-amber-500/30", bg: "bg-amber-500/10", text: "text-amber-300", glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]", pillBorder: "border-amber-500/20", pillBg: "bg-amber-500/10", pillText: "text-amber-300" },
];

export default function Skills({ skillCategories }: SkillsProps) {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, idx) => {
            const accent = categoryAccents[idx % categoryAccents.length];
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`scifi-card p-8 rounded-3xl group ${accent.glow} transition-all duration-300`}
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className={`w-10 h-10 rounded-full ${accent.bg} ${accent.text} flex items-center justify-center text-sm font-black border ${accent.border}`}>
                    {idx + 1}
                  </span>
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-4 py-2 ${accent.pillBg} ${accent.pillText} text-sm font-bold rounded-full border ${accent.pillBorder} transition-all duration-300 hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
