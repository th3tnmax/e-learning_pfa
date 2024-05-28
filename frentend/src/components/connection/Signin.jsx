import { useParams, useNavigate, Link } from "react-router-dom";
import Back from '../Back'
import './signin.css'
import Header from "../Header"
import Footer from "../Footer"
import axios from 'axios';
import React, { useState } from 'react';

const Signin = () => {
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [lastnameErrorMsg, setLastnameErrorMsg] = useState("");
  const [telErrorMsg, setTelErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [passwordTwoErrorMsg, setPasswordTwoErrorMsg] = useState("");

  const [valide, setValide] = useState(true);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateNaissance, setDateNaissance] = useState();

  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const navigate = useNavigate();

  // handle change input
  const handleNomChange = (event) => {
    const regex = /^[a-zA-Z]*$/;
    const value = event.target.value;
    if (regex.test(value)) {
      setName(value);
      setNameErrorMsg("");
      setValide(true);
    } else {
      setNameErrorMsg('Verify name');
      setValide(false);
    }
  };

  const handlePrenomChange = (event) => {
    const regex = /^[a-zA-Z]*$/;
    const value = event.target.value;
    if (regex.test(value)) {
      setLastname(value);
      setLastnameErrorMsg("");
      setValide(true);
    } else {
      setLastnameErrorMsg('Verify Lastname');
      setValide(false);
    }
  };

  const handleTelChange = (event) => {
    const regex = /^[0-9]*$/;
    const value = event.target.value;
    if (regex.test(value)) {
      setTel(value);
      setTelErrorMsg("");
      setValide(true);
    } else {
      setTelErrorMsg('Verify phone number');
      setValide(false);
    }
  };

  const handleEmailChange = (event) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = event.target.value;
    if (regex.test(value)) {
      setEmail(value);
      setEmailErrorMsg("");
      setValide(true);
    } else {
      setEmailErrorMsg('Verify Email');
      setValide(false);
    }
  };

  const handlePasswordTwoChange = (event) => {
    const value = event.target.value;
    if (value === password) {
      setPasswordTwo(value);
      setPasswordTwoErrorMsg("");
      setValide(true);
    } else {
      setPasswordTwoErrorMsg('Verify password');
      setValide(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valide === true) {
      let data = {
        name: name,
        lastname: lastname,
        birthDate: dateNaissance,
        // level: niveau,
        tel: tel,
        email: email,
        // url: image,
        password: password
      };

      axios.post("http://localhost:3000/users/register", data)
        .then((res) => {
          console.log("new User data :", res.data);
          navigate("/login");
        })
        .catch((err) => {
          console.error("Error creating user:", err);
        });
    }
  };

  return (
    <>
      <Header />
      <Back title='Sign Up' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='right row'>
            <form >
              <span style={{ color: 'red' }}>{nameErrorMsg}</span>
              <input type='text' required placeholder='Name' pattern="[a-zA-Z]+" title="Please enter alphabetic characters only" onChange={handleNomChange} onBlur={handleNomChange} />

              <span style={{ color: 'red' }}>{lastnameErrorMsg}</span>
              <input type='text' required placeholder='LastName' pattern="[a-zA-Z]+" title="Please enter alphabetic characters only" onChange={handlePrenomChange} onBlur={handlePrenomChange} />

              <span style={{ color: 'red' }}>{telErrorMsg}</span>
              <input placeholder='Telephone' required type='tel' maxLength={8} min={20000000} max={99999999} title="Please enter des chiffres only" pattern="[0-9]+" onChange={handleTelChange} onBlur={handleTelChange} />

              <input required type='date' onChange={(e) => setDateNaissance(e.target.value)} />

              <span style={{ color: 'red' }}>{emailErrorMsg}</span>
              <input type='email' required placeholder='Email' onChange={handleEmailChange} onBlur={handleEmailChange} />

              <span style={{ color: 'red' }}>{passwordErrorMsg}</span>
              <input type='password' required placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

              <span style={{ color: 'red' }}>{passwordTwoErrorMsg}</span>
              <input type='password' required placeholder='confirm password' onChange={handlePasswordTwoChange} onBlur={handlePasswordTwoChange} />

              <button type="submit" onClick={handleSubmit} className='allbtn'>Register</button>
            </form>
              <div className="container">
            <h3>If you already have an account! <span className="click"><Link to="/login">Login</Link></span></h3>
            <span>FACEBOOK TWITTER INSTAGRAM </span></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Signin;
