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
    return <div className="flex flex-col items-center w-screen">
        <Section>
            <h1>About</h1>
        </Section>
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
}