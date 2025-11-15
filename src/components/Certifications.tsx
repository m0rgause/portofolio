"use client";

import { motion } from "framer-motion";
import {
  FaCertificate,
  FaTrophy,
  FaAward,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";
import { SiOracle, SiCisco, SiGooglecloud, SiFirebase } from "react-icons/si";

export default function Certifications() {
  const certifications = [
    {
      title: "BNSP Software Engineer",
      issuer: "Badan Nasional Sertifikasi Profesi",
      icon: FaCertificate,
      color: "text-primary",
      year: "2024",
    },
    {
      title: "Oracle Cloud Infrastructure I",
      issuer: "Oracle",
      icon: SiOracle,
      color: "text-red-500",
      year: "2023",
    },
    {
      title: "Oracle Cloud Infrastructure II",
      issuer: "Oracle",
      icon: SiOracle,
      color: "text-red-500",
      year: "2023",
    },
    {
      title: "CCNAv7 Networking",
      issuer: "Cisco",
      icon: SiCisco,
      color: "text-blue-500",
      year: "2022",
    },
  ];

  const achievements = [
    {
      title: "1st Runner Up - LKS IT Network Systems Administration",
      organization: "Lomba Kompetensi Siswa 2018",
      icon: FaTrophy,
      color: "text-yellow-500",
      year: "2018",
    },
  ];

  const activities = [
    {
      title: "Research and Technology Lead",
      organization: "HiMTI Mercu Buana University",
      period: "2022-2024",
      icon: FaUsers,
      color: "text-secondary",
      description:
        "Designed HiMTI website using Laravel, managed Discord community, and led 'Kelas CORE' mentorship program",
    },
    {
      title: "Coding Course Instructor",
      organization: "HiMTI Mercu Buana University",
      period: "March 2024",
      icon: FaChalkboardTeacher,
      color: "text-accent",
      description:
        "Taught web programming to 30 students as volunteer instructor",
    },
  ];

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Professional certifications, achievements, and community involvement
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <FaCertificate className="text-primary" />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-base-100/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-base-300/50 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`text-4xl mb-4 ${cert.color}`}>
                  <cert.icon />
                </div>
                <h4 className="font-bold mb-2 text-lg">{cert.title}</h4>
                <p className="text-sm text-base-content/70 mb-2">
                  {cert.issuer}
                </p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <FaTrophy className="text-yellow-500" />
            Achievements
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-5xl ${achievement.color}`}>
                    <achievement.icon />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-base-content/70 mb-2">
                      {achievement.organization}
                    </p>
                    <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-sm rounded-full font-semibold">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Activities & Volunteering */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <FaUsers className="text-secondary" />
            Community & Volunteering
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                className="bg-base-100/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-base-300/50 hover:border-secondary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`text-3xl ${activity.color}`}>
                    <activity.icon />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{activity.title}</h4>
                    <p className="text-sm text-base-content/70 mb-2">
                      {activity.organization}
                    </p>
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-semibold">
                      {activity.period}
                    </span>
                  </div>
                </div>
                <p className="text-base-content/80 leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mt-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <FaAward className="text-accent" />
            Education
          </h3>
          <motion.div
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="text-2xl font-bold mb-2">
                  Bachelor Degree of Informatics Engineering
                </h4>
                <p className="text-lg text-base-content/80 mb-2">
                  Mercu Buana University, Jakarta
                </p>
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-semibold">
                  2021 - 2025
                </span>
              </div>
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-primary mb-1">3.79</div>
                <p className="text-sm text-base-content/70">GPA</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
