import React from "react"
import "./about.css"
import Back from "../Back"
import AboutCard from "./AboutCard"
import Header from "../Header"
import Footer from "../Footer"



const About = () => {
  return (
    <>
    <Header/>
      <Back title='About Us' />
      <AboutCard />
      <div className='beforefooter'></div>
      <Footer/>
    </>
  )
}

export default About
