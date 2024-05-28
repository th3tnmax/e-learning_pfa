import React, { useState, useEffect } from 'react';
import "./App.css";
import { Route, Routes, BrowserRouter, Outlet ,useNavigate} from "react-router-dom";


import Homepage from "./pages/Homepage";


import Profile from "./components/profile/Profile";
import Adduser from "./pages/Adduser";
import ShowUsers from "./pages/ShowUsers";
import Edituser from "./pages/Edituser";
import Deleteuser from "./pages/Deleteuser";
import Admin from "./components/Admin";

import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Login from "./components/connection/Login";
import Signin from "./components/connection/Signin";
import Team from "./components/team/Team";
import Cours from './components/profile/Cours';
import Teacherdetails from './components/team/Teacherdetails';
import Lessondetails from './components/allcourses/Lessondetails';
import Addcour from './components/Addcour';
// import AdminHome from './components/admin/Adminhome';
import Contact from './components/contact/Contact';
import Modal from './components/modal/modal';
import Portal from './components/Portal';
import Pricing from './components/pricing/Pricing';
import PriceModal from './components/pricing/PriceModal';
import Chat_eng from './components/profile/Chat_eng';
// import Adminpage from './components/admin/Adminpage';




const App = () => {

  
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route  path='/login' element={<Login />} />
          <Route  path='/signup' element={<Signin />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/courses' element={<CourseHome />} />
          <Route  path='/team' element={<Team />} />
          <Route  path='/Contact' element={<Contact />} />
          <Route path="/Lessondetails" element={<Lessondetails />} />
          <Route path="Profile/:id" element={<Profile />} />
          <Route path="/Modal" element={<Modal />} />
          <Route path="/Portal" element={<Chat_eng />} />
          <Route path="/Teacherdetails" element={<Teacherdetails />} />
          
          <Route path="Admin" element={<Admin />} /> 
          <Route path="/Admin/create" element={<Adduser />} />
          <Route path="/Admin/details/:id" element={<ShowUsers />} />
          <Route path="Admin/edit/:id" element={<Edituser />} />
          <Route path="Admin/delete/:id" element={<Deleteuser />} />

          
          {/* <Route path="Profile" element={<Profile />} /> */}
        </Routes>
                
      </BrowserRouter>
    </div>
  );
};

export default App;
