import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer"
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
      <body className="lg:flex flex-row lg:justify-between lg:gap-4 bg-[#111F44]">
        <Header />
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">{children}</main>
      </body>
    </html>
  );
}
