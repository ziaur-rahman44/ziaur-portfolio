import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPageDetail = (props) => {
    const{name,img,details,resource,gitLink,liveLink} = props.project
    return (
        <div className="col-md-12 col-12 pb-4">
            <div className="single-project">
                <h4 style={{color:"#51c4d3"}}>{name}</h4>
                <div className="project-img">
                    <img src={img} alt="" width="90%"/>
                </div>
                <div className="project-details pt-3">
                    <p style={{fotSize:"20px"}} className="text-start ps-2"><span style={{color:"#51c4d3"}} className="text-start fw-bold pe-2">ABOUT PAGE:</span>{details}</p>
                    <p className="text-start ps-2"><span style={{color:"#51c4d3"}} className="fw-bold pe-2">TECHNOLOGY:</span>{resource}</p>
                    <Link to={{pathname:liveLink}} target="_blank"><button className="button-project">Visit Site</button></Link>
                    <Link to={{pathname:gitLink}} target="_blank"><button className="button-project">Source Code</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPageDetail;