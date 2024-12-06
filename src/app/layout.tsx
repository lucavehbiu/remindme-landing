import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remind Me - Smart Web Reminders",
  description: "Never forget important web content again. Set reminders for any webpage content with just a right-click. Free Chrome extension with smart context retention.",
  keywords: ["chrome extension", "web reminders", "productivity tool", "bookmark manager", "reminder app"],
  authors: [{ name: "Luca Vehbiu" }],
  openGraph: {
    title: "Remind Me - Smart Web Reminders",
    description: "Never forget important web content again. Set reminders for any webpage content with just a right-click.",
    url: "https://remindme-landing-8is6937u2-lucas-projects-7cbc24c5.vercel.app",
    siteName: "Remind Me",
    images: [
      {
        url: "/icon128.png",
        width: 128,
        height: 128,
        alt: "Remind Me Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Remind Me - Smart Web Reminders",
    description: "Never forget important web content again. Set reminders for any webpage content with just a right-click.",
    images: ["/icon128.png"],
  },
  icons: {
    icon: "/icon48.png",
    apple: "/icon128.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
