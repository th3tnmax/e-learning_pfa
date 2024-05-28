
import "./profile.css"
import Header from "../Header"
import Footer from "../Footer"
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { profilecourses } from "../../dummydata"
import UserInfo from '../UserInfo';
import axios from 'axios';
import Cours from "./Cours";
import Addcour from "../Addcour";
import { IoSettingsSharp, IoNotificationsSharp } from "react-icons/io5";
import { RiMailAddLine, RiLogoutCircleLine } from "react-icons/ri";
import { MdArticle } from "react-icons/md";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { BiMessageDetail } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import Becomeinstr from "./Becomeinstr";


const Profile = () => {
    const [activeOption, setActiveOption] = useState('option1'); // Set default active_sidebar option
    const [infoPersoPressed, setInfoPersoPressed] = useState(false);
    const [becomeins, setBecomeins] = useState(false)
    const [addcourses, setAddcourses] = useState(false);
    const [mycour, setmycour] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const params = useParams();
    const [id, setId] = useState();

    function coursIsPressed() {
        setActiveOption('option1');
        setmycour(true);
        setInfoPersoPressed(false);
        setAddcourses(false)
        setBecomeins(false)
    }
    const infoPersoIsPressed = () => {
        setActiveOption('option5');
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
        setActiveOption('option6');
        setBecomeins(true)
        setInfoPersoPressed(false);
        setmycour(false)
        setAddcourses(false)
    };
    function AddcoursePressed() {
        setActiveOption('option4');
        setInfoPersoPressed(false);
        setmycour(false)
        setAddcourses(true)
        setBecomeins(false)
    };
    function handleClickCours(urlVideo) {

    };


    useEffect(() => {
        // Retrieve current user ID from sessionStorage
        const userdata = JSON.parse(sessionStorage.getItem("userData"));
        const currentId = userdata._id;


        setId(currentId);

        // Check if ID is valid
        if (!currentId) {
            console.log("No user ID found");
            navigate('/seconnecter', { replace: true });
            return;
        }

        // Check if the current ID matches the ID in the URL params
        if (params.id !== currentId) {
            console.log(`Mismatched IDs: URL ID - ${params.id}, Current ID - ${currentId}`);
            navigate(`/profile/${currentId}`, { replace: true });
            return;
        }

        // Fetch user data based on the current ID
        axios.get(`http://localhost:3000/users/getbyid/${currentId}`)
            .then((res) => {
                setUser(res.data);
                // console.log(user);
            })
            .catch(err => {
                console.error("Error fetching user data:", err);

            });

    }, [navigate]);


    const handleLogOut = () => {
        // Clear sessionStorage and navigate to login
        sessionStorage.removeItem("userData");
        setId(null);
        navigate('/login');
    };
    return (
        <>
            <Header />
            <section className='heroprofile'>
                <div className='containerprofile'>
                    <div className='rowprofile'>

                    </div>
                </div>
            </section>
            <div className='marginprofile'></div>




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

                    {/* <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
                        className="icn"
                        alt="" /> */}
                    <IoNotificationsSharp style={{ fontSize: "30px" }} />
                    <p style={{ color: "#1eb2a6", marginLeft: "3%" }}>welcome,{user.status}!  <br/>   {user.name}  {user.lastname} </p>
                    <div className="dp">
                        <img src={user.url}
                            defaultValue="../../assets/2089805.png"
                            className="dpicn"
                             />

                    </div>

                </div>
            </div>
            <div className="main-container">
                <div className="navcontainer">
                    <nav className="nav">
                        <div className="nav-upper-options">


                            <div className={`nav-option option1 ${activeOption === 'option1' ? 'active_sidebar' : ''}`}
                                onClick={coursIsPressed}>
                                {/* <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                                    className="nav-img"

                                    alt="articles" /> */}
                                <MdArticle style={{ fontSize: "35px" }} />
                                <h3> My Courses</h3>
                            </div>

                            <div className="nav-option option2">
                                {/* <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                                    className="nav-img"
                                    alt="report" /> */}
                                {/* <BiMessageAdd style={{fontSize:"35px"}}/> */}
                                <RiMailAddLine style={{ fontSize: "35px" }} />
                                <h3> Add Message</h3>
                            </div>

                            <div className="nav-option option3">
                                {/* <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                                    className="nav-img"
                                    alt="institution" /> */}
                                <BiMessageDetail style={{ fontSize: "35px" }} />
                                <h3> Messages send</h3>
                            </div>

{user.status !== "student" &&(
                            <div className={`nav-option option4 ${activeOption === 'option4' ? 'active_sidebar' : ''}`}
                                onClick={AddcoursePressed}>
                                {/* <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                                    className="nav-img"
                                    alt="blog" /> */}
                                <HiOutlineDocumentAdd style={{ fontSize: "35px" }} />
                                <h3> Add Course</h3>
                            </div>
                            ) }

                            <div className={`nav-option option5 ${activeOption === 'option5' ? 'active_sidebar' : ''}`}
                                onClick={infoPersoIsPressed}>
                                {/* <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                                    className="nav-img"

                                    alt="settings" /> */}
                                <IoSettingsSharp style={{ fontSize: "35px" }} />
                                <h3> Edit Profile</h3>
                            </div>
                            {user.status !== "teacher" &&(
                            <div  className={`nav-option option6 ${activeOption === 'option6' ? 'active_sidebar' : ''}`}
                                onClick={becomeInstructorPressed}>
                                {/* <img src=
                                    "../../../public/images/teacher-7.jpg"
                                    className="nav-img"

                                    alt="settings" /> */}
                                <GiTeacher style={{ fontSize: "35px" }} />
                                <h3>Become Instructor</h3>
                            </div>)}

                            <div className="nav-option logout"
                                onClick={handleLogOut}>
                                {/* <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                                    className="nav-img"
                                    alt="logout"
                                /> */}
                                <RiLogoutCircleLine style={{ fontSize: "35px" }} />
                                <h3>Logout</h3>
                            </div>

                        </div>
                    </nav>
                </div>
                <div className="report-container">


                    <div className="report-body">
                        <div className="report-topic-heading">


                            {infoPersoPressed ? (<UserInfo user={user} />)
                                : addcourses ? (
                                    <Addcour />
                                )
                                    : becomeins ? (
                                        <Becomeinstr user={user}/>
                                    )
                                        : (
                                            <Cours />
                                        )}
                        </div>


                    </div>

                </div>

            </div>



            <div className='beforefooter'></div>
            <Footer />
        </>
    )
}

export default Profile
