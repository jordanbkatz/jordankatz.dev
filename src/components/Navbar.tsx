import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const sections = ['about', 'skills', 'projects', 'contact'];
    const [show, setShow] = useState<boolean>(false);
    const handleCloseMenu = () => setShow(false);
    const handleToggleMenu = () => setShow(!show);
    return (
        <nav>
            <Link
                to="intro"
                spy={true}
                smooth={true}
                offset={-105}
                className="name"
                
                onClick={handleCloseMenu}
            ><h1>Jordan Katz</h1></Link>
            <div className={`menu ${show ? 'active' : ''}`}>
                {sections.map((section) => (
                    <Link
                        key={section}
                        to={section}
                        spy={true}
                        smooth={true}
                        offset={-105}
                        className="link"
                        onClick={handleCloseMenu}
                    ><p>{section}</p></Link>
                ))}
            </div>
            <button className="toggle" onClick={handleToggleMenu}>
                {(show) ? <FaTimes className="icon" /> : <FaBars className="icon" />}
            </button>
        </nav>
    );
};

export default Navbar;