
// import "./admin.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { profilecourses } from "../dummydata"
import UserInfo from '../components/UserInfo';
import axios from 'axios';
import Admin from "../components/Admin";
// import Cours from "./Cours";
// import Addcour from "../Addcour";



const Adminhome = () => {

    const [infoPersoPressed, setInfoPersoPressed] = useState(false);
    const [becomeins, setBecomeins] = useState(false)
    const [addcourses, setAddcourses] = useState(false);
    const [mycour, setmycour] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const params = useParams();
    const [id, setId] = useState();

    function coursIsPressed() {
        setmycour(true);
        setInfoPersoPressed(false);
        setAddcourses(false)
        setBecomeins(false)
    }
    const infoPersoIsPressed = () => {
        setInfoPersoPressed(true);
        setmycour(false)
        setAddcourses(false)
        setBecomeins(false)
    };

    function passwordIsPressed() {

    };
    function newMessageIsPressed() {

    };
    function messageRecuIsPressed() {

    };
    function becomeInstructorPressed() {
        setBecomeins(true)
        setInfoPersoPressed(false);
        setmycour(false)
        setAddcourses(false)
    };
    function AddcoursePressed() {
        setInfoPersoPressed(false);
        setmycour(false)
        setAddcourses(true)
        setBecomeins(false)
    };
    function handleClickCours(urlVideo) {

    };


    // useEffect(() => {
    //     // Retrieve current user ID from sessionStorage
    //     const userdata = JSON.parse(sessionStorage.getItem("userData"));
    //     const currentId =userdata._id;
      
      
    //       setId(currentId);
      
    //     // Check if ID is valid
    //     if (!currentId) {
    //       console.log("No user ID found");
    //       navigate('/seconnecter', { replace: true });
    //       return; 
    //     }
      
    //     // Check if the current ID matches the ID in the URL params
    //     if (params.id !== currentId) {
    //       console.log(`Mismatched IDs: URL ID - ${params.id}, Current ID - ${currentId}`);
    //       navigate(`/profile/${currentId}`, { replace: true });
    //       return; 
    //     }
      
    //     // Fetch user data based on the current ID
    //     axios.get(`http://localhost:3000/users/getbyid/${currentId}`)
    //       .then((res) => {
    //         setUser(res.data);
    //       })
    //       .catch(err => {
    //         console.error("Error fetching user data:", err);
            
    //       });
      
    //   }, [navigate]);


    const handleLogOut = () => {
        // Clear sessionStorage and navigate to login
        sessionStorage.removeItem("userData");
        setId(null);
        navigate('/');
    };
    return (
        <>
            
            




            <div className="header2">
                <div className="searchbar">
                    <input type="text"
                        placeholder="Search with name" />
                    <div className="searchbtn">
                        <img src=
                            "../../../public/assets/pictures/2089805.png"
                            className="icn srchicn"
                            alt="search-icon" />
                    </div>
                </div>

                <div className="message">

                    <div className="circle"></div>

                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
                        className="icn"
                        alt="" />
                    <p style={{ color: "#1eb2a6", marginLeft: "3%" }}>welcome! brouda {user.name} {user.lastname} </p>
                    <div className="dp">
                        <img src={user.url}
                            defaultValue=""
                            className="dpicn"
                            alt="dp" />

                    </div>

                </div>
            </div>
            <div className="main-container">
                <div className="navcontainer">
                    <h2>Dashborad Admin</h2>
                    <nav className="navad">
                        
                        <div className="nav-upper-options">


                            <div className="nav-option option1"
                                onClick={coursIsPressed}>
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                                    className="nav-img"

                                    alt="articles" />
                                <h3> Dashboard</h3>
                            </div>

                            <div className="nav-option option2">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                                    className="nav-img"
                                    alt="report" />
                                <h3> Users TAble</h3>
                            </div>

                            

                            <div className="nav-option option4"
                            onClick={AddcoursePressed}>
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                                    className="nav-img"
                                    alt="blog" />
                                <h3> Message</h3>
                            </div>

                            <div className="nav-option option5"
                                onClick={infoPersoIsPressed}>
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                                    className="nav-img"

                                    alt="settings" />
                                <h3> Edit Profile</h3>
                            </div>
                            

                            <div className="nav-option logout"
                                onClick={handleLogOut}>
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                                    className="nav-img"
                                    alt="logout"
                                />
                                <h3>Logout</h3>
                            </div>

                        </div>
                    </nav>
                </div>
                <div className="report-container">


                    <div className="report-body">
                        <div className="report-topic-heading">

                            <h6>users table</h6>
                            
                        </div><Admin/>


                    </div>

                </div>

            </div>



            
        </>
    )

    };
export default Adminhome

