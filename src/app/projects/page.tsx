"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      imageUrl: "/assets/img/NITA.png",
      title: "NITA",
      description:
        "Merchant app for facilitating toll users in Makassar with secure payment processing and intuitive user interface design.",
      tags: ["Dart", "Flutter", "Firebase"],
      githubUrl: "https://github.com/m0rgause",
      liveUrl: "https://example.com",
    },
    {
      imageUrl: "/assets/img/dbs.png",
      title: "IQOS DBS",
      description:
        "Comprehensive tracking system for loan and delivery of IQOS devices with real-time monitoring and automated reporting.",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/m0rgause",
    },
    {
      imageUrl: "/assets/img/gng.png",
      title: "IQOS Grab N Go",
      description:
        "Advanced warehouse and logistics management system with inventory tracking and automated supply chain optimization.",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/m0rgause",
    },
    {
      imageUrl: "/assets/img/faji.png",
      title: "FAJI",
      description:
        "Federasi Arung Jeram Indonesia platform for managing competition data and athlete information with comprehensive analytics.",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
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
      githubUrl: "https://github.com/m0rgause",
    },
    {
      imageUrl: "/assets/img/itbditkeu.png",
      title: "ITB Direktorat Keuangan",
      description:
        "Complete system overhaul including database migration, dashboard redesign, SSO integration, and advanced data visualization implementation.",
      tags: ["PHP", "Codeigniter 4", "Oracle", "Bootstrap"],
      githubUrl: "https://github.com/m0rgause",
    },
    {
      imageUrl: "/assets/img/syaki.jpg",
      title: "SyaKi Virtual Assistant",
      description:
        "A Virtual Assistant designed to assist students in managing their academic schedules and answering FAQs from university resources.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "LLama3.1"],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in fullstack
            development, mobile applications, and system architecture. Each
            project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {projects.map((project, index) => (
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

        <motion.div
          className="text-center mt-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Interested in My Work?</h2>
            <p className="text-base-content/70 mb-6 max-w-2xl mx-auto">
              These projects represent just a fraction of what I can do.
              I&apos;m always working on new ideas and looking for exciting
              opportunities to collaborate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/m0rgause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View More on GitHub
              </motion.a>
              <Link href="/contact">
                <motion.div
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let&apos;s Collaborate
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
