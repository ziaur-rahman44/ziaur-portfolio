import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav style={{backgroundColor:"#060215", padding:"15px 0px"}} class="fixed-top navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid ">
                <h3 class="ms-md-5 navbar-brand text-white" >ZIAUR RAHMAN</h3>
                <button   class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div  class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                    <li class="nav-item me-5">
                        <Link class="nav-link active text-white" aria-current="page" to="/home">HOME</Link>
                    </li>
                    <li class="nav-item me-5">
                        <Link class="nav-link text-white" to="/blogs">BLOGS</Link>
                    </li>
                    <li class="nav-item me-5">
                        <Link class="nav-link text-white" to="/project">PROJECTS</Link>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link text-white" href="#resume">RESUME</a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link text-white" href="#about">ABOUT ME</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;