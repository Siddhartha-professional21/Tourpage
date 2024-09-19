import React from 'react';
import { FaSearch, FaRegBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import user from '../assets/user4.jpg';

const Topbar = () => {
  return (
    <div className='flex justify-between items-center bg-white shadow-md p-4'>
      
      <div className='w-1/2 flex items-center border rounded-full px-4 py-2 bg-gray-100'>
        <FaSearch className='text-gray-600' />
        <input
          type="text"
          placeholder='Search here...'
          className='bg-transparent h-10 w-full outline-none pl-2 text-gray-800'
        />
      </div>

      
      <div className='flex items-center space-x-4'>
        <FaRegBell className='text-gray-600 h-6 w-6' />
        <AiOutlineMessage className='text-gray-600 h-6 w-6' />
        <img src={user} alt="user" className='h-10 w-10 rounded-full border-2 border-gray-300' />
        <h1 className='text-gray-800 font-semibold'>user.com</h1>
      </div>
    </div>
  );
}

export default Topbar;
