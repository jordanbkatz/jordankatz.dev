import React from 'react';
import './Section.scss';

const Section = ({ name, children }) => {
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