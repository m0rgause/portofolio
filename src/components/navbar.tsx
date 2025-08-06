"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

interface NavChildProps {
  classname: string;
  active: string;
}

interface NavItemProps {
  children: React.ReactNode;
  link: string;
  active: string;
}

const Navbar: React.FC = () => {
  const active = usePathname();

  return (
    <motion.div
      className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar">
        <div className="navbar-start sm:flex">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <NavChild
              classname="menu menu-box dropdown-content bg-base-100 rounded-box w-52 p-2 shadow-lg z-50"
              active={active}
            />
          </div>
        </div>
        <div className="navbar-center">
          <motion.a
            className="text-2xl dark:text-white italic font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Portofolio<span className="text-primary">.</span>
          </motion.a>
        </div>
        <div className="navbar-end">
          <ThemeToggle />
        </div>
      </div>
      <div className="sm:navbar">
        <div className="navbar-start"></div>
        <div className="navbar-center lg:flex hidden">
          <NavChild classname="menu menu-horizontal px-1" active={active} />
        </div>
        <div className="navbar-end"></div>
      </div>
    </motion.div>
  );
};

const NavChild: React.FC<NavChildProps> = ({ classname, active }) => {
  return (
    <ul className={classname}>
      <NavItem link="/about" active={active}>
        About Me
      </NavItem>
      <NavItem link="/projects" active={active}>
        Projects
      </NavItem>
      <NavItem link="/contact" active={active}>
        Contact Me
      </NavItem>
    </ul>
  );
};

const NavItem: React.FC<NavItemProps> = ({ children, link, active }) => {
  const isActive = active === link || (active === "/" && link === "/about");

  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link
        href={link}
        className={`transition-colors duration-300 ${
          isActive
            ? "text-primary font-semibold bg-primary/10"
            : "hover:text-primary hover:bg-primary/5"
        }`}
      >
        {children}
      </Link>
    </motion.li>
  );
};

export default Navbar;
