import React from 'react';
import './internships.css';
import cod from "../../assets/cod.jpeg"
import FSD from "../../assets/FSD.jpeg"
import cog from "../../assets/cog.png"
import ind from "../../assets/ind.png"
function Internships() {
    const internships = [
        {
            title: 'Vocational training',
            startDate: 'Aug 2022',
            endDate: 'Jan 2023',
            duration: '6 months',
            description: 'Gained hands-on experience in web technologies by building projects, and actively participated in bootcamps to further enhance skills.',
            certificateLink: 'https://drive.google.com/file/d/15qXSAAS1rNizhlo8EK69axYfw83Pzdsg/view?usp=sharing',
            backgroundImage : ind,
        },
        {
            title: 'Codsfot python Intern',
            startDate: 'Jan 2024',
            endDate: 'Feb 2024',
            duration: '1 month',
            description: 'Python Intern, where I completed various tasks showcasing my skills in Python, focusing on problem-solving and development.',
            certificateLink: 'https://drive.google.com/file/d/1Jt0dY2jgr9ZxRk318UmIJi7UGUmQhNM2/view?usp=sharing',
            backgroundImage : cod,
        },
        {
            title: 'Web Development Intern',
            startDate: 'Aug 2024',
            endDate: 'Sept 2024',
            duration: '1 month',
            description: 'Interned as a Web Development Intern for 1 month, where I assisted in building responsive web pages, integrated APIs, and contributed to UI/UX improvements. ',
            certificateLink: 'https://drive.google.com/file/d/1kLLb_4bW81ekTVEHX0G3OHMJSEqfMAeP/view?usp=sharing',
            backgroundImage : cog,
        },
        {
            title: 'Full Stack Intern',
            startDate: 'June 2024',
            endDate: 'July 2024',
            duration: '1 month',
            description: 'Intern, where I learned and applied HTML, CSS, and JavaScript, developed multiple projects, and successfully deployed them, showcasing my skills in web development.',
            certificateLink: 'https://drive.google.com/file/d/1EC3sECYyxrJyz8wO9zt_qAMXWzlT35UJ/view?usp=sharing',
            backgroundImage : FSD,
        },
    ];

    return (
        <div className="internships" id="Internships">
            <div className="ititle"><span>Internships</span>  <span></span></div>
            <div className="internship-cards">
                {internships.map((internship, index) => (
                    <div className="internship-card" key={index}>
                        <img src={internship.backgroundImage} alt="Internship Background" className="background-img" />
                        <div className="card-content">
                            <h3>{internship.title}</h3>
                            <div className="hover-details">
                                <p><strong>Start Date:</strong> {internship.startDate}</p>
                                <p><strong>End Date:</strong> {internship.endDate}</p>
                                <p><strong>Duration:</strong> {internship.duration}</p>
                                <p>{internship.description}</p>
                                <a href={internship.certificateLink} target="_blank" rel="noopener noreferrer" className="view-certificate-btn">View Certificate</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Internships;
