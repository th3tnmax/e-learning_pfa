import './Header.css';
import { Link ,useNavigate  } from 'react-router-dom'
import React, { useState, useEffect } from 'react';



const Header = () => {
  const [id, setId] = useState();
  const navigate = useNavigate();
  

  useEffect(() => {
    // Retrieve current user ID from sessionStorage
  const userdata = JSON.parse(sessionStorage.getItem("userData"));

  if (userdata!= null) {
    const currentId =userdata._id;
    setId(currentId);
  } else{
    setId(null);
  }
    // Check if ID is valid
  // if (!currentId) {
  //   console.log("No user ID found");
  //   return; // Exit early
  // }
  },[]);
  const [click, setClick] = useState(false)
  return (
//      <header className="header">
//     <nav className="navigateur">
    
//     <img className='site-logo' src="assets/pictures/logo.png" alt="Logo" />
    


//         <ul>
//             <li className='list-item'><Link to="/" >Home </Link></li>
//             <li className='list-item'><Link to="contact">Contact</Link></li>
            

//             {/* <li className='list-item'><Link to="seconnecter" >Se Connecter</Link></li> */}

//             <li>
//           {/* Conditional rendering for Login/Profile button */}
//           {id ? (
//             <li className='list-item'><Link to={`/Profile/${id}`} >Profile</Link></li>
//           ) : (
//             <>
//             <li className='list-item'><Link to="seconnecter" >Se Connecter</Link></li>
//             <li className='list-item'><Link to="inscrire" >S'inscrire</Link></li>
//             </>
//           )}
//         </li>
            


//             <li id='join'><button type="button" id='btn' style={{color:"white"}}><Link to="inscrire">Commencer</Link></button></li>

//         </ul>
        
//     </nav>
//  </header>
<>

    <header className='header'>

    
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
         <img className='expert' src="../../public/assets/pictures/expert-high-resolution-logo-transparent.png" alt="" />
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Instructor</Link>
            </li>
            {/* <li>
              <Link to='/pricing'>Pricing</Link>
            </li> */}
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            
            <div className="connection">
             {/* Conditional rendering for Login/Profile button */}
           {id ? (
             <li className='list-item'><Link to={`/Profile/${id}`} >Profile</Link></li>
           ) : (
             <>
             <li className=''><Link to="/login" >LogIn</Link></li>
             <li className=''><Link to="/signup" >Sign Up</Link></li>
             </>
           )}
            </div>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          
          
        </nav>
      </header>
    </>
  )
}

export default Header

