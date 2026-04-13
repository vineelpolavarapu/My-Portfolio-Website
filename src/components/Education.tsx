"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description: string;
  university?: string;
  achievements?: string[];
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-500/50 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-gray-900/60 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl hover:bg-gray-800/80 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-white transition-colors">
                    {item.degree}
                  </h3>
                  <div className="flex flex-col mt-2">
                    <div className="flex items-center gap-2 text-gray-200 font-bold">
                      <FiBookOpen className="text-blue-500" />
                      <h4>{item.institution}</h4>
                    </div>
                    {item.university && (
                      <div className="text-sm text-gray-400 mt-1 ml-6 flex items-center gap-1 font-medium">
                        <span className="opacity-80">Affiliated to</span> {item.university}
                      </div>
                    )}
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-200 bg-blue-900/30 border border-blue-500/20 rounded-full">
                    {item.duration}
                  </span>
                </div>
              </div>

              <p className="text-gray-200 leading-relaxed mb-6 font-medium">
                {item.description}
              </p>

              {item.achievements && item.achievements.length > 0 && (
                <div className="border-t border-white/5 pt-6 mt-6">
                  <h5 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <FiAward className="text-blue-400" />
                    Key Achievements
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-200 font-medium"
                      >
                        <span className="mr-2 text-blue-500 mt-0.5">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
