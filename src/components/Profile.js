import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import { SiLeetcode, SiHandshake } from "react-icons/si";
import "./Profile.css";
import myImage from '../images/my-image.jpg';

function Profile(params) {
    return (
        <div className="profile">
            <div className="avatar"> 
                <img alt="myphoto" src={myImage}></img>
            </div>
        
            <h1 className="name">
                <span className="first-name">Amarnath</span>
                <span className="last-name"> Rao</span>
            </h1>
            <div className="title">
                B.Tech. in Computer Science | Software Engineer
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#skills">skills</a>
                    </li>
                    <li>
                        <a href="#education">education</a>
                    </li>
                    <li>
                        <a href="#work">work</a>
                    </li>
                    <li>
                        <a href="#project">project</a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1h3sT_3xweFpzKwsbeaL7oYsLqm6hgVNJ/view?usp=sharing" target='_blank'>resume</a>
                    </li>
                </ul>
            </nav>
            <div className="social">
                <li className="social-button">
                    <a href="https://www.linkedin.com/in/n-amarnath-rao/" target="blank">
                        <FaLinkedinIn />
                    </a>
                </li>
                <li className="social-button">
                    <a href="https://github.com/Amarnath-Rao" target="blank">
                        <FaGithub />
                    </a>
                </li>
                <li className="social-button">
                    <a href="mailto:AmarnathRao36@gmail.com" target="blank">
                        <AiOutlineMail />
                    </a>
                </li>
                <li className="social-button">
                    <a href="https://leetcode.com/AmarnathRao/" target="blank">
                        <SiLeetcode />
                    </a>
                </li>
            </div>
        </div>
    );
}

export default Profile;
