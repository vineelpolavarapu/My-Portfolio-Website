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
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-purple-500/50 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gray-900/60 backdrop-blur-xl p-8 rounded-3xl border border-white/20 hover:bg-gray-800/80 hover:border-white/30 transition-all duration-300 group shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 text-white flex items-center justify-center text-sm font-black shadow-inner border border-white/10">
                  {idx + 1}
                </span>
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 bg-gray-800 text-white text-sm font-bold rounded-full border border-white/10 group-hover:border-white/20 transition-colors shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
