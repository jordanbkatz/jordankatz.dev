import Navbar from './Navbar';
import Footer from './Footer';

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;