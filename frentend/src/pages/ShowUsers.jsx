import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowUsers = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
  
    useEffect(() => {
      setLoading(true);
      axios
        .get(`http://localhost:3000/users/getbyid/${id}`)
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show User</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-5 m-5'>
          <div className='my-auto mx-auto  '>
            <span className='text-xl mr-4 text-gray-500'></span>
            <span></span>
            <img src={user.url} className="avatar avatar-sm me-3 border-radius-lg " style={{width:"110px"}} alt="avatar" />

          </div>
          <div className='my-4'>
            <span className='text-xl mr-6 text-gray-500'>Name</span>
            <span>{user.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-6 text-gray-500'>Lastname</span>
            <span>{user.lastname}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mx-5 text-gray-500'>Email</span>
            <span className='mx-5'>{user.email}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-6 text-gray-500'>Phone</span>
            <span className='mx-5'>{user.tel}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-6 text-gray-500'>Status</span>
            <span className='mx-5'>{user.status}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-6 text-gray-500'>Bithdate</span>
            <span>{user.birthDate ? user.birthDate.split('T')[0] : ""}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-6 text-gray-500'>Create Time</span>
            {/* <span>{new Date(user.createdAt).toString()}</span> */}
            <span>{user.birthDate.split('T')[1].split('.')[0]}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-6 text-gray-500'>Last Update Time</span>
            <span>{new Date(user.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowUsers