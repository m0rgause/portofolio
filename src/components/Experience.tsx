"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "PT Genggam Gemilang",
      location: "Pusat Jakarta Selatan, Indonesia",
      period: "May 2023 - Present",
      description:
        "Currently working as a Backend Developer, developing and maintaining server-side applications and APIs. Focus on creating robust and scalable backend solutions for various client projects.",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Software Engineer",
      company: "Mitra FM",
      location: "Jakarta, Indonesia",
      period: "Jun 2024 - Oct 2024",
      description:
        "Contributed as a Software Engineer developing radio management systems and audio streaming solutions. Enhanced system performance and user experience for broadcasting applications.",
      technologies: [
        "Software Development",
        "Audio Systems",
        "Web Applications",
        "JavaScript",
      ],
    },
    {
      title: "System Integrator",
      company: "PT Nusantara Infrastructure Teknologi",
      location: "Jakarta, Indonesia",
      period: "Jul 2023 - Apr 2024",
      description:
        "Worked as a System Integrator focusing on system integration and infrastructure solutions. Managed complex technical integrations and infrastructure optimization projects.",
      technologies: [
        "System Integration",
        "Infrastructure",
        "Technical Solutions",
        "Network Management",
      ],
    },
    {
      title: "System Administrator",
      company: "IQOS Indonesia (Philip Morris International)",
      location: "Jakarta, Indonesia",
      period: "Dec 2023 - Mar 2024",
      description:
        "Managed and maintained IT infrastructure, system administration, and technical support operations. Ensured system reliability and provided technical support for business operations.",
      technologies: [
        "System Administration",
        "IT Infrastructure",
        "Technical Support",
        "Network Security",
      ],
    },
    {
      title: "Mobile Developer",
      company: "Synaptech",
      location: "Indonesia",
      period: "Previous Experience",
      description:
        "Developed mobile applications using modern technologies and frameworks. Created user-friendly mobile interfaces and implemented efficient app architectures.",
      technologies: ["Flutter", "Dart", "Mobile Development", "Firebase"],
    },
    {
      title: "Software Developer",
      company: "GEN Tech",
      location: "Indonesia",
      period: "Previous Experience",
      description:
        "Worked on various software development projects and contributed to technical solutions. Participated in full-stack development and system design initiatives.",
      technologies: [
        "Software Development",
        "Web Technologies",
        "Full-Stack Development",
        "Technical Solutions",
      ],
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
