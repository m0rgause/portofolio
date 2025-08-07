"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useIsClient } from "@/hooks/useIsClient";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) return;

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isClient]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 btn btn-circle btn-primary shadow-lg hover:shadow-xl"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
