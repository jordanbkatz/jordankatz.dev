import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Layout.scss';

const Layout = ({ children }) => {
    return (
        <div id="Layout">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;