import React from 'react';
import './skills.css';

const Skills = () => {
    const skills = [
        {
            date: "Frontend Development",
            title: "HTML, CSS, JS, Bootstrap and React.Js",
            description: "Experienced in HTML, CSS, JavaScript, and React.js, with a strong focus on building and deploying responsive, interactive web applications. Proficient in optimizing performance, managing state efficiently, and writing clean, maintainable code. Continuously improving skills in front-end development, UI/UX best practices, and modern frameworks to enhance scalability and user experience.",
        },
        {
            date: "Backend & Database Development",
            title: "Express.Js, Node.Js, MongoDB",
            description: "Strong understanding of backend development with hands-on experience in Express.js, Node.js, MongoDB, and Firebase. Developed and deployed multiple projects, enhancing expertise in building scalable, secure, and efficient server architectures. Continuously improving backend skills to optimize performance, database management, and seamless integration with front-end applications.",
        },
        {
            date: "Programming Languages",
            title: "C++, Java, C, Python",
            description: "II have a strong grasp of C++, C, Python, and Java, with a deep understanding of Object-Oriented Programming (OOP) and Data Structures & Algorithms (DSA), primarily using C++. Proficient in the C++ Standard Template Library (STL), I excel in implementing efficient algorithms and optimizing data structures. Continuously enhancing my programming expertise, I am eager to tackle complex challenges and expand my knowledge further.",
        },
    ];

    return (
        <div className="skills" id='Skills'>
            <br></br>
            <div className="stitle">My <span>Skills</span></div>
            <div className="timeline">
                {skills.map((skill, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                        <div className="timeline-content">
                            <div className="timeline-date">{skill.date}</div>
                            <h3 style={{lineHeight:'1.7rem'}}>{skill.title}</h3>
                            <p>{skill.description}</p>
                        </div>
                    </div>
                ))}
                <div className="timeline-line"></div>
            </div>
        </div>
    );
};

export default Skills;
