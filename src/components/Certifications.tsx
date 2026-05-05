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
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="scifi-card p-8 rounded-3xl flex flex-col h-full group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center border border-emerald-500/30 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-shadow">
                  <FiAward className="text-2xl text-emerald-400" />
                </div>
                {item.date && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full shrink-0 ml-4">
                    {item.date}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-extrabold text-white mb-2 leading-tight">
                {item.title}
              </h3>
              {item.issuer && (
                <h4 className="text-emerald-400 font-bold mb-4">{item.issuer}</h4>
              )}

              {item.description && (
                <p className="text-gray-400 font-medium text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
              )}

              {item.link && (
                <div className="mt-auto pt-4 border-t border-cyan-500/10">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-emerald-400 transition-colors group/link"
                  >
                    View Credential
                    <FiExternalLink className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
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
