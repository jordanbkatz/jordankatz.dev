import * as SiIcons from 'react-icons/si';
import socials from '../data/socials';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="socials">
                {socials.map(({name, url, color}) => {
                    const Icon = SiIcons[`Si${name}` as keyof typeof SiIcons];
                    return (
                        <a href={url} target="_blank" rel="noopener noreferrer" key={name}>
                            <Icon className="icon" color={color} />
                        </a>
                    );
                })}
            </div>
            <p>© {year} Jordan Katz</p>
        </footer>
    );
};

export default Footer;