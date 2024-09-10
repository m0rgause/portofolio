import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const lexend = Lexend({
  weights: [400, 500, 600, 700],
  styles: ["normal"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "m0rgause | Web Developer, Mobile Developer, Software Engineer",
  description:
    "Hello there! Welcome to the portfolio of m0rgause, a professional web developer, and software engineer with expertise in creating high-quality websites and applications. Explore my projects, skills, and experience.",
  keywords:
    "m0rgause, web developer, software engineer, portfolio, projects, web developer, software engineer, web designer, portfolio, frontend developer, backend developer, full stack developer, JavaScript, React, Next.js, Tailwind CSS",
  og: {
    title: "m0rgause | Web Developer, Mobile Developer, Software Engineer",
    description:
      "Hello there! Welcome to the portfolio of m0rgause, a professional web developer, and software engineer with expertise in creating high-quality websites and applications. Explore my projects, skills, and experience.",
    image: "/images/og-image.png",
    url: "https://m0rgause.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <div className="flex min-h-[80vh] overflow-hidden">
          <main className={`flex-grow transition-all duration-300 w-full `}>
            <Navbar />
            {children}
          </main>
        </div>
        <footer className="w-full my-4 text-gray-500 text-sm container text-center">
          <p>© 2020 m0rgause. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
