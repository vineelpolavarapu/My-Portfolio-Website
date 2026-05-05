"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiFileText } from "react-icons/fi";
import { useEffect, useState } from "react";

interface HeroProps {
  name: string;
  title: string;
  summary: string;
}

// Typing effect hook
function useTypingEffect(text: string, speed: number = 40) {
  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayText("");
    setIsDone(false);
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayText, isDone };
}

export default function Hero({ name, title, summary }: HeroProps) {
  const { displayText: typedSummary, isDone } = useTypingEffect(summary, 25);

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
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-300 text-sm font-medium backdrop-blur-sm neon-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-white mb-4 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I&apos;m{" "}
            <span className="holo-text font-black inline-block">
              {name.split('/')[0]}
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              {title}
            </span>
          </motion.h2>

          <motion.div
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-normal min-h-[80px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span>{typedSummary}</span>
            {!isDone && <span className="text-cyan-400 animate-pulse ml-0.5">|</span>}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#projects"
              className="group relative px-8 py-3.5 w-full sm:w-auto text-center overflow-hidden rounded-full font-bold transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 w-full sm:w-auto text-center bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:border-cyan-400/50 font-medium rounded-full transition-all backdrop-blur-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
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
