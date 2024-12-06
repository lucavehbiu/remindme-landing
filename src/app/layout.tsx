import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remind Me - Smart Web Reminders",
  description: "Never forget important web content again with our smart reminder extension",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen`}>
        <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 top-0 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <Image src="/icon48.png" alt="Logo" width={32} height={32} />
                  <span className="text-xl font-semibold text-gray-900">Remind Me</span>
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/privacy" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Privacy</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-white mt-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Remind Me. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
