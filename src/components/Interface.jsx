import { motion } from "framer-motion";

const Section = (props) => {
    const {children} = props;

    // max-w-screen to not make the screen too big
    return (<motion.section className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justif-center
    `}
        initial={{
            opacity: 0,     // Hide the text at the start
            y: 50,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {       // For fade out effect
                duration: 1,
                delay: 0.6 
            }
        }}
    >
        {children}
    </motion.section>)
}

export const Interface = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection />
            <SkillsSection />
            <Section>
                <h1>Projects</h1>
            </Section>
            <ContactSection />
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
            <motion.p className="text-lg text-gray-600 mt-4"
                initial={{
                    opacity: 0,     // Hide the text at the start
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 1.5
                }}
            >
                I make cool website
                <br />
                and more cool website
            </motion.p>
            <motion.button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
                initial={{
                    opacity: 0,     // Hide the text at the start
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 2.5
                }}
            >
                Contact Me
            </motion.button>
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
                            <motion.h3 className="text-xl font-bold text-gray-800"
                                initial={{
                                    opacity: 0,     // Hide the text at the start
                                }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 1 + index * 0.2,
                                }}
                            >
                                {skill.title}
                            </motion.h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full">
                                <motion.div
                                    className="h-2 w-full bg-indigo-500 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                    initial={{
                                        scaleX: 0,
                                        originX: 0,
                                    }}
                                    whileInView={{
                                        scaleX: 1,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 1 + index * 0.2,
                                    }}
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

const ContactSection = () => {
    return (
        <Section>
            <h1 className="text-5xl font-bold">Contact Me</h1>
            <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
                <form>
                    <label for="name" className="font-medium text-gray-900 block mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3" />
                    <label for="email" className="font-medium text-gray-900 block mb-1 mt-8">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3" />
                     <label
                        for="message"
                        className="font-medium text-gray-900 block mb-1 mt-8"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                    />
                    <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
                        Submit
                    </button>
                </form>
            </div>
        </Section>
    );
};
