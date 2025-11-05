"use client"

const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About Me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                </h2>
            </div>
            <div>
                <p className="mb-4">
                    I am a frontend developer specializing in building modular, logic-driven, and scalable web applications using <b>React</b> and <b>Next.js</b>. I enjoy solving complex problems, optimizing data flows, and integrating APIs to create efficient, maintainable systems.
                </p>
                <p className="mb-4">
                    Currently, I work as a <b>Senior Frontend Developer</b> at <b>Techchefz Digital Pvt. Ltd.</b>, where I lead frontend development for enterprise projects, including the <b>SpiceJet Internal Portal</b> — a system that manages passenger communication through WhatsApp, Email, SMS, and IVR, with features like CSV uploads, queue processing, and detailed log tracking.
                </p>
                <p className="mb-4">
                    Over the past 4+ years, I’ve worked on multiple large-scale web applications across industries like <b>insurance</b> and <b>education</b>, focusing on code structure, reusability, and high-performance API integration. I’m also pursuing an <b>M.Sc. in Data Science</b> to strengthen my analytical and backend problem-solving skills.
                </p>
                <p className="mb-4">
                    Outside of work, I enjoy coaching <b>football</b> at a local school, spending time with my wife and dog, and going for long bike rides.
                </p>
            </div>
        </section>

    )
}

export default About;