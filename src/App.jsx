import React from 'react';
import Layout from './components/Layout';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
        <Layout>
            <Intro />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </Layout>
    );
};

export default App;