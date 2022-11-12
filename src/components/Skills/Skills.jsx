import React from 'react';
import * as SiIcons from 'react-icons/si';
import Section from '../Section';
import skills from '../../data/skills';
import './Skills.scss';

const Skills = () => {
    return (
        <Section name="Skills">
            {(skills).map(({ type, icons }) => (
                <div className="skill" key={type}>
                    <h1 className="type">{type}</h1>
                    <div className="icons">
                        {icons.map(({name, color}) => {
                            const Icon = SiIcons[`Si${name}`];
                            return (
                                <Icon className="icon" color={color} key={name} />
                            );
                        })}
                    </div>
                </div>
            ))}
        </Section>
        
    );
};

export default Skills;