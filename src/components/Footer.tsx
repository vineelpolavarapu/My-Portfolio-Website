"use client";

import { FiHeart, FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-cyan-500/10 relative z-20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-500">
        
        <p>
          &copy; {currentYear} {name}. All rights reserved.
        </p>

        <p className="flex items-center gap-2">
          Built with Next.js <FiHeart className="text-cyan-400" />
        </p>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full border border-cyan-500/20 bg-cyan-500/5 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/15 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          aria-label="Back to top"
        >
          <FiArrowUp size={18} />
        </motion.button>

      </div>
    </footer>
  );
}
