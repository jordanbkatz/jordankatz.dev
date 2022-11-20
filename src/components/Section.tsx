interface ISectionProps {
    children: React.ReactNode;
    name: string;
}

function Section({ children, name }: ISectionProps) {
    return (
        <section id={name}>
            <header>
                <h1>{name}</h1>
            </header>
            <article>
                {children}
            </article>
        </section>
    );
};

export default Section;