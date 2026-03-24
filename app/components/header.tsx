"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
const Header = () => {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("about");
    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.info(`Section ${entry.target.id} is visible`);
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5, // adjust if needed
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);
    return (
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <div>
                <h1 className="text-4xl font-bold text-slate-200 sm:text-5xl leading-tight">Sagar Patkar</h1>
                <h2 className="mt-3 text-lg font-medium text-slate-200 sm:text-xl leading-snug">Senior Frontend Engineer | 4+ Years | React, Next.js | Performance & Architecture</h2>
                <p className="mt-4 max-w-full sm:max-w-[85%] text-slate-400 leading-relaxed">
                    Frontend engineer with 4+ years of experience building scalable and performance-driven web applications using React and Next.js. Focused on clean architecture, efficient data handling, and delivering reliable, production-grade systems aligned with business needs.
                </p>

                {pathname !== "/archive" ? (
                    <nav className="nav hidden lg:block" aria-label="In-page jump links">
                        <ul className="mt-16 w-max">
                            <li>
                                <a className={`group flex items-center py-3 ${
                                    activeSection === "about" && "active"
                                }`} href="#about">
                                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === "about" && "w-16 bg-slate-200"}`} />
                                    <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === "about" ? "text-slate-200" : "text-slate-500"}`}>About</span>
                                </a>
                            </li>
                            <li>
                                <a className={`group flex items-center py-3 ${
                                    activeSection === "experience" && "active"
                                }`} href="#experience">
                                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === "experience" && "w-16 bg-slate-200"}`} />
                                    <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === "experience" ? "text-slate-200" : "text-slate-500"}`}>
                                        Experience
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className={`group flex items-center py-3 ${
                                    activeSection === "projects" && "active"
                                }`} href="#projects">
                                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === "projects" && "w-16 bg-slate-200"}`} />
                                    <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === "projects" ? "text-slate-200" : "text-slate-500"}`}>
                                        Projects
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                ) : null}

            </div>
            <ul className="ml-1 mt-6 flex items-center" aria-label="social media">
                <li className="mr-5 shrink-0 text-xs">
                    <a className="block hover:text-slate-200" href="https://github.com/Sagar-Patkar" title="Github" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">GitHub</span>
                        <FaGithub className="text-2xl" />
                    </a>
                </li>
                <li className="mr-5 shrink-0 text-xs">
                    <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/sagar-patkar-872032179/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <FaLinkedin className="text-2xl" />
                    </a>
                </li>
                <li className="mr-5 shrink-0 text-xs">
                    <a className="block hover:text-slate-200" href="mailto:sagarpatkar17@gmail.com" title="Email">
                        <span className="sr-only">Email</span>
                        <FaEnvelope className="text-2xl" />
                    </a>
                </li>
                <li className="shrink-0 text-xs">
                    <a className="block hover:text-slate-200" href="/Sagar_Sudesh_Patkar_Product_Resume_v2(1).pdf" title="Resume" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">Resume</span>
                        <FaFileAlt className="text-2xl" />
                    </a>
                </li>
            </ul>
        </div >
    )
}

export default Header;