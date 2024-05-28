
import Header from "../Header"
import Footer from "../Footer"
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import "./teacher.css"
import { instroctioninfo, courseslist } from "../../dummydata"
import { GoStarFill } from "react-icons/go";
const Teacherdetails = () => {
    return (
        <>
            <Header />
            <h1 className="mb-0 bread">Instructor Details</h1>
            <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('../../../public/images/bg_2.jpg')" }}>
                <div className="overlay"></div>

                <div className="container">

                    <div className="teachrow no-gutters slider-text align-items-end justify-content-center">
                        <div className="col-md-9 ftco-animate pb-5 text-center">

                        </div>
                    </div>
                </div>
            </section>

            <div className='marginhero'></div>

            <section className='team padding'>
                <div className='container flex'>
                    {instroctioninfo.map((val) => (
                        <div className='items shadow'>
                            <div className='img'>
                                <img src={val.cover} alt='' />
                                <div className='overlay'>
                                    <i className='fab fa-facebook-f icon'></i>
                                    <i className='fab fa-twitter icon'></i>
                                    <i className='fab fa-instagram icon'></i>
                                    <i className='fab fa-tiktok icon'></i>
                                </div>
                            </div>
                            <div className='details'>
                                <h2>{val.name}</h2>
                                <p>{val.work}</p>
                                <div className='follow-subscribe-buttons'>
                                    <button className='follow-button'>Follow</button>
                                    <button className='subscribe-button'>Subscribe</button>
                                </div>
                            </div>
                            


                        </div>


                    ))}
                    {instroctioninfo.map((val) => (
                        <div className="containerabout">
                            <h3>{val.name}</h3>
                            <span className="position mb-2">{val.work}</span>
                            <div className="">
                                <div className="staff-detail">
                                    <h3>About</h3>
                                    <p>A small river named {val.name} by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    <h3>Education</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    <h3>Experience</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </section>

          




            <section className="ftco-section bg-light ftco-no-pt ">
            <h2 className="hedi">Course By Adrian Molises</h2>
                <div className="container gridtech">
                    
                    
                    {/* <div className="">
                        <div className="col-md-4 ftco-animate">
                            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
                                <div className="project-wrap">
                                    <cont  className="img" style={{backgroundImage: "url(../../../public/images/work-1.jpg)"}}>
                                        <span className="price">Software</span>
                                    </cont>
                                    <div className="text p-4">
                                        <h3><cont>Design for the web with adobe photoshop</cont></h3>
                                        <p className="advisor">Advisor <span>Tony Garret</span></p>
                                        <ul className="d-flex justify-content-between">
                                            <li><span className="flaticon-shower"></span>2300</li>
                                            <li className="price">$199</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div className="">
                        <div className="col-md-4 ftco-animate">
                            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
                                <div className="project-wrap">
                                    <cont  className="img" style={{backgroundImage: "url(../../../public/images/work-2.jpg)"}}>
                                        <span className="price">Software</span>
                                    </cont>
                                    <div className="text p-4">
                                        <h3><cont>Design for the web with adobe photoshop</cont></h3>
                                        <p className="advisor">Advisor <span>Tony Garret</span></p>
                                        <ul className="d-flex justify-content-between">
                                            <li><span className="flaticon-shower"></span>2300</li>
                                            <li className="price">$199</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div className="">
                        <div className="col-md-4 ftco-animate">
                            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
                                <div className="project-wrap">
                                    <cont  className="img" style={{backgroundImage: "url(../../../public/images/work-3.jpg)"}}>
                                        <span className="price">Software</span>
                                    </cont>
                                    <div className="text p-4">
                                        <h3><cont>Design for the web with adobe photoshop</cont></h3>
                                        <p className="advisor">Advisor <span>Tony Garret</span></p>
                                        <ul className="d-flex justify-content-between">
                                            <li><span className="flaticon-shower"></span>2300</li>
                                            <li className="price">$199</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div className="">
                        <div className="col-md-4 ftco-animate">
                            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
                                <div className="project-wrap">
                                    <cont  className="img" style={{backgroundImage: "url(../../../public/images/work-4.jpg)"}}>
                                        <span className="price">Software</span>
                                    </cont>
                                    <div className="text p-4">
                                        <h3><cont> adobe photoshop</cont></h3>
                                        <p className="advisor">Advisor <span>Tony Garret</span></p>
                                        <ul className="d-flex justify-content-between">
                                            <li><span className="flaticon-shower"></span>2300</li>
                                            <li className="price">$199</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div> */}

                     {/* <section className="ftco-section bg-light ftco-no-pt ">
                <h2 className="hedi">Course By Stephen Wilson</h2> */}
                <div className="container gridtech">
                    {courseslist.map((course) => (
                        <div key={course.id} className="col-md-4 ftco-animate">
                            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
                                <div className="project-wrap">
                                    
                                    <div className="img"  style={{backgroundImage: `url(${course.cover})`}}>
                                    {course.price ? <GoStarFill style={{color:"rgb(201, 201, 49)", width:"950px" ,height:"50px"}} />: null}
                                        <span className="price">Software</span>
                                    </div>
                                    <div className="text p-4">
                                        <h3>{course.name}</h3>
                                        <p className="advisor">Advisor <span>{course.advisor}</span></p>
                                        <ul className="d-flex justify-content-between">
                                            <li><span className="flaticon-shower"></span>{}</li>
                                            <li className="price">{}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            {/* </section> */}
                </div>
            </section>


            <div className='beforefooter'></div>
            <Footer />

        </>
    )
}

export default Teacherdetails
