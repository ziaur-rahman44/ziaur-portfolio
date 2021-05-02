import React from 'react';
import './skill.css';

const Skils = () => {
    return (
        <section className="progress-list">
               <div className="container">
               <div className="px-3">
                   <h1 className="fw-bold">MY SKILLS</h1>
                            <div>
                                <h3 style={{color:"#F77B07"}} className="text-start">HTML</h3>
                                <div class="progress  mb-4 ">
                                <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: '85%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </div>
                           
                            <div>
                                <h3  style={{color:"#F77B07"}} className="text-start">CSS</h3>
                                <div class="progress  mb-4">
                                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                            </div>
                       
                            <div>
                                <h3 style={{color:"#F77B07"}} className="text-start">Bootstrap</h3>
                                <div class="progress  mb-4">
                                <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>
                            
                            <div>    
                                <h3 style={{color:"#F77B07"}} className="text-start">JavaScript</h3> 
                                <div class="progress  mb-4">
                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '80%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>
                        
                            <div>
                                <h3 style={{color:"#F77B07"}} className="text-start">React.js</h3>
                                <div class="progress  mb-4">
                                <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                            </div>
                        
                            <div>  
                                <h3 style={{color:"#F77B07"}} className="text-start">Node.js</h3>    
                                <div class="progress  mb-4">
                                <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: '65%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">65%</div>
                                </div>
                            </div>

                            <div>    
                                <h3 style={{color:"#F77B07"}} className="text-start">MongoDB</h3>  
                                <div class="progress  mb-4">
                                <div class="progress-bar progress-bar-striped bg-black" role="progressbar" style={{width: '60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">60%</div>
                                </div>
                            </div>
                    
                    </div>
               </div>
        </section>
    );
};

export default Skils;