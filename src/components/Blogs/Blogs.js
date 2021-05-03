import React from 'react';
import Navbar from '../Navbar/Navbar';

const Blogs = () => {
    return (
        <>
            <Navbar></Navbar>
            <section style={{height:"300px", color:"white",textAlign:"center", paddingTop:"100px"}}>
                <h1 className="fw-bold pt-3 pb-3">MY BLOGS</h1>
                <h6>Blogs coming soon ......</h6>
            </section>
        </>
    );
};

export default Blogs;