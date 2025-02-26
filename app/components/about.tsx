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
                    I am a developer passionate about building accessible and scalable web applications. I love working on the development side, creating seamless user experiences that are not only visually appealing but also optimized for performance and usability.
                </p>
                <p className="mb-4">
                    Currently, I am an Associate Technology at Techchefz Digital Pvt. Ltd., where I focus on developing and maintaining UI components, ensuring they meet web accessibility standards and best practices to enhance user experience.
                </p>
                <p className="mb-4">
                    Throughout my career, I have had the opportunity to develop features across diverse industries, including insurance and education. Additionally, I have completed various courses on Udemy and earned certifications to deepen my expertise.
                </p>
                <p className="mb-4">
                    Outside of coding, I enjoy coaching football at a local school, spending time with my wife and dog, or going for a bike ride.
                </p>
            </div>
        </section>

    )
}

export default About;