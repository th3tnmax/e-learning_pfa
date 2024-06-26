import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Usertable from "./modal/usertable";
import Usercard from "./modal/usercard";

const Admin = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/users/getAllUsers")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (

    <> 



<section className=" adminmain-section">

  
  
  
</section>

    
    
    
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        {/* <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button> */}
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Users List</h1>
        <Link to="create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? <Spinner /> : <Usertable user={user} />}
    </div>
    </>
   
  );
};

export default Admin;
