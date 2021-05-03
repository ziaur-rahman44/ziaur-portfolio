import React from 'react';
import './skill.css';

const Skils = () => {
    return (
        <section className="progress-list">
               <div className="container">
               <div className="px-3">
                   <h1 className="fw-bold text-white text-center">MY SKILLS</h1>
                    <div className="row text-white">
                    <div className="col-md-6 col-12">
                            <div>
                                    <h5 className="text-start">HTML</h5>
                                    <div class="progress  mb-4 ">
                                    <div class="progress-bar bg-dark-50 " role="progressbar" style={{width: '85%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">85%</div>
                                    </div>
                                </div>
                            
                                <div>
                                    <h5  className="text-start">CSS</h5>
                                    <div class="progress  mb-4">
                                    <div class="progress-bar  " role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                </div>
                        
                                <div>
                                    <h5 className="text-start">Bootstrap</h5>
                                    <div class="progress  mb-4">
                                    <div class="progress-bar " role="progressbar" style={{width: '80%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">80%</div>
                                    </div>
                                </div>
                                
                                <div>    
                                    <h5  className="text-start">JavaScript</h5> 
                                    <div class="progress  mb-4">
                                    <div class="progress-bar " role="progressbar" style={{width: '80%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
                                    </div>
                                </div>
                           </div>
                        
                            <div className="col-md-6 col-12">
                                <div>
                                    <h5 className="text-start">React.js</h5>
                                    <div class="progress  mb-4">
                                    <div class="progress-bar  " role="progressbar" style={{width: '75%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                </div>
                            
                                <div>  
                                    <h5 className="text-start">Node.js</h5>    
                                    <div class="progress  mb-4">
                                    <div class="progress-bar " role="progressbar" style={{width: '65%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">65%</div>
                                    </div>
                                </div>

                                <div>    
                                    <h5 className="text-start">MongoDB</h5>  
                                    <div class="progress  mb-4">
                                    <div class="progress-bar " role="progressbar" style={{width: '60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">60%</div>
                                    </div>
                                </div>

                                <div>    
                                    <h5 className="text-start">Firebase</h5>  
                                    <div class="progress  mb-4">
                                    <div class="progress-bar " role="progressbar" style={{width: '60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">60%</div>
                                    </div>
                                </div>
                            </div>
                    </div>       
                </div>
               </div>
        </section>
    );
};

export default Skils;