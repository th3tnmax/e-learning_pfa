import React from 'react'
import { profilecourses ,courseslist } from "../../dummydata"
// import "./profile.css"
import { GoStarFill } from "react-icons/go";
import "./cours.css"
import { useParams, useNavigate, Link } from "react-router-dom";

const Cours = () => {
    

    const HandelItemdetails = () => {
        // navigate(`/Itemdetails/${currentId}`, { replace: true });
    }
    return (
        <div>

            <section className='coursesCard'>

                <div className='container grid2'>

                    {profilecourses.map((val) => (

                        <div className='items' key={val.id}
                            onClick={HandelItemdetails}>
                            <div className='content flex'>
                                <div className='left'>
                                    <div className='img'>
                                        <img src={val.cover} alt='' />
                                    </div>
                                </div>
                                <div className='text'>
                                    <h1>{val.coursesName}</h1>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>

                                        <label htmlFor=''>(4.0)</label>
                                    </div>
                                    <div className='details'>
                                        {val.courTeacher.map((details) => (
                                            <>
                                                <div className='box'>
                                                    <div className='dimgs'>
                                                        <img src={details.dcover} alt='' />
                                                    </div>
                                                    <div className='para'>
                                                        <h4>{details.name}</h4>
                                                    </div>
                                                </div>
                                                <span>{details.totalTime}</span>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <Link to={`/Lessondetails/`}> {/* Pass the course ID as URL parameter */}
                            <button className='outline-btn'
                            // onClick={HandelItemdetails}
                            >Enter lesson</button></Link>
                        </div>

                    ))}
                </div>
                 {/* <div className="container1 gridtech1">
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
                                        <p className="advisor">Recommanded <span>{course.advisor}</span></p>
                                        <ul className="d-flex justify-content-between">
                                            <li><span className="flaticon-shower"></span>{}</li>
                                            <li className="price">{}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}

            </section>
        </div>
    )
}

export default Cours
