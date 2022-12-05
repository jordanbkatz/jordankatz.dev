const nerd = require('../assets/nerd.webp');

const Intro: React.FC = () => {
    return (
        <section className="intro">
            <h1>Hello, i'm Jordan</h1>
            <p>I'm a Full Stack Engineer based in the U.S.</p>
            <img src={nerd} alt="nerd" />
        </section>
    );
};

export default Intro;