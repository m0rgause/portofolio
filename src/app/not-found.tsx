"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 404 Text */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 select-none">
            404
          </h1>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Page Not Found
            </div>
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-base-content/70 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Oops! The page you&apos;re looking for seems to have wandered off into
          the digital void. Don&apos;t worry, even the best developers get lost
          sometimes.
        </motion.p>

        {/* Animated illustration */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 200,
          }}
        >
          <div className="relative w-64 h-64">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-6xl"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🔍
            </motion.div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link href="/about">
            <motion.button
              className="btn btn-primary btn-lg gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiHome className="w-5 h-5" />
              Go Home
            </motion.button>
          </Link>
          <motion.button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-lg gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowLeft className="w-5 h-5" />
            Go Back
          </motion.button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="mt-12 pt-8 border-t border-base-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-sm text-base-content/60 mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="link link-hover text-sm">
              About Me
            </Link>
            <Link href="/projects" className="link link-hover text-sm">
              Projects
            </Link>
            <Link href="/contact" className="link link-hover text-sm">
              Contact
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
