// import React from 'react';
import './Footer.css';

import React from 'react'

const Footer = () => {
  return (
    <>
    {/* <footer>
     <div>
         <img src='./assets/pictures/logo.png'></img>
         <ul>
             <li className='footer-headers'>Nos Services</li>
             <li>Cours</li>
             <li>Cours gratuits</li>

         </ul>
        <ul>
             <li className='footer-headers' >Contact</li>
             <li>Adress : Sekiet Ezzit, Rue Tunis , Sfax</li>
             <li>Email : achraf5hadrich@gmail.com</li>
             <li>Tel : +21621553995</li>
         </ul>
         <ul>
             <li  className='footer-headers'>Liens utiles</li>
             <li>ton compte</li>
             <li>à propos </li>
             <li>aide</li>
         </ul>
        
     </div>
     <hr ></hr>
     <div className='copyright' >
         <p>© Copyright L’expert centre de formation 2024</p>
         <div>
            
             <img className='photo-fb' src='./assets/pictures/icon-fb.png'></img>
             <img className='photo-insta' src='./assets/pictures/icon-insta.png'></img>
            

         </div>
         <p>
             Centre de formation l’expert
         </p>

     </div>
    </footer> */}
     <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
          
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by GorkhCoder
        </p>
      </div>
     </>
  )
}

export default Footer


