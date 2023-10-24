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
            <SkillsSection />
            <Section>
                <h1>Projects</h1>
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

const skills = [
    {
        title: "HTML",
        level: 100
    },
    {
        title: "CSS",
        level: 95
    },
    {
        title: "Javascript",
        level: 90
    },
    {
        title: "React",
        level: 80
    },
    {
        title: "Typescript",
        level: 60
    }
];

const languages = [
    {
        title: "English",
        level: 100
    },
    {
        title: "Something 1",
        level: 50
    },
    {
        title: "Something 2",
        level: 75
    },
];

const SkillsSection = () => {
    return (
        <Section>
            <div>
                <h2 className="text-5xl font-bold">Skills</h2>
                <div className="mt-8 space-y-4">
                    {skills.map((skill, index) => (
                        <div className="w-64" key={index}>
                            <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full">
                                <div
                                    className="h-2 w-full bg-indigo-500 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="text-5xl font-bold mt-10">Languages</h2>
                    <div className="mt-8 space-y-4">
                        {languages.map((lng, index) => (
                            <div className="w-64" key={index}>
                                <h3 className="text-xl font-bold text-gray-800">{lng.title}</h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full">
                                    <div
                                        className="h-2 w-full bg-indigo-500 rounded-full"
                                        style={{ width: `${lng.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};