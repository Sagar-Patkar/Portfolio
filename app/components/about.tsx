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
                    I am a frontend engineer focused on building scalable, modular, and performance-driven web applications using <b>React</b> and <b>Next.js</b>. I enjoy solving complex problems, optimizing data flows, and designing clean, maintainable systems that align with real business needs.
                </p>

                <p className="mb-4">
                    Currently, I work as a <b>Senior Frontend Engineer</b> at <b>Techchefz Digital Pvt. Ltd.</b>, where I lead frontend development for enterprise-grade applications. One of my key projects is the <b>SpiceJet Dashboard</b>, a role-based system that manages passenger communication across WhatsApp, Email, SMS, and IVR, with features like CSV processing, queue management, and detailed operational tracking.
                </p>

                <p className="mb-4">
                    Over the past 4+ years, I’ve contributed to multiple production applications across <b>Insurance</b> and <b>Education</b> domains, focusing on reusable architecture, performance optimization, and seamless API integrations. I am also pursuing an <b>M.Sc. in Data Science</b> to strengthen my analytical thinking and expand into data-driven product development.
                </p>

                <p className="mb-4">
                    Outside of work, I enjoy coaching <b>football</b>, spending time with my family, and going for long bike rides.
                </p>
            </div>
        </section>

    )
}

export default About;