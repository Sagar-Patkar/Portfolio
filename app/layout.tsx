import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Sagar Patkar | Portfolio",
  description: "Frontend Developer Portfolio",
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
    <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-8 font-sans md:px-10 md:py-16 lg:py-8">
        <div className="lg:flex lg:justify-between lg:gap-12">
            <Header />
            <main
                id="content"
                className="pt-12 lg:w-[52%] lg:pt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl"
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
