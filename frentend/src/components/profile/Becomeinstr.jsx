// import "./UserInfo.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
// import masking from "../assets/Masking.png";
import { useNavigate, useParams, Link } from "react-router-dom";
import Uploadimage from "../uploadimage/Uploadimage";





const Becomeinstr = ({ user }) => {

    const uploadPresetName = "lv9quzkj";
    const cloudName = "dejkmgo3r";
    const [image, setImage] = useState("");
    const [id, setId] = useState();
    const [errorMsg, setErrorMsg] = useState("");
    const [valide, setValide] = useState(true);
    const [experience, setexperience] = useState("")
    const [speciality, setspeciality] = useState("")
    const [certif, setcertif] = useState("")
    useEffect(() => {
        if (user) {
            setexperience(user.experience || "");
            setspeciality(user.speciality || "");
            // setcertif(user.url || "");
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




    const handleSubmit = () => {

        if (valide === true) {
            console.log(image);
            let data = {
                experience: experience,
                speciality: speciality
                // url: image,
                //password:password
            };

            const userdata = JSON.parse(sessionStorage.getItem("userData"));
            const currentId = userdata._id;
            setId(currentId);
            axios.put(`http://localhost:3000/users/updateUser/${currentId}`, data)
                .then((res) => {
                    console.log("User data updated:", res.data);
                    //   setRefresh(true);
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
                    <h1>become Instructor</h1>
                </div>
                <div className='container  flexSB'>


                    <div className='rightuser row'>


                        <div className='beforefooter'></div>



                        <form action=''>

                            




                            <div className='beforefooter'></div>
                            <div className="flex flex-col items-start">

                            <label>Certification<span>*</span></label>
                            <div>

                                <input type='file' accept=".PDF" />
                            </div>
                            <div className='beforefooter'></div>
                                <label>speciality<span>*</span></label>
                                <input type='text' placeholder={user ? user.speciality : ""} value={speciality} onChange={handleLastnameChange} />
                                <div className='beforefooter'></div>
                                <label>experience/years<span>*</span></label>
                                <input type='number' id="experience" placeholder={user ? user.experience : ""} value={experience} onChange={handleLastnameChange} />

                            </div>
                            <button type="submit" className='allbtn'
                            //    onClick={handleSubmit} 
                            >Become Instructor</button>
                        </form>


                    </div>
                </div>
            </section>
        </>
    );
};

export default Becomeinstr;
