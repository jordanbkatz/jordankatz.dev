interface ISectionProps {
    children: React.ReactNode;
    name: string;
}

const Section: React.FC<ISectionProps> = ({ children, name }) => {
    return (
        <section className={name}>
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