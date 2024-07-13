import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-[1200px] mx-auto '>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;