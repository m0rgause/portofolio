"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
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
              <div className="bg-base-200 rounded-2xl p-6">
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
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">My Approach</h3>
                <p className="text-base-content/80">
                  Collaboration and continuous improvement are at the heart of
                  my work ethic. I aim to foster environments where creativity
                  and technical excellence go hand in hand.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-base-200 rounded-2xl p-8">
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

      {/* Education & Certifications Section */}
      <motion.section
        className="py-20 px-4 bg-base-200/30"
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
              Education & <span className="text-primary">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-base-100 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">
                      Bachelor&apos;s Degree in Computer Science
                    </h4>
                    <p className="text-base-content/70">
                      Universitas Mercu Buana
                    </p>
                    <p className="text-sm text-base-content/60">
                      2025 Graduate
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-base-100 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-3 h-3 bg-secondary rounded-full mr-3"></span>
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">
                      BNSP Certified - Junior Web Developer
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">
                      Oracle Cloud Infrastructure Certified
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Oracle Database Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">
                      Various Professional Development Courses
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Skills />
      <Experience />
    </div>
  );
}
