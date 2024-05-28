import React, { useState } from 'react'
import { coursesCard, courseslist } from "../../dummydata"
import Header from '../Header'
import Footer from '../Footer'
import "./lessondetails.css"
import { GoStarFill } from "react-icons/go";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Pricing from '../pricing/Pricing'



const Lessondetails = () => {
    const { courseId } = useParams();
    const [showModal, setShowModal] = useState(false);
  const handelOnClose =(e)=>{
    if (e.target.id === 'modelcontainer') {
        onClose()
    }
    
};
    useEffect(() => {
        console.log(courseId);


    }, [])

    return (
        <div>


            {/* Page info */}
            <Header />
            <h1 className="mb-0 bread">Lesson Details </h1>
            <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('../../../public/images/work-6.jpg')" }}>
                <div className="overlay"></div>

                <div className="container">

                    <div className="row no-gutters slider-text align-items-end justify-content-center">
                        <div className="col-md-9 ftco-animate pb-5 text-center">

                        </div>
                    </div>
                </div>
            </section>

            {/* <div className='marginhero'></div> */}

            <section className=''>
                <div className='container flexSB'>
                    <div className='left row'>
                        <div className="col-lg-8 mb-4">
                            <div className="border rounded-2 px-3 py-2 bg-white">

                                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                    <li className="nav-item d-flex" role="presentation">
                                        <a className="nav-link d-flex align-items-center justify-content-center w-100 active p-1 m-2" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">What you'll learn</a>
                                    </li>

                                </ul>

                                <div className="tab-content" id="ex1-content">
                                    <div className="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">

                                        <div className='container flexSB'>
                                            <div className='left row'>

                                                <ul className='col-lg-8 m-5'>

                                                    <li>       <i className="fas fa-check"></i>     Build multiple high-quality demo apps, including a fullstack app built with NextJS
                                                    </li>
                                                    <li>      <i className="fas fa-check"></i>                Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses
                                                    </li>
                                                    <li>       <i className="fas fa-check"></i>            Build fullstack React apps with NextJS 14+
                                                    </li>
                                                    <li>        <i className="fas fa-check"></i>        Follow along locally or in a cloud development environment
                                                    </li>
                                                    <li>        <i className="fas fa-check"></i>        Learn all about React Hooks and React Components
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className='right row'>
                                                <ul className='flex-nowrap'>
                                                    <li>     <i className="fas fa-check"></i>             Manage complex state efficiently with React's Context API & React Redux
                                                    </li>
                                                    <li>      <i className="fas fa-check"></i>         Build standalone React apps & applications connected to a backend via HTTP
                                                    </li>
                                                    <li>    <i className="fas fa-check"></i>    Learn about routing & route-related data fetching with React Router
                                                    </li>
                                                    <li>     <i className="fas fa-check"></i>     Implement user authentication in React apps
                                                    </li>
                                                    <li>     <i className="fas fa-check"></i>     Get started with React Unit Testing
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                        <p>
                                            With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='right row ms-12 '>
                        <div className="container  ">
                            <div className="  ">
                                <div className="mt-12">
                                    <div className=" mb-3 d-flex justify-content-center float-end mt-7">
                                        <div data-fslightbox="mygalley" target="_blank" data-type="image" href="url('../../../public/images/image_2.jpg">
                                            <img style={{ maxWidth: '70%', maxHeight: '50vh', margin: 'auto', minWidth: '45vh', minHeight: '30vh' }} src="url('../../../public/images/image_2.jpg" alt="Product" />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center ">


                                    </div>
                                </div>
                                <main className="">
                                    <div className="">
                                        <h4 className="title text-dark" style={{ fontSize: "20px", fontWeight: "600" }}>
                                            Learn Frontend Programming Language
                                        </h4>
                                        <h3>advisor</h3>
                                        <div className="d-flex flex-row my-3">
                                            <div className="text-warning mb-1 me-2">
                                                <i className="fa fa-star"></i>

                                                <span className="ms-1">
                                                    4.5
                                                </span>
                                            </div>
                                            <span className="text-muted">
                                                <i className="fas fa-solid fa-person "></i>4 Already used</span>
                                            <span className="text-success ms-2"></span>
                                        </div>
                                        <div className="mb-3">
                                            <span className="h5"></span>
                                            <span className="text-muted"></span>
                                        </div>
                                        <p>
                                            React - The Complete Guide 2024 (incl. React Router & Redux)
                                            Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!

                                        </p>
                                        <span className="ms-1">
                                            Last updated 4/2024
                                            English
                                            English [CC]
                                        </span>



                                        <div className="btn  bordersub bordersub py-2 my-1"
                                            onClick={() => setShowModal(true)}
                                        > Subsribe now </div>
                                        <div className="btn  bordersave  py-2  px-3 my-1"> <i className="me-1 fa fa-heart fa-lg"></i> Save </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                        <div className='items'>

                        </div>
                    </div>
                </div>
            </section>

            <div className="my-4  ">
        {showModal && createPortal(
        <Pricing onClose={() => setShowModal(false)} />,
        document.body
      )}
        </div>
           




            <section className="bg-light border-top py-4">
                <h2 className="hedi">Realated Courses</h2>
                <div className="container">
                    <div className="container gridtech">
                        {courseslist.map((course) => (
                            <div key={course.id} className="col-md-4 ftco-animate">
                                <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
                                    <div className="project-wrap">

                                        <div className="img" style={{ backgroundImage: `url(${course.cover})` }}>
                                            {course.price ? <GoStarFill style={{ color: "rgb(201, 201, 49)", width: "950px", height: "50px" }} /> : null}
                                            <span className="price">Software</span>
                                        </div>
                                        <div className="text p-4">
                                            <h3>{course.name}</h3>
                                            <p className="advisor">Advisor <span>{course.advisor}</span></p>
                                            <ul className="d-flex justify-content-between">
                                                <li><span className="flaticon-shower"></span>{ }</li>
                                                <li className="price">{ }</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className='beforefooter'></div>
            <Footer />

        </div>
    )
}

export default Lessondetails
