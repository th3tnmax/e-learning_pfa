import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Adduser = ({ onClose }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [showModal, setShowModal] = useState(false);
  const handelOnClose =(e)=>{
    if (e.target.id === 'modelcontainer') {
        onClose()
    }
    
};

  const handleSaveBook = () => {
    const data = {
      name,
      lastname,
      email,
    };
    setLoading(true);
    axios
      .post("http://localhost:3000/users/register", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("user Created successfully", { variant: "success" });
        navigate("/Admin");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div className="p-4   fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
    id="modelcontainer"
    onClick={handelOnClose}>
     
      {loading ? <Spinner /> : ""}


      {/* <!-- This is an example component --> */}
      {/* <div className="max-w-2xl mx-auto">
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleModal}
      >
        Toggle login modal
      </button>

      {isOpen && (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"
        >
          <div className="relative w-full max-w-md px-4 h-full md:h-auto">
            <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
              <div className="flex justify-end p-2">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <form
                className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
                action="#"
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="text-sm ml-3">
                      <label
                        htmlFor="remember"
                        className="font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{' '}
                  <a
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

     
    </div> */}
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Create User
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
              
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                    <div className="my-4">
                      <label className="text-xl mr-4 text-gray-500">name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                      />
                    </div>
                    <div className="my-4">
                      <label className="text-xl mr-4 text-gray-500">lastname</label>
                      <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2  w-full "
                      />
                    </div>
                    <div className="my-4">
                      <label className="text-xl mr-4 text-gray-500">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2  w-full "
                      />
                    </div>
                    <div className="my-4">
                      <label className="text-xl mr-4 text-gray-500">Phone</label>
                      <input
                        type="number"
                        value={tel}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2  w-full "
                      />
                    </div>
                    <div className="my-4">
                      <label className="text-xl mr-4 text-gray-500">Birthdate</label>
                      <input
                        type="date"
                        value={birthDate}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2  w-full "
                      />
                    </div>


                    <div>

                      <div className="flex flex-wrap">
                        <div className="flex items-center me-4">
                          <input id="red-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="red-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Admin</label>
                        </div>
                        <div className="flex items-center me-4">
                          <input id="green-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="green-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student</label>
                        </div>
                        <div className="flex items-center me-4">
                          <input checked id="purple-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="purple-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teacher</label>
                        </div>



                      </div>

                    </div>


                  </div>
                </div>
                
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="p-2 bg-sky-300 m-8  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    

                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null} */}



      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto bg-white">
      <BackButton />
      <h1 className="text-3xl my-4">Create User</h1>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">lastname</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Phone</label>
          <input
            type="number"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Birthdate</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setbirthDate(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>


        <div>

          <div className="flex flex-wrap">
            <div className="flex items-center me-4">
              <input id="red-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="red-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Admin</label>
            </div>
            <div className="flex items-center me-4">
              <input id="green-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="green-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student</label>
            </div>
            <div className="flex items-center me-4">
              <input checked id="purple-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="purple-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teacher</label>
            </div>



          </div>

        </div>
       
        <button className="p-2 bg-sky-300 mx-12 mt-3" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Adduser;
