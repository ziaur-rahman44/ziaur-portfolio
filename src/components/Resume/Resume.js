import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../images/Ziaur-Update-Resume.pdf';
import './Resume.css'

const Resume = () => {
    return (
        <section id="resume">
            <div className="resume">
                <div className="container">
                    <h1 className="my-4  fw-bold">MY RESUME</h1>
                    <Link to={resume} target="_blank" download><button className="mt-2 btn btn-danger"><i class="fa fa-download pe-1"></i>Download Resume</button></Link>
                   
                    <div className="objecitv">
                        <h2 style={{color:"#FA7600"}} className="my-3 text-md-start">Carear Object</h2>
                        <p className="text-start">Hard-working individual with proficiency in HTML, JavaScript, React.js and CSS, as well as strong ability to communicate and work in a team effectively seeks to apply for the position of Front-end Developer.
                        I am self-motivated, I use good judgment and I have the ability to manage my time wisely to meet deadlines. I can adapt to different types of work environments easily. I have a pleasant and friendly personality with the ability to work as a team or independently. 
                        </p>
                    </div>

                    <div className="skills">
                        <h2 style={{color:"#FA7600"}} className="mt-5 mb-4 text-md-start">Professional Skills</h2>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <h5 className="fw-bold text-start">Expertise</h5>
                                <div className="technology text-start">
                                    <button>HTML5</button><button>CSS3</button><button>BOOTSTRAP</button>
                                    <button>JavaScript</button><button>ES6</button><button>React.js</button><button>React Bootstrap</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <h5 className="fw-bold text-start mt-3 mt-md-0">Comfortable</h5>
                                <div className="technology text-start">
                                    <button>Node.js</button><button>MongoDB</button><button>Firebase</button>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-12">
                                <h5 className="mt-3 mb-2 fw-bold text-start">Familiar</h5>
                                <div className="technology text-start">
                                    <button>TypeScript</button><button>React Native</button><button>Material UI</button>
                                    <button>JQuery</button><button>Python</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <h5 className="mt-3 fw-bold text-start">Tools</h5>
                                <div className="technology text-start">
                                    <button>Git</button><button>VS Code</button><button>Heroku</button>
                                    <button>Netlify</button><button>Firebase</button><button>Chrome Dev tool</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experience-education">
                        <div className="row">
                            <div className="col-md-6 col-12">
                               <div className="resume-card">
                                    <h2 style={{color:"#FA7600"}}>Experience</h2>
                                    <h4>Trainer In a Computer Training Center</h4>
                                    <p><i>September 2020 - December 2020</i></p>
                                    <h5>Web Design Basic (HTML,CSS)</h5>
                               </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="resume-card">
                                    <h2 style={{color:"#FA7600"}} >Education</h2>
                                    <h5>Diploma In Engineering (Computer Technology)</h5>
                                    <p><i>August 2018 - Present</i></p>
                                    <h4>Islami Bank Institute Of Technology, Sylhet</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;