import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Ahmad Baihaki Nur, a passionate Fullstack Developer and Mobile Engineer based in Jakarta, Indonesia.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
