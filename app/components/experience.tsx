"use client"

const Experience = () => {
    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work Experience">
            <div>
                <ol className="group/list">
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                                2021 — Present
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://www.techchefz.digital/" target="_blank" aria-label="Associate Technology at Techchefz Pvt. Ltd" rel="noopener noreferrer">
                                            <span>
                                                Associate Technology | {" "}
                                                <span className="inline-block">
                                                    Techchefz Pvt. Ltd
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Build and maintain components used to construct frontend for client, across the whole product. Working closely with cross-functional teams, including developers, designers. and product managers, to implement and advocate for best practices in web development.
                                </p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Javascript
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            React js
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Next js
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            SQL
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Redux
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            JEST
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default Experience