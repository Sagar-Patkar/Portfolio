import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import React from "react";

export const metadata: Metadata = {
    title: "Sagar Patkar | Senior Frontend Engineer (React & Next.js)",
    description:
        "Senior Frontend Engineer with 4+ years of experience building scalable, high-performance web applications using React and Next.js. Specialized in frontend architecture, performance optimization, and API-driven systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-300 leading-relaxed antialiased selection:bg-teal-300 selection:text-teal-900">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1),transparent_60%)]" />
    <div className="relative mx-auto min-h-screen max-w-screen-xl px-4 py-6 font-sans md:px-10 md:py-16 lg:py-8">
        <div className="lg:flex lg:justify-between lg:gap-12">
            <Header />
            <main
                id="content"
                className="
    pt-10
    lg:w-[52%]
    lg:pt-16
    lg:bg-white/5
    lg:backdrop-blur-md
    lg:border
    lg:border-white/10
    lg:rounded-2xl
    lg:p-6
    lg:shadow-xl
  "
            >
                <div className="max-w-prose">
                    {children}
                </div>
            </main>
        </div>
    </div>
    </body>
    </html>
  );
}
