"use client";

import { motion } from "framer-motion";
import { FaCode, FaRocket, FaMobile } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useIsClient } from "@/hooks/useIsClient";
import Link from "next/link";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const isClient = useIsClient();
  const roles = [
    "Fullstack Developer",
    "Mobile Developer",
    "Backend Engineer",
    "Software Engineer",
  ];

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length, isClient]);

  return (
    <motion.div
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, staggerChildren: 0.3, delayChildren: 0.2 }}
    >
      <motion.div
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I&apos;m Baihaki
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl mb-6 h-20 flex items-center justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          suppressHydrationWarning
        >
          {isClient ? (
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-accent font-semibold"
            >
              {roles[currentRole]}
            </motion.span>
          ) : (
            <span className="text-accent font-semibold">{roles[0]}</span>
          )}
        </motion.div>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I&apos;m a dedicated Computer Science graduate with a Bachelor&apos;s
          degree. My passion lies in transforming innovative ideas into reality
          through intuitive and polished software interfaces. I focus on
          crafting exceptional user experiences, building robust architectures,
          and writing clean, maintainable code.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center group cursor-pointer"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <FaCode className="text-3xl text-primary" />
          </div>
          <span className="mt-2 text-sm font-medium">Web Development</span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center group cursor-pointer"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="p-4 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
            <FaMobile className="text-3xl text-secondary" />
          </div>
          <span className="mt-2 text-sm font-medium">Mobile Apps</span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center group cursor-pointer"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
            <FaRocket className="text-3xl text-accent" />
          </div>
          <span className="mt-2 text-sm font-medium">Innovation</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <Link href="/projects">
          <motion.div
            className="btn btn-primary btn-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.div>
        </Link>
        <Link href="/contact">
          <motion.div
            className="btn btn-outline btn-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.div>
        </Link>
      </motion.div>

      {/* <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div> */}
    </motion.div>
  );
}
