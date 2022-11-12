import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => {
    const sections = ['About', 'Skills', 'Projects', 'Contact'];
    const [show, setShow] = useState(false);
    const handleCloseMenu = () => setShow(false);
    const handleToggleMenu = () => setShow(!show);
    return (
        <nav>
            <Link
                to="Intro"
                spy={true}
                smooth={true}
                offset={-105}
                className="name"
                activeClass="active"
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
                        activeClass="active"
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