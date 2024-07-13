import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer" className='w-full '>
        {/* <a href="#home" className='footer_logo'>Likhon</a> */}

            <ul className="permalinks ">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Experience</Link></li>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="footer_socials">
                <a href="https://web.facebook.com/abdurrouf.likhon/"><FaFacebook/></a>
                <a href="https://github.com/likhon29"><FaGithub></FaGithub></a>
                <a href="https://www.linkedin.com/in/md-abdur-rouf-likhon-70a562257/"><FaLinkedin></FaLinkedin></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Mim Khatun. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;