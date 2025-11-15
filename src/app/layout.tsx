import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientProvider from "@/components/ClientProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Ahmad Baihaki Nur - Fullstack Developer & Mobile Engineer",
    template: "%s | Ahmad Baihaki Nur",
  },
  description:
    "Passionate Fullstack Developer and Flutter Mobile Developer specializing in web applications, mobile apps, and system architecture. Experienced in React, Next.js, Laravel, Flutter, and more.",
  keywords: [
    "Fullstack Developer",
    "Mobile Developer",
    "Flutter Developer",
    "React Developer",
    "Next.js",
    "Laravel",
    "Web Development",
    "Mobile Apps",
    "Jakarta",
    "Indonesia",
    "Ahmad Baihaki Nur",
  ],
  authors: [{ name: "Ahmad Baihaki Nur", url: "https://m0rgause.github.io" }],
  creator: "Ahmad Baihaki Nur",
  publisher: "Ahmad Baihaki Nur",
  metadataBase: new URL("https://m0rgause.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://m0rgause.github.io",
    title: "Ahmad Baihaki Nur - Fullstack Developer & Mobile Engineer",
    description:
      "Passionate Fullstack Developer and Flutter Mobile Developer specializing in web applications, mobile apps, and system architecture.",
    siteName: "Ahmad Baihaki Nur Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ahmad Baihaki Nur - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Baihaki Nur - Fullstack Developer & Mobile Engineer",
    description:
      "Passionate Fullstack Developer and Flutter Mobile Developer specializing in web applications, mobile apps, and system architecture.",
    images: ["/logo.png"],
    creator: "@m0rgause",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
