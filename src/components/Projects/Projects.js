import React from 'react';
import teamDetails from '../../images/team-summary.JPG'
import player from '../../images/player-hire.JPG';
import transport from '../../images/metro-transport.JPG';
import shopping from '../../images/book-shopping.JPG';
import meal from '../../images/meal.JPG';
import slider from '../../images/slider.JPG';
import ProjectDeatils from '../ProjectDetails/ProjectDeatils';

const Projects = () => {
    const projectData = [
        {
            name:'TEAM-DETAILS',
            img:teamDetails,
            details:"The website showing some football team summery and team explore. Team details collect to thesportsdb website API. If any user click explore button to Home page. Then next pages team details and showing some social icon and social link as footer.Technology used for this website HTML, CSS, Bootstrap, React.JS, React Router, React Font Awesome.The page responsive for desktop and mobile version.",
            id:1
        },
        {
            name:'METRO-TRANSPORT',
            img:transport,
            details:"This website create for travels agency. If you need transport any place so you visit this site. Travels criteria four criteria train, bus, bike and car. And showing login and sign in system using firebase authentication.Technology used: HTML, CSS, React.JS, React Rout, React Private Route, React Bootstrap.",
            id:2
        },
        {
            name:'SLIDER-CREATOR',
            img:slider,
            details:"This website for slider create any user at first search any image and select choice image then click create slider button and he want to slider duration time select in slider duration input section. And next page show his slider.Technology used: HTML, CSS, JavaScript",
            id:3 
        },
        {
            name:'PLAYER-HIRE',
            img:player,
            details:"This website create for showing how to any cricket team or league hire cricket player for the team.and player budget and total player budget calculation.Technology used HTML, CSS, JavaScript, Bootstrap, Font Awesome iconThe website create using fake data. and deploy Netlify webhost site.",
            id:4
        },
        {
            name:'TRUST-BOOK-SHOPPING',
            img:shopping,
            details:"The Website for shopping any book. use firebase authentication login system and private route using .Backend some work and any product add system include and show adding part in home and page Responsive for Desktop and Mobile version.Technology Used: React.js,Node.js,MongoDB,React Router,React Private Route,Bootstrap,Firebase.",
            id:5
        },
        {
            name:'HUNGRY-MONSTER',
            img:meal,
            details:"Hungry monster website create for searching any meal and this using API and some javascript condition.User search any meal name and see meal recipe details.Technology used HTML,CSS and JavaScript",
            id:6
        },
    ]


    return (
        <section>
            <div className="container">
            <h1 className="fw-bold">MY PROJECTS</h1>
                <div className="d-flex justify-content-center">
                    <div className="row mt-3 mb-5 pt-5 px-3">
                        {
                            projectData.map(project => <ProjectDeatils project={project} key="id"></ProjectDeatils>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;