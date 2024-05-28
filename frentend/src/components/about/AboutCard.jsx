import React from "react"

import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
            
        <div className=' flexSB'>
          
          <div className='left rowhome'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right rowhome'>
            {/* <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' /> */}
            
            <div className='items'>
              
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB' key={val.id}>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="mb-8">
              <h1 style={{fontSize:"35px" ,fontWeight:"700"}}>LEARN ANYTHING</h1>
              <h3 style={{fontSize:"25px" ,fontWeight:"500"}}>Benefits About Online Learning Expertise</h3>
            </div>
      <Awrapper />
    </>
  )
}

export default AboutCard
