import Section from './Section';

const About: React.FC = () => {
    return (
        <Section name="about">
            <div className="info">
                <h1>Who am I?</h1>
                <p>
                    I started learning programming when I was 14 years old and have been learning ever since. 
                    I enjoy both front-end and back-end web development.
                    When I'm not programming, you can find me playing chess, listening to music, playing videogames, writing, or watching South Park.          
                </p>
            </div>
        </Section>
    );
};

export default About;