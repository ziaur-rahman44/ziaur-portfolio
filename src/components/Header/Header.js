import React from 'react';
import Navbar from '../Navbar/Navbar';
import profile from '../../images/IMG-20210309-WA0fdf010.jpg'
import resume from '../../images/ziaur-rahamn-last-update-resume.pdf'
import { Link } from 'react-router-dom';
import './Header.css';
import Typical from 'react-typical'

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section>
                
                    <div className="header-top">
                        <div className="  col-6 offset-3">
                            <div className="header-img text-center">
                                <img className="rounded-circle img-fluid text-center" src={profile} alt="" width="250px"/>
                            </div>
                            <div className="header-title ">
                                <h2 className="fw-bold text-center">Hi, I'M Ziaur Rahman</h2>
                                <div className="d-flex justify-content-center">
                                    <h2 className="d-inline-block text-center">
                                    <Typical 
                                        steps={['Jr Frontend Developer', 500, ' React Developer', 500]}
                                        loop={Infinity}
                                        wrapper="p"
                                    />
                                    </h2>
                                </div>
                                
                                <div className="d-flex justify-content-center">
                                    <Link to={resume} target="_blank" download><button className="text-center mt-2 btn btn-danger"><i class="fa fa-download pe-1"></i>Download Resume</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
               
               
            </section>
        </div>
    );
};

export default Header;