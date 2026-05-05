"use client";

import { motion } from "framer-motion";
import { FiUser, FiCode, FiTarget } from "react-icons/fi";

interface AboutProps {
  background: string;
  focus: string;
  image?: string;
}

export default function About({ background, focus, image }: AboutProps) {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-4 lg:col-span-3 relative group mx-auto w-full max-w-[280px] md:max-w-full"
          >
            {/* Neon glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative aspect-[4/5] bg-[#05051e]/80 backdrop-blur-xl border border-cyan-500/20 rounded-[2.5rem] p-4 overflow-hidden flex items-center justify-center shadow-2xl group-hover:border-cyan-400/40 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(0,240,255,0.15)]">
              <div className="w-full h-full bg-[#05051e] rounded-3xl border border-cyan-500/10 flex items-center justify-center relative overflow-hidden">
                {image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={image} alt="Vineel Kumar Polavarapu – Software Engineer" className="w-full h-full object-cover" />
                ) : (
                  <FiUser className="text-8xl text-gray-800" />
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="md:col-span-8 lg:col-span-9 space-y-8"
          >
            <div className="scifi-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-300 border border-cyan-500/30">
                  <FiUser size={16} />
                </span>
                Background
              </h3>
              <p className="text-gray-300 leading-relaxed font-medium">
                {background}
              </p>
            </div>

            <div className="scifi-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 border border-purple-500/30">
                  <FiTarget size={16} />
                </span>
                Focus
              </h3>
              <p className="text-gray-300 leading-relaxed font-medium">
                {focus}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="scifi-card p-6 rounded-3xl flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <FiCode className="text-2xl text-cyan-300" />
                </div>
                <h4 className="font-bold text-white text-base">AI Enthusiast</h4>
                <p className="text-sm text-gray-400 mt-2 font-medium">Exploring modern AI technologies</p>
              </div>
              <div className="scifi-card p-6 rounded-3xl flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-purple-500/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <FiTarget className="text-2xl text-purple-300" />
                </div>
                <h4 className="font-bold text-white text-base">Explorer</h4>
                <p className="text-sm text-gray-400 mt-2 font-medium">Working with new Technologies</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
