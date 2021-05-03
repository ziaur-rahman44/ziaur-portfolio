import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetails.css'

const ProjectDeatils = (props) => {
    const {name,img,gitLink,liveLink} = props.project
    return (
        <div className="col-md-4 col-12">
            <div className="single-project">
                <h4 style={{color:"#51c4d3"}}>{name}</h4>
                <div className="project-img pb-2">
                    <img src={img} alt="" height="120px" width="220px"/>
                </div>
                <div className="project-details">
                    
                    <Link to={{pathname:liveLink}} target="_blank"><button className="button-project">Visit Site</button></Link>
                    <Link to={{pathname:gitLink}} target="_blank"><button className="button-project">Source Code</button></Link><br/>
                </div>
            </div>
            
        </div>
    );
};

export default ProjectDeatils;