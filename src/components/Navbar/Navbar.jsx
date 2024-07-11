import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [ activeItem, setActiveItem ] = useState('#home');

    return (
        <div>
            <nav>
                <Link to="/"
                    onClick={() => setActiveItem("#home")}
                    className={ activeItem === "#home" ? "active" : ""}
                >
                        <AiOutlineHome />
                </Link>
                <Link to="/"
                    onClick={() => setActiveItem("#about")}
                    className={ activeItem === "#about" ? "active" : ""}
                >
                        <AiOutlineUser />
                </Link>
                <Link to="/"
                    onClick={() => setActiveItem("#experience")}
                    className={ activeItem === "#experience" ? "active" : ""}
                >
                        <BiBook />
                </Link>
                <Link to="/"
                    onClick={() => setActiveItem("#skills")}
                    className={ activeItem === "#skills" ? "active" : ""}
                >
                        <RiServiceLine />
                </Link>
                <Link to="/"
                    onClick={() => setActiveItem("#contact")}
                    className={ activeItem === "#contact" ? "active" : ""}
                >
                        <BiMessageSquareDetail />
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;