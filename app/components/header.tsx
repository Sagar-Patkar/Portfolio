"use client"
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
const Header = () => {
    const pathname = usePathname();
    return (
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold text-slate-200 sm:text-5xl">Sagar Patkar</h1>
                <h2 className="mt-3 text-lg font-medium text-slate-200 sm:text-xl">Senior Frontend Developer | React & Next.js Specialist | 4+ Years of Experience</h2>
                <p className="mt-4 max-w-xs leading-normal">
                    Senior JavaScript developer skilled in architecting scalable, high-performance web applications using React, Next.js, and modern frontend technologies. Passionate about crafting clean, efficient UI architectures and delivering seamless user experiences that make an impact.
                </p>
                <p className="mt-2 text-sm text-slate-400">
                    Currently leading frontend development for <b>SpiceJet’s Internal Portal</b>. Open to new opportunities in Frontend.
                </p>
                {pathname !== "/archive" ? (
                    <nav className="nav hidden lg:block" aria-label="In-page jump links">
                        <ul className="mt-16 w-max">
                            <li>
                                <a className="group flex items-center py-3 active" href="#about">
                                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                                </a>
                            </li>
                            <li>
                                <a className="group flex items-center py-3" href="#experience">
                                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                    </span>
                                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                        Experience
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className="group flex items-center py-3" href="#projects">
                                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                    </span>
                                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                        Projects
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                ) : null}

            </div>
            <ul className="ml-1 mt-12 flex items-center" aria-label="social media">
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
                    <a className="block hover:text-slate-200" href="/Sagar_Patkar_Resume.pdf" title="Resume" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">Resume</span>
                        <FaFileAlt className="text-2xl" />
                    </a>
                </li>
            </ul>
        </div >
    )
}

export default Header;