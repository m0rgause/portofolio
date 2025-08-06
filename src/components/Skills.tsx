"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFlutter,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDart,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiVuedotjs,
  SiCodeigniter,
  SiDjango,
  SiFlask,
  SiExpress,
  SiJquery,
  SiPrisma,
  SiSequelize,
  SiOracle,
  SiGooglecloud,
  SiFirebase,
  SiJira,
  SiCisco,
  SiLinux,
  SiCplusplus,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
        { name: "jQuery", icon: SiJquery, color: "#0769AD" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "CodeIgniter", icon: SiCodeigniter, color: "#EF4223" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "Flask", icon: SiFlask, color: "#000000" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Dart", icon: SiDart, color: "#0175C2" },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
        { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Oracle Cloud", icon: SiOracle, color: "#F80000" },
        { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Jira", icon: SiJira, color: "#0052CC" },
        { name: "Cisco", icon: SiCisco, color: "#1BA0D7" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
      ],
    },
  ];

  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            I work with a variety of technologies to build robust and scalable
            applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="bg-base-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center p-3 bg-base-100 rounded-xl cursor-pointer group"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <skill.icon
                      className="text-3xl mb-2 transition-colors duration-300"
                      style={{ color: skill.color }}
                    />
                    <span className="text-xs font-medium text-center group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-base-content/70 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I&apos;m constantly
              exploring new frameworks, tools, and best practices to stay ahead
              of the curve and deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
