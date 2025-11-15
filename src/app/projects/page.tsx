"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { FiCode, FiLayers, FiTrendingUp, FiStar } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import { useState } from "react";
import { image } from "framer-motion/client";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web Apps", "Mobile", "Enterprise", "Open Source"];

  const projects = [
    {
      imageUrl: "/assets/img/NITA.png",
      title: "NITA",
      description:
        "Merchant app for facilitating toll users in Makassar with secure payment processing and intuitive user interface design.",
      tags: ["Dart", "Flutter", "Firebase"],
      category: "Mobile",
      githubUrl: "https://github.com/m0rgause",
      liveUrl: "https://example.com",
    },
    {
      imageUrl: "/assets/img/dbs.png",
      title: "IQOS DBS",
      description:
        "Comprehensive tracking system for loan and delivery of IQOS devices with real-time monitoring and automated reporting.",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      category: "Web Apps",
      githubUrl: "https://github.com/m0rgause",
    },
    {
      imageUrl: "/assets/img/gng.png",
      title: "IQOS Grab N Go",
      description:
        "Advanced warehouse and logistics management system with inventory tracking and automated supply chain optimization.",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      category: "Web Apps",
      githubUrl: "https://github.com/m0rgause",
    },
    {
      imageUrl: "/assets/img/lpdp.png",
      title: "SMART LPDP",
      description:
        "Intelligent monitoring and automation report system with real-time transaction tracking and advanced data visualization.",
      tags: [
        "React.JS",
        "Node.JS",
        "Express.JS",
        "PostgreSQL",
        "Sequelize",
        "Ant Design",
      ],
      category: "Enterprise",
      githubUrl: "https://github.com/m0rgause",
    },
    {
      imageUrl: "/assets/img/bpjskes.png",
      title: "BPJS Kesehatan Transaction Monitoring",
      description:
        "Enterprise-level real-time transaction monitoring system with advanced data visualization and comprehensive oversight capabilities.",
      tags: [
        "React.JS",
        "Node.JS",
        "Express.JS",
        "PostgreSQL",
        "MS SQL Server",
        "Sequelize",
        "Ant Design",
      ],
      category: "Enterprise",
      githubUrl: "https://github.com/m0rgause",
    },
    {
      imageUrl: "/assets/img/itbditkeu.png",
      title: "ITB Direktorat Keuangan",
      description:
        "Complete system overhaul including database migration, dashboard redesign, SSO integration, and advanced data visualization implementation.",
      tags: ["PHP", "Codeigniter 4", "Oracle", "Bootstrap"],
      category: "Enterprise",
      githubUrl: "https://github.com/m0rgause",
    },
    {
      imageUrl: "/assets/img/syaki.jpg",
      title: "SyaKi Virtual Assistant",
      description:
        "A Virtual Assistant designed to assist students in managing their academic schedules and answering FAQs from university resources.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "LLama3.1"],
      category: "Open Source",
    },
    {
      imageUrl: "/assets/img/Faji.jpeg",
      title: "FAJI Kejurnas",
      description:
        "Federasi Arung Jeram Indonesia platform for managing competition data and athlete information with comprehensive analytics.",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      category: "Web Apps",
    },
    {
      imageUrl: "/assets/img/UNJ.jpeg",
      title: "UNJ VA Management System",
      description:
        "Virtual Account Management System for Universitas Negeri Jakarta to streamline financial operations and reporting.",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      category: "Enterprise",
    },
    {
      imageUrl: "/assets/img/Universitas_Indonesia.jpeg",
      title: "UI Treasury Management System",
      description:
        "Financial Monitoring System for Universitas Indonesia to enhance treasury operations with real-time data tracking and reporting.",
      tags: ["PHP", "Codeigniter", "PostgreSQL", "Bootstrap"],
      category: "Enterprise",
    },
    {
      imageUrl: "/assets/img/ppdb_sdi.jpeg",
      title: "PPDB SDi Assalaam",
      description:
        "Online Student Admission System for SDi Assalaam to facilitate efficient enrollment processes and data management.",
      tags: ["PHP", "MySQL", "Bootstrap", "Codeigniter"],
      category: "Web Apps",
    },
    {
      imageUrl: "/assets/img/profile_sdi.jpeg",
      title: "SDi Assalaam Profile Website",
      description:
        "Official Profile Website for SDi Assalaam showcasing school information, programs, and achievements.",
      tags: ["Javascript", "Next.js", "Tailwind CSS", "Shadcn UI", "Laravel"],
      category: "Web Apps",
    },
    {
      imageUrl: "/assets/img/mini-notion.jpeg",
      title: "Notion Clone",
      description:
        "Notion Clone app built with Vue.js and Express.js. Supports note-taking, task management, and collaboration features.",
      tags: [
        "Vue.js",
        "Express.js",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Vite",
        "Shadcn UI",
      ],
      category: "Open Source",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const stats = [
    { icon: FiCode, value: projects.length, label: "Total Projects" },
    { icon: FiLayers, value: "8+", label: "Technologies" },
    { icon: FiTrendingUp, value: "100%", label: "Success Rate" },
    { icon: FiStar, value: "5+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-primary font-semibold text-sm flex items-center gap-2">
              <HiSparkles className="text-lg" />
              Portfolio Showcase
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            A curated collection of projects showcasing my expertise in
            fullstack development, mobile applications, and enterprise
            solutions. Each project represents innovation, quality, and
            dedication to excellence.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-base-100/80 backdrop-blur-xl rounded-2xl p-6 border border-base-300/50 shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="text-3xl text-primary mb-2 mx-auto" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-base-content/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Tabs */}
      <motion.section
        className="px-4 mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-base-100/80 backdrop-blur-xl border border-base-300/50 hover:border-primary/50 hover:bg-primary/5"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                index={index}
              />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-2xl text-base-content/50">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="px-4 pb-20"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20 shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Build Something{" "}
              <span className="text-primary">Amazing</span>
            </h2>
            <p className="text-base-content/70 mb-8 max-w-2xl mx-auto">
              These projects represent just a fraction of what I can accomplish.
              I&apos;m always eager to take on new challenges and collaborate on
              innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/m0rgause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCode className="text-xl" />
                View More on GitHub
              </motion.a>
              <Link href="/contact">
                <motion.button
                  className="btn btn-outline btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let&apos;s Collaborate
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
