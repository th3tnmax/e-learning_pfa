import React from "react"
import Back from "../Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import Header from "../Header"
import Footer from "../Footer"

const CourseHome = () => {
  return (
    <>
    <Header/>
      <Back title='Explore Courses' />
      <CoursesCard />
      <h3 className="mb-8" style={{fontSize:"35px",fontWeight:"600"}}>Discover More Courses</h3>
      <OnlineCourses />
      <div className='beforefooter'></div>
      <Footer/>
    </>
  )
}

export default CourseHome
