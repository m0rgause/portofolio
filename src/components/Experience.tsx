"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

export default function Experience() {
  const experiences = [
    {
      title: "Freelance Fullstack Developer",
      company: "PT Genggam Gemilang",
      location: "Jakarta, Indonesia",
      period: "July 2023 - February 2025",
      description:
        "Developed a SMART LPDP portal with monitoring tools, automated reporting, and real-time transaction tracking. Created and deployed a user-friendly BPJS Kesehatan Dashboard with real-time updates. Also led database migration and dashboard redesign for financial monitoring systems at Institut Teknologi Bandung and Universitas Indonesia.",
      technologies: [
        "Fullstack Development",
        "Data Visualization",
        "Database Migration",
        "Automated Reporting",
        "Real-time Dashboards",
      ],
    },
    {
      title: "Fullstack Developer",
      company: "Synaptech",
      location: "Jakarta, Indonesia",
      period: "June 2022 - December 2024",
      description:
        "Developed and maintained web applications using PHP and Node.js. Collaborated with teams to analyze requirements, implement database architecture, optimize queries, and work with UI/UX designers to create user-friendly interfaces.",
      technologies: [
        "PHP",
        "Node.js",
        "Database Architecture",
        "SQL",
        "UI/UX Collaboration",
      ],
    },
    {
      title: "Freelance Fullstack Developer",
      company: "Mitra FM",
      location: "Jakarta, Indonesia",
      period: "July 2024 - August 2024",
      description:
        "Developed a broadcasting application using Flutter. Configured a Virtual Private Server (VPS) for radio broadcasting and set up a local server to transmit signals to the VPS, ensuring a seamless and reliable streaming service.",
      technologies: [
        "Flutter",
        "Dart",
        "VPS Configuration",
        "Server Management",
        "Streaming",
      ],
    },
    {
      title: "Flutter Mobile Developer Intern",
      company: "PT Nusantara Infrastructure",
      location: "Jakarta, Indonesia",
      period: "February 2024 - June 2024",
      description:
        "Improved a merchant application by upgrading its UI/UX and adding key features such as vouchers, a points system, E-Card top-up, and notifications. Utilized Google Cloud Platform, Firebase, and Jira for development and project management.",
      technologies: [
        "Flutter",
        "Dart",
        "UI/UX",
        "Google Cloud Platform",
        "Firebase",
        "Jira",
      ],
    },
    {
      title: "Freelance Fullstack Developer",
      company: "IQOS Indonesia",
      location: "Jakarta, Indonesia",
      period: "August 2023 - April 2024",
      description:
        "Developed a device loan system website to manage warehouse inventory and track device history. Collaborated on a customer management website, participated in code reviews, and independently deployed new features. Also installed, configured, and monitored servers for optimal performance.",
      technologies: [
        "Fullstack Development",
        "Inventory Management",
        "Server Configuration",
        "Code Review",
        "Project Collaboration",
      ],
    },
    {
      title: "Freelance Fullstack Developer",
      company: "GEN Tech",
      location: "Jakarta, Indonesia",
      period: "June 2020 - June 2021",
      description:
        "Developed a Computer-Based Test (CBT) application for SMK SATRIA using PHP and Bootstrap. This streamlined the examination process and improved the user experience for both students and administrators.",
      technologies: ["PHP", "Bootstrap", "MySQL", "Web Development"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-base-200/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            My professional journey building impactful software solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-primary/20"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-base-100 z-10"></div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <motion.div
                  className="bg-base-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Company badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FiBriefcase className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {exp.company}
                    </span>
                  </div>

                  {/* Job title */}
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>

                  {/* Period and location */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-base-content/70">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base-content/80 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Let&apos;s Work Together
            </h3>
            <p className="text-base-content/70 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited about new opportunities and challenging
              projects. Let&apos;s discuss how we can create something amazing
              together.
            </p>
            <motion.a
              href="/contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
