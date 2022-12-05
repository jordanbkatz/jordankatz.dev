import Intro from '../components/Intro';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Intro />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default Home;