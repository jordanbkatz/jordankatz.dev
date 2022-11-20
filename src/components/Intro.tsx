const nerd = require('../assets/nerd.webp');

function Intro() {
    return (
        <section id="Intro">
            <h1>Hello, i'm Jordan</h1>
            <img src={nerd} alt="nerd" />
            <h1>I'm a Full Stack Engineer based in the U.S.</h1>
        </section>
    );
};

export default Intro;