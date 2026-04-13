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
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-blue-500/50 mx-auto rounded-full"></div>
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
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500 transform group-hover:-translate-y-2">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform transition duration-700 ease-in-out group-hover:scale-105" 
                  />
                  
                  {/* Overlay for small screens */}
                  <div className="absolute inset-0 bg-gray-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:hidden flex items-center justify-center gap-6 backdrop-blur-sm">
                     <a href={project.github} target="_blank" rel="noreferrer" className="p-4 bg-white/10 rounded-full text-white hover:bg-white/20 transition hover:-translate-y-1">
                       <FiGithub className="w-6 h-6" />
                     </a>
                     <a href={project.demo} target="_blank" rel="noreferrer" className="p-4 bg-blue-500/80 rounded-full text-white hover:bg-blue-400 transition hover:-translate-y-1">
                       <FiExternalLink className="w-6 h-6" />
                     </a>
                  </div>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center relative">
                
                <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
                   {project.title}
                </h3>
                
                <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl mb-6 relative z-10 transform lg:-ml-12 group-hover:translate-x-2 transition-transform duration-500">
                  <p className="text-gray-200 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech_stack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-sm font-medium text-blue-300 bg-blue-900/20 px-3 py-1 rounded-full border border-blue-500/20"
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
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FiGithub className="w-5 h-5" /> GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
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
