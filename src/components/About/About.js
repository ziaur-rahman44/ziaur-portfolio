import React from 'react';
import './About.css';
import linkedIn from '../../images/images.png';
import facebook from '../../images/download.png';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const About = () => {

    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_o0bltgt', 'template_c06xrow', e.target, 'user_szE4pHXsBazWGVYhoCQUe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

    return (
        <section className="about-banner" id="about">
            <div className="container">
                <div className="about-section">
                    <h1 className="my-5 pt-5 fw-bold">ABOUT ME</h1>
                    <div className="row">
                        <div className="col-md-6 col-12 px-3">
                               <div className="form-contact">
                                    <h3 className="pb-4 fw-bold text-center">Hire me or any kind information please send me message</h3>
                                    <form onsubmit={sendEmail}>
                                        <input name="name" className="form-control" type="text" placeholder="Your name"></input><br/>
                                        <input name="email" className="form-control" type="text" placeholder="Your email"></input><br/>
                                        <textarea  className="pe-0" name="message"  cols="40" rows="4"></textarea> <br/>
                                        <button type="submit" className="btn btn-danger">Send Message</button>
                                    </form>
                               </div>
                        </div>
                        <div className="col-md-6 col-12 pt-md-0 pt-5 px-3">
                            <div className="contact text-left">
                                <h3 className="pb-4 fw-bold text-center">My Contact Information</h3>
                                <i class="fa fa-map-marker"></i><span>Bishwambarpur, Sunamgamj, Sylhet, Bangladesh</span><br/>
                                <i class="fa fa-phone-square"></i><span>01739884742</span><br/>
                                <i class="fa fa-envelope"></i><span>ziaurfahim44@gmail.com</span><br/>
                            </div>
                            <div className="social-icon">
                                <Link to={{pathname: `https://www.facebook.com/ziaur.kaziziaur/`}} target='_blank'>
                                    <img src={facebook} alt=""/> 
                                </Link>
                                <Link to={{pathname: `https://www.linkedin.com/in/ziaur-rahman-299171211/`}} target='_blank'>
                                    <img src={linkedIn} alt=""/> 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;