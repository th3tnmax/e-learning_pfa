import React from "react"
import Back from "../Back"
import "./contact.css"
import Header from "../Header"
import Footer from "../Footer"


const Contact = () => {
  // <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tunisia,sfax,sakiet%20ez+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>
  const map = '"https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tunisia,sfax,sakiet%20ez+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="600" height="80z0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
    <Header/>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            {/* <iframe src={map}></iframe> */}
            <div style={{width: "88%",marginLeft:"auto" }}><iframe style={{height:"830px" ,frameborder:"0" ,scrolling:"no" ,marginheight:"0" ,marginwidth:"0"}} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tunisia,sfax,sakiet%20ez+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  ></iframe></div>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Tunisia ,Sfax ,Sakiet ezzit sfax </p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 12345678</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn allbtn'>SEND MESSAGE</button>
            </form>
              <div className=" container">
            <h3></h3>
            <span>FACEBOOK   TWITTER   INSTAGRAM </span>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact
