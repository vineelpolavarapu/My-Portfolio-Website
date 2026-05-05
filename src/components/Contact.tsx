"use client";

import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCode } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

interface ContactProps {
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  whatsapp?: string;
}

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact({ email, github, linkedin, leetcode, whatsapp }: ContactProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    alert("Message sent successfully! (This is a simulation)");
    reset();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto font-light">
            I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/3"
          >
            <div className="scifi-card p-8 rounded-3xl h-full">
              <h3 className="text-xl font-semibold text-white mb-8 border-b border-cyan-500/10 pb-4">Contact Detail</h3>

              <div className="space-y-6">
                <a href={`mailto:${email}`} className="flex items-center gap-4 text-gray-400 hover:text-cyan-300 transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/5 flex items-center justify-center group-hover:bg-cyan-500/15 group-hover:scale-110 transition-all border border-cyan-500/10 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">Email</p>
                    <p className="text-sm">{email}</p>
                  </div>
                </a>

                <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all border border-white/5 group-hover:border-white/20 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <FiGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">GitHub</p>
                    <p className="text-sm">Profile</p>
                  </div>
                </a>

                <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/5 flex items-center justify-center group-hover:bg-blue-500/15 group-hover:scale-110 transition-all border border-blue-500/10 group-hover:border-blue-500/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                    <FiLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">LinkedIn</p>
                    <p className="text-sm">Network</p>
                  </div>
                </a>

                <a href={leetcode} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-amber-400 transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/5 flex items-center justify-center group-hover:bg-amber-500/15 group-hover:scale-110 transition-all border border-amber-500/10 group-hover:border-amber-500/30 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                    <FiCode className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">LeetCode</p>
                    <p className="text-sm">Challenges</p>
                  </div>
                </a>

                {whatsapp && (
                  <a href={whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-emerald-400 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/5 flex items-center justify-center group-hover:bg-emerald-500/15 group-hover:scale-110 transition-all border border-emerald-500/10 group-hover:border-emerald-500/30 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                      <FaWhatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300">WhatsApp</p>
                      <p className="text-sm">Message Me</p>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-2/3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="scifi-card p-8 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-3 bg-[#030014]/80 rounded-xl text-white border ${errors.name ? 'border-red-500' : 'border-cyan-500/10'} focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-all focus:shadow-[0_0_15px_rgba(0,240,255,0.1)]`}
                    placeholder="Vineel Kumar Polavarapu"
                  />
                  {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                    })}
                    className={`w-full px-4 py-3 bg-[#030014]/80 rounded-xl text-white border ${errors.email ? 'border-red-500' : 'border-cyan-500/10'} focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-all focus:shadow-[0_0_15px_rgba(0,240,255,0.1)]`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-4 py-3 bg-[#030014]/80 rounded-xl text-white border ${errors.message ? 'border-red-500' : 'border-cyan-500/10'} focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-all resize-none focus:shadow-[0_0_15px_rgba(0,240,255,0.1)]`}
                  placeholder="Hello! I'd like to discuss..."
                />
                {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden px-8 py-4 rounded-xl font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
