import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetails.css'

const ProjectDeatils = (props) => {
    const {name,img,gitLink,liveLink} = props.project
    return (
        <div className="col-md-4 col-12">
            <div className="single-project">
                <h4 style={{color:"#FA7600"}}>{name}</h4>
                <div className="project-img">
                    <img src={img} alt="" height="100px"/>
                </div>
                <div className="project-details">
                    
                    <a href={liveLink} target="_blank"><button className="button-project">Visit Site</button></a>
                    <a href={gitLink} target="_blank"><button className="button-project">Source Code</button></a><br/>
                    <Link to="/project"><button className="button-project mt-2 px-5">Project Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDeatils;