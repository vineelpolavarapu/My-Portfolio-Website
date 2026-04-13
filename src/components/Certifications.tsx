"use client";

import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

interface CertificationItem {
  title: string;
  issuer?: string;
  date?: string;
  description?: string;
  link?: string;
}

interface CertificationsProps {
  certifications: CertificationItem[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-green-500/50 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-gray-900/60 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl hover:bg-gray-800/80 hover:border-green-500/40 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
                  <FiAward className="text-2xl text-green-400" />
                </div>
                {item.date && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-green-200 bg-green-900/30 border border-green-500/20 rounded-full shrink-0 ml-4">
                    {item.date}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-extrabold text-white mb-2 leading-tight">
                {item.title}
              </h3>
              {item.issuer && (
                <h4 className="text-green-400 font-bold mb-4">{item.issuer}</h4>
              )}

              {item.description && (
                <p className="text-gray-300 font-medium text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
              )}

              {item.link && (
                <div className="mt-auto pt-4 border-t border-white/10">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-green-400 transition-colors group"
                  >
                    View Credential
                    <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
