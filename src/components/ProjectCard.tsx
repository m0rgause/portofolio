"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import config from "../../next.config";
import { useState } from "react";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

export default function ProjectCard({
  imageUrl,
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group relative bg-base-100/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-base-300/50 hover:border-primary/30 transition-all duration-500"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
      >
        {/* Image container with overlay */}
        <div
          className="relative overflow-hidden h-48 bg-base-200 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <Image
            src={config.basePath + imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            width={400}
            height={200}
          />

          {/* Action buttons overlay */}
          <motion.div
            className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub className="w-4 h-4" />
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/80 text-white rounded-full hover:bg-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.h3
            className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-base-content/70 mb-4 leading-relaxed"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>

          {/* Technologies */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors cursor-default"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + tagIndex * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(var(--p), 0.05) 0%, rgba(var(--s), 0.05) 50%, rgba(var(--a), 0.05) 100%)`,
          }}
        />
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative max-w-6xl w-full max-h-[90vh] bg-base-100 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
                onClick={() => setIsModalOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX className="w-6 h-6" />
              </motion.button>

              {/* Image */}
              <div className="relative w-full h-full flex items-center justify-center bg-base-200">
                <Image
                  src={config.basePath + imageUrl}
                  alt={title}
                  className="w-full h-auto object-contain"
                  width={1200}
                  height={800}
                  style={{ maxHeight: "90vh" }}
                />
              </div>

              {/* Info overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/80 mb-3">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/20 text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
