import React from 'react';
import Slider from "react-slick";
import './projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineFestival } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";

function Projects() {
    const projects = [
        // {
        //     title: 'GPS Tracking Web Application',
        //     technologies: 'React.js, Express.js and MongoDB',
        //     description: 'The GPS Tracking Web Application is designed to offer users seamless access to real-time bus tracking, reliable navigation, and a high-UI experience. With the Get Directions to My Bus page, users can locate the closest bus in real-time and receive accurate ETAs, while the Live Tracking feature keeps them informed of the buses exact location and route progression. the Home Page consists of featured notifications, and quick-access links, ensuring users can effortlessly navigate and make use of all application features.',
        //     logo: <IoLocationSharp />,
        //     backgroundImage: 'path_to_sample_image',
        //     link: ''
        // },
        {
            title: 'Travel Tale Website',
            technologies: 'HTML5, CSS and JS',
            description: 'A tourism website for France lets users explore popular destinations, find routes, and book tickets for transportation and attractions.',
            logo: <MdFoodBank />,
            backgroundImage: 'path_to_sample_image',
            link: 'https://travel-tale-pi.vercel.app/'
        },
        {
            title: 'Netflix-Clone',
            technologies: 'React.js and UI',
            description: 'A clean Netflix clone built with React, featuring a static header, hero section, and organized display of movie and TV show thumbnails.',
            logo: <MdOutlineFestival />,
            backgroundImage: 'path_to_sample_image',
            link: 'https://drive.google.com/file/d/1K19xlbG2R2ieydga8pc5Pd6KjBHxs-68/view?usp=sharing'
        },
        {
            title: 'AltLights Page',
            technologies: 'HTML5, CSS, JS ',
            description: 'Developed the AltLights homepage using HTML, CSS, and JavaScript, focusing on responsive design and interactive features. Implemented dynamic galleries, hover effects, and a clean layout to enhance user experience across all devices.',
            logo: <FaLightbulb />,
            backgroundImage: 'path_to_sample_image',
            link: 'https://github.com/20255-CM-055/AltLights'
        },
        {
            title: 'Shop Ease',
            technologies: 'React js and Javascript',
            description: 'A React-based shopping website where users can search for products, add items to the cart, and remove them as needed.',
            logo: <FaReact />,
            backgroundImage: 'path_to_sample_image',
            link: 'https://shop-ease-weld-eight.vercel.app/'
        },
    ];

    const CustomPrevArrow = ({ onClick }) => (
        <div className="custom-arrow custom-prev" onClick={onClick}>
            &#10094;
        </div>
    );

    const CustomNextArrow = ({ onClick }) => (
        <div className="custom-arrow custom-next" onClick={onClick}>
            &#10095;
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        autoplay : true,
        autplaySpped : 2500,
        pauseOnHover: true,
        swipeToSlide: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div id='Projects' className='projects'>
            <div className="ptitle"><span>Projects</span></div>
            <div className="slider-container">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index} className="project-card" style={{ backgroundImage: `url(${project.backgroundImage})` }}>
                            <div className="project-info">
                                <div className="project-logo">
                                    {project.logo}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-tech">{project.technologies}</p>
                                <p className="project-description">{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="neon-button">
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Projects;
