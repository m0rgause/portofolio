"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useIsClient } from "@/hooks/useIsClient";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("dark");
  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) return;

    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, [isClient]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!isClient) {
    return (
      <div className="btn btn-ghost btn-circle opacity-50">
        <FiMoon className="h-5 w-5" />
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 180,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <FiSun className="w-5 h-5 text-yellow-500" />
        ) : (
          <FiMoon className="w-5 h-5 text-blue-600" />
        )}
      </motion.div>
    </motion.button>
  );
}
