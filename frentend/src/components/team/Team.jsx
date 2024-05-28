import React from "react"
import Back from "../Back"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import Header from "../Header"
import Footer from "../Footer"
const Team = () => {
  return (
    <>
    <Header/>
      <Back title='Instructors' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <div className='beforefooter'></div>
      <Awrapper />
      <div className='beforefooter'></div>
      <Footer/>
    </>
  )
}

export default Team
