import React from 'react';
import './About.css';
import linkedIn from '../../images/images.png';
import facebook from '../../images/download.png';
import gitHGub from '../../images/GitHub-Mark.png';
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
            <div className="container pt-md-5">
                <div className="about-section">
                    <h1 className="my-5 pt-5 fw-bold text-center">ABOUT ME</h1>
                    <div className="row">
                        <div  className="col-md-6 col-12 px-3">
                               <div style={{borderRadius:"8px",backgroundColor:"#05071bef",padding:"46px 30px"}} className="form-contact">
                                    <h3 className="pb-4 fw-bold text-center">Get In Touch</h3>
                                    <form onSubmit={sendEmail}>
                                        <input name="name" className="form-control" type="text" placeholder="Your name"></input><br/>
                                        <input name="email" className="form-control" type="text" placeholder="Your email"></input><br/>
                                        <textarea  className="pe-0" name="message"  cols="40" rows="4"></textarea> <br/>
                                        <button type="submit" className="btn btn-danger">Send Message</button>
                                    </form>
                               </div>
                        </div>
                        <div  className="col-md-6 col-12 pt-md-0 pt-5 px-3">
                            <div style={{borderRadius:"8px",backgroundColor:"#05071bef",padding:"32px"}} >
                                <div className="contact text-left py-3">
                                    <h3 className="pb-4 fw-bold text-center">My Contact Information</h3>
                                    <i class="fa fa-map-marker"></i><span>Bishwambarpur, Sunamgamj, Sylhet, Bangladesh</span><br/>
                                    <i class="fa fa-phone-square"></i><span>01739884742</span><br/>
                                    <i class="fa fa-envelope"></i><span>ziaurfahim44@gmail.com</span><br/>
                                </div>
                                <div className="social-icon py-3">
                                    <Link to={{pathname: `https://www.facebook.com/ziaur.kaziziaur/`}} target='_blank'>
                                        <img src={facebook} alt=""/> 
                                    </Link>
                                    <Link to={{pathname: `https://www.linkedin.com/in/ziaur-rahman-299171211/`}} target='_blank'>
                                        <img src={linkedIn} alt=""/> 
                                    </Link>
                                    <Link to={{pathname: `https://github.com/ziaur-rahman44`}} target='_blank'>
                                        <img src={gitHGub} alt=""/> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;