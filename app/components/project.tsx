"use client"
import { GoArrowRight } from "react-icons/go";
const Project = () => {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Projects
                </h2>
            </div>

            <div>
                <ul className="group/list">
                    <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 text-base">
                                        SpiceJet Internal Portal Development
                                    </span>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Engineered a role-based internal portal for SpiceJet used by Super Admin, Admin, Manager, and User roles.
                                    Users can upload passenger CSV data, manage queue entries, and track upload logs, while higher-level roles
                                    handle template creation for communication services, CSV header mapping, carrier code and flight management,
                                    and automated reason generation for flight-related operations.
                                </p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    {["React.js", "Next.js", "Redux", "Tailwind", "REST API"].map((tech) => (
                                        <li key={tech} className="mr-1.5 mt-2">
                                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                {tech}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" target="_blank" href="https://www.royalsundaram.in/" aria-label="Royal Sundaram Website" rel="noopener noreferrer">
                                        <span>Royal Sundaram General Insurance Platform</span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Developed and maintained 7+ insurance web applications that calculate accurate premium amounts based on customer inputs.
                                    Designed modular logic flows and optimized API calls to ensure accuracy and fast response times.
                                </p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    {["JavaScript", "Next.js", "Redux", "SQL", "REST API"].map((tech) => (
                                        <li key={tech} className="mr-1.5 mt-2">
                                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                {tech}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" target="_blank" href="https://learninghub.com/" aria-label="Learning Hub Website" rel="noopener noreferrer">
                                        <span>Stride Learning Hub</span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Built a learning management platform with dashboards for teachers, parents, and students.
                                    Implemented logic-based progress tracking, subject selection, and skill assessment workflows.
                                </p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    {["React.js", "Next.js", "Redux", "Jest", "REST API"].map((tech) => (
                                        <li key={tech} className="mr-1.5 mt-2">
                                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                {tech}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" target="_blank" href="https://github.com/Sagar-Patkar/ProShop" aria-label="Proshop Website" rel="noopener noreferrer">
                                        <span>ProShop E-Commerce Platform</span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Developed a full-stack e-commerce web app featuring user authentication, cart management, and admin dashboards for product and pricing updates.
                                </p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    {["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "JavaScript"].map((tech) => (
                                        <li key={tech} className="mr-1.5 mt-2">
                                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                {tech}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="mt-12">
                    <a className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group" aria-label="View Full Project Achive" href="/archive">
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none flex flex-row gap-2">
                            View Full Project Archive <GoArrowRight />
                        </span>
                    </a>
                </div>
            </div>
        </section >
    )
}

export default Project