import React from 'react';
import teamDetails from '../../images/team-summary.JPG'
import player from '../../images/player-hire.JPG';
import transport from '../../images/metro-transport.JPG';
import shopping from '../../images/book-shopping.JPG';
import meal from '../../images/meal.JPG';
import slider from '../../images/slider.JPG';
import ProjectsPageDetail from '../ProjectsPageDetails/ProjectsPageDetail';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Projectspage = () => {
    const projectData = [
        {
            name:'TEAM-DETAILS',
            img:teamDetails,
            details:"The website showing some football team summery and team explore. Team details collect to thesportsdb website API. If any user click explore button to Home page. Then next pages team details and showing some social icon and social link as footer.",
            resource:"HTML, CSS, Bootstrap, React.JS, React Router, React Font Awesome.The page responsive for desktop and mobile version.",
            gitLink:"https://github.com/Porgramming-Hero-web-course/react-router-ziaur-rahman44",
            liveLink:"https://team-summary.netlify.app/",
            id:1
        },
        {
            name:'METRO-TRANSPORT',
            img:transport,
            details:"This website create for travels agency. If you need transport any place so you visit this site. Travels criteria four criteria train, bus, bike and car. And showing login and sign in system using firebase authentication.",
            resource:"HTML, CSS, React.JS, React Rout, React Private Route, React Bootstrap.",
            gitLink:"https://github.com/Porgramming-Hero-web-course/react-auth-ziaur-rahman44",
            liveLink:"https://metro-transport.web.app/",
            id:2
        },
        {
            name:'SLIDER-CREATOR',
            img:slider,
            details:"This website for slider create any user at first search any image and select choice image then click create slider button and he want to slider duration time select in slider duration input section. And next page show his slide.",
            resource:"HTML, CSS, JavaScript",
            gitLink:"https://github.com/ziaur-rahman44/fancy-slider-app",
            liveLink:"https://ziaur-rahman44.github.io/fancy-slider-app/",
            id:3 
        },
        {
            name:'PLAYER-HIRE',
            img:player,
            details:"This website create for showing how to any cricket team or league hire cricket player for the team.and player budget and total player budget calculation.",
            resource:"HTML, CSS, JavaScript, Bootstrap, Font Awesome iconThe website create using fake data. and deploy Netlify webhost site.",
            gitLink:"https://github.com/Porgramming-Hero-web-course/simple-react-ziaur-rahman44",
            liveLink:"https://brave-mahavira-be85c8.netlify.app/",
            id:4
        },
        {
            name:'TRUST-BOOK-SHOPPING',
            img:shopping,
            details:"The Website for shopping any book. use firebase authentication login system and private route using .Backend some work and any product add system include and show adding part in home and page Responsive for Desktop and Mobile version.",
            resource:"React.js,Node.js,MongoDB,React Router,React Private Route,Bootstrap,Firebase.",
            gitLink:"https://github.com/Porgramming-Hero-web-course/full-stack-client-ziaur-rahman44",
            liveLink:"https://trust-book-shopping.web.app/",
            id:5
        },
        {
            name:'HUNGRY-MONSTER',
            img:meal,
            details:"Hungry monster website create for searching any meal and this using API and some javascript condition.User search any meal name and see meal recipe details.",
            resource:"HTML,CSS and JavaScript",
            gitLink:"https://github.com/ziaur-rahman44/hungry-monstar",
            liveLink:"https://ziaur-rahman44.github.io/hungry-monstar/",
            id:6
        },
    ]

    return (
        <>
        <Navbar></Navbar>
         <section className="">
            <div style={{marginTop:"120px"}} className="container">
            <h1 className="fw-bold pt-3 pb-3">MY PROJECTS</h1>
                <div>
                    <div className="row mt-3 mb-5 pt- px-3 d-flex justify-content-center">
                        {
                            projectData.map(project => <ProjectsPageDetail project={project} key="id"></ProjectsPageDetail>)
                        }
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>
    );
};

export default Projectspage;