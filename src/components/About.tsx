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
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500/50 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-4 lg:col-span-3 relative group mx-auto w-full max-w-[280px] md:max-w-full"
          >
            {/* Soft decorative background for image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative aspect-[4/5] bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-4 overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="w-full h-full bg-gray-900 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden">
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
            <div className="p-8 bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-blue-500/50 transition-colors shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-300">
                  <FiUser size={16} />
                </span>
                Background
              </h3>
              <p className="text-gray-200 leading-relaxed font-medium">
                {background}
              </p>
            </div>

            <div className="p-8 bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-purple-500/50 transition-colors shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-300">
                  <FiTarget size={16} />
                </span>
                Focus
              </h3>
              <p className="text-gray-200 leading-relaxed font-medium">
                {focus}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/20 flex flex-col items-center text-center group hover:bg-white/10 transition-colors shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FiCode className="text-2xl text-blue-300" />
                </div>
                <h4 className="font-bold text-white text-base">AI enthusiast</h4>
                <p className="text-sm text-gray-300 mt-2 font-medium">Exploring modern AI technologies</p>
              </div>
              <div className="p-6 bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/20 flex flex-col items-center text-center group hover:bg-white/10 transition-colors shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FiTarget className="text-2xl text-purple-300" />
                </div>
                <h4 className="font-bold text-white text-base">Explorer</h4>
                <p className="text-sm text-gray-300 mt-2 font-medium">Working with new Technologies</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
