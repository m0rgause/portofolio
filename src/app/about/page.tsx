"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      <Hero />

      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Hello! I am{" "}
                  <span className="text-primary font-semibold">
                    Ahmad Baihaki Nur
                  </span>
                  , a passionate Fullstack Developer and Flutter Mobile
                  Developer based in Jakarta, Indonesia.
                </p>
                <p className="text-base-content/80 leading-relaxed">
                  With a completed Bachelor&apos;s degree in Computer Science, I
                  thrive on transforming innovative concepts into practical and
                  user-friendly software solutions. My expertise lies in
                  creating seamless user experiences, designing robust system
                  architectures, and writing clean, efficient code.
                </p>
                <p className="text-base-content/80 leading-relaxed">
                  Throughout my journey, I&apos;ve contributed to diverse
                  projects, ranging from developing intuitive dashboards and
                  monitoring systems to improving mobile applications with
                  advanced features.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                className="bg-base-100/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-base-300/50"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  What I Love
                </h3>
                <ul className="space-y-3 text-base-content/80">
                  <li>🚀 Building scalable web applications</li>
                  <li>📱 Creating intuitive mobile experiences</li>
                  <li>🎨 Crafting beautiful user interfaces</li>
                  <li>🔧 Solving complex technical problems</li>
                  <li>📚 Learning new technologies</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20 shadow-lg"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4">My Approach</h3>
                <p className="text-base-content/80">
                  Collaboration and continuous improvement are at the heart of
                  my work ethic. I aim to foster environments where creativity
                  and technical excellence go hand in hand.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-base-300/50 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-base-content/70 max-w-3xl mx-auto mb-6">
                I am always excited about taking on new challenges and
                leveraging my skills to make a meaningful impact in the tech
                world. Let&apos;s create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/projects">
                  <motion.div
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View My Projects
                  </motion.div>
                </Link>
                <motion.a
                  href="/assets/resume.pdf"
                  download="Ahmad_Baihaki_Nur_Resume.pdf"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </motion.a>
                <Link href="/contact">
                  <motion.div
                    className="btn btn-outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let&apos;s Connect
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Skills />
      <Certifications />
      <Experience />
    </div>
  );
}
