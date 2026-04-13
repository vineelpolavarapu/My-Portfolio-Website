"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiFileText } from "react-icons/fi";

interface HeroProps {
  name: string;
  title: string;
  summary: string;
}

export default function Hero({ name, title, summary }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center relative z-10 w-full gap-8">

        <motion.div
          className="text-center w-full flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            Available for new opportunities
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-white mb-4 tracking-tighter leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-black inline-block">
              {name.split('/')[0]}
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-8 tracking-tight drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to me!
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {summary}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#projects"
              className="px-8 py-3.5 w-full sm:w-auto text-center bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 font-bold rounded-full transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 w-full sm:w-auto text-center bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 font-medium rounded-full transition-all backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <FiFileText />
              Contact Me
            </a>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}
