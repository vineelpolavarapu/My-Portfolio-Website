"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative group"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line – neon cyan */}
          <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-[2px] rounded-full"
            style={{ background: 'linear-gradient(to bottom, rgba(0,240,255,0.4), rgba(168,85,247,0.4))' }}
          ></div>

          <div className="space-y-12">
            {experience.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row md:items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} group`}
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-[8px] md:left-1/2 transform md:-translate-x-1/2 w-7 h-7 rounded-full bg-[#030014] border-[3px] border-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all duration-300">
                  <FiBriefcase className="text-cyan-400 group-hover:text-white transition-colors" size={12} />
                </div>
                
                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-14 md:pl-0">
                  <div className={`scifi-card p-8 rounded-3xl ${idx % 2 === 0 ? 'md:mr-12 text-left md:text-right' : 'md:ml-12 text-left'}`}>
                    
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-cyan-300 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                      {item.duration}
                    </span>
                    
                    <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">{item.role}</h3>
                    <h4 className="text-lg font-bold text-purple-300 mb-4">{item.company}</h4>
                    
                    <p className={`text-gray-300 leading-relaxed font-medium ${idx % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      {item.description}
                    </p>
                    
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
