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
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500/50 mx-auto rounded-full"></div>
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
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 h-full">
              <h3 className="text-xl font-semibold text-white mb-8 border-b border-white/10 pb-4">Contact Detail</h3>

              <div className="space-y-6">
                <a href={`mailto:${email}`} className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all border border-white/5 group-hover:border-blue-500/30">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">Email</p>
                    <p className="text-sm">{email}</p>
                  </div>
                </a>

                <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all border border-white/5 group-hover:border-white/30">
                    <FiGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">GitHub</p>
                    <p className="text-sm">Profile</p>
                  </div>
                </a>

                <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all border border-white/5 group-hover:border-blue-500/30">
                    <FiLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">LinkedIn</p>
                    <p className="text-sm">Network</p>
                  </div>
                </a>

                <a href={leetcode} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-orange-400 transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:scale-110 transition-all border border-white/5 group-hover:border-orange-500/30">
                    <FiCode className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">LeetCode</p>
                    <p className="text-sm">Challenges</p>
                  </div>
                </a>

                {whatsapp && (
                  <a href={whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-green-400 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 group-hover:scale-110 transition-all border border-white/5 group-hover:border-green-500/30">
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
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-3 bg-gray-900/50 rounded-xl text-white border ${errors.name ? 'border-red-500' : 'border-white/10'} focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all`}
                    placeholder="Vineel Kumar Polavarapu"
                  />
                  {errors.name && <p className="mt-2 text-xs text-red-500">{errors.name.message}</p>}
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
                    className={`w-full px-4 py-3 bg-gray-900/50 rounded-xl text-white border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-4 py-3 bg-gray-900/50 rounded-xl text-white border ${errors.message ? 'border-red-500' : 'border-white/10'} focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all resize-none`}
                  placeholder="Hello! I'd like to discuss..."
                />
                {errors.message && <p className="mt-2 text-xs text-red-500">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white hover:bg-blue-500 rounded-xl font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg shadow-blue-500/20"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
