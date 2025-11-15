import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of fullstack and mobile development projects including BPJS Kesehatan monitoring, NITA merchant app, and more.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
