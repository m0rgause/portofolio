"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";
import config from "../../next.config";

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
  return (
    <motion.div
      className="group relative bg-base-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {/* Image container with overlay */}
      <div className="relative overflow-hidden h-48 bg-base-200">
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

        {/* View project button */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button className="w-full btn btn-primary btn-sm">
            <FiEye className="w-4 h-4 mr-2" />
            View Project
          </button>
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
  );
}
