import React from 'react';
import Navbar from '../Navbar/Navbar';
import profile from '../../images/IMG-20210309-WA0fdf010.jpg'
import resume from '../../images/Ziaur-Update-Resume.pdf'
import { Link } from 'react-router-dom';
import './Header.css';
import Typical from 'react-typical'

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section>
                
                    <div className="header-top">
                        <div className="header-img">
                            <img className="rounded-circle img-fluid" src={profile} alt="" width="250px"/>
                        </div>
                        <div className="header-title">
                            <h2 className="fw-bold">Hi, I'm Ziaur Rahman</h2>
                            <h4>I'm Jr Frontend Web Developer.</h4>
                            <Typical 
                                steps={['Jr Frontend Developer', 500, 'React Developer', 500]}
                                loop={Infinity}
                                wrapper="p"
                            />
                            <Link to={resume} target="_blank" download><button className="mt-2 btn btn-danger"><i class="fa fa-download pe-1"></i>Download Resume</button></Link>
                        </div>
                    </div>
               
               
            </section>
        </div>
    );
};

export default Header;