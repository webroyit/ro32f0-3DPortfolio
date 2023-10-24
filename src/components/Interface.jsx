const Section = (props) => {
    const {children} = props;

    // max-w-screen to not make the screen too big
    return (<section className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justif-center
    `}>
        {children}
    </section>)
}

export const Interface = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection />
            <Section>
                <h1>Skills</h1>
            </Section>
            <Section>
                <h1>Projects</h1>
            </Section>
            <Section>
                <h1>About</h1>
            </Section>
            <Section>
                <h1>Contact</h1>
            </Section>
        </div>
    );
};

const AboutSection = () => {
    return (
        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hi, I'm
                <br />
                <span className="bg-white px-1 italic">Webroyit</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4">
                I make cool website
                <br />
                and more cool website
            </p>
            <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16">
                Contact Me
            </button>
        </Section>
    );
};