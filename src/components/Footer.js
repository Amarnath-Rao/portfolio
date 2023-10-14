import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { SiLeetcode, SiHandshake } from 'react-icons/si';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer'>
        <div className='footer-content'>
            <div className='copyright'>
            &copy; {currentYear} Amarnath Rao. All rights reserved.
            </div>
            <div className='social'>
            <ul className='social-buttons'>
                <li className='social-button'>
                <a href='https://www.linkedin.com/in/n-amarnath-rao/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedinIn />
                </a>
                </li>
                <li className='social-button'>
                <a href='https://github.com/Amarnath-Rao' target='_blank' rel='noopener noreferrer'>
                    <FaGithub />
                </a>
                </li>
                <li className='social-button'>
                <a href='mailto:AmarnathRao36@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <AiOutlineMail />
                </a>
                </li>
                <li className='social-button'>
                <a href='https://leetcode.com/AmarnathRao/' target='_blank' rel='noopener noreferrer'>
                    <SiLeetcode />
                </a>
                </li>
            </ul>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
