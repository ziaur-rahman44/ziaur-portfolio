import React from 'react';
import teamDetails from '../../images/team-summary.JPG'
import player from '../../images/player-hire.JPG';
import transport from '../../images/metro-transport.JPG';
import shopping from '../../images/book-shopping.JPG';
import meal from '../../images/meal.JPG';
import slider from '../../images/slider.JPG';
import ProjectDeatils from '../ProjectDetails/ProjectDeatils';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projectData = [
        {
            name:'TEAM-DETAILS',
            img:teamDetails,
            gitLink:"https://github.com/Porgramming-Hero-web-course/react-router-ziaur-rahman44",
            liveLink:"https://team-summary.netlify.app/",
            id:1
        },
        {
            name:'METRO-TRANSPORT',
            img:transport,
            gitLink:"https://github.com/Porgramming-Hero-web-course/react-auth-ziaur-rahman44",
            liveLink:"https://metro-transport.web.app/",
            id:2
        },
        {
            name:'SLIDER-CREATOR',
            img:slider,
            gitLink:"https://github.com/ziaur-rahman44/fancy-slider-app",
            liveLink:"https://ziaur-rahman44.github.io/fancy-slider-app/",
            id:3 
        },
        {
            name:'PLAYER-HIRE',
            img:player,
            gitLink:"https://github.com/Porgramming-Hero-web-course/simple-react-ziaur-rahman44",
            liveLink:"https://brave-mahavira-be85c8.netlify.app/",
            id:4
        },
        {
            name:'TRUST-BOOK-SHOPPING',
            img:shopping,
            gitLink:"https://github.com/Porgramming-Hero-web-course/full-stack-client-ziaur-rahman44",
            liveLink:"https://trust-book-shopping.web.app/",
            id:5
        },
        {
            name:'HUNGRY-MONSTER',
            img:meal,
            gitLink:"https://github.com/ziaur-rahman44/hungry-monstar",
            liveLink:"https://ziaur-rahman44.github.io/hungry-monstar/",
            id:6
        },
    ]


    return (
        <section>
            <div className="container pt-md-5 text-center">
            <h1 className="fw-bold text-white">MY PROJECTS</h1>
                <div className="d-flex justify-content-center">
                    <div className="row mt-3 mb-5 pt-5 px-3">
                        {
                            projectData.map(project => <ProjectDeatils project={project} key="id"></ProjectDeatils>)
                        }
                    </div>
                </div>
                <Link to="/project"><button className="button-project  px-5">Projects Details</button></Link>
            </div>
        </section>
    );
};

export default Projects;