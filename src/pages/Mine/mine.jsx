
import React from 'react';
import './mine.css';
// import me from "../../assets/FSDRN1.png";
import profile from "../../assets/profile.png"
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CV from "../Mine/Tallapudi Nandini Satya Resume.pdf"; 

function Mine() {
    const dt = ["Full Stack Developer", "Competitive Programmer", "Website Designer"];

    return (
        <div className="mine" id='Bio'>
            <div className="empty"></div>
            {/* <div className="mtitle">My <span>Portfolio</span></div> */}<br></br><br></br><br></br>
            <div className="mbody">
                <div className="mtext">
                    <p className='mp1'>Hey there !!</p>
                    <p className='mp2'>I am :</p>
                    <p className='mp3'>Nandini Satya</p>
                    <div className="dynamic">
                        I am a <Typewriter
                            words={dt}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={15}
                            delaySpeed={1500}
                        />
                    </div>
                    <p className='mp4'>I'm a skilled Full Stack Developer and competitive programmer with a strong command of HTML5, CSS, JavaScript, Bootstrap, React.js, Express.js, and MongoDB. I bring experience in C++, and Java.</p>
                    <div className="micons">
                        <div className="mpure-icons">
                            <a href="https://www.linkedin.com/in/nandini-satya-tallapudi-64b16b288/" target='_blank'><FaLinkedinIn style={{cursor:'pointer',zIndex:'2'}}/></a>
                            <a href="https://github.com/20255-CM-055/Tallapudi-Nandini-Satya" target='_blank'><FaGithub style={{cursor:'pointer',zIndex:'2'}}/></a>
                            <a href="mailto:nandini.satyaa@gmail.com" target='_blank'><MdEmail style={{cursor:'pointer',zIndex:'2'}}/></a>
                        </div>
                        <div className="mgs">
                            <div className="gs">
                                <a href={CV} download>
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mpic">
                    <div className="pic">
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mine;
