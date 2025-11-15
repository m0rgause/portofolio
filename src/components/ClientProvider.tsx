"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useIsClient } from "@/hooks/useIsClient";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/navbar";

interface ClientProviderProps {
  children: React.ReactNode;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isClient = useIsClient();

  useEffect(() => {
    setMounted(true);
    // Set theme on load - only after component mounts
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClient]);

  if (!mounted) {
    return <div className="min-h-screen bg-base-100" />;
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Background Elements */}
          <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -40, 0],
                y: [0, 40, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Floating Particles */}
          {isClient && (
            <motion.div
              className="fixed inset-0 pointer-events-none z-0"
              style={{
                x: mousePosition.x / 50,
                y: mousePosition.y / 50,
              }}
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          )}

          <ParticlesBackground />
          <Navbar />
          <main id="main-content" className="min-h-screen">
            <motion.section
              id="content"
              className="container mx-auto mt-7 px-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {children}
            </motion.section>
          </main>

          <motion.footer
            className="bg-base-200 mt-20 border-t border-base-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-4">
              <div className="footer text-base-content py-10">
                <aside className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8" />
                    <span className="text-xl font-bold">Ahmad Baihaki Nur</span>
                  </div>
                  <motion.p
                    className="text-sm text-base-content/70"
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                  >
                    Fullstack Developer & Mobile Engineer
                  </motion.p>
                  <p className="text-xs text-base-content/60">
                    © 2018-2025 Built with &#10084; by{" "}
                    <span className="text-primary font-semibold">Baihaki</span>
                  </p>
                </aside>
                <nav className="flex flex-col gap-2">
                  <h6 className="footer-title">Quick Links</h6>
                  <a href="/about" className="link link-hover">
                    About
                  </a>
                  <a href="/projects" className="link link-hover">
                    Projects
                  </a>
                  <a href="/contact" className="link link-hover">
                    Contact
                  </a>
                </nav>
                <nav className="flex flex-col gap-4">
                  <h6 className="footer-title">Connect</h6>
                  <div className="grid grid-flow-col gap-4">
                    <motion.a
                      href="https://www.linkedin.com/in/ahmad-baihaki-nur-257803216/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://github.com/m0rgause"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-400 transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="mailto:ahmadbaihakinur@gmail.com"
                      className="hover:text-red-500 transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.309l9.055 6.794 9.055-6.794h1.309A1.636 1.636 0 0 1 24 5.457z" />
                      </svg>
                    </motion.a>
                  </div>
                </nav>
              </div>
            </div>
          </motion.footer>
          <ScrollToTop />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
