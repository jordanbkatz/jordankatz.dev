import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="main">
                <Intro />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default App;