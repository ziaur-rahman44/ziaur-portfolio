import React from 'react';

const Footer = () => {
    const styleFooter = {
        padding:'20px 0',
        backgroundColor:"#05071bef",
        fontSize:"16px",
        color:"white"
    }
    return (
        <section style={styleFooter}>
            <div className="footer-section text-center">
                <p>All Right Reserve {(new Date().getFullYear())}</p> <span>Developed by Ziaur Rahman</span>
            </div>
        </section>

    );
};

export default Footer;