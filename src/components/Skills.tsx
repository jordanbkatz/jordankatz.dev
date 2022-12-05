import * as SiIcons from 'react-icons/si';
import Section from './Section';
import skills from '../data/skills';

const Skills: React.FC = () => {
    return (
        <Section name="skills">
            {(skills).map(({ type, icons }) => (
                <div className="skill" key={type}>
                    <h1 className="type">{type}</h1>
                    <div className="icons">
                        {icons.map(({name, url, color}) => {
                            const Icon = SiIcons[`Si${name}` as keyof typeof SiIcons];
                            return (
                                <a href={url} target="_blank" rel="noopener noreferrer" key={name}>
                                    <Icon className="icon" color={color} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            ))}
        </Section>
    );
};

export default Skills;