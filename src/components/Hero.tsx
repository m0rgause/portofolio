"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaCode,
  FaRocket,
  FaMobile,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { HiSparkles, HiCode, HiLightningBolt } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useIsClient } from "@/hooks/useIsClient";
import Link from "next/link";
import config from "../../next.config";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const isClient = useIsClient();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 900], [1, 0]);

  const roles = [
    "Fullstack Developer",
    "Mobile Developer",
    "Backend Engineer",
    "Software Engineer",
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: HiLightningBolt },
    { number: "30+", label: "Projects Completed", icon: HiCode },
    { number: "15+", label: "Technologies", icon: HiSparkles },
  ];

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length, isClient]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 py-20"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-primary font-semibold text-sm flex items-center gap-2">
                  <HiSparkles className="text-lg" />
                  Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Ahmad Baihaki Nur
                </span>
              </motion.h1>

              <motion.div
                className="h-16 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {isClient ? (
                  <motion.div
                    key={currentRole}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-2xl lg:text-3xl font-semibold text-accent flex items-center gap-3"
                  >
                    <HiCode className="text-primary" />
                    {roles[currentRole]}
                  </motion.div>
                ) : (
                  <div className="text-2xl lg:text-3xl font-semibold text-accent flex items-center gap-3">
                    <HiCode className="text-primary" />
                    {roles[0]}
                  </div>
                )}
              </motion.div>

              <motion.p
                className="text-lg text-base-content/70 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Passionate about crafting exceptional digital experiences
                through clean code and innovative solutions. Specializing in
                fullstack development and mobile applications with a focus on
                performance and user experience.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link href="/projects">
                  <motion.button
                    className="btn btn-primary btn-lg gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaRocket />
                    View Projects
                  </motion.button>
                </Link>
                <motion.a
                  href="/assets/resume.pdf"
                  download="Ahmad_Baihaki_Nur_Resume.pdf"
                  className="btn btn-outline btn-lg gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <span className="text-sm text-base-content/60">Connect:</span>
                <motion.a
                  href="https://github.com/m0rgause"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-sm btn-ghost"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ahmad-baihaki-nur-257803216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-sm btn-ghost"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
                <motion.a
                  href="mailto:ahmadbaihakinur@gmail.com"
                  className="btn btn-circle btn-sm btn-ghost"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEnvelope className="text-xl" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Visual Elements */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Central Card */}
            <motion.div
              className="relative w-full max-w-md"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />

              {/* Main Card */}
              <div className="relative bg-base-100/80 backdrop-blur-xl rounded-3xl p-8 border border-base-300/50 shadow-2xl">
                {/* Logo/Avatar */}
                <motion.div
                  className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary p-1"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <div className="w-full h-full bg-base-100 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img
                      src={config.basePath + "/logo.png"}
                      alt="Logo"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </motion.div>

                {/* Skills Icons */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <motion.div
                    className="flex flex-col items-center p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FaCode className="text-3xl text-primary mb-2" />
                    <span className="text-xs font-medium">Frontend</span>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center p-4 bg-secondary/5 rounded-xl hover:bg-secondary/10 transition-colors"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <FaMobile className="text-3xl text-secondary mb-2" />
                    <span className="text-xs font-medium">Mobile</span>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center p-4 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FaRocket className="text-3xl text-accent mb-2" />
                    <span className="text-xs font-medium">Backend</span>
                  </motion.div>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-center gap-3 p-3 bg-base-200/50 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <stat.icon className="text-2xl text-primary" />
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-primary">
                          {stat.number}
                        </div>
                        <div className="text-xs text-base-content/60">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-2xl"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-16 h-16 bg-secondary/20 rounded-full"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
