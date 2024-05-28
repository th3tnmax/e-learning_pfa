import React,{useState} from "react"
import "./price.css"
import { price } from "../../dummydata"
import { FaCircle } from "react-icons/fa";
import { PiX } from "react-icons/pi";
import Spinner from "../Spinner";

const Pricing = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const handelOnClose =(e)=>{
    if (e.target.id === 'modelprice') {
        onClose()
    }
};
const [loading, setLoading] = useState(false);
  return (
    <>
      <div >
      <section className='price padding fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col align-middle justify-center' 
      id="modelprice"
      onClick={handelOnClose}
      
      >{loading ? <Spinner /> : ""}
        <div className='border-2 border-sky-400 rounded-xl w-[1132px] p-4 mx-auto bg-white grid'>
          {price.map((val) => (
            <div className='items shadowprice'>
              <h4>{val.name}</h4>
              <h1>
                <span style={{fontSize:"50px" ,color:"green"}}>$</span>
                {val.price}
              </h1>
              {/* <p className="hello">{}</p> */}
              <ul className="my-8 space-y-4 px-5">
              <li className="flex gap-3 items-center"><FaCircle size={20} color="green"/>Videos of the lessons</li>
              <li className="flex gap-3 items-center"><FaCircle size={20} color="green"/>Contact the teacher</li>
              <li className="flex gap-3 items-center"><FaCircle size={20} color="green"/>Access to all Courses</li>
              {/* <li className="flex gap-3 items-center"><FaCircle size={20} color="green"/>Videos of the lessons</li> */}
              <li className="flex gap-3 items-center"><FaCircle size={20} color={val.addition ? "green" : "red"}/>Additional practical task</li>

              </ul>
              <button className='outline-btn gettart p-2'>SUBSCRIBE NOW</button>
            </div>
          ))}
         
         
         
        </div>
      </section></div>

    </>
  )
}

export default Pricing
