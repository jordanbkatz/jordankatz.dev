import React from 'react';
import nerd from '../../assets/nerd.webp';
import './Intro.scss';

const Intro = () => {
    return (
        <section id="Intro">
            <h1>Hello, i'm Jordan</h1>
            <img src={nerd} alt="nerd" />
            <h1>I'm a Full Stack Developer based in the U.S.</h1>
        </section>
    );
};

export default Intro;