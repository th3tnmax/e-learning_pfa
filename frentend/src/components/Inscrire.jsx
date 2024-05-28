// import React from 'react'

// const Inscrire = () => {
//   return (
//     <div>Inscrire</div>
//   )
// }

// export default Inscrire

import React, { useState } from 'react';
import './Inscrire.css';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

export default function Inscrire() {
  const [valide, setValide] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNaissance, setDateNaissance] = useState(new Date());
  const [niveau, setNiveau] = useState(0);
  const [tel, setTel] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
const navigate=useNavigate()

  const handleNomChange = (event) => {
    const regex = /^[a-zA-Z]*$/; // regular expression to match alphabetic characters only
    const value = event.target.value;
    if (regex.test(value)) {
      setNom(value);
      const span = document.getElementById('error');
      span.setAttribute('hidden', '');
      setValide(true);
    }
    else {
      setErrorMsg('vérifier votre nom');
      const span = document.getElementById('error');
      span.removeAttribute('hidden');
      setValide(false);
    }
  }

  const handlePrenomChange = (event) => {
    const regex = /^[a-zA-Z]*$/; // regular expression to match alphabetic characters only
    const value = event.target.value;
    if (regex.test(value)) {
      setPrenom(value);
      const span = document.getElementById('error');
      span.setAttribute('hidden', '');
      setValide(true);
    }
    else {
      setErrorMsg('vérifier votre Prenom');
      const span = document.getElementById('error');
      span.removeAttribute('hidden');
      setValide(false);
    }
  }
  const handleTelChange = (event) => {
    const regex = /^[0-9]*$/; // regular expression to match alphabetic characters only
    const value = event.target.value;
    if (regex.test(value)) {
      setTel(value);
      const span = document.getElementById('error');
      span.setAttribute('hidden', '');
      setValide(true);
    }
    else {
      setErrorMsg('vérifier votre numéro de téléphone');
      const span = document.getElementById('error');
      span.removeAttribute('hidden');
      setValide(false);
    }
  }
  const handleEmailChange = (event) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression to match alphabetic characters only
    const value = event.target.value;
    if (regex.test(value)) {
      setEmail(value);
      const span = document.getElementById('error');
      span.setAttribute('hidden', '');
      setValide(true);
    }
    else {
      setErrorMsg('vérifier votre Email');
      const span = document.getElementById('error');
      span.removeAttribute('hidden');
      setValide(false);
    }
  }
  const handlePasswordTwoChange = (event) => {
    const value = event.target.value;
    if (value===password) {
      setPasswordTwo(value);
      const span = document.getElementById('error');
      span.setAttribute('hidden', '');
      setValide(true);
    }
    else {
      setErrorMsg('vérifier votre mot de passe');
      const span = document.getElementById('error');
      span.removeAttribute('hidden');
      setValide(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (valide == true) {


      let data = {
        firstName: nom,
        lastName: prenom,
        birthDate: dateNaissance,
        level: niveau,
        tel: tel,
        email: email,
        password: password,
      }
      axios.post('http://localhost:8000/v1/clients', data)
        .then(response => {
          console.log(response.data);
          navigate("/seconnecter")
        })
        .catch(error => {
          console.error(error);
        });
    }
  }




  return (
    <div className='inscrit-container'>
      <div className='inscrit-first'>
        <img className='logo-connect' src='./assets/pictures/logo.png' alt='logo'></img>
        <h2>S’inscrire</h2>
        <p className='text-inscrit'>Le site web ultime tout-en-un pour vous aider à gérer tout ce dont vous avez besoin.</p>
        <form className='center' onSubmit={handleSubmit}>

          <input className='center' type='text' placeholder='Nom' pattern="[a-zA-Z]+" title="Please enter alphabetic characters only" required onChange={handleNomChange}></input>
          <input className='center' type='text' placeholder='Prenom' pattern="[a-zA-Z]+" title="Please enter alphabetic characters only" required onChange={handlePrenomChange}></input>
          <input className='center' type='date' onChange={(e) => setDateNaissance(e.target.value)} ></input><br></br>
          <label className='center text-inscrit'>Niveau : </label><br></br>
          <input className='center' required type='number' min="2" max="4" onChange={(e) => setNiveau(e.target.value)}></input>
          <input className='center' required type='tel' maxLength={8} min={20000000} max={99999999} placeholder='Numéro du télephone' title="Please enter des chiffres only" pattern="[0-9]+" onChange={handleTelChange}></input>
          <input className='center' required type='email' placeholder='Adresse Email' onChange={handleEmailChange}></input>
          <input className='center' required type='password' placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)}></input>
          <input className='center' type='password' placeholder='Confirmer mot de passe' onChange={handlePasswordTwoChange}></input><br></br>
          <span id='error'style={{color:'red'}} hidden>{errorMsg}</span><br></br>

          <button className='center' type='submit' >S’inscrire</button>
        </form>

        <p className='center'>Vous Avez déja un compte?</p>
        <p className='center inscrire-text'><Link to="/seconnecter"> SE CONNECTER</Link> </p>

        <div className='center inscrire-google'>
          <img src='./assets/pictures/image22.png'></img>
          <p>S’INSCRIRE AVEC GOOGLE</p>
        </div>

      </div>
      <div className='inscrit-second'>
        <div className='endroit'>
          <h1>Votre endroit préféré
            pour apprendre !</h1>
          <p>Bienvenue sur notre plateforme d'éducation !
            Nous sommes ravis de vous accompagner dans votre
            parcours d'apprentissage.</p>
        </div>


      </div>
    </div>
  )
}
