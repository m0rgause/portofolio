"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "baihaki.dev@gmail.com",
      href: "mailto:baihaki.dev@gmail.com",
      color: "text-red-500",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "@m0rgause",
      href: "https://github.com/m0rgause",
      color: "text-gray-700 dark:text-white",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "Ahmad Baihaki Nur",
      href: "https://www.linkedin.com/in/ahmad-baihaki-nur-257803216",
      color: "text-blue-600",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Jakarta, Indonesia",
      href: "#",
      color: "text-green-500",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you. Let&apos;s create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-base-200 rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Let&apos;s Connect</h2>
              <p className="text-base-content/70 mb-8">
                I&apos;m always excited to discuss new opportunities, innovative
                projects, or just have a chat about technology and development.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 bg-base-100 rounded-xl hover:shadow-lg transition-all duration-300 group"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div
                      className={`p-3 rounded-lg bg-base-200 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-base-content/70">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="font-bold mb-2">Quick Response</h3>
                <p className="text-sm text-base-content/70">
                  I typically respond to emails within 24 hours. For urgent
                  matters, feel free to reach out via LinkedIn.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-base-100 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <label className="label">
                      <span className="label-text font-medium">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input input-bordered w-full focus:input-primary transition-colors"
                      placeholder="Your Name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <label className="label">
                      <span className="label-text font-medium">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input input-bordered w-full focus:input-primary transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <label className="label">
                    <span className="label-text font-medium">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input input-bordered w-full focus:input-primary transition-colors"
                    placeholder="What's this about?"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <label className="label">
                    <span className="label-text font-medium">Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full h-32 focus:textarea-primary transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="btn btn-primary w-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend className="w-4 h-4 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="bg-base-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-base-content/70 mb-6">
              Whether you have a specific project in mind or just want to
              explore possibilities, I&apos;m here to help bring your ideas to
              life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="badge badge-outline">Web Development</div>
              <div className="badge badge-outline">Mobile Apps</div>
              <div className="badge badge-outline">System Architecture</div>
              <div className="badge badge-outline">API Development</div>
              <div className="badge badge-outline">Database Design</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
