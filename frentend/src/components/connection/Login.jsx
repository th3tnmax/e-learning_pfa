import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Back from "../Back"
import "./login.css"
import Header from "../Header"
import Footer from "../Footer"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [valide, setValide] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });

      if (response.status !== 200) {
        throw new Error("server not responding");
      }

      const userData = response.data;

      if (userData.admin) {
        console.log(userData);
        navigate("/Admin");
      } else {
        // console.log(userData._id);
        navigate(`/Profile/${userData._id}`);
      }

      // Store user data in session storage
      sessionStorage.setItem("userData", JSON.stringify(userData));
      const userId = userData._id;
      console.log(userId);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("verify Email and Password");
      } else {
        alert("connection eroor");
      }
      console.error("Login error:", error);
    }
  };



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailBlur = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression to match email format

    if (regex.test(email)) {
      setErrorMsg('');
      setValide(true);
    } else {
      setErrorMsg('verify Email and Password');
      setValide(false);
    }
  };

  return (
    <>
      <Header />
      <Back title='Login' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          {/* <div className='left row'>
           
          </div> */}
          <div className='right row'>


            <form action=''>
              {!valide && <span id="error" style={{ color: "red" }}>{errorMsg}</span>}
              <input type='email' value={email} required placeholder="Email" onBlur={handleEmailBlur} onChange={handleEmailChange} />

              <input type='password' placeholder='Password' value={password}
                name="password" onChange={(e) => setPassword(e.target.value)} />
              

              <button className='allbtn' type="submit" onClick={handleSubmit}>Login</button>
            </form>
            <div className="container  beforelogin">
            <h3>If you don't have account yet !<span className="click">
          <Link to="/signup">Create account</Link></span> </h3>
            <span>FACEBOOK TWITTER INSTAGRAM </span>
            </div>
          </div>
        </div>
      </section>
      <div className='beforefooter'></div>
      <Footer />
    </>
  )
}

export default Login
