import React from 'react';
import './Footer.scss';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
           <p>© {year} Jordan Katz. All rights reserved.</p>
        </footer>
    );
};

export default Footer;