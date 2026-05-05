"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech_stack: string[];
  github: string;
  demo: string;
  image: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Image Container */}
              <div className="w-full lg:w-3/5 relative group perspective">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/10 group-hover:border-cyan-400/30 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(0,240,255,0.1)]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform transition duration-700 ease-in-out group-hover:scale-105" 
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#030014]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:hidden flex items-center justify-center gap-6 backdrop-blur-sm">
                     <a href={project.github} target="_blank" rel="noreferrer" className="p-4 bg-cyan-500/10 rounded-full text-cyan-300 hover:bg-cyan-500/20 transition border border-cyan-500/20 hover:-translate-y-1">
                       <FiGithub className="w-6 h-6" />
                     </a>
                     <a href={project.demo} target="_blank" rel="noreferrer" className="p-4 bg-purple-500/10 rounded-full text-purple-300 hover:bg-purple-500/20 transition border border-purple-500/20 hover:-translate-y-1">
                       <FiExternalLink className="w-6 h-6" />
                     </a>
                  </div>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center relative">
                
                <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
                   {project.title}
                </h3>
                
                <div className="scifi-card rounded-2xl p-6 mb-6 relative z-10 transform lg:-ml-12 group-hover:translate-x-2 transition-transform duration-500">
                  <p className="text-gray-300 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech_stack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-sm font-medium text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 hover:border-cyan-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-6 font-semibold">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <FiGithub className="w-5 h-5" /> GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <FiExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
