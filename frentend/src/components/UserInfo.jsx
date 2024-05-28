import "./UserInfo.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import masking from "../assets/Masking.png";
import { useNavigate, useParams, Link } from "react-router-dom";
import Uploadimage from "./uploadimage/Uploadimage";




const UserInfo = ({ user }) => {

  const uploadPresetName = "lv9quzkj";
  const cloudName = "dejkmgo3r";
  const [image, setImage] = useState("");
  const [id, setId] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [valide, setValide] = useState(true);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateNaissance, setDateNaissance] = useState();
  // const [niveau, setNiveau] = useState(0);
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setLastname(user.lastname || "");
      setDateNaissance(user.birthDate ? user.birthDate.split('T')[0] : "");
      setTel(user.tel || "");
      setEmail(user.email || "");
      setImage(user.url || "");
    }
  }, [user]);

  

  async function handleFile(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPresetName);
    try {
      const cloudres = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        {
          params: {
            folder: "projet",
          },
        }
      );
      setImage(cloudres.data.secure_url);
      console.log(image);
    } catch (err) {
      console.error(err);
    }
  }

  const handleNameChange = (event) => {
    const regex = /^[a-zA-Z]*$/; // regular expression to match alphabetic characters only
    const value = event.target.value;
    if (regex.test(value)) {
      setName(value);
      const span = document.getElementById("error");
      span.setAttribute("hidden", "");
      setValide(true);
    } else {
      setErrorMsg("vérifier votre name");
      const span = document.getElementById("error");
      span.removeAttribute("hidden");
      setValide(false);
    }
  };

  const handleLastnameChange = (event) => {
    const regex = /^[a-zA-Z]*$/; // regular expression to match alphabetic characters only
    const value = event.target.value;
    if (regex.test(value)) {
      setLastname(value);
      const span = document.getElementById("error");
      span.setAttribute("hidden", "");
      setValide(true);
    } else {
      setErrorMsg("vérifier votre Prenom");
      const span = document.getElementById("error");
      span.removeAttribute("hidden");
      setValide(false);
    }
  };

  const handleTelChange = (event) => {
    const regex = /^[0-9]*$/; // regular expression to match alphabetic characters only
    const value = event.target.value;
    if (regex.test(value)) {
      setTel(value);
      const span = document.getElementById("error");
      span.setAttribute("hidden", "");
      setValide(true);
    } else {
      setErrorMsg("vérifier votre numéro de téléphone");
      const span = document.getElementById("error");
      span.removeAttribute("hidden");
      setValide(false);
    }
  };

  const handleEmailChange = (event) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression to match alphabetic characters only
    const value = event.target.value;
    if (regex.test(value)) {
      setEmail(value);
      const span = document.getElementById("error");
      span.setAttribute("hidden", "");
      setValide(true);
    } else {
      setErrorMsg("vérifier votre Email");
      const span = document.getElementById("error");
      span.removeAttribute("hidden");
      setValide(false);
    }
  };
  const handleSubmit = () => {
    
    if (valide === true) {
      console.log(image);
      let data = {
        name: name,
        lastname: lastname,
        birthDate: dateNaissance,
        // level: niveau,
        tel: tel,
        email: email,
        url: image,
        //password:password
      };

      const userdata = JSON.parse(sessionStorage.getItem("userData"));
      const currentId = userdata._id;
      setId(currentId);
      axios.put(`http://localhost:3000/users/updateUser/${currentId}`, data)
        .then((res) => {
          console.log("User data updated:", res.data);
          // setRefresh(true);
          navigate(`/Profile/${currentId}`, { replace: true });
        })
        .catch((err) => {
          console.error("Error updating user data:", err);
        });
    }
  };

  return (
    <>
      


      <section className='contacts padding'>
        <div className="p-4   border  ">
              <h1>Persenal Information</h1>
              </div>
        <div className='container  flexSB'>
          
              
          <div className='rightuser row'>
            

            <div className='beforefooter'></div>



            <form action=''>

              <Uploadimage image={image} handleFile={handleFile}/>



              
              <div className='beforefooter'></div>
              <div className="flex flex-col items-start">
              <label>Name<span>*</span></label>
              <input type='text' placeholder={user ? user.name : ""} value={name} onChange={handleNameChange} />
              <label>LastName<span>*</span></label>
              <input type='text' id="lastname" placeholder={user ? user.lastname : ""} value={lastname} onChange={handleLastnameChange} />

              {/* tell */}
              <label>Phone<span>*</span></label>
              <input type='text' placeholder={user ? user.tel : ""} value={tel} onChange={handleTelChange} />
              <label>Birthdate<span>*</span></label>
              <input type='date'  placeholder="JJ/MM/AAAA" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} />
              <label>Email<span>*</span></label>
              <input type='email' placeholder={user ? user.email : ""} value={email} onChange={handleEmailChange} />


              <label>change password<span>*</span></label>
              <input className='profile-input' type='password' onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <button type="submit" className='allbtn' onClick={handleSubmit}>Update</button>
            </form>


          </div>
        </div>
      </section>
    </>
  );
};

export default UserInfo;
